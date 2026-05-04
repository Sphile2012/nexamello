export default function Logo({ size = 40, showText = true, className = "" }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* SVG Logo mark */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Blue background */}
        <rect width="200" height="200" fill="#1565C0" rx="20" />

        {/* N — left vertical + diagonal + right vertical */}
        <path
          d="M36 142 L36 62 L70 112 L70 62"
          stroke="#F5A623"
          strokeWidth="14"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* W — connected from N's right leg */}
        <path
          d="M70 62 L93 128 L116 82 L139 128 L162 62"
          stroke="#F5A623"
          strokeWidth="14"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* NEXA WEB text inside */}
        <text
          x="99"
          y="170"
          fontFamily="Arial, sans-serif"
          fontSize="15"
          fontWeight="700"
          fill="white"
          textAnchor="middle"
          letterSpacing="3"
        >
          NEXA WEB
        </text>
      </svg>

      {/* Brand name text next to logo */}
      {showText && (
        <div>
          <span className="font-space font-bold text-lg text-foreground tracking-tight leading-none block">
            NexaWeb
          </span>
          <span className="text-[10px] font-inter text-muted-foreground leading-none block -mt-0.5">
            Tech Solutions
          </span>
        </div>
      )}
    </div>
  );
}
