"use client";

import { useState } from "react"
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import styles from "../../styles/offers-page/filters/Filters.module.scss"
import { useForm } from "react-hook-form";
import { Checkboxes } from "./Checkboxes";
import {
    DISCTRICT_SELECTORS, 
    CHECKBOXES, 
    PRICE_FROM,
    PRICE_TO 
} from "../../features/offers/constants/filters";
import type { FiltersCheckboxes, DistrictOptionSelect } from "../../features/offers/types/filters";
import { OptionSelectModule } from "./OptionSelectModule";
import { PriceFromSelectModule } from "./PriceFromSelectModule";
import { PriceToSelectModule } from "./PriceToSelectModule";

type Input = FiltersCheckboxes & DistrictOptionSelect;
;

type FilterProps = {
    defaultValues?: Input;
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
                                <Checkboxes name="propertyTypeCheckboxes" control={control} options={ CHECKBOXES } />
                            </li>
                        </ul>
                        <OptionSelectModule name="selectDistrict" control={control} options={ DISCTRICT_SELECTORS } />
                        <PriceFromSelectModule name="selectPriceFrom" control={control} options={ PRICE_FROM } />
                        <PriceToSelectModule name="selectPriceTo" control={control} options={ PRICE_TO } />
                        <button className={styles.search_button}>
                            Пошук
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}