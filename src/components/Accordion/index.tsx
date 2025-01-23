import type { ReactNode } from 'react';

export function Accordion({ children, className }: Readonly<{ children: ReactNode; className?: string }>) {
  const [openItemId, setOpenItemId] = useState<string | null>(null);

  function toggleItem(id: string) {
    setOpenItemId((prevId) => {
      if (prevId === id)
        return null;
      return id;
    });
  }

  const contextValue = {
    openItemId,
    toggleItem
  };

  return (
    <AccordionContext value={contextValue}>
      <ul className={className}>
        {children}
      </ul>
    </AccordionContext>
  );
}

Accordion.Item = AccordionItem;
Accordion.Title = AccordionTitle;
Accordion.Content = AccordionContent;
