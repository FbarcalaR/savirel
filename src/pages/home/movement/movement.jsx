import { useMemo } from "react";

const Movement = ({ amount, emoji, date, description, tags }) => {
    const extraAmountClasses = useMemo(() => amount >= 0 ? 'text-green' : 'text-red', [amount]);
    return (
        <div className="w-full border-b-gray border-b-1 border-opacity-50 pl-2 pt-2 pr-2">
            <div className="flex gap-3 justify-center max-h-14 w-full mb-5">
                <div className="flex flex-col gap-2 justify-start items-center">
                    <Emoji label="sheep">{emoji}</Emoji>
                    <span className="text-body-xs text-gray">{getShortMonth(date)}</span>
                </div>
                <div className="flex flex-col gap-2 justify-start flex-1">
                    <span className={`text-title font-title leading-5 ${extraAmountClasses}`}>{amount}</span>
                    <label className="leading-4">{description}</label>
                </div>
                <div className="flex justify-start flex-col gap-1 overflow-hidden text-body-s">
                    {tags.map(t=><span>#{t}</span>)}
                </div>
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