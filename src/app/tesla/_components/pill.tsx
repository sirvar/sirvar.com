import React from "react";

type PillProps = {
  children: React.ReactNode;
  icon?: React.ReactNode;
  showStatusDot?: boolean;
  onClick?: () => void;
  ariaLabel?: string;
  className?: string;
};

const Pill: React.FC<PillProps> = ({
  children,
  icon,
  showStatusDot,
  onClick,
  ariaLabel,
  className,
}) => {
  const interactive = typeof onClick === "function";
  const Tag = interactive ? "button" : "div";

  return (
    <Tag
      className={`tesla-pill${className ? ` ${className}` : ""}`}
      data-interactive={interactive ? "true" : "false"}
      onClick={onClick}
      aria-label={ariaLabel}
      type={interactive ? "button" : undefined}
    >
      {showStatusDot && <span className="tesla-pill__dot" aria-hidden />}
      {icon && (
        <span className="tesla-pill__icon" aria-hidden>
          {icon}
        </span>
      )}
      <span>{children}</span>
    </Tag>
  );
};

export default Pill;
