import { useEffect, useState } from 'react';

function getWindowSize() {
    return {width: window.innerWidth, height: window.innerHeight};
}

export default function useScreenSize() {
    const [windowSize, setWindowSize] = useState(getWindowSize);

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, [setWindowSize]);

    return windowSize;
}