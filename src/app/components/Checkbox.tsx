"use client";

import * as RadixCheckbox from '@radix-ui/react-checkbox';
import { twMerge } from 'tailwind-merge';
import type { Option } from '../../types/options';

type CheckboxProps = Pick<RadixCheckbox.CheckboxProps, "onCheckedChange" | "className" | "name"> & Option;

export const Checkbox = ({ name, className, onCheckedChange, value, label }: CheckboxProps) => {
    return (
        <RadixCheckbox.Root
            onCheckedChange={onCheckedChange}
            key={value}
            value={value}
            className={twMerge(className, "shadow-[0_0_5px_rgba(0,0,0,0.1)] w-full whitespace-nowrap font-medium bg-white p-2 text-[#163172] rounded data-[state=checked]:text-white data-[state=checked]:bg-[#163172] transition-all duration-200 ease-in-out")}>
            <label className="cursor-pointer" htmlFor={value}>
                {label}
            </label>
        </RadixCheckbox.Root>
    );
};