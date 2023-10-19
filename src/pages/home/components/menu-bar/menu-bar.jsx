import Add from '@material-ui/icons/Add';
import Home from '@material-ui/icons/Home';
import Menu from '@material-ui/icons/Menu';
import Filter from '@material-ui/icons/FilterList';
import { useState } from 'react';

const MenuBar = () => {
    const [isAddMovementPanelActive, setIsAddMovementPanelActive] = useState(false);
    return (
        <div className='absolute h-fit bottom-0 left-0 right-0 transition-all'>
            <div className="h-1/6 flex justify-between mt-5 bg-light-black">
                <div className='pl-5 flex gap-4'>
                    <button><Home /></button>
                    <button><Menu /></button>
                </div>
                <button className="bg-dark-yellow rounded-full leading-none w-10 h-10 -translate-y-5" onClick={()=>setIsAddMovementPanelActive(prev=>!prev)}>
                            <Add className='text-black'/>
                </button>
                <div className='pr-5 flex gap-4'>
                    <button><Filter /></button>
                </div>
            </div>
            <AddMovementContainer isActive={isAddMovementPanelActive}/>
        </div>
    );
}

export default MenuBar;

const AddMovementContainer = ({isActive}) => {
    return ( 
        <div className={`bg-black transition-all overflow-hidden ${isActive ? 'pt-5 pb-5' : ''} pl-5 pr-5 h-fit`}>
            <div className={`transition-all ${isActive ? 'h-20' : 'h-0'} w-full text-light-black duration-300`}>
                    <textarea className='bg-white w-full h-full pl-2 pr-2 pt-1 pb-1 resize-none rounded-md'></textarea>
            </div>
        </div>
    );
}
