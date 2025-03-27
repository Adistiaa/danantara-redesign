import { useEffect } from "react";

const ScrollBar = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      /* Scrollbar Width */
      ::-webkit-scrollbar {
        width: 8px;  /* Slimmer scrollbar */
        height: 8px; /* For horizontal scroll */
      }
      
      /* Complete Track Removal */
      ::-webkit-scrollbar-track {
        background: transparent; /* Fully transparent track */
      }
      
      /* Elegant Red Thumb */
      ::-webkit-scrollbar-thumb {
        background: #dc2626; /* Your brand red */
        border-radius: 4px;
        background-clip: padding-box;
      }
      
      /* Hover Effect */
      ::-webkit-scrollbar-thumb:hover {
        background: #b91c1c; /* Darker red */
      }
      
      /* Firefox Support */
      * {
        scrollbar-width: thin;
        scrollbar-color: #dc2626 transparent; /* Red thumb with transparent track */
      }
      
      /* Remove corner square */
      ::-webkit-scrollbar-corner {
        background: transparent;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return null;
};

export default ScrollBar;