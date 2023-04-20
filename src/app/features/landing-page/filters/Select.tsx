import React from 'react';
import * as Select from '@radix-ui/react-select';
import { useState } from 'react';

type OptionType = {
  label: string;
  value: string;
};

type SelectItemProps = {
  value: string;
  disabled?: boolean;
}

const options: OptionType[] = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
];

const initialSelectedOption: OptionType = options[0];

export const SelectDemo = () => {
  const [selectedOption, setSelectedOption] = useState(initialSelectedOption);

  const handleOptionChange = (option: OptionType) => {
    setSelectedOption(option);
  };

  return (
    <Select<OptionType>
      value={selectedOption}
      onValueChange={handleOptionChange}
      className="select-menu"
    >
      {options.map((option) => (
        <Option key={option.value} value={option}>
          {option.label}
        </Option>
      ))}
    </Select>
  );
};
