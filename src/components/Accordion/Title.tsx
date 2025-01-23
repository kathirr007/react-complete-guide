import type { ReactNode } from 'react';

export function AccordionTitle({ children, className }: Readonly<{ children: ReactNode; className?: string }>) {
  const { toggleItem } = useAccordionContext();
  const id = useAccordionItemContext();

  return (
    <h2 onClick={() => toggleItem(id)} role="button" className={`${className} accordion-item-title`}>{children}</h2>
  );
}
