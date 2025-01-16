export default function Alert({ type, children }) {
    let classes;
    let borderClasses;
    let icon;
  
    if (type == "info") {
      classes = "bg-blue-600 bg-opacity-20 text-white backdrop-blur-md backdrop-saturate-150";
      borderClasses = "border border-blue-500";
      icon = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-3 h-3 lg:w-4 lg:h-4"
          viewBox="0 0 48 48"
          fill="none"
        >
          <circle cx="24" cy="24" r="22" stroke="white" strokeWidth="4" fill="none" />
          <line
            x1="24"
            y1="16"
            x2="24"
            y2="32"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <circle cx="24" cy="12" r="2" fill="white" />
        </svg>
      );
    }
  
    if (type == "warning") {
      classes = "bg-red-600 bg-opacity-20 text-white backdrop-blur-md backdrop-saturate-150";
      borderClasses = "border border-red-500";
      icon = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          viewBox="0 0 48 48"
          fill="none"
        >
          <polygon
            points="24,4 44,40 4,40"
            fill="none"
            stroke="white"
            strokeWidth="4"
          />
          <line
            x1="24"
            y1="16"
            x2="24"
            y2="28"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <circle cx="24" cy="34" r="2" fill="white" />
        </svg>
      );
    }
  
    if (type == "caution") {
      classes = "bg-yellow-600 bg-opacity-20 text-white backdrop-blur-md backdrop-saturate-150";
      borderClasses = "border border-yellow-500";
      icon = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-3 h-3 lg:w-4 lg:h-4"
          viewBox="0 0 48 48"
          fill="none"
        >
          <polygon
            points="24,4 44,40 4,40"
            fill="none"
            stroke="white"
            strokeWidth="4"
          />
          <line
            x1="24"
            y1="18"
            x2="24"
            y2="28"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <circle cx="24" cy="34" r="2" fill="white" />
        </svg>
      );
    }
  
    return (
      <div className={`${classes} ${borderClasses} py-2 px-4 rounded-md mt-4`}>
        <div className="space-x-2 text-xs lg:text-base">
          <span className="float-left lg:pt-1">{icon}</span>
          <span>{children}</span>
        </div>
      </div>
    );
  }
  