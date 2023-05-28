"use client";

import Link from "next/link"
import React, { useState } from "react"
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import styles from "../../styles/offers-page/filters/Filters.module.scss"
import { FilterCheckbox } from "./Checkbox";

export const Filters = () => {
    const [menu, setMenu] = useState(false);
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
                    <div className={styles.filters}>
                        <FilterCheckbox />
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
                                Кімнати
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
                                Від:
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
                                До:
                                <label htmlFor="district"></label>
                                <select name="" id="district" className={styles.select_option}>
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
                    </div>
                </div>
            </div>
        </>
    );
}