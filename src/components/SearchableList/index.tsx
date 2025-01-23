import type { ChangeEvent, ReactNode } from 'react';

export function SearchableList({ items, itemKeyFn, children }: Readonly<{
  items: any[];
  itemKeyFn: (item: any) => string;
  children: (item: any) => ReactNode;
}>) {
  const [searchTerm, setSearchTerm] = useState('');

  const searchResults = items.filter((item: any) => {
    return JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase());
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setSearchTerm(event.target.value);
  };

  const { run: handleSearchChange } = useDebounceFn(
    handleChange,
    {
      wait: 500
    }
  );

  return (
    <div className="searchable-list">
      <input aria-label="search-list" type="search" onChange={event => handleSearchChange(event)} />
      <ul>
        {searchResults.map((item: any) => {
          return (
            <li key={itemKeyFn(item)}>
              {children(item)}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
