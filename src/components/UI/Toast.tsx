import type { CartItemType } from '@/store/cart';
import type { ToastContentProps } from 'react-toastify';

interface ToastDataType extends CartItemType {
  actionType: 'inc' | 'dec';
}

type Props = Partial<ToastContentProps> & {
  data: ToastDataType;
};

function Toast({ data }: Readonly<{ data?: ToastDataType }>) {
  return (
    <div className="pr-6">
      <strong>{data?.title}</strong>
      {' '}
      {data?.actionType === 'inc' ? 'added' : 'removed'}
      {' '}
      {data?.actionType === 'inc' ? 'to' : 'from'}
      {' '}
      the cart successfully.
    </div>
  );
}

export { Toast };
