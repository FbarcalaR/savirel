import Add from '@material-ui/icons/Add';
import { useState } from 'react';

const MenuBar = () => {
    const [isAddMovementPanelActive, setIsAddMovementPanelActive] = useState(false);
    return (
        <div className='absolute h-fit bottom-0 left-0 right-0 transition-all'>
            <div className="h-1/6 flex justify-between mt-5 bg-light-black">
                <div>
                    <button>TODO: buttons left</button>
                </div>
                <button className="bg-dark-yellow rounded-full leading-none w-10 h-10 -translate-y-5" onClick={()=>setIsAddMovementPanelActive(prev=>!prev)}>
                            <Add className='text-black'/>
                </button>
                <div>
                    <button>TODO: buttons right</button>
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
            <div className={`transition-all ${isActive ? 'h-20' : 'h-0'} w-full text-light-black`}>
                    <textarea className='bg-white w-full h-full pl-2 pr-2 pt-1 pb-1 resize-none rounded-md'></textarea>
            </div>
        </div>
    );
}
