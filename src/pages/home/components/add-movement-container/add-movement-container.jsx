import { useCallback, useEffect, useRef, useState } from 'react';

export const AddMovementContainer = ({ isActive, onTextUpdate }) => {
    const textArea = useRef();
    const [renderedText, setRenderedText] = useState([]);

    const addMovement = useCallback((text) => {
        const emoji = text.match(/\p{Extended_Pictographic}/gu)?.[0];
        const amount = text.match(/(-?)(\d+)/);
        const description = text.match(/(?<= at )([\w ]+)(?= on)/);
        const date = text.match(/(?<= on )(\d\d\/\d\d\/\d\d\d\d)/);
        const tags = text.match(/(?<=#)(\w*)/g);

        let formattedText = [text];
        if (amount && amount[0]) {
            const indexContainingAmount = formattedText.findIndex(e => e.includes(amount[0]));
            const elemContainingAmount = formattedText[indexContainingAmount];
            const [firstHalf, secondHalf] = elemContainingAmount.split(amount[0]);
            const formattedElement = [
                firstHalf,
                <span className={`bg-blue rounded-md bg-opacity-70 text-black`}>{amount[0]}</span>,
                secondHalf
            ];
            formattedText = [
                formattedText.slice(0, indexContainingAmount),
                ...formattedElement,
                formattedText.slice(indexContainingAmount + 1),
            ];
            formattedText = formattedText.filter(e => !e.length || (e.length && e.length > 0));
        }
        if (description && description[0]) {
            const indexContainingDescription = formattedText.findIndex(e => typeof (e) === 'string' && e.includes(description[0]));
            const elemContainingDescription = formattedText[indexContainingDescription];
            const [firstHalf, secondHalf] = elemContainingDescription.split(description[0]);
            const formattedElement = [
                firstHalf,
                <span className={`bg-blue rounded-md bg-opacity-70 text-black`}>{description[0]}</span>,
                secondHalf
            ];
            formattedText = [
                formattedText.slice(0, indexContainingDescription),
                ...formattedElement,
                formattedText.slice(indexContainingDescription + 1),
            ];
            formattedText = formattedText.filter(e => !e.length || (e.length && e.length > 0));
        }
        if (date && date[0]) {
            const indexContainingDate = formattedText.findIndex(e => typeof (e) === 'string' && e.includes(date[0]));
            const elemContainingDate = formattedText[indexContainingDate];
            const [firstHalf, secondHalf] = elemContainingDate.split(date[0]);
            const formattedElement = [
                firstHalf,
                <span className={`bg-blue rounded-md bg-opacity-70 text-black`}>{date[0]}</span>,
                secondHalf
            ];
            formattedText = [
                formattedText.slice(0, indexContainingDate),
                ...formattedElement,
                formattedText.slice(indexContainingDate + 1),
            ];
            formattedText = formattedText.filter(e => !e.length || (e.length && e.length > 0));
        }
        if (tags) {
            tags.forEach(tag => {
                const indexContainingTag = formattedText.findIndex(e => typeof (e) === 'string' && e.includes(`#${tag}`));
                const elemContainingTag = formattedText[indexContainingTag];
                const [firstHalf, secondHalf] = elemContainingTag.split(tag);
                const formattedElement = [
                    firstHalf.replaceAll('#', ''),
                    <span className={`bg-blue rounded-md bg-opacity-70 text-black`}>#{tag}</span>,
                    secondHalf
                ];
                formattedText = [
                    formattedText.slice(0, indexContainingTag),
                    ...formattedElement,
                    formattedText.slice(indexContainingTag + 1),
                ];
                formattedText = formattedText.filter(e => !e.length || (e.length && e.length > 0));
            });
        }
        setRenderedText(formattedText);

        if (amount && description && date) {
            onTextUpdate({
                amount: +amount[0],
                description: description[0],
                date: new Date(date?.[0]),
                emoji: emoji ?? '❓',
                tags: tags ?? []
            });
        }
        else {
            onTextUpdate(null);
        }
    }, [onTextUpdate]);

    useEffect(() => {
        if (!isActive)
            textArea.current.value = '';
    }, [isActive]);

    return (
        <div className={`bg-black transition-all overflow-hidden ${isActive ? 'pt-5 pb-5' : ''} pl-5 pr-5 h-fit`}>
            <div className={`transition-all ${isActive ? 'h-20' : 'h-0'} w-full text-light-black duration-300 relative`}>
                <textarea
                    ref={textArea}
                    placeholder='🍕 20€ at parking pizza on 12/12/2023'
                    className='bg-white w-full h-full pl-2 pr-2 pt-1 pb-1 resize-none rounded-md transparent text-transparent'
                    onChange={(event) => addMovement(event.target.value)}
                >
                </textarea>
                <div className='absolute left-0 right-0 top-0 bottom-0 pointer-events-none pl-2 pr-2 pt-1 pb-1'>
                    {renderedText.map(x => x)}
                </div>
            </div>
        </div>
    );
};

export default AddMovementContainer;
