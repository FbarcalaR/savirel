import React, { useState } from 'react';
import { getUserMovements } from './services/movements-api-service';
import MovementsList from './components/movement-list/movements-list';
import MenuBar from './components/menu-bar/menu-bar';

const Home = () => {
    const [movements, setMomevents] = useState(getUserMovements());

    return (
        <>
            <MovementsList movements={movements} />
            <MenuBar />
        </>
    );
}

export default Home;