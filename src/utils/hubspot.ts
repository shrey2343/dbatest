// HubSpot utility functions for form submissions

interface HubSpotFormData {
  firstname: string;
  email: string;
  phone: string;
  message: string;
}

interface HubSpotSubmissionOptions {
  pageUri?: string;
  pageName?: string;
}

// Get HubSpot tracking cookie
const getHubSpotTrackingCookie = (): string => {
  try {
    return document.cookie.replace(/(?:(?:^|.*;\s*)hubspotutk\s*\=\s*([^;]*).*$)|^.*$/, "$1") || '';
  } catch (error) {
    console.warn('Could not get HubSpot tracking cookie:', error);
    return '';
  }
};

// Submit form to HubSpot
export const submitToHubSpot = async (
  formData: HubSpotFormData, 
  options: HubSpotSubmissionOptions = {}
): Promise<boolean> => {
  const PORTAL_ID = '244512215';
  const FORM_ID = '973bf6d5-1212-46d6-b866-8bf09df07006';
  
  try {
    console.log('Submitting to HubSpot:', formData);
    
    // Try HubSpot embedded form first (works better with CORS)
    if (typeof window !== 'undefined' && (window as any).hbspt) {
      try {
        // Use HubSpot's native API
        const hubspotResult = await new Promise((resolve) => {
          (window as any).hbspt.forms.create({
            region: "na1",
            portalId: PORTAL_ID,
            formId: FORM_ID,
            target: '#temp-hubspot-form',
            onFormReady: function($form: any) {
              // Auto-fill and submit
              $form.find('input[name="firstname"]').val(formData.firstname);
              $form.find('input[name="email"]').val(formData.email);
              $form.find('input[name="phone"]').val(formData.phone);
              $form.find('textarea[name="message"]').val(formData.message);
              $form.submit();
            },
            onFormSubmit: function() {
              console.log('HubSpot embedded form submitted successfully');
              resolve(true);
            },
            onFormSubmitError: function() {
              resolve(false);
            }
          });
        });
        
        if (hubspotResult) return true;
      } catch (embeddedError) {
        console.warn('Embedded form failed, trying API:', embeddedError);
      }
    }
    
    // Fallback to direct API call
    const payload = {
      fields: [
        { name: 'firstname', value: formData.firstname },
        { name: 'email', value: formData.email },
        { name: 'phone', value: formData.phone },
        { name: 'message', value: formData.message }
      ],
      context: {
        pageUri: options.pageUri || window.location.href,
        pageName: options.pageName || document.title,
        hutk: getHubSpotTrackingCookie()
      }
    };

    const response = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_ID}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify(payload)
      }
    );

    if (response.ok) {
      const result = await response.json();
      console.log('HubSpot API submission successful:', result);
      return true;
    } else {
      const errorText = await response.text();
      console.error('HubSpot API submission failed:', response.status, errorText);
      
      // Try alternative method using form action
      return await submitViaFormAction(formData);
    }
  } catch (error) {
    console.error('HubSpot submission error:', error);
    // Try alternative method
    return await submitViaFormAction(formData);
  }
};

// Alternative submission method using form action
const submitViaFormAction = async (formData: HubSpotFormData): Promise<boolean> => {
  try {
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = `https://forms.hubspot.com/uploads/form/v2/244512215/973bf6d5-1212-46d6-b866-8bf09df07006`;
    form.style.display = 'none';
    
    const fields = [
      { name: 'firstname', value: formData.firstname },
      { name: 'email', value: formData.email },
      { name: 'phone', value: formData.phone },
      { name: 'message', value: formData.message }
    ];
    
    fields.forEach(field => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = field.name;
      input.value = field.value;
      form.appendChild(input);
    });
    
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
    
    console.log('Form submitted via form action method');
    return true;
  } catch (error) {
    console.error('Form action submission failed:', error);
    return false;
  }
};

// Create hidden div for HubSpot forms
const createHubSpotContainer = (): void => {
  if (!document.getElementById('temp-hubspot-form')) {
    const div = document.createElement('div');
    div.id = 'temp-hubspot-form';
    div.style.display = 'none';
    document.body.appendChild(div);
  }
};

// Initialize HubSpot container on load
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createHubSpotContainer);
  } else {
    createHubSpotContainer();
  }
}

// Wait for HubSpot to load
export const waitForHubSpot = (): Promise<boolean> => {
  return new Promise((resolve) => {
    let attempts = 0;
    const maxAttempts = 50; // 5 seconds max wait
    
    const checkHubSpot = () => {
      attempts++;
      if (typeof window !== 'undefined' && (window as any).hbspt) {
        resolve(true);
      } else if (attempts >= maxAttempts) {
        resolve(false);
      } else {
        setTimeout(checkHubSpot, 100);
      }
    };
    
    checkHubSpot();
  });
};