import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

// const User = ({ match }) => {
//     return  <h1>Hello {match.params.name} page </h1>
// };

const User = () => {
    const { firstname, lastname } = useParams();
    const location = useLocation();
    console.log(location);

    return  (
        <div>
            <h1>Hello {firstname} {lastname} page </h1>
            <p>My current location is {location.pathname} </p>
            {location.pathname === `/user/swati/parmar` ? (
            <button onClick={() => alert(`you are awesome`)}> Click Me</button>
            ) : null}
        </div>
    )
};

export default User;