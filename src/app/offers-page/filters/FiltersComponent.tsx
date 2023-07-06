"use client";

import { useState } from "react"
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import styles from "../../styles/offers-page/filters/Filters.module.scss"
import { useForm } from "react-hook-form";
import { Checkboxes } from "../../../components/Checkboxes";
import { SELECTORS, OPTIONS, CHECKBOXES } from "../../features/offers/constants/filters";
import type { FiltersCheckboxes, OptionSelect } from "../../features/offers/types/filters";
import { OptionSelectModule } from "./OptionSelectModule";

type Input = {
    filters: FiltersCheckboxes & OptionSelect;
};

type FilterProps = {
    defaultValues: Input;
}


export const FiltersComponent = ({ defaultValues }: FilterProps) => {
    const [menu, setMenu] = useState(false);

    const { control } = useForm<Input>({
        defaultValues
    });


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
                                <Checkboxes name="filters" control={control} options={ CHECKBOXES } />
                            </li>
                        </ul>
                        <OptionSelectModule name="select" control={control} options={ SELECTORS } />
                        <button className={styles.search_button}>
                            Пошук
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}