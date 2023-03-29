import React, { FunctionComponent, PropsWithChildren, ReactNode } from "react";

interface IconProps {
  className?: string;
  icon: ReactNode;
}

export const Icon: FunctionComponent<PropsWithChildren<IconProps>> = ({
  className,
  icon,
  ...props
}: IconProps) => {
  return (
    <div className={className} {...props}>
      {icon}
    </div>
  );
};
