# Deployment Checklist - Zoho CRM Integration

## Pre-Deployment Verification

### ✅ Code Changes
- [x] HubSpot utility file deleted (`src/utils/hubspot.ts`)
- [x] Zoho CRM Form component created (`src/components/ZohoCRMForm.tsx`)
- [x] LeadCaptureModal updated (HubSpot removed)
- [x] GuideFormPage updated (HubSpot removed)
- [x] ChatBot updated (HubSpot removed)
- [x] Vite config updated with CSP headers
- [x] No TypeScript errors
- [x] No HubSpot references remaining in code

### ✅ Documentation
- [x] ZOHO_CRM_INTEGRATION.md created
- [x] HUBSPOT_TO_ZOHO_MIGRATION_SUMMARY.md created
- [x] DEPLOYMENT_CHECKLIST.md created (this file)

## Deployment Steps

### Step 1: Build the Project
```bash
cd DBA_Coach-main/dc-main
npm install
npm run build
```

**Expected Result**: Build completes without errors

### Step 2: Test Locally
```bash
npm run preview
```

**Test These Forms**:
1. ✅ LeadCaptureModal (click any CTA button)
2. ✅ GuideFormPage (navigate to guide download page)
3. ✅ ChatBot (click chat icon in bottom right)

**For Each Form**:
- Fill out with test data
- Submit form
- Verify no JavaScript errors in console
- Check Zoho CRM for new contact

### Step 3: Configure Production CSP Headers

Choose your hosting platform and add CSP headers:

#### Option A: Vercel
Create `vercel.json` in project root:
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Content-Security-Policy",
          "value": "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://crm.zohopublic.in;"
        }
      ]
    }
  ]
}
```

#### Option B: Netlify
Create `netlify.toml` in project root:
```toml
[[headers]]
  for = "/*"
  [headers.values]
    Content-Security-Policy = "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://crm.zohopublic.in;"
```

#### Option C: Nginx
Add to nginx config:
```nginx
add_header Content-Security-Policy "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://crm.zohopublic.in;" always;
```

#### Option D: Apache
Add to `.htaccess`:
```apache
Header set Content-Security-Policy "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://crm.zohopublic.in;"
```

### Step 4: Deploy to Staging

1. Commit changes:
```bash
git add .
git commit -m "Replace HubSpot with Zoho CRM integration"
```

2. Push to staging branch:
```bash
git push origin staging
```

3. Wait for deployment to complete

### Step 5: Test on Staging

**Test URLs** (replace with your staging URLs):
- Homepage with LeadCaptureModal
- Guide download page
- Any page with ChatBot

**For Each Page**:
1. Open browser DevTools (F12)
2. Go to Console tab
3. Interact with forms
4. Check for:
   - ✅ No JavaScript errors
   - ✅ No CSP violations
   - ✅ Form submits successfully
   - ✅ Success message appears

**Verify in Zoho CRM**:
1. Log into Zoho CRM
2. Go to Contacts module
3. Check for new test contacts
4. Verify all fields populated correctly:
   - First Name
   - Last Name
   - Phone/WhatsApp Number
   - Business Line
   - Lead Source = "Website"

### Step 6: Cross-Browser Testing

Test on staging in:
- ✅ Chrome/Edge (Windows)
- ✅ Firefox (Windows)
- ✅ Safari (Mac, if available)
- ✅ Mobile Chrome (Android)
- ✅ Mobile Safari (iOS)

### Step 7: Deploy to Production

1. Merge to main branch:
```bash
git checkout main
git merge staging
git push origin main
```

2. Wait for production deployment

### Step 8: Post-Deployment Verification

**Immediately After Deployment**:

1. Test all forms on production
2. Submit test leads
3. Verify in Zoho CRM
4. Check browser console for errors
5. Test on mobile devices

**Monitor for 24 Hours**:
- Check Zoho CRM for incoming leads
- Monitor error logs
- Check analytics for form submissions
- Verify email notifications (if configured)

### Step 9: Clean Up

1. Delete old HubSpot documentation (if any)
2. Update team documentation
3. Notify team of changes
4. Archive HubSpot account (if no longer needed)

## Rollback Plan

If issues occur, rollback immediately:

```bash
git revert HEAD
git push origin main
```

Then restore HubSpot integration from git history.

## Success Criteria

✅ All forms submit successfully
✅ Leads appear in Zoho CRM with correct data
✅ No JavaScript errors in console
✅ No CSP violations
✅ Forms work on all browsers
✅ Forms work on mobile devices
✅ PDF downloads still work (GuideFormPage)
✅ ChatBot still functions correctly

## Troubleshooting

### Issue: Form doesn't submit
**Solution**: Check CSP headers are configured correctly

### Issue: JavaScript errors in console
**Solution**: Check browser console for specific error, verify Zoho scripts are loading

### Issue: No data in Zoho CRM
**Solution**: Verify form action URL, check security tokens haven't expired

### Issue: CSP violations
**Solution**: Add `https://crm.zohopublic.in` to CSP header

### Issue: Form styling broken
**Solution**: Check Zoho CSS is being injected, verify no CSS conflicts

## Contact Information

**For Technical Issues**:
- Review: `ZOHO_CRM_INTEGRATION.md`
- Review: `HUBSPOT_TO_ZOHO_MIGRATION_SUMMARY.md`

**For Zoho CRM Issues**:
- Zoho Support: https://www.zoho.com/crm/help/
- Zoho Web Forms: https://www.zoho.com/crm/help/web-forms/

## Sign-Off

- [ ] Code reviewed
- [ ] Local testing completed
- [ ] Staging deployment successful
- [ ] Staging testing completed
- [ ] CSP headers configured
- [ ] Production deployment successful
- [ ] Production testing completed
- [ ] Team notified
- [ ] Documentation updated

**Deployed By**: _________________
**Date**: _________________
**Approved By**: _________________
