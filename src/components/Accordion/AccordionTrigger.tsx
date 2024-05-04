'use client';

import { useAccordion, useItem, useSelectItem } from './contexts';
import styles from './Accordion.module.css';

function AccordionTrigger({
  className,
  onClick,
  children,
  ...props
}: React.HTMLAttributes<HTMLButtonElement>) {
  const item = useItem();
  const { selectedItem, accordionId } = useAccordion();
  const selectItem = useSelectItem();

  const isSelectedItem = item === selectedItem;
  const id = `item-trigger-${item}`;

  function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    selectItem((prevItem) => {
      return prevItem === item ? null : item;
    });

    onClick?.(event);
  }

  return (
    <h3 id={id}>
      <button
        className={`${styles.accordion__trigger} ${className}`}
        aria-expanded={isSelectedItem}
        aria-controls={accordionId}
        onClick={handleClick}
        {...props}
      >
        {children}
      </button>
    </h3>
  );
}

export default AccordionTrigger;
