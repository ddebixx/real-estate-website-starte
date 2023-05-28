"use client"
import styles from '../../styles/landing-page/Hero.module.scss'
import SupervisorAccountRoundedIcon from '@mui/icons-material/SupervisorAccountRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import EngineeringRoundedIcon from '@mui/icons-material/EngineeringRounded';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import DrawRoundedIcon from '@mui/icons-material/DrawRounded';
import CottageRoundedIcon from '@mui/icons-material/CottageRounded';
import KeyRoundedIcon from '@mui/icons-material/KeyRounded';
import EmojiEmotionsRoundedIcon from '@mui/icons-material/EmojiEmotionsRounded';
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';


export const HeroSection = () => {
    return (
        <div className={styles.hero_container}>
            <h2>Компанія надає ряд послуг:</h2>
            <div className={styles.service_container}>
                <ul className={styles.service_list}>
                    <li className={styles.service_item}>
                        <SupervisorAccountRoundedIcon className={styles.service_icon} />
                        Посередницькі послуги
                    </li>
                    <li className={styles.service_item}>
                        <AssignmentRoundedIcon className={styles.service_icon} />
                        Консалтинг на ринку нерухомості
                    </li>
                    <li className={styles.service_item}>
                        <EditNoteRoundedIcon className={styles.service_icon} />
                        Оформлення та реєстрація угод
                    </li>
                    <li className={styles.service_item}>
                        <QueryStatsRoundedIcon className={styles.service_icon} />
                        Консалтинг на ринку нерухомості
                    </li>
                    <li className={styles.service_item}>
                        <EngineeringRoundedIcon className={styles.service_icon} />
                        Співпраця із забудовниками та інвесторами
                    </li>
                    <li className={styles.service_item}>
                        <BusinessCenterRoundedIcon className={styles.service_icon} />
                        Представлення інтересів клієнтів
                    </li>
                    <li className={styles.service_item}>
                        <ThumbUpRoundedIcon className={styles.service_icon} />
                        Довірче управління нерухомістю
                    </li>
                    <li className={styles.service_item}>
                        <AccountBalanceWalletRoundedIcon className={styles.service_icon} />
                        Девелопмент і інвестиції в нерухомість
                    </li>
                    <li className={styles.service_item}>
                        <DrawRoundedIcon className={styles.service_icon} />
                        Послуги з дизайну, ремонту та оздоблення приміщень
                    </li>
                </ul>
            </div>
            {/* <div className={styles.achievements_description}>
                <h3>Наші досягнення</h3>
                <p>
                    Керівництво компанії “Ваш Ковчег” з перших років незалежності України активно створювало та розвивало ринок нерухомості міста Чернівці. <br />
                    Відмінною особливістю компанії “Ваш Ковчег” є наявність професійної команди ріелторів , що спираються на власні ресурси в інженерно-технічної, економічної, юридичної, архітектурної сферах.
                </p>
            </div> */}
            <ul className={styles.achievements_list}>
                <li>
                    <div>
                        <CottageRoundedIcon className={styles.achievements_icon} />
                        <p className={styles.countingNumber}>123</p>
                    </div>
                    <p>Завершено проектів</p>
                </li>
                <li>
                    <div>
                        <KeyRoundedIcon className={styles.achievements_icon} />
                        <p className={styles.count_number}>125</p>
                    </div>
                    <p>Продано об'єктів</p>
                </li>
                <li>
                    <div>
                        <EmojiEmotionsRoundedIcon className={styles.achievements_icon} />
                        <p className={styles.count_number}>125</p>
                    </div>
                    <p>Щасливих клієнтів</p>
                </li>
                <li>
                    <div>
                        <EmojiEventsRoundedIcon className={styles.achievements_icon} />
                        <p className={styles.count_number}>25</p>
                    </div>
                    <p>Здобуто нагород</p>
                </li>
            </ul>
        </div>
    )
}