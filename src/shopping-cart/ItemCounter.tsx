// import { useState, type CSSProperties } from "react"
import { useState } from "react"
// import './ItemCounter.css';
import styles from './ItemCounter.module.css';

interface ItemCounterProps {
    name: string;
    quantity?: number;
}

// const myStyles: CSSProperties = {
// display: 'flex',
// alignItems: 'center',
// gap: 10,
// marginTop: 10,
// }

export const ItemCounter = ({ name, quantity = 1 }: ItemCounterProps) => {
    //Los hooks van al inicio.
    // Siempre llama a los hooks en el mismo orden.
    // Solo usa hooks en componentes funcionales o custom hooks.
    //Los hooks deben comenzar con use.

    const [count, setCount] = useState(quantity);

    const handleAdd = () => {
        setCount(count + 1);
        //Se vuelve a renderizar el componente.
    }

    const handleSustract = () => {
        if (count === 0) return;
        setCount(count - 1);
    }


    // const handleClick = () => {
    //     console.log(`Click en ${name}`);
    // }

    // const handleOnMouseEnter = () => {
    //     console.log(`On mouse Enter en ${name}`)
    // }

    return (
        <section className={styles.itemRow} >
            <span className={styles['item-text']} style={{
                color: count === 0 ? 'red' : 'black',
            }} >{name}</span>
            <button onClick={handleAdd}>+1</button>
            <span>{count}</span>
            <button onClick={handleSustract} >-1</button>
        </section>
    )
}
