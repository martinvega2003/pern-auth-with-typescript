import React from 'react';

type ButtonVariant = 'filled' | 'outlined';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'filled',
  children,
  className = '',
  ...props
}) => {
  const baseStyles =
    'px-6 py-2 rounded-full font-semibold transition-colors duration-200 focus:outline-none cursor-pointer';

  const filledStyles =
    'bg-gray-900 hover:bg-gray-700 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-gray-900 border border-transparent';

  const outlinedStyles =
    'bg-transparent text-gray-900 border border-gray-900 hover:bg-gray-100 dark:text-white dark:border-white dark:hover:bg-gray-800';

  const styles =
    variant === 'filled'
      ? `${baseStyles} ${filledStyles}`
      : `${baseStyles} ${outlinedStyles}`;

  return (
    <button className={`${styles} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;