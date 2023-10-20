import { useCallback, useEffect, useRef, useState } from 'react';
import { Close, Add, Home, Menu, FilterList, HelpOutline } from '@material-ui/icons';

const MenuBar = ({addMovement}) => {
    const [isAddMovementPanelActive, setIsAddMovementPanelActive] = useState(false);
    const [newMovement, setNewMovement] = useState({});

    return (
        <div className='absolute h-fit bottom-0 left-0 right-0 transition-all'>
            <div className="h-1/6 flex justify-between mt-5 bg-light-black">
                <div className='pl-5 flex gap-4'>
                    {!isAddMovementPanelActive && <button><Home /></button>}
                    {!isAddMovementPanelActive && <button><Menu /></button>}
                    {isAddMovementPanelActive && <button onClick={() => setIsAddMovementPanelActive(false)}><Close /></button>}
                </div>
                <button className="bg-dark-yellow rounded-full leading-none w-10 h-10 -translate-y-5"
                    onClick={() => {isAddMovementPanelActive && addMovement(newMovement); setIsAddMovementPanelActive(prev => !prev);}}
                >
                    <Add className='text-black' />
                </button>
                <div className='pr-5 flex gap-4'>
                    {!isAddMovementPanelActive && <button><FilterList /></button>}
                    {isAddMovementPanelActive && <button><HelpOutline /></button>}
                </div>
            </div>
            <AddMovementContainer isActive={isAddMovementPanelActive} onTextUpdate={movement => setNewMovement(movement)}/>
        </div>
    );
}

export default MenuBar;

const AddMovementContainer = ({ isActive, onTextUpdate }) => {
    const textArea = useRef();

    const addMovement = useCallback((text) => {
        const amount = text.match(/^(-?)(\d+)/);
        const description = text.match(/(?<= in )([\w ]+)$/);
        if (amount && description) {
            onTextUpdate({id: 'test-32', amount: +amount[0], description: description[0], date: new Date(), emoji: '🐑', tags: []});
        }
    }, [onTextUpdate]);

    useEffect(() => {
        if(!isActive)
            textArea.current.value = '';
    }, [isActive]);

    return (
        <div className={`bg-black transition-all overflow-hidden ${isActive ? 'pt-5 pb-5' : ''} pl-5 pr-5 h-fit`}>
            <div className={`transition-all ${isActive ? 'h-20' : 'h-0'} w-full text-light-black duration-300`}>
                <textarea
                    ref={textArea}
                    className='bg-white w-full h-full pl-2 pr-2 pt-1 pb-1 resize-none rounded-md'
                    onChange={(event) => addMovement(event.target.value)}
                >
                    </textarea>
            </div>
        </div>
    );
}
