import type { Meal } from '@/types';
import { CartContext } from '@/store/CartContext';

export function MealItem({ meal }: Readonly<{ meal: Meal }>) {
  const cartCtx = useContext(CartContext);

  function handleAddMealToCart() {
    cartCtx.addItem(meal, true);
  }

  return (
    <li className="meal-item">
      <article>
        <img src={`${baseUrl}/${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">{currencyFormatter.format(+(meal.price))}</p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <div className="meal-item-actions">
          <UiButton type="button" onClick={handleAddMealToCart}>Add to Cart</UiButton>
        </div>
      </article>
    </li>
  );
}
