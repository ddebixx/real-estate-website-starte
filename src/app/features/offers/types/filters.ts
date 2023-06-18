import { OPTIONS } from "../constants/filters";

type OptionKey = typeof OPTIONS[number]['value'];

export type FiltersCheckboxes = Record<OptionKey, boolean>

type Filters = {
  priceFrom: number;
  priceTo: number;
} & FiltersCheckboxes;