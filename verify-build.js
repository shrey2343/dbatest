/**
 * Build Verification Script
 * Run this after building to verify everything is ready for deployment
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distPath = path.join(__dirname, 'dist');

console.log('🔍 Verifying Build for Production Deployment...\n');

let errors = 0;
let warnings = 0;

// Check 1: dist folder exists
console.log('✓ Checking dist folder...');
if (!fs.existsSync(distPath)) {
  console.error('❌ ERROR: dist folder not found! Run "npm run build" first.');
  errors++;
} else {
  console.log('  ✅ dist folder exists');
}

// Check 2: index.html exists
console.log('\n✓ Checking index.html...');
const indexPath = path.join(distPath, 'index.html');
if (!fs.existsSync(indexPath)) {
  console.error('❌ ERROR: index.html not found in dist folder!');
  errors++;
} else {
  console.log('  ✅ index.html exists');
  
  // Check if index.html has proper content
  const indexContent = fs.readFileSync(indexPath, 'utf8');
  if (!indexContent.includes('DBA Coach')) {
    console.warn('⚠️  WARNING: index.html might not have proper content');
    warnings++;
  }
}

// Check 3: .htaccess exists
console.log('\n✓ Checking .htaccess...');
const htaccessPath = path.join(distPath, '.htaccess');
if (!fs.existsSync(htaccessPath)) {
  console.error('❌ ERROR: .htaccess not found! SPA routing will not work.');
  errors++;
} else {
  console.log('  ✅ .htaccess exists');
  
  // Check if .htaccess has proper rewrite rules
  const htaccessContent = fs.readFileSync(htaccessPath, 'utf8');
  if (!htaccessContent.includes('RewriteEngine On')) {
    console.error('❌ ERROR: .htaccess missing RewriteEngine directive!');
    errors++;
  } else {
    console.log('  ✅ .htaccess has proper rewrite rules');
  }
}

// Check 4: assets folder exists
console.log('\n✓ Checking assets folder...');
const assetsPath = path.join(distPath, 'assets');
if (!fs.existsSync(assetsPath)) {
  console.error('❌ ERROR: assets folder not found!');
  errors++;
} else {
  console.log('  ✅ assets folder exists');
  
  // Check for JS and CSS files
  const assetFiles = fs.readdirSync(assetsPath);
  const jsFiles = assetFiles.filter(f => f.endsWith('.js'));
  const cssFiles = assetFiles.filter(f => f.endsWith('.css'));
  
  if (jsFiles.length === 0) {
    console.error('❌ ERROR: No JavaScript files found in assets!');
    errors++;
  } else {
    console.log(`  ✅ Found ${jsFiles.length} JavaScript file(s)`);
  }
  
  if (cssFiles.length === 0) {
    console.warn('⚠️  WARNING: No CSS files found in assets!');
    warnings++;
  } else {
    console.log(`  ✅ Found ${cssFiles.length} CSS file(s)`);
  }
}

// Check 5: Static assets (images, PDFs)
console.log('\n✓ Checking static assets...');
const blog1Path = path.join(distPath, 'blog1');
const templatePath = path.join(distPath, 'template');
const logoPath = path.join(distPath, 'DBACoach (2).png');

if (!fs.existsSync(blog1Path)) {
  console.warn('⚠️  WARNING: blog1 folder not found (fallback images)');
  warnings++;
} else {
  console.log('  ✅ blog1 folder exists');
}

if (!fs.existsSync(templatePath)) {
  console.warn('⚠️  WARNING: template folder not found (PDF templates)');
  warnings++;
} else {
  const pdfFiles = fs.readdirSync(templatePath).filter(f => f.endsWith('.pdf'));
  console.log(`  ✅ template folder exists with ${pdfFiles.length} PDF(s)`);
}

if (!fs.existsSync(logoPath)) {
  console.warn('⚠️  WARNING: Logo image not found');
  warnings++;
} else {
  console.log('  ✅ Logo image exists');
}

// Check 6: Build size
console.log('\n✓ Checking build size...');
function getFolderSize(folderPath) {
  let totalSize = 0;
  const files = fs.readdirSync(folderPath);
  
  files.forEach(file => {
    const filePath = path.join(folderPath, file);
    const stats = fs.statSync(filePath);
    
    if (stats.isDirectory()) {
      totalSize += getFolderSize(filePath);
    } else {
      totalSize += stats.size;
    }
  });
  
  return totalSize;
}

const buildSize = getFolderSize(distPath);
const buildSizeMB = (buildSize / (1024 * 1024)).toFixed(2);
console.log(`  📦 Total build size: ${buildSizeMB} MB`);

if (buildSize > 50 * 1024 * 1024) { // 50 MB
  console.warn('⚠️  WARNING: Build size is quite large (> 50 MB)');
  warnings++;
}

// Check 7: Environment variables
console.log('\n✓ Checking environment configuration...');
const envPath = path.join(__dirname, '.env.local');
if (!fs.existsSync(envPath)) {
  console.warn('⚠️  WARNING: .env.local not found');
  warnings++;
} else {
  const envContent = fs.readFileSync(envPath, 'utf8');
  if (!envContent.includes('VITE_WORDPRESS_API_URL')) {
    console.error('❌ ERROR: VITE_WORDPRESS_API_URL not configured!');
    errors++;
  } else {
    console.log('  ✅ WordPress API URL configured');
  }
}

// Summary
console.log('\n' + '='.repeat(60));
console.log('📊 VERIFICATION SUMMARY');
console.log('='.repeat(60));

if (errors === 0 && warnings === 0) {
  console.log('✅ All checks passed! Build is ready for deployment.');
  console.log('\n🚀 Next steps:');
  console.log('   1. Upload dist/ contents to Hostinger public_html/');
  console.log('   2. Configure WordPress CORS (see WORDPRESS_CORS_SETUP.md)');
  console.log('   3. Test the live site');
  console.log('   4. Monitor for errors');
} else {
  if (errors > 0) {
    console.log(`❌ Found ${errors} error(s) - Fix these before deploying!`);
  }
  if (warnings > 0) {
    console.log(`⚠️  Found ${warnings} warning(s) - Review these`);
  }
}

console.log('='.repeat(60) + '\n');

// Exit with error code if there are errors
process.exit(errors > 0 ? 1 : 0);
