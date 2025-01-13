import type { Meal } from '@/types';

export function CartItem({ item, onRemoveItem, onAddItem }: Readonly<{ item: Meal; onRemoveItem: () => void; onAddItem: () => void }>) {
  return (
    <li className="cart-item">
      <p>
        {item.name}
        {' '}
        -
        {' '}
        {' '}
        {currencyFormatter.format((item.quantity ?? 0) * +item.price)}
      </p>
      <p className="cart-item-actions">
        <button type="button" onClick={onRemoveItem}>-</button>
        <span>{item.quantity ?? 0}</span>
        <button type="button" onClick={onAddItem}>+</button>
      </p>
    </li>
  );
}
