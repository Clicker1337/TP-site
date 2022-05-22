import React from 'react'

interface Props {
    className?: string;
    border: string;
    children?: React.ReactNode;
    height: string;
    onClick: () => void;
    radius: string
    width: string;
}

const Button: React.FC<Props> = ({
    className,
    border,
    children,
    height,
    onClick,
    radius,
    width
}) => {
    return (
        <button
        className={className}
          onClick={onClick}
          style={{
             border,
             borderRadius: radius,
             height,
             width
          }}
        >
        {children}
        </button>
      );
}

export default Button;