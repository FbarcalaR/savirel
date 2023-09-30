import React, { useState } from 'react';
import Movement from './components/movement/movement';
import { getUserMovements } from './services/movementsApiService';

const Home = () => {
    const [movements, setMomevents] = useState(getUserMovements());

    return (
        <div className='flex flex-col m-auto gap-4 w-full max-w-xl'>
            {
                (movements.map((movement, index) =>
                    <Movement
                        key={index}
                        amount={movement.amount}
                        emoji={movement.emoji}
                        date={movement.date}
                        description={movement.description}
                        tags={movement.tags} />
                ))}
        </div>
    );
}

export default Home;