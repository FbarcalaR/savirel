import Movement from './movement/movement';

const MovementsList = ({movements}) => {
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
 
export default MovementsList;