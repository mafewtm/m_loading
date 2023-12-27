import { useRef } from 'react';
import { Burger } from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';

function Navigation() {
	const [opened, { toggle }] = useDisclosure();
  const ref = useRef<HTMLButtonElement>(null);
	return (
		<>
			<Burger ref={ref} opened={opened} onClick={toggle} aria-label="Toggle navigation" />
		</>
	);
}

export default Navigation;
