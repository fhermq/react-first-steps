import type { CSSProperties } from "react"

interface ItemCounterProps {
    name: string;
    quantity?: number;
}

const myStyles: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    marginTop: 10,
}

export const ItemCounter = ({ name, quantity }: ItemCounterProps) => {
    const handleClick = () => {
        console.log(`Click en ${name}`);
    }

    const handleOnMouseEnter = () => {
        console.log(`On mouse Enter en ${name}`)
    }

    return (
        <section style={myStyles}>
            <span style={{
                width: 150,
            }}>{name}</span>
            <button onMouseEnter={handleOnMouseEnter}
                onClick={handleClick}>+1</button>
            <span>{quantity}</span>
            <button>-1</button>
        </section>
    )
}
