import React, { useEffect, useState } from "react";

type Props = {
  show: boolean;
  children: React.ReactNode;
}

export const Fade: React.FC<Props> = ({ show, children }) => {
  const [shouldRender, setRender] = useState(show);

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
      >
        {children}
      </div>
    ) : null
  );
};
