export default function Logo({ size = 40, showText = true, className = "" }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* QPC Logo mark */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Dark blue background */}
        <rect width="200" height="200" fill="#1a2847" rx="20" />

        {/* QPC text - simplified geometric design */}
        <text
          x="100"
          y="90"
          fontFamily="Arial, sans-serif"
          fontSize="60"
          fontWeight="700"
          fill="white"
          textAnchor="middle"
          letterSpacing="8"
        >
          QPC
        </text>

        {/* IT SOLUTIONS text */}
        <text
          x="100"
          y="140"
          fontFamily="Arial, sans-serif"
          fontSize="18"
          fontWeight="400"
          fill="#60a5fa"
          textAnchor="middle"
          letterSpacing="6"
        >
          IT SOLUTIONS
        </text>
      </svg>

      {/* Brand name text next to logo */}
      {showText && (
        <div>
          <span className="font-sans font-bold text-lg text-foreground tracking-tight leading-none block">
            QPC
          </span>
          <span className="text-[10px] font-sans text-cyan-400 leading-none block -mt-0.5">
            IT Solutions
          </span>
        </div>
      )}
    </div>
  );
}
