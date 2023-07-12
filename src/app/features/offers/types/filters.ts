<<<<<<< HEAD
import { CHECKBOXES, DISCTRICT_SELECTORS, PRICE_FROM } from "../constants/filters";

type OptionKey = typeof CHECKBOXES[number]['value']; 
type DistrcitOptionSelectKey = typeof DISCTRICT_SELECTORS[number]['value'];
type PriceFromOptionSelectKey = typeof PRICE_FROM[number]['value'];
type PriceToOptionSelectKey = typeof PRICE_FROM[number]['value'];
=======
import { CHECKBOXES, SELECTORS } from "../constants/filters";

type OptionKey = typeof CHECKBOXES[number]['value']; 
type OptionSelectKey = typeof SELECTORS[number]['value'];
>>>>>>> 3b382cc4f61f07cf8e144bc580e9b27d355d9b0d

export type FiltersCheckboxes = Record<OptionKey, boolean>
export type DistrictOptionSelect = Record<DistrcitOptionSelectKey, boolean>
export type PriceFromSelect = Record<PriceFromOptionSelectKey, boolean>
export type PriceToSelect = Record<PriceToOptionSelectKey, boolean>


export type Filters = {
  priceFrom: number;
  priceTo: number;
} & FiltersCheckboxes & DistrictOptionSelect & PriceFromSelect & PriceToSelect;