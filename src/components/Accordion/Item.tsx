import type { ReactNode } from 'react';

export function Item({ id, children, className }: Readonly<{ children: ReactNode; id: string; className?: string }>) {
  return (
    <AccordionItemContext value={id}>
      <li className={className}>
        {children}
      </li>
    </AccordionItemContext>
  );
}
