import type { Meal } from '@/types';

export function Meals() {
  const [loadedMeals, setLoadedMeals] = useState<Meal[]>();

  useEffect(() => {
    async function fetchMeals() {
      const res = await fetch('http://localhost:3010/meals');

      if (!res.ok) {
        // handle api errors
      }

      const meals = await res.json();
      setLoadedMeals(meals);
    }

    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {loadedMeals?.map((meal: Meal) => (
        <li key={meal.name}>
          {' '}
          {meal.name}
        </li>
      ))}
    </ul>
  );
}
