const params = new URLSearchParams(window.location.search);
const id = params.get('id');

const response = await fetch (`http://localhost:4000/api/misy/${id}`)
const prevodNaJson = await response.json()
const misy = prevodNaJson.data

export const Product = () => {
    return (
        <>
            <h1>{misy.nazev}</h1>
            <h3>Cena: {misy.cena}</h3>
            <p>Výrobce: {misy.vyrobce}</p>
            <p>Průměr mísy: {misy.prumer}</p>
            <p>Objem mísy: {misy.objem}</p>
            <p>Barva: {misy.barva}</p>
            <p>Obrazek: {misy.obrazek}</p>
            
    </>
    )
};