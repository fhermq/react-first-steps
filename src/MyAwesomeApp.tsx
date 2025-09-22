 const firstName = 'Fernando :)';
    const lastName = 'Mirasol';

    const favoriteGames = ['uno', 'dos', 'tres'];
    const isActive = false; //No genera nada en react

    const address = {
        zipCode: '03340',
        country: 'México'
    }

//Utilizar funcion de flecha.
export const MyAwesomeApp = () => {
    return (
        <>
            <h1>{firstName}</h1>
            <h3>{lastName}</h3>
            <p>{favoriteGames.join(', ')}</p>
            <h1>{isActive? 'Activo' :'No activo'}</h1>
            <p>{JSON.stringify(address)}</p>
        </>
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