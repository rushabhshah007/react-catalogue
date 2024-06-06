import { Button } from '@mui/material';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Home = () => {
    const history = useHistory();

    

    const navigate = () => {
        history.push({
            pathname: "/catalogue"
        });
    }
    return (
        <div>
            <Link to="/catalogue">
                <Button variant='contained'>Catalogue</Button>
            </Link>
        </div>
    );
}

export default Home;