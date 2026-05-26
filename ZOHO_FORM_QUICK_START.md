# Zoho CRM Form - Quick Start Guide

## Using the Zoho Form Component

### Basic Usage

```tsx
import ZohoCRMForm from './components/ZohoCRMForm';

function MyPage() {
  return (
    <div>
      <h1>Contact Us</h1>
      <ZohoCRMForm />
    </div>
  );
}
```

That's it! The component handles everything automatically.

## What It Does

1. **Injects CSS** - Adds Zoho form styles to the page
2. **Renders Form** - Creates the complete form HTML
3. **Adds Validation** - JavaScript validation for required fields
4. **Tracks Analytics** - Zoho analytics script for form submissions
5. **Cleans Up** - Removes styles when component unmounts

## Form Fields

Users will see:
- First Name (required)
- Last Name (required)
- WhatsApp Number (required)
- Business Line dropdown (required):
  - DBA Support
  - AI Dev
  - Biotech

## Where Leads Go

All form submissions create new Contacts in your Zoho CRM:
- Module: **Contacts**
- Lead Source: **Website** (automatically set)

## Customization

### Change Form Title

Edit line 56 in `ZohoCRMForm.tsx`:
```tsx
<div class='zcwf_title' style='max-width: 600px;color: black; font-family:Arial;'>
  Your Custom Title Here
</div>
```

### Change Business Line Options

Edit lines 103-107 in `ZohoCRMForm.tsx`:
```tsx
<option value='Your Option 1'>Your Option 1</option>
<option value='Your Option 2'>Your Option 2</option>
```

### Change Form Width

Edit the return statement (last line):
```tsx
return <div ref={containerRef} style={{ maxWidth: '800px', margin: '0 auto' }} />;
```

### Change Button Colors

Edit line 17 in the CSS:
```css
.formsubmit.zcwf_button{ 
  color: white !important; 
  background: transparent linear-gradient(0deg, #YOUR_COLOR1 0%, #YOUR_COLOR2 100%); 
}
```

## Important Notes

### ⚠️ DO NOT Modify These

**Security Tokens** (lines 51-54):
- `xnQsjsdp`
- `xmIwtLD`
- `actionType`
- `zc_gad`
- `aG9uZXlwb3Q`

These are required by Zoho and will break the form if changed.

**Form Action URL** (line 50):
```
https://crm.zoho.in/crm/WebToContactForm
```

**Analytics Script** (line 186):
The script with `id='wf_anal'` is required for Zoho tracking.

### ✅ Safe to Modify

- Form title
- Field labels
- Dropdown options
- CSS styling
- Form width
- Button text

## Testing

### Test Form Submission

1. Fill out the form with test data:
   - First Name: Test
   - Last Name: User
   - WhatsApp: +919876543210
   - Business Line: DBA Support

2. Click Submit

3. Check Zoho CRM:
   - Go to Contacts module
   - Look for "Test User"
   - Verify all fields populated

### Test Validation

Try submitting with:
- Empty fields → Should show alert
- Business Line = "-None-" → Should show alert

## Troubleshooting

### Form Not Appearing

**Check**: Is the component imported and rendered?
```tsx
import ZohoCRMForm from './components/ZohoCRMForm';
// ...
<ZohoCRMForm />
```

### Form Submits But No Data in Zoho

**Check**:
1. Form action URL is correct
2. Security tokens haven't expired
3. Zoho CRM account is active
4. You're checking the correct Zoho account

### JavaScript Errors

**Check**:
1. Browser console (F12) for specific errors
2. CSP headers allow `https://crm.zohopublic.in`
3. No conflicting JavaScript on the page

### Styling Issues

**Check**:
1. Zoho CSS is being injected (check `<head>` for `#zoho-crm-styles`)
2. No CSS conflicts with global styles
3. Form container has enough width

## Advanced Usage

### Multiple Forms on Same Page

The component handles this automatically. Each form will work independently:

```tsx
<div>
  <h2>Form 1</h2>
  <ZohoCRMForm />
  
  <h2>Form 2</h2>
  <ZohoCRMForm />
</div>
```

### Conditional Rendering

```tsx
{showForm && <ZohoCRMForm />}
```

The component will clean up styles when unmounted.

### In Modal/Popup

```tsx
<Modal isOpen={isOpen}>
  <ZohoCRMForm />
</Modal>
```

Works perfectly in modals, popups, or any container.

## Production Checklist

Before deploying:

- [ ] Test form submission locally
- [ ] Verify data appears in Zoho CRM
- [ ] Add CSP headers to production hosting
- [ ] Test on staging environment
- [ ] Test on multiple browsers
- [ ] Test on mobile devices
- [ ] Verify no console errors

## Need Help?

1. Check `ZOHO_CRM_INTEGRATION.md` for detailed documentation
2. Check `DEPLOYMENT_CHECKLIST.md` for deployment steps
3. Check Zoho documentation: https://www.zoho.com/crm/help/web-forms/
4. Contact Zoho support for CRM-specific issues

## Quick Reference

| Task | File | Line |
|------|------|------|
| Change form title | ZohoCRMForm.tsx | 56 |
| Change dropdown options | ZohoCRMForm.tsx | 103-107 |
| Change form width | ZohoCRMForm.tsx | 193 |
| Change button color | ZohoCRMForm.tsx | 17 |
| Add CSP headers | vite.config.ts | 8-12 |

---

**Last Updated**: May 22, 2026
