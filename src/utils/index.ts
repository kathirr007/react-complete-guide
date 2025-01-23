import { createContext } from 'react';

export const AccordionContext = createContext<{
  openItemId: string | null;
  toggleItem: (id: string) => void;
}>({
      openItemId: null,
      toggleItem: () => {}
    });

export function useAccordionContext() {
  const ctx = useContext(AccordionContext);

  if (!ctx) {
    throw new Error('Accordion related components must be wrapped with <Accordion>');
  }
  return ctx;
}

/* export const AccordionItemContext = createContext<{ id:
string; }
>({ id: '' }); */
export const AccordionItemContext = createContext('');

export function useAccordionItemContext() {
  const ctx = useContext(AccordionItemContext);

  if (!ctx) {
    throw new Error('Accordion item related components must be wrapped with <Accordion.Item>');
  }
  return ctx;
}
