import React, { useContext } from 'react';
import HashLoader from "react-spinners/HashLoader";
import { ThemeContext } from '../../Provider/ThemeContext';


const Spinner = () => {

    const {theme} = useContext(ThemeContext);
    const color = theme === 'dark' ? '#eeff00' : '#000000';

    return (
        <div className="sweet-loading">
            <div className=''>
                <HashLoader
                    color={color}
                    loading= {true}
                    size={50}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </div>
        </div>
    );
};

export default Spinner;