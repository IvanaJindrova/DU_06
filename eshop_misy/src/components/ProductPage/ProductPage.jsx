const params = new URLSearchParams(window.location.search);
const id = params.get('id');

const response = await fetch (`http://localhost:4001/api/misy/${id}`)
const prevodNaJson = await response.json()
const misy = prevodNaJson.data

export const ProductPage = () => {
        <>
                <h1>{misy.nazev}</h1>
                <h3>Cena: {misy.cena}</h3>
                <p>Výrobce: {misy.vyrobce}</p>
                <p>Průměr mísy: {misy.prumer}</p>
                <p>Objem mísy: {misy.objem}</p>
                <p>Barva: {misy.barva}</p>
                <p>Obrazek: {misy.obrazek}</p>
        </>
};
