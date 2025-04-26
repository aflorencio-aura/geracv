
import React from 'react';

interface AdPlaceholderProps {
  slot: 'sidebar' | 'content' | 'footer';
}

const AdPlaceholder = ({ slot }: AdPlaceholderProps) => {
  return (
    <div className="w-full bg-muted/10 border rounded-lg p-4 my-4 text-center text-muted-foreground">
      <p>Advertisement Space - {slot}</p>
      {/* Google AdSense code will go here */}
    </div>
  );
};

export default AdPlaceholder;
