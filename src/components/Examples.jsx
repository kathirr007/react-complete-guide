import { CORE_CONCEPTS, EXAMPLES } from '@/data';
import TabButton from '@/components/TabButton';
import Section from '@/components/Section';
import Tabs from '@/components/Tabs';
import { useState } from 'react';

function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
  }

  console.log('Examples component executing');

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  const Buttons = Object.entries(EXAMPLES).map(([key, value]) => (
    <TabButton
      key={value.title}
      isSelected={selectedTopic === key}
      onClick={() => handleSelect(key)}
    >
      {value.title}
    </TabButton>
  )
  );

  return (
    <Section title="Examples" id="examples">
      <Tabs buttons={Buttons}>
        {tabContent}
      </Tabs>
    </Section>
  );
}

export default Examples;
