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

export const ItemCounter = ({name,quantity}:ItemCounterProps) => {
    return (
        <section style={myStyles}>
            <span style={{
                width: 150,
            }}>{name}</span>
            <button>+1</button>
            <span>{quantity}</span>
            <button>-1</button>
        </section>
    )
}
