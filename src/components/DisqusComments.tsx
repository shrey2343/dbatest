import React, { useEffect } from 'react';

interface DisqusCommentsProps {
  slug: string;
  title: string;
}

export const DisqusComments: React.FC<DisqusCommentsProps> = ({ slug, title }) => {
  useEffect(() => {
    const disqusShortname = import.meta.env.VITE_DISQUS_SHORTNAME || 'dba-coach';
    
    // Reset Disqus if it already exists
    if (window.DISQUS) {
      window.DISQUS.reset({
        reload: true,
        config: function () {
          this.page.identifier = slug;
          this.page.url = window.location.href;
          this.page.title = title;
        }
      });
    } else {
      // Load Disqus for the first time
      window.disqus_config = function () {
        this.page.url = window.location.href;
        this.page.identifier = slug;
        this.page.title = title;
      };

      const script = document.createElement('script');
      script.src = `https://${disqusShortname}.disqus.com/embed.js`;
      script.setAttribute('data-timestamp', String(+new Date()));
      document.body.appendChild(script);
    }
  }, [slug, title]);

  return (
    <div className="mt-16 pt-16 border-t border-gray-200">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Comments & Discussion
      </h2>
      <div id="disqus_thread" className="bg-white rounded-xl p-6 shadow-lg" />
    </div>
  );
};

// TypeScript declaration for Disqus
declare global {
  interface Window {
    DISQUS?: any;
    disqus_config?: any;
  }
}
