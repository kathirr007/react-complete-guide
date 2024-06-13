import { createPortal } from 'react-dom';

const Modal = forwardRef(({ closeBtnLabel, children, ...props }: { [key: string]: any }, ref: any) => {
  const dialog = useRef<any>();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      }
    };
  });

  return createPortal(
    <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
      {children}
      <form method="dialog" className="text-right">
        <BaseButton type="submit">{closeBtnLabel}</BaseButton>
      </form>
    </dialog>,
    document.getElementById('modal-root') as HTMLElement
  );
});

export { Modal };
