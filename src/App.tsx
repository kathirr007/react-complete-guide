import { motion } from 'framer-motion';

function App() {
  return (
    <>
      <h1>React Patterns & Practices</h1>
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
      </main>
    </>
  );
}

export default App;
