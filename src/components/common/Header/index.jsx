import { useSelector } from 'react-redux';
import { selectTranslations } from '../../../redux/feature/i18nSlice';
import Profile from '../Profile';
import plus from './../../../assets/plus.svg';
import Style from './style.module.scss';

const Header = ({ setShowTaskModal, setSearch, search }) => {

    const { i18n: { locale } } = useSelector((state) => state)
    const t = useSelector(selectTranslations)
    
    const handleInput = ({ target: { value } }) => {
        return setSearch(value)
    }

    return (
        <>
            <header className={`${locale === 'ar' ? Style.arHeaderContainer : Style.headerContainer} pt-4`}>
                <div className="first welcome-text">
                    <h1>{t.header.title}</h1>
                    <p>{t.header.description}</p>
                </div>
                <input
                    onChange={handleInput}
                    value={search}
                    type="text"
                    id="search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder={t.header.search} />
                <button
                    onClick={() => setShowTaskModal((show) => !show)}
                    type="button"
                    className="new-task-btn text-white bg-[#40A1FC] hover:bg-[#6fb8fc] font-medium rounded-lg text-sm px-3 py-2.5">
                    <img className="stroke-current w-3 side-arrow" src={plus} alt="side arrow" />
                    {t.header.add}
                </button>
                <Profile />
            </header>
        </>
    )
}

export default Header;