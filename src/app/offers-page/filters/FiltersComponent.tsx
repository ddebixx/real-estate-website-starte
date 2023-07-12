"use client";

import { useState } from "react"
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import styles from "../../styles/offers-page/filters/Filters.module.scss"
import { useForm } from "react-hook-form";
<<<<<<< HEAD
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
=======
import { Checkboxes } from "../../../components/Checkboxes";
import { SELECTORS, OPTIONS, CHECKBOXES } from "../../features/offers/constants/filters";
import type { FiltersCheckboxes, OptionSelect } from "../../features/offers/types/filters";
import { OptionSelectModule } from "./OptionSelectModule";

type Input = {
    filters: FiltersCheckboxes & OptionSelect;
};
>>>>>>> 3b382cc4f61f07cf8e144bc580e9b27d355d9b0d

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
<<<<<<< HEAD
                                <Checkboxes name="propertyTypeCheckboxes" control={control} options={ CHECKBOXES } />
                            </li>
                        </ul>
                        <OptionSelectModule name="selectDistrict" control={control} options={ DISCTRICT_SELECTORS } />
                        <PriceFromSelectModule name="selectPriceFrom" control={control} options={ PRICE_FROM } />
                        <PriceToSelectModule name="selectPriceTo" control={control} options={ PRICE_TO } />
=======
                                <Checkboxes name="filters" control={control} options={ CHECKBOXES } />
                            </li>
                        </ul>
                        <OptionSelectModule name="select" control={control} options={ SELECTORS } />
>>>>>>> 3b382cc4f61f07cf8e144bc580e9b27d355d9b0d
                        <button className={styles.search_button}>
                            Пошук
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}