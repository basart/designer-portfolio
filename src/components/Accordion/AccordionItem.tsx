'use client';

import { AccordionItemContext } from './contexts';
import styles from './Accordion.module.css';

interface AccordionItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  value: string;
}

function AccordionItem({
  value,
  className,
  children,
  ...props
}: AccordionItemProps) {
  return (
    <AccordionItemContext.Provider value={value}>
      <li className={`${styles.accordion__item} ${className}`} {...props}>
        {children}
      </li>
    </AccordionItemContext.Provider>
  );
}

export default AccordionItem;
