"use client";

import React, { useCallback, useEffect, useState } from "react"
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import styles from "../../styles/offers-page/filters/Filters.module.scss"
import * as Checkbox from '@radix-ui/react-checkbox';
import { useForm, useWatch } from "react-hook-form";
import { Checkboxes } from "../../../components/Checkboxes";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { parseSearchParams } from "../../../utils/utils";
import { OPTIONS } from "../../features/offers/constants/filters";
import type { FiltersCheckboxes } from "../../features/offers/types/filters";

type Input = FiltersCheckboxes;

type FilterProps = {
    defaultValues?: Input;
}


export const Filters = ({ defaultValues }: FilterProps) => {
    const [menu, setMenu] = useState(false);

    const { register, control, reset } = useForm<Input>({
        defaultValues
    });

    const searchParams = useSearchParams();

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
                            {/* <li className={styles.checkbox_container}>
                                <Checkbox.Root
                                    className="shadow-[0_0_5px_rgba(0,0,0,0.1)] w-full font-medium bg-white p-2 text-[#163172] rounded data-[state=checked]:text-white data-[state=checked]:bg-[#163172] transition-all duration-200 ease-in-out"
                                    id="land">
                                    <label className="cursor-pointer" htmlFor="land">
                                        Земля
                                    </label>
                                </Checkbox.Root>
                            </li>
                            <li className={styles.checkbox_container}>
                                <Checkbox.Root
                                    className="shadow-[0_0_5px_rgba(0,0,0,0.1)] w-full font-medium bg-white p-2 text-[#163172] rounded data-[state=checked]:text-white data-[state=checked]:bg-[#163172] transition-all duration-200 ease-in-out"
                                    id="rent">
                                    <label className="cursor-pointer" htmlFor="rent">
                                        Оренда
                                    </label>
                                </Checkbox.Root>
                            </li>
                            <li className={styles.checkbox_container}>
                                <Checkbox.Root
                                    className="shadow-[0_0_5px_rgba(0,0,0,0.1)] w-full font-medium bg-white p-2 text-[#163172] rounded data-[state=checked]:text-white data-[state=checked]:bg-[#163172] transition-all duration-200 ease-in-out"
                                    id="house">
                                    <label className="cursor-pointer" htmlFor="house">
                                        Будинок / Дача
                                    </label>
                                </Checkbox.Root>
                            </li>
                            <li className={styles.checkbox_container}>
                                <Checkbox.Root
                                    className="shadow-[0_0_5px_rgba(0,0,0,0.1)] w-full font-medium bg-white p-2 text-[#163172] rounded data-[state=checked]:text-white data-[state=checked]:bg-[#163172] transition-all duration-200 ease-in-out"
                                    id="commercial">
                                    <label className="cursor-pointer" htmlFor="commercial">
                                        Комерційна нерухомість
                                    </label>
                                </Checkbox.Root>
                            </li> */}
                        </ul>
                        <ul className={styles.property_filters}>
                            <li className={styles.property_options}>
                                Район
                                <label htmlFor="district"></label>
                                <select name="" id="district" className={styles.select_option}>
                                    <option value="" className={styles.menu_option}>Виберіть</option>
                                    <option value="" className={styles.menu_option}>Виберіть</option>
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
                        </ul>
                        <button className={styles.search_button}>
                            Пошук
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}