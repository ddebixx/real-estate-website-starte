import React from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';
import styles from '../../../styles/landing-page/filters/Checkbox.module.scss';

export const CheckboxDemo = () => (

  <form>
    <ul className={styles.checkbox_wrapper}>
      <li className={styles.checkbox_container}>
        <Checkbox.Root
          className="shadow-[0_0_5px_rgba(0,0,0,0.1)] w-full font-medium bg-white p-2 text-[#163172] rounded data-[state=checked]:text-white data-[state=checked]:bg-[#163172] transition-all duration-200 ease-in-out"
          id="flat">
          <label className="cursor-pointer" htmlFor="flat">
            Квартира
          </label>
        </Checkbox.Root>
      </li>
      <li className={styles.checkbox_container}>
        <Checkbox.Root
          className="shadow-[0_0_5px_rgba(0,0,0,0.1)] w-full font-medium bg-white p-2 text-[#163172] rounded data-[state=checked]:text-white data-[state=checked]:bg-[#163172] transition-all duration-200 ease-in-out"
          id="ground">
          <label className="cursor-pointer" htmlFor="ground">
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
      </li>
    </ul>
  </form>
);