import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: '465ecb69-ec99-44cd-809c-7d7906a80fab',
    price: 10,
    title: 'My exciting book 01',
    description: 'My exciting book about UI development'
  },
  {
    id: '41033c9b-ae52-4a02-9606-14b20f69e058',
    price: 8,
    title: 'My exciting book 02',
    description: 'My exciting book about Backend development'
  },
  {
    id: 'd5adca1b-1eda-43eb-be0b-f6b080c40210',
    price: 12,
    title: 'My Bio',
    description: 'My book about my exciting life journey'
  }
];

function Products(props: any) {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(item => (
          <ShopProductItem
            key={item.id}
            title={item.title}
            price={item.price}
            id={item.id}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
}

export { Products };
