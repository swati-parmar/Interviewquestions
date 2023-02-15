import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

// const User = ({ match }) => {
//     return  <h1>Hello {match.params.name} page </h1>
// };

const User = () => {
    const { firstname, lastname } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    return  (
        <div>
            <h1>Hello {firstname} {lastname} page </h1>
            <p>My current location is {location.pathname} </p>
            {location.pathname === `/user/swati/parmar` ? (
            <button onClick={() => navigate(-1)}> Go back</button>
            ) : null}
        </div>
    )
};

export default User;