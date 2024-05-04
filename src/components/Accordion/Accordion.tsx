'use client';

import { useId, useState } from 'react';
import { AccordionContext, AccordionSelectItemContext } from './contexts';

function Accordion({
  children,
  ...props
}: React.HTMLAttributes<HTMLUListElement>) {
  const id = useId();
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const accordionId = `accordion-${id}`;

  return (
    <AccordionContext.Provider value={{ selectedItem, accordionId }}>
      <AccordionSelectItemContext.Provider value={setSelectedItem}>
        <ul {...props}>{children}</ul>
      </AccordionSelectItemContext.Provider>
    </AccordionContext.Provider>
  );
}

export default Accordion;
