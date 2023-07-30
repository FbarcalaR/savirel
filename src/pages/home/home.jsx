import React from 'react';
import Movement from './movement/movement';

const Home = () => {
    const movements = [
        {
            amount: 420,
            emoji: '🐑',
            date: new Date(),
            description: 'oven',
            tags: ['a', 'b', 'c', 'd', 'e', 'f'],
        },
        {
            amount: 422,
            emoji: '💦',
            date: new Date(),
            description: 'oven2',
            tags: ['a', 'b', 'c', 'd', 'e', 'f'],
        },
        {
            amount: -42,
            emoji: '🍕',
            date: new Date(),
            description: 'oven2',
            tags: ['a', 'b', 'c', 'd', 'e', 'f'],
        }
    ]

    return (
        <div className='flex flex-col m-auto gap-4 w-full max-w-xl'>
            {
            (movements.map(movement =>
                <Movement amount={movement.amount} emoji={movement.emoji} date={movement.date} description={movement.description} tags={movement.tags}/>
                ))}
        </div>
    );
}
 
export default Home;