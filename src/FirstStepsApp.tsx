import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
    productName: string;
    quantity: number;
}
const itemsInCart: ItemInCart[] = [
    { productName: 'Nintendo Switch 2', quantity: 1 },
    { productName: 'Pro Controller', quantity: 5 },
    { productName: 'Super Smash Bros', quantity: 1 },
    { productName: 'Memoria SD 256 GB', quantity: 3 },
]

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
            <h1 data-testid="test-h1">Carrito de compras</h1>
            {/* <ItemCounter name="Nintendo Switch 2" quantity={1}/>
            <ItemCounter name="Pro Controller" quantity={2} />
            <ItemCounter name="Super Smash Bros" quantity={1} />
            <ItemCounter name="Memoria SD 256 GB" quantity={2} /> */}
        {
            itemsInCart.map( ({productName, quantity})=> (
                 <ItemCounter key={productName} name={productName} quantity={quantity} />
            ))
        }

        </>
    );
}