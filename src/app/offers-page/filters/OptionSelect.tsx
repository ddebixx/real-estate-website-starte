import * as Select from '@radix-ui/react-select';
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import { twMerge } from 'tailwind-merge';

type OptionSelectProps = {
    options: {
        value: string;
        label: string;
    }[];
    className?: string;
    placeholder?: string;
    name?: string;
}

export const OptionSelect = ({options, className, placeholder, name}: OptionSelectProps) => {
    return (
        <>
             <Select.Root>
    <Select.Trigger className="SelectTrigger" aria-label="Food">
      <Select.Value placeholder="Select a fruit…" />
      <Select.Icon className="SelectIcon">
        <ChevronDownIcon />
      </Select.Icon>
    </Select.Trigger>
    <Select.Portal>
      <Select.Content className="SelectContent">
        <Select.ScrollUpButton className="SelectScrollButton">
          <ChevronUpIcon />
        </Select.ScrollUpButton>
        <Select.Viewport className="SelectViewport">
          <Select.Group>
            {options.map((option) => (
                <Select.Item value={option.value} 
                key={option.value}
                className={twMerge(className, "bg-white w-16 rounded-sm relative text-black")}>
                    <label className='' htmlFor={option.value}>
                        {option.label}
                    </label>
                </Select.Item>
            ))}
          </Select.Group>
        </Select.Viewport>
        <Select.ScrollDownButton className="SelectScrollButton">
          <ChevronDownIcon />
        </Select.ScrollDownButton>
      </Select.Content>
    </Select.Portal>
  </Select.Root>        
        </>
    )
}