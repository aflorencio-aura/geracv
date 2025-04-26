
/**
 * Formats a date string (YYYY-MM) into a more readable format (Month Year)
 * @param dateString - Date string in format YYYY-MM
 * @returns Formatted date string
 */
export const formatDate = (dateString?: string): string => {
  if (!dateString) return '';
  
  try {
    const [year, month] = dateString.split('-').map(Number);
    if (isNaN(year) || isNaN(month)) return dateString;
    
    const date = new Date(year, month - 1);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric',
    });
  } catch (error) {
    console.error('Error formatting date:', error);
    return dateString;
  }
};
