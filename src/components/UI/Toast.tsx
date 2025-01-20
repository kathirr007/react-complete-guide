import type { CartItemType } from '@/store/cart';
import type { ToastContentProps } from 'react-toastify';

type Props = Partial<ToastContentProps> & {
  data: CartItemType;
};

function Toast({ data, actionType }: Readonly<{ data?: CartItemType; actionType?: 'inc' | 'dec' }>) {
  return (
    <div className="pr-6">
      <strong>{data?.title}</strong>
      {' '}
      {actionType === 'inc' ? 'added' : 'removed'}
      {' '}
      to the cart successfully.
    </div>
  );
}

export { Toast };
