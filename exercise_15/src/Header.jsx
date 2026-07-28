import { useContext } from 'react';
import TranslationContext from './TranslationContext';

const Header = ({ changeLanguage }) => {
    const lang = useContext(TranslationContext);

    return (
        <>
            <button onClick={(e) => changeLanguage(e)}>Switch to {lang === 'english' ? 'Spanish' : 'English'}</button>

            <h1>{lang === 'english' ? 'Hello!' : '!Hola!'}</h1>
        </>
    )
}

export default Header;

