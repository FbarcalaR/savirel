import React, { useCallback, useState } from 'react';
import { getUserMovements, postNewMovement } from './services/movements-api-service';
import MovementsList from './components/movement-list/movements-list';
import MenuBar from './components/menu-bar/menu-bar';

const Home = () => {
    const [movements, setMovements] = useState(getUserMovements());

    const createNewMovement = useCallback((movement) => {
        postNewMovement(movement);
        setMovements([...getUserMovements()]);
    }, []);

    return (
        <>
            <MovementsList movements={movements} />
            <MenuBar addMovement={movement => createNewMovement(movement)}/>
        </>
    );
}

export default Home;