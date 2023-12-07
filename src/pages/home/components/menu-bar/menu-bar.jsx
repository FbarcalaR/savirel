import { useState } from 'react';
import { Close, Add, Home, Menu, FilterList, HelpOutline } from '@material-ui/icons';
import { AddMovementContainer } from '../add-movement-container/add-movement-container';

const MenuBar = ({addMovement}) => {
    const [isAddMovementPanelActive, setIsAddMovementPanelActive] = useState(false);
    const [newMovement, setNewMovement] = useState(null);

    return (
        <div className='absolute h-fit bottom-0 left-0 right-0 transition-all'>
            <div className="h-10 flex justify-between mt-5 bg-light-black min-h-4">
                <div className='pl-5 flex gap-4'>
                    {!isAddMovementPanelActive && <button><Home /></button>}
                    {!isAddMovementPanelActive && <button><Menu /></button>}
                    {isAddMovementPanelActive && <button onClick={() => setIsAddMovementPanelActive(false)}><Close /></button>}
                </div>
                <button className="bg-dark-yellow rounded-full leading-none w-10 h-10 -translate-y-5 absolute left-1/2 -translate-x-1/2"
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


