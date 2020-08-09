import React, { useEffect } from "react";

type Props = {
  show: boolean;
  children: React.ReactNode;
}

export const Fade: React.FC<Props> = ({ show, children }) => {
  const [shouldRender, setRender] = React.useState(show);

  useEffect(() => {
    if (show) setRender(true);
  }, [show]);

  const onAnimationEnd = () => {
    if (!show) setRender(false);
  };

  return (
    shouldRender ? (
      <div
        style={{ animation: `${show ? "fadeIn" : "fadeOut"} 0s` }}
        onAnimationEnd={onAnimationEnd}
        data-testid="animation-wrapper"
      >
        {children}
      </div>
    ) : null
  );
};
