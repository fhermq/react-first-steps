import { ItemCounter } from "./shopping-cart/ItemCounter";

export function FirstStepsApp() {
    return (

        // <>
        //     <h1>Hola Mundo!</h1>
        //     <p>Esto es párrafo</p>
        //     <button>Click me</button>
        //     <div>
        //         <h2>Hola dentro de un div</h2>
        //     </div>
        // </>
        <>
            <h1>Carrito de compras</h1>
            <ItemCounter />
            <ItemCounter />
            <ItemCounter />
        </>
    );
}