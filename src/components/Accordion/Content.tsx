import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

export function Content({ children, className }: Readonly<{ children: ReactNode; className?: string }>) {
  const { openItemId } = useAccordionContext();
  const id = useAccordionItemContext();

  const isOpen = id === openItemId;

  return (
    <motion.div initial={{ y: -25, opacity: 0.5 }} whileInView={{ y: 0, opacity: 1 }} className={isOpen ? `${className ?? ''} open` : `${className}`}>
      {children}
    </motion.div>
  );
}
