export const TOGGLE_FAV = 'TOGGLE_FAV';

export function toggleFav(id: string) {
  return { type: TOGGLE_FAV, productId: id };
}
