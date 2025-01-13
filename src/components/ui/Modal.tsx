import type { ReactNode } from 'react';
import { useRef } from 'react';
import { createPortal } from 'react-dom';

export function Modal({ children, open, className, onClose, ...props }: Readonly<{ children: ReactNode; open?: boolean; className?: string; [key: string]: any }>) {
  const dialog = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const modal = dialog.current;
    if (open) {
      modal?.showModal();
    }

    return () => modal?.close();
  }, [open]);

  return createPortal(
    <dialog ref={dialog} className={`modal ${className ?? ''}`} {...props} onClose={onClose}>
      {children}
    </dialog>, document.getElementById('modal') as HTMLElement);
}
