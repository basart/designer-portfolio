'use client';

import { createContext, useContext } from 'react';

export type AccordionContextValue = {
  selectedItem: string | null;
  accordionId: string;
};

const AccordionContext = createContext<AccordionContextValue>({
  selectedItem: null,
  accordionId: '',
});

const AccordionSelectItemContext = createContext<
  React.Dispatch<React.SetStateAction<string | null>>
>(() => {});

const AccordionItemContext = createContext<string>('');

function useAccordion() {
  return useContext(AccordionContext);
}

function useSelectItem() {
  return useContext(AccordionSelectItemContext);
}

function useItem() {
  return useContext(AccordionItemContext);
}

export {
  AccordionContext,
  AccordionSelectItemContext,
  AccordionItemContext,
  useAccordion,
  useSelectItem,
  useItem,
};
