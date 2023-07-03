"use client";

import { useState } from "react"
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import styles from "../../styles/offers-page/filters/Filters.module.scss"
import { useForm } from "react-hook-form";
import { Checkboxes } from "../../../components/Checkboxes";
// import { parseSearchParams } from "../../../utils/utils";
import { FILTERS, OPTIONS } from "../../features/offers/constants/filters";
import type { FiltersCheckboxes } from "../../features/offers/types/filters";
import { OptionSelect } from "./OptionSelect";
import { Filters } from "../../features/offers/types/filters";

type Input = FiltersCheckboxes;

type FilterProps = {
    defaultValues?: Input;
}


export const FiltersComponent = ({ defaultValues }: FilterProps) => {
    const [menu, setMenu] = useState(false);

    const { control  } = useForm<Input>({
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
                                <Checkboxes name="filters" control={control} options={OPTIONS} />
                            </li>
                        </ul>
                        {/* <ul className={styles.property_filters}>
                            <li className={styles.property_options}>
                                Район
                                <label htmlFor="district"></label>
                                <select name="" id="district" className={styles.select_option}>
                                    <option value="" className={styles.menu_option}>Проспект</option>
                                    <option value="" className={styles.menu_option}>Центр</option>
                                    <option value="" className={styles.menu_option}>Виберіть</option>
                                    <option value="" className={styles.menu_option}>Виберіть</option>
                                    <option value="" className={styles.menu_option}>Виберіть</option>
                                </select>
                            </li>
                            <li className={styles.property_options}>
                                Країна
                                <label htmlFor="country"></label>
                                <select name="" id="country" className={styles.select_option}>
                                    <option value="" className={styles.menu_option}>Виберіть</option>
                                    <option value="" className={styles.menu_option}>Виберіть</option>
                                    <option value="" className={styles.menu_option}>Виберіть</option>
                                    <option value="" className={styles.menu_option}>Виберіть</option>
                                    <option value="" className={styles.menu_option}>Виберіть</option>
                                </select>
                            </li>
                            <li className={styles.property_options}>
                                Кімнати
                                <label htmlFor="rooms"></label>
                                <select name="" id="rooms" className={styles.select_option}>
                                    <option value="" className={styles.menu_option}>Виберіть</option>
                                    <option value="" className={styles.menu_option}>Виберіть</option>
                                    <option value="" className={styles.menu_option}>Виберіть</option>
                                    <option value="" className={styles.menu_option}>Виберіть</option>
                                    <option value="" className={styles.menu_option}>Виберіть</option>
                                </select>
                            </li>
                            <li className={styles.property_options}>
                                Від:
                                <label htmlFor="priceFrom"></label>
                                <select name="" id="priceFrom" className={styles.select_option}>
                                    <option value="" className={styles.menu_option}>Виберіть</option>
                                    <option value="" className={styles.menu_option}>Виберіть</option>
                                    <option value="" className={styles.menu_option}>Виберіть</option>
                                    <option value="" className={styles.menu_option}>Виберіть</option>
                                    <option value="" className={styles.menu_option}>Виберіть</option>
                                </select>
                            </li>
                            <li className={styles.property_options}>
                                До:
                                <label htmlFor="priceTo"></label>
                                <select name="" id="priceTo" className={styles.select_option}>
                                    <option value="" className={styles.menu_option}>Виберіть</option>
                                    <option value="" className={styles.menu_option}>Виберіть</option>
                                    <option value="" className={styles.menu_option}>Виберіть</option>
                                    <option value="" className={styles.menu_option}>Виберіть</option>
                                    <option value="" className={styles.menu_option}>Виберіть</option>
                                </select>
                            </li>
                        </ul> */}
                        <OptionSelect control={control} options={FILTERS}/>
                        <button className={styles.search_button}>
                            Пошук
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}