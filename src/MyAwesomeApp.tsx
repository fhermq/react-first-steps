import type { CSSProperties } from "react";

const firstName = 'Fernando :)';
const lastName = 'Mirasol';

const favoriteGames = ['uno', 'dos', 'tres'];
const isActive = true; //No genera nada en react

const address = {
    zipCode: '03340',
    country: 'México'
}

const myStyles: CSSProperties = {
    backgroundColor: isActive ? 'blue' : 'red',
    borderRadius: 10,
    padding: 10,
}

//Utilizar funcion de flecha.
export const MyAwesomeApp = () => {
    return (
        <div data-testid="first-div">
            <h1 data-testid="first-name-title">{firstName}</h1>
            <h3>{lastName}</h3>
            <p>{favoriteGames.join(', ')}</p>
            <h1>{isActive ? 'Activo' : 'No activo'}</h1>
            <p style={myStyles}>{JSON.stringify(address)}</p>
        </div>
    )
}


// export function MyAwesomeApp() {
//     return (
//         <>
//             <h1>Fernando =)</h1>
//             <h3>Mirasol</h3>
//         </>
//     )
// }