'use client';

import { useAccordion, useItem } from './contexts';
import styles from './Accordion.module.css';

function AccordionContent({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const item = useItem();
  const { selectedItem } = useAccordion();

  const isSelectedItem = item === selectedItem;
  const id = `content-${item}`;
  const ariaLabelledby = `item-trigger-${item}`;

  return (
    <div
      id={id}
      className={styles.accordion__content}
      role="region"
      aria-labelledby={ariaLabelledby}
      aria-hidden={!isSelectedItem}
    >
      <div>{children}</div>
    </div>
  );
}

export default AccordionContent;
