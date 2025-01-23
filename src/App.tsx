import savannaImg from './assets/african-savanna.jpg';
import amazonImg from './assets/amazon-river.jpg';
import caribbeanImg from './assets/caribbean-beach.jpg';
import desertImg from './assets/desert-dunes.jpg';
import forestImg from './assets/forest-waterfall.jpg';

const PLACES = [
  {
    id: 'african-savanna',
    image: savannaImg,
    title: 'African Savanna',
    description: 'Experience the beauty of nature.'
  },
  {
    id: 'amazon-river',
    image: amazonImg,
    title: 'Amazon River',
    description: 'Get to know the largest river in the world.'
  },
  {
    id: 'caribbean-beach',
    image: caribbeanImg,
    title: 'Caribbean Beach',
    description: 'Enjoy the sun and the beach.'
  },
  {
    id: 'desert-dunes',
    image: desertImg,
    title: 'Desert Dunes',
    description: 'Discover the desert life.'
  },
  {
    id: 'forest-waterfall',
    image: forestImg,
    title: 'Forest Waterfall',
    description: 'Listen to the sound of the water.'
  }
];

const items2 = ['Kathiravan', 'Kannan', 'Kumar', 'Karthickeyan'];

function App() {
  return (
    <>
      <h1 className="text-center">React Patterns & Practices</h1>
      <main>
        <section>
          <h2>Why work with us?</h2>
          <Accordion className="accordion">
            <Accordion.Item id="experience">
              <Accordion.Title>
                We got 20 years of experience
              </Accordion.Title>
              <Accordion.Content className="accordion-item-content">
                <article>
                  <p>You can't go wrong with us.</p>
                  <p>We are in the business of planning highly customized vocational trips.</p>
                </article>
              </Accordion.Content>
            </Accordion.Item>
            <Accordion.Item id="anotherId">
              <Accordion.Title>
                We are working with local guides
              </Accordion.Title>
              <Accordion.Content className="accordion-item-content">
                <article>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae amet accusamus et laboriosam accusantium maxime omnis corrupti officia sequi quisquam voluptas ut illo illum dicta eveniet quam, alias sint enim.</p>
                </article>
              </Accordion.Content>
            </Accordion.Item>
            <Accordion.Item id="experience2">
              <Accordion.Title>
                We got 20 years of experience
              </Accordion.Title>
              <Accordion.Content className="accordion-item-content">
                <article>
                  <p>You can't go wrong with us.</p>
                  <p>We are in the business of planning highly customized vocational trips.</p>
                </article>
              </Accordion.Content>
            </Accordion.Item>
            <Accordion.Item id="anotherId2">
              <Accordion.Title>
                We are working with local guides
              </Accordion.Title>
              <Accordion.Content className="accordion-item-content">
                <article>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae amet accusamus et laboriosam accusantium maxime omnis corrupti officia sequi quisquam voluptas ut illo illum dicta eveniet quam, alias sint enim.</p>
                </article>
              </Accordion.Content>
            </Accordion.Item>
          </Accordion>
        </section>
        <section>
          <SearchableList items={PLACES} itemKeyFn={item => item.id}>
            {item => <Place item={item} />}
          </SearchableList>
          <SearchableList items={items2} itemKeyFn={item => item}>
            {item => <p>{item}</p> }
          </SearchableList>
        </section>
      </main>
    </>
  );
}

export default App;
