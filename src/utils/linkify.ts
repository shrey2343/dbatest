// Convert plain text URLs to clickable links
export const linkifyContent = (html: string): string => {
  // Split by HTML tags to process only text content
  const parts = html.split(/(<[^>]+>)/g);
  
  return parts.map(part => {
    // Skip if this is an HTML tag
    if (part.startsWith('<')) {
      return part;
    }
    
    // Pattern to match URLs in plain text
    const urlPattern = /(https?:\/\/[^\s<>"]+)/gi;
    
    return part.replace(urlPattern, (url) => {
      // Remove trailing punctuation
      const cleanUrl = url.replace(/[.,;:!?]$/, '');
      
      // Check if URL is already part of an href attribute (shouldn't happen in text nodes)
      if (part.includes('href=')) {
        return url;
      }
      
      // Check if URL is a blog link
      const isBlogLink = cleanUrl.includes('dbacoach.com/blog/');
      
      return `<a href="${cleanUrl}" class="text-blue-600 hover:text-blue-800 underline transition-colors duration-200 font-medium" ${!isBlogLink ? 'target="_blank" rel="noopener noreferrer"' : ''}>${cleanUrl}</a>`;
    });
  }).join('');
};
