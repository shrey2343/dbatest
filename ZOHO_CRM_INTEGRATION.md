# Zoho CRM Integration

This document describes the Zoho CRM webform integration that replaced HubSpot.

## Overview

The website now uses Zoho CRM webforms to capture leads. The form is injected dynamically using React and submits directly to Zoho's servers.

## Component

**File:** `src/components/ZohoCRMForm.tsx`

This component:
- Injects Zoho CSS styles into the document head
- Renders the Zoho webform HTML using `innerHTML`
- Adds validation JavaScript for form fields
- Includes Zoho's analytics tracking script
- Cleans up styles on component unmount

## Form Fields

The Zoho form captures:
- **First Name** (required)
- **Last Name** (required)
- **WhatsApp Number** (required)
- **Business Line** (required dropdown):
  - DBA Support
  - AI Dev
  - Biotech
- **Lead Source Keyword** (hidden field, set to "Website")

## Security Tokens

The form includes several hidden security fields required by Zoho:
- `xnQsjsdp` - Security token
- `xmIwtLD` - Additional security token
- `actionType` - Base64 encoded action type
- `zc_gad` - Google Ads tracking
- `aG9uZXlwb3Q` - Honeypot field for spam prevention

**⚠️ DO NOT modify or remove these fields - they are required for the form to work.**

## Form Submission

The form submits via POST to:
```
https://crm.zoho.in/crm/WebToContactForm
```

On successful submission, Zoho creates a new Contact record in your CRM.

## CSP Headers

### Development (Vite)

The `vite.config.ts` includes CSP headers to allow Zoho scripts:

```typescript
server: {
  headers: {
    'Content-Security-Policy': "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://crm.zohopublic.in;",
  },
}
```

### Production Deployment

**IMPORTANT:** You must add CSP headers in your production hosting environment.

#### Vercel

Add to `vercel.json`:

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

#### Netlify

Add to `netlify.toml`:

```toml
[[headers]]
  for = "/*"
  [headers.values]
    Content-Security-Policy = "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://crm.zohopublic.in;"
```

#### Nginx

Add to your nginx config:

```nginx
add_header Content-Security-Policy "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://crm.zohopublic.in;" always;
```

#### Apache

Add to `.htaccess`:

```apache
Header set Content-Security-Policy "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://crm.zohopublic.in;"
```

## Usage

Import and use the component anywhere you need a lead capture form:

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

## React StrictMode

The component handles React StrictMode's double `useEffect` calls by checking for existing injected styles before adding them again.

## Removed Components

The following HubSpot-related code has been removed:
- `src/utils/hubspot.ts` - HubSpot API integration
- All `submitToHubSpot()` function calls
- HubSpot form imports from components

## Testing

To test the integration:

1. Fill out the form with valid data
2. Submit the form
3. Check your Zoho CRM Contacts module
4. Verify the new contact appears with all fields populated correctly

## Troubleshooting

### Form not submitting

- Check browser console for JavaScript errors
- Verify CSP headers are configured correctly
- Ensure all required fields are filled

### Form submits but no data in Zoho

- Verify the form action URL is correct
- Check that security tokens haven't expired
- Ensure your Zoho CRM account is active

### Styling issues

- The Zoho CSS is scoped to the form container
- Styles are injected into `<head>` with id `zoho-crm-styles`
- Check for CSS conflicts with your global styles

## Support

For Zoho CRM form issues, contact Zoho support or check their documentation:
https://www.zoho.com/crm/help/web-forms/
