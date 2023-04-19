"use client";

import Link from "next/link"
import React, { useState } from "react"
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import styles from "../../styles/landing-page/Filters.module.scss"

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
                        <ul className={styles.property_type}>
                            <li className={styles.property}>
                                <input type="checkbox" name="" id="appartaments" />
                                <label htmlFor="appartaments">Квартири</label>
                            </li>
                            <li className={styles.property}>
                                <input type="checkbox" name="" id="appartaments" />
                                <label htmlFor="appartaments">Земля</label>
                            </li>
                            <li className={styles.property}>
                                <input type="checkbox" name="" id="appartaments" />
                                <label htmlFor="appartaments">Оренда</label>
                            </li>
                            <li className={styles.property}>
                                <input type="checkbox" name="" id="appartaments" />
                                <label htmlFor="appartaments">Будинок / Дача</label>
                            </li>
                            <li className={styles.property}>
                                <input type="checkbox" name="" id="appartaments" />
                                <label htmlFor="appartaments">Комерційна</label>
                            </li>
                        </ul>
                        <ul className={styles.property_filters}>
                            <li className={styles.property_options}>
                                Район
                                <label htmlFor="district"></label>
                                <select name="" id="district" className={styles.select_option}>
                                    <option value="">Виберіть</option>
                                    <option value="">Опція</option>
                                    <option value="">Опція</option>
                                    <option value="">Опція</option>
                                </select>
                            </li>
                            <li className={styles.property_options}>
                                Країна
                                <label htmlFor="country"></label>
                                <select name="" id="country">
                                    <option value="">Виберіть</option>
                                    <option value="">Опція</option>
                                    <option value="">Опція</option>
                                    <option value="">Опція</option>
                                </select>
                            </li>
                            <li className={styles.property_options}>
                                Кімнати
                                <label htmlFor="rooms"></label>
                                <select name="" id="rooms">
                                    <option value="">Виберіть</option>
                                    <option value="">Опція</option>
                                    <option value="">Опція</option>
                                    <option value="">Опція</option>
                                    <option value="">Опція</option>
                                </select>
                            </li>
                            <li className={styles.property_options}>
                                Від:
                                <label htmlFor="priceFrom"></label>
                                <select name="" id="priceFrom">
                                    <option value="">Виберіть</option>
                                    <option value="">Опція</option>
                                    <option value="">Опція</option>
                                    <option value="">Опція</option>
                                    <option value="">Опція</option>
                                    <option value="">Опція</option>
                                </select>
                            </li>
                            <li className={styles.property_options}>
                                До:
                                <label htmlFor="priceTo"></label>
                                <select name="" id="priceTo">
                                    <option value="">Виберіть</option>
                                    <option value="">Опція</option>
                                    <option value="">Опція</option>
                                    <option value="">Опція</option>
                                    <option value="">Опція</option>
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