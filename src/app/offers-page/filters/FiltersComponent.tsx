"use client";

import { useState } from "react"
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import styles from "../../styles/offers-page/filters/Filters.module.scss"
import { useForm } from "react-hook-form";
import { Checkbox } from "../../components/Checkbox";
import {
    DISCTRICT_SELECTORS,
    CHECKBOXES
} from "../../features/offers/constants/filters";
import type { FiltersCheckboxes, DistrictOptionSelect } from "../../features/offers/types/filters";
import { Select } from "../../components/Select";
import { SelectProps } from "@radix-ui/react-select";
import type { CheckedState } from "@radix-ui/react-checkbox";
import { useSetSearchParams } from "../../../hooks/use-params";

type Input = FiltersCheckboxes & DistrictOptionSelect & {
    district: string;
};

type FilterProps = {
    defaultValues: Input;
}


export const FiltersComponent = ({ defaultValues }: FilterProps) => {
    const [menu, setMenu] = useState(false);

    const { setSearchParams } = useSetSearchParams();

    const { control } = useForm<Input>({
        defaultValues
    });

    const onCheckedChange = (checked: CheckedState, name: keyof Input) => {
        setSearchParams(name, typeof checked === "boolean" ? checked.toString() : "false");
    };

    const onSelectChange = (value: SelectProps["value"], name: keyof Input) => {
        setSearchParams(name, value);
    };


    return (
        <>
            <div className={styles.filters_container}>
                <button className={styles.filters_button} onClick={() => setMenu(!menu)}>
                    Фільтри
                    {menu ? (
                        <TuneRoundedIcon />
                    ) : (
                        <TuneRoundedIcon />
                    )}
                </button>
                <div className={`${menu ? 'block' : 'hidden'}`}>
                    <form className={styles.filters}>
                        <ul className={styles.checkbox_wrapper}>
                            <li className={styles.checkbox_container}>
                                {CHECKBOXES.map(checkbox => (
                                    <Checkbox name="filters" onCheckedChange={(checked) => onCheckedChange(checked, checkbox.value)} {...checkbox} />
                                ))}
                            </li>
                        </ul>
                        <ul className="flex">
                            <li>
                                <Select className="flex" name="district" options={DISCTRICT_SELECTORS} onValueChange={(value) => onSelectChange(value, "district")} />
                                {/* <Select className="flex" name="district" options={DISCTRICT_SELECTORS} onValueChange={(value) => onSelectChange(value, "district")} /> */}
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </>
    );
}