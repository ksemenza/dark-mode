import {useEffect} from 'react';
import useLocalStorage  from  '../hooks/useLocalStorage';

const useDarkMode = () => {
    const [dark, setDark] = useLocalStorage('darkSetting', false)

    useEffect(() => {
        const bodySel = document.querySelector('body');
        if (dark === true) {
            bodySel.classList.add('dark-mode');
        } else {
            bodySel.classList.remove('dark-mode');
        }
    }, [dark])

    return[dark, setDark]

}

export default useDarkMode