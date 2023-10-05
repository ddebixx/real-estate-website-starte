"use client"
import styles from '../../styles/landing-page/Hero.module.scss'
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import DrawOutlinedIcon from '@mui/icons-material/DrawOutlined';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';

export const HeroSection = () => {
    return (
        <div className={styles.hero_container}>
            <h2>Компанія надає ряд послуг:</h2>
            <div className={styles.service_container}>
                <ul className={styles.service_list}>
                    <li className={styles.service_item}>
                        <SupervisorAccountOutlinedIcon className={styles.service_icon} />
                        <p>Посередницькі послуги</p>
                    </li>
                    <li className={styles.service_item}>
                        <AssignmentOutlinedIcon className={styles.service_icon} />
                        <p>Консалтинг на ринку нерухомості</p>
                    </li>
                    <li className={styles.service_item}>
                        <EditNoteOutlinedIcon className={styles.service_icon} />
                        <p>Оформлення та реєстрація угод</p>
                    </li>
                    <li className={styles.service_item}>
                        <QueryStatsOutlinedIcon className={styles.service_icon} />
                        <p>Консалтинг на ринку нерухомості</p>
                    </li>
                    <li className={styles.service_item}>
                        <EngineeringOutlinedIcon className={styles.service_icon} />
                        <p>Співпраця із забудовниками та інвесторами</p>
                    </li>
                    <li className={styles.service_item}>
                        <BusinessCenterOutlinedIcon className={styles.service_icon} />
                        <p>Представлення інтересів клієнтів</p>
                    </li>
                    <li className={styles.service_item}>
                        <ThumbUpOutlinedIcon className={styles.service_icon} />
                        <p>Довірче управління нерухомістю</p>
                    </li>
                    <li className={styles.service_item}>
                        <AccountBalanceWalletOutlinedIcon className={styles.service_icon} />
                        <p>Девелопмент і інвестиції в нерухомість</p>
                    </li>
                    <li className={styles.service_item}>
                        <DrawOutlinedIcon className={styles.service_icon} />
                        <p>Послуги з дизайну, ремонту та оздоблення приміщень</p>
                    </li>
                </ul>
            </div>
            <div className={styles.achievements_container}>
                <ul className={styles.achievements_list}>
                    <li>
                        <div className={styles.achievements_description}>
                            <CottageOutlinedIcon className={styles.achievements_icon} />
                            <h3>123</h3>
                        </div>
                        <p className='text-xl'>Завершено проектів</p>
                    </li>
                    <li>
                        <div className={styles.achievements_description}>
                            <KeyOutlinedIcon className={styles.achievements_icon} />
                            <h3>125</h3>
                        </div>
                        <p className='text-xl'>Продано об'єктів</p>
                    </li>
                    <li>
                        <div className={styles.achievements_description}>
                            <EmojiEmotionsOutlinedIcon className={styles.achievements_icon} />
                            <h3>125</h3>
                        </div>
                        <p className='text-xl'>Щасливих клієнтів</p>
                    </li>
                    <li>
                        <div className={styles.achievements_description}>
                            <EmojiEventsOutlinedIcon className={styles.achievements_icon} />
                            <h3>25</h3>
                        </div>
                        <p className='text-xl'>Здобуто нагород</p>
                    </li>
                </ul>
            </div>
            <div className={styles.companyHero_container}>
                <ul className={styles.companyHero_list}>
                    <li>
                        <ShareOutlinedIcon className={styles.companyHero_icon} />
                        <div className={styles.companyHero_description}>
                            <h3>Індивідуальний підхід</h3>
                            <p className='text-xl'>Стиль роботи нашої компанії відрізняє діловий та індивідуальний підхід до вирішення всіх без винятку завдань.</p>
                        </div>
                    </li>
                    <li>
                        <SchoolOutlinedIcon className={styles.companyHero_icon} />
                        <div className={styles.companyHero_description}>
                            <h3>Досвідчені фахівці</h3>
                            <p className='text-xl'>Сьогодні штат співробітників компанії, представлений фахівцями різних профілів, здатний вирішувати будь-які питання в сфері нерухомості.</p>
                        </div>
                    </li>
                    <li>
                        <EmojiEmotionsOutlinedIcon className={styles.companyHero_icon} />
                        <div className={styles.companyHero_description}>
                            <h3>Високий ступінь довіри</h3>
                            <p className='text-xl'>Ми завжди досягаємо довіри клієнтів, надаючи послуги високої якості.</p>
                        </div>
                    </li>
                    <li>
                        <ThumbUpOutlinedIcon className={styles.companyHero_icon} />
                        <div className={styles.companyHero_description}>
                            <h3>Відмінна репутація</h3>
                            <p className='text-xl'>Бездоганна репутація серед клієнтів, колег і представників влади гарантує індивідуальний підхід</p>
                        </div>

                    </li>
                </ul>
            </div>
        </div>
    )
}