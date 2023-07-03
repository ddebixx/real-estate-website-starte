export const OPTIONS = [
  {
      value: "apartment",
      label: "Квартира"
  },
  {
      value: "house",
      label: "Будинок"
  },
  {
      value: "land",
      label: "Земля"
  },
  {
      value: "commercial",
      label: "Комерційна нерухомість"
  }
] as const;

export const FILTERS = [
    {
        value: "prospect",
        label: "Проспект"
    }
 ] as const;