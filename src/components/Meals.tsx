import type { Meal } from '@/types';

const requestConfig = {};

export function Meals() {
  /* const [loadedMeals, setLoadedMeals] = useState<Meal[]>();

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
  }, []); */

  const { data: loadedMeals, error, isLoading } = useHttp('http://localhost:3010/meals', requestConfig, []);

  if (isLoading) {
    return <p className="meal-item p-4">Fetching meals list..., please wait.</p>;
  }

  if (error) {
    return <ErrorBlock title="Failed to fetch meals" message={error} />;
  }

  return (
    <ul id="meals">
      {loadedMeals?.map((meal: Meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
