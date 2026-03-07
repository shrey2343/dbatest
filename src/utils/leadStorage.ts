// Lead storage utility functions
export const leadStorage = {
  // Check if lead already captured
  isLeadCaptured(): boolean {
    // Check localStorage first
    const localStorageCheck = localStorage.getItem('leadCaptured') === 'true';
    
    // Check cookie as backup
    const cookieCheck = document.cookie.includes('leadCaptured=true');
    
    return localStorageCheck || cookieCheck;
  },

  // Mark lead as captured
  markLeadCaptured(email: string): void {
    // Set in localStorage
    localStorage.setItem('leadCaptured', 'true');
    localStorage.setItem('userEmail', email);
    localStorage.setItem('leadCapturedDate', new Date().toISOString());
    
    // Set cookie (expires in 1 year)
    const expiryDate = new Date();
    expiryDate.setFullYear(expiryDate.getFullYear() + 1);
    document.cookie = `leadCaptured=true; expires=${expiryDate.toUTCString()}; path=/`;
    document.cookie = `userEmail=${email}; expires=${expiryDate.toUTCString()}; path=/`;
  },

  // Get stored user email
  getUserEmail(): string | null {
    return localStorage.getItem('userEmail') || null;
  },

  // Clear lead data (for testing or reset)
  clearLeadData(): void {
    localStorage.removeItem('leadCaptured');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('leadCapturedDate');
    document.cookie = 'leadCaptured=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
    document.cookie = 'userEmail=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
    console.log('Lead data cleared! User will see form again.');
  },

  // Get lead info (for debugging)
  getLeadInfo(): object {
    return {
      isLeadCaptured: this.isLeadCaptured(),
      userEmail: this.getUserEmail(),
      capturedDate: localStorage.getItem('leadCapturedDate'),
      localStorage: {
        leadCaptured: localStorage.getItem('leadCaptured'),
        userEmail: localStorage.getItem('userEmail')
      },
      cookies: {
        leadCaptured: document.cookie.includes('leadCaptured=true'),
        userEmail: document.cookie.split('userEmail=')[1]?.split(';')[0] || null
      }
    };
  },

  // Direct PDF download function
  downloadPDF(): void {
    // Create a temporary link and trigger download
    const link = document.createElement('a');
    link.href = '/templates/DBA-Templates.pdf'; // Update with your actual PDF path
    link.download = 'DBA-Templates.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Show success message
    alert('Thank you! Your DBA templates are downloading now. 📄✨');
  }
};