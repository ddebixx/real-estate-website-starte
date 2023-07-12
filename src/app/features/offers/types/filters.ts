import { CHECKBOXES, DISCTRICT_SELECTORS, PRICE_FROM } from "../constants/filters";

type OptionKey = typeof CHECKBOXES[number]['value']; 
type DistrcitOptionSelectKey = typeof DISCTRICT_SELECTORS[number]['value'];
type PriceFromOptionSelectKey = typeof PRICE_FROM[number]['value'];
type PriceToOptionSelectKey = typeof PRICE_FROM[number]['value'];

export type FiltersCheckboxes = Record<OptionKey, boolean>
export type DistrictOptionSelect = Record<DistrcitOptionSelectKey, boolean>
export type PriceFromSelect = Record<PriceFromOptionSelectKey, boolean>
export type PriceToSelect = Record<PriceToOptionSelectKey, boolean>


export type Filters = {
  priceFrom: number;
  priceTo: number;
} & FiltersCheckboxes & DistrictOptionSelect & PriceFromSelect & PriceToSelect;