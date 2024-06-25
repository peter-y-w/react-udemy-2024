import { EXAMPLES } from '../data';
import TabButton from '../components/TabButton';
import Section from './Section';
import { useState } from 'react';
import Tabs from './Tabs';

export default function Examples() {
	const [selectedTopic, setSelectedTopic] = useState();

	const handleSelect = key => {
		setSelectedTopic(key);
	};

	return (
		<Section title="Examples" id="examples">
			<Tabs
				buttons={
					<>
						<TabButton
							isSelected={selectedTopic === 'components'}
							onClick={() => handleSelect('components')}
						>
							Components
						</TabButton>
						<TabButton
							isSelected={selectedTopic === 'jsx'}
							onClick={() => handleSelect('jsx')}
						>
							JSX
						</TabButton>
						<TabButton
							isSelected={selectedTopic === 'props'}
							onClick={() => handleSelect('props')}
						>
							Props
						</TabButton>
						<TabButton
							isSelected={selectedTopic === 'state'}
							onClick={() => handleSelect('state')}
						>
							State
						</TabButton>
					</>
				}
			>
				{selectedTopic ? (
					<div id="tab-content">
						<h3>{EXAMPLES[selectedTopic].title}</h3>
						<p>{EXAMPLES[selectedTopic].description}</p>
						<pre>
							<code>{EXAMPLES[selectedTopic].code}</code>
						</pre>
					</div>
				) : (
					<p>Please select a topic.</p>
				)}
			</Tabs>
			<menu></menu>
		</Section>
	);
}
