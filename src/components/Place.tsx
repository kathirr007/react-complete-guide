export interface PlaceItem {
  image: string;
  title: string;
  description: string;
}

export function Place({ item }: Readonly<{ item: PlaceItem }>) {
  return (
    <article className="place">
      <img src={item.image} alt={item.title} />
      <div>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
      </div>
    </article>
  );
}
