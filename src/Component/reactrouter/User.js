import React from 'react';
import { useParams } from 'react-router-dom';

// const User = ({ match }) => {
//     return  <h1>Hello {match.params.name} page </h1>
// };

const User = () => {
    const { firstname, lastname } = useParams();
    return  (
        <h1>Hello {firstname} {lastname} page </h1>
    )
};

export default User;