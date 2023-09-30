import { useMemo } from "react";

const Movement = ({ amount, emoji, date, description, tags }) => {
    const extraAmountClasses = useMemo(() => amount >= 0 ? 'text-green' : 'text-red', [amount]);
    return (
        <div className="w-full flex border-b-gray border-b-1 border-opacity-50 p-2 max-h-16 gap-3">
            <div className="grid grid-cols-6 gap-y-2 justify-center w-full h-full">
                <Emoji className="col-span-1 m-auto" label="sheep">{emoji}</Emoji>
                <span className={`col-span-5 text-title font-title leading-5 ${extraAmountClasses}`}>{amount}</span>
                <span className="col-span-1 text-body-xs text-gray flex center items-end leading-3">{getShortMonth(date)}</span>
                <label className="col-span-5 leading-tight">{description}</label>
            </div>
            <div className="flex justify-start flex-col gap-1 overflow-hidden text-body-s">
                {tags.map((t, i) => <span key={i}>#{t}</span>)}
            </div>
        </div>
    );
}

const Emoji = props => (
    <span
        className="text-body"
        role="img"
        aria-label={props.label ? props.label : ""}
        aria-hidden={props.label ? "false" : "true"}
    >
        {props.children}
    </span>
);


function getShortMonth(date) {
    return Intl.DateTimeFormat('es-ES',
        { day: '2-digit', month: 'short', year: '2-digit' })
        .format(date);
}

export default Movement;