import type { ReactNode } from 'react';

export function Button({ children, textOnly, className, ...props }: Readonly<{ children: ReactNode; textOnly?: boolean; className?: string; [key: string]: any }>) {
  let cssClasses = textOnly ? 'text-button' : 'button';
  cssClasses = `${cssClasses} ${className}`;
  return (
    <button type="button" className={cssClasses} {...props}>
      {children}
    </button>
  );
}
