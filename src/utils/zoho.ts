// Zoho CRM utility functions for form submissions

interface ZohoFormData {
  firstName: string;
  lastName: string;
  phone: string;
  businessLine: string;
  leadSource?: string;
}

// Submit form to Zoho CRM using traditional form submission
export const submitToZoho = async (formData: ZohoFormData): Promise<boolean> => {
  try {
    console.log('=== Zoho Submission Debug ===');
    console.log('Form Data:', formData);
    console.log('=============================');

    // Create a hidden form element
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://crm.zoho.in/crm/WebToContactForm';
    form.name = 'WebToContacts1324452000000527085';
    form.acceptCharset = 'UTF-8';
    form.target = '_blank'; // Open in new tab to avoid navigation
    form.style.display = 'none';

    // Required hidden fields from Zoho
    const fields = {
      'xnQsjsdp': '8bbd35515d6a83c052b1e6576c5c88c66e03a2029e7ad697e512874bfe87ca4f',
      'zc_gad': '',
      'xmIwtLD': '8c45ff248fbf8d61c290ea098f607578e4ce3c83d44ee4b8d32f30b2782d8dd8ee8b3d33e2322c7915dad56c4b5b511d',
      'actionType': 'Q29udGFjdHM=',
      'returnURL': window.location.origin + '/thank-you', // Redirect after submission
      'First Name': formData.firstName,
      'Last Name': formData.lastName,
      'Phone': formData.phone,
      'CONTACTCF2': formData.businessLine,
      'CONTACTCF1': formData.leadSource || 'Website'
    };

    // Add all fields to form
    Object.entries(fields).forEach(([name, value]) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = name;
      input.value = value;
      form.appendChild(input);
    });

    console.log('=== Submitting to Zoho CRM ===');
    console.log('Action:', form.action);
    console.log('Fields:', fields);
    console.log('================================');

    // Append form to body
    document.body.appendChild(form);

    // Submit the form
    form.submit();

    console.log('Zoho form submitted successfully');

    // Clean up after a short delay
    setTimeout(() => {
      if (document.body.contains(form)) {
        document.body.removeChild(form);
      }
    }, 2000);

    return true;
  } catch (error) {
    console.error('Zoho submission error:', error);
    return false;
  }
};

// Load Zoho analytics script
export const loadZohoAnalytics = (): void => {
  if (typeof window !== 'undefined' && !document.getElementById('wf_anal')) {
    const script = document.createElement('script');
    script.id = 'wf_anal';
    script.src = 'https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=26084257c128bb321aae3a4b78d3a3ada24cda3d5cc104453e1f131d875d474dea9a499297f3b7273833d8a7c7b35a53gidccfabda69eaf0eb89a57983ac46030e81bbbaefce54370dc2a989d39c780130cgid68fe80ac3afd7a08cdb384bff702a649b2c9c4250d3e3b5bc8da76ddf35387d2gide6fb603325e69431f22bbaf31a18100b36809e6d7180ffc6c4e81090088a6dff&tw=80153e7e12f87d7b2fcbf54484d7446b6fee9f5bdd74a71a7315c5fd9877f1e7';
    document.body.appendChild(script);
  }
};

// Initialize Zoho analytics on load
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadZohoAnalytics);
  } else {
    loadZohoAnalytics();
  }
}
