import * as Select from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import React from 'react';
import clsx from 'clsx';
import { useCallback, useState } from 'react';
import { Control, useController } from 'react-hook-form';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

type OptionSelectProps = {
  options: {
    value: string;
    label: string;
  }[];
  control: Control<any>;
  className?: string;
  name: string;
}

export const PriceFromSelectModule = ({ options, className, name, control }: OptionSelectProps) => {
  const { field } = useController({
    control,
    name
  });

  const [values, setValues] = useState({
    ...control._defaultValues,
  });

  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  )


  return (
    <>
      <Select.Root onValueChange={(selected) => {
        field.onChange(selected);

        const selectedValue = typeof selected === "string" ? selected : "";

        setValues({
          ...values,
          [selected]: selectedValue,
        });

        router.push(pathName + "?" + createQueryString(name, selectedValue.toString()));
      }}>
        <Select.Trigger
          className="inline-flex items-center justify-center rounded px-[15px] text-[13px] leading-none h-[35px] gap-[5px] bg-white text-violet11 shadow-[0_2px_10px] shadow-black/10 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-violet9 outline-none"
          aria-label="Selectors">
          <Select.Value placeholder="Ціна від:" />
          <Select.Icon className="text-violet11">
            <ChevronDownIcon />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content className="overflow-hidden bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
            <Select.ScrollUpButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
              <ChevronUpIcon />
            </Select.ScrollUpButton>
            <Select.Viewport className="p-[5px]">
              {
                options.map((option) => (
                  <Select.Item
                    key={option.value}
                    value={option.value}
                    className={clsx(
                      'text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1',
                      className
                    )}>
                    <Select.ItemText>{option.label}</Select.ItemText>
                    <Select.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
                      <CheckIcon />
                    </Select.ItemIndicator>
                  </Select.Item>
                ))
              }
            </Select.Viewport>
            <Select.ScrollDownButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
              <ChevronDownIcon />
            </Select.ScrollDownButton>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </>
  );
}