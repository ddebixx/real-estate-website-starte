import { OPTIONS, FILTERS } from "../constants/filters";

type OptionKey = typeof OPTIONS[number]['value']; 
type OptionSelectKey = typeof FILTERS[number]['value'];

export type FiltersCheckboxes = Record<OptionKey, boolean>
export type OptionSelect = Record<OptionSelectKey, boolean>


export type Filters = {
  priceFrom: number;
  priceTo: number;
} & FiltersCheckboxes & OptionSelect;