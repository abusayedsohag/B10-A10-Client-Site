import React from 'react';
import { useNavigation } from 'react-router-dom';

const Spinner = () => {

    const navigation = useNavigation()

    if (navigation.state === "loading") {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-spinner text-warning loading-xl"></span>
            </div>
        );
    }

    return null;
};

export default Spinner;