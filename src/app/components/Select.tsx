import * as RadixSelect from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import React from 'react';
import clsx from 'clsx';
import { Option } from '../../types/options';

type OptionSelectProps = Pick<RadixSelect.SelectProps, "name" |
  "onValueChange"> & Pick<RadixSelect.SelectItemProps, "className"> & {
    options: Option[] | Readonly<Option[]>;
  };

export const Select = ({ options, className, onValueChange, name }: OptionSelectProps) => {
  return (
    <RadixSelect.Root
      name={name}
      onValueChange={onValueChange}>
      <RadixSelect.Trigger
        className="inline-flex items-center justify-center rounded px-[15px] text-[13px] leading-none h-[35px] gap-[5px] bg-white text-violet11 shadow-[0_2px_10px] shadow-black/10 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-violet9 outline-none"
      // aria-label="Selectors"
      >
        <RadixSelect.Value placeholder="Select..." />
        <RadixSelect.Icon className="text-violet11">
          <ChevronDownIcon />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>
      <RadixSelect.Portal>
        <RadixSelect.Content className="overflow-hidden bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
          <RadixSelect.ScrollUpButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
            <ChevronUpIcon />
          </RadixSelect.ScrollUpButton>
          <RadixSelect.Viewport className="p-[5px] flex">
            {options.map((option) => (
              <RadixSelect.Item
                key={option.value}
                value={option.value}
                className={clsx(
                  'text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1',
                  className
                )}>
                <RadixSelect.ItemText>{option.label}</RadixSelect.ItemText>
                <RadixSelect.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
                  <CheckIcon />
                </RadixSelect.ItemIndicator>
              </RadixSelect.Item>
            ))
            }
          </RadixSelect.Viewport>
          <RadixSelect.ScrollDownButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
            <ChevronDownIcon />
          </RadixSelect.ScrollDownButton>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root >
  );
}
