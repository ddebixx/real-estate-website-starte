import { CHECKBOXES, SELECTORS } from "../constants/filters";

type OptionKey = typeof CHECKBOXES[number]['value']; 
type OptionSelectKey = typeof SELECTORS[number]['value'];

export type FiltersCheckboxes = Record<OptionKey, boolean>
export type OptionSelect = Record<OptionSelectKey, boolean>


export type Filters = {
  priceFrom: number;
  priceTo: number;
} & FiltersCheckboxes & OptionSelect;