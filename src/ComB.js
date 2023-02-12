import React, { useContext } from 'react';
import ComC from './ComC';
import { FirstName } from './App';

const ComB = () => {
    const fname = useContext(FirstName);
    return <ComC />
}

export default ComB;