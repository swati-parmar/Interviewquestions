import React from 'react';
import { useParams } from 'react-router-dom';

// const User = ({ match }) => {
//     return  <h1>Hello {match.params.name} page </h1>
// };

const User = () => {
    const { fname, lname } = useParams();
    return  (
        <h1>Hello {fname} {lname} page </h1>
    )
};

export default User;