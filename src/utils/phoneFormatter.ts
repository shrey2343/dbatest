/**
 * Phone number formatting utility for HubSpot integration
 * Handles international phone numbers with proper normalization
 */

/**
 * Cleans and formats phone number for HubSpot
 * @param countryCode - Country code with + (e.g., "+91", "+1")
 * @param phone - Phone number (digits only)
 * @returns Formatted phone number (e.g., "+919876543210")
 */
export const getCleanInternationalPhone = (countryCode: string, phone: string): string => {
  if (!phone) return '';
  
  let digits = phone.replace(/\D/g, '');
  
  // Remove leading zero for countries that don't use it in international format
  // India (+91): 10 digits without leading zero
  if (countryCode === '+91' && digits.startsWith('0')) {
    digits = digits.substring(1);
  }
  
  // USA/Canada (+1): 10 digits without leading 1
  if (countryCode === '+1' && digits.startsWith('1') && digits.length === 11) {
    digits = digits.substring(1);
  }
  
  // UK (+44): Remove leading 0
  if (countryCode === '+44' && digits.startsWith('0')) {
    digits = digits.substring(1);
  }
  
  // Australia (+61): Remove leading 0
  if (countryCode === '+61' && digits.startsWith('0')) {
    digits = digits.substring(1);
  }
  
  // France (+33): Remove leading 0
  if (countryCode === '+33' && digits.startsWith('0')) {
    digits = digits.substring(1);
  }
  
  // Germany (+49): Remove leading 0
  if (countryCode === '+49' && digits.startsWith('0')) {
    digits = digits.substring(1);
  }
  
  // Combine country code (without +) and digits
  const withoutPlus = `${countryCode.replace('+', '')}${digits}`;
  
  // Return with + at the start
  return `+${withoutPlus}`;
};

/**
 * Validates phone number length for specific countries
 * @param countryCode - Country code with + (e.g., "+91")
 * @param phone - Cleaned phone number
 * @returns true if valid length
 */
export const isValidPhoneLength = (countryCode: string, phone: string): boolean => {
  const digits = phone.replace(/\D/g, '');
  
  const expectedLengths: { [key: string]: number } = {
    '+91': 10,  // India
    '+1': 10,   // USA/Canada
    '+44': 10,  // UK
    '+61': 9,   // Australia
    '+971': 9,  // UAE
    '+65': 8,   // Singapore
    '+49': 11,  // Germany
    '+33': 10,  // France
    '+81': 10,  // Japan
    '+86': 11,  // China
    '+82': 10,  // South Korea
    '+60': 9,   // Malaysia
    '+66': 9,   // Thailand
    '+62': 10,  // Indonesia
    '+63': 10,  // Philippines
  };
  
  const expectedLength = expectedLengths[countryCode];
  if (!expectedLength) return true; // Unknown country, skip validation
  
  return digits.length === expectedLength;
};

/**
 * Gets debug information for phone number formatting
 * @param countryCode - Country code
 * @param rawPhone - Raw phone input
 * @param formattedPhone - Formatted phone output
 * @returns Debug object
 */
export const getPhoneDebugInfo = (
  countryCode: string,
  rawPhone: string,
  formattedPhone: string
) => {
  return {
    rawCountryCode: countryCode,
    rawPhone: rawPhone,
    formattedPhone: formattedPhone,
    cleanDigits: formattedPhone.replace(/\D/g, ''),
    lengthAfterClean: formattedPhone.replace(/\D/g, '').length,
    hasLeadingZero: rawPhone.startsWith('0'),
    isValidLength: isValidPhoneLength(countryCode, rawPhone)
  };
};
