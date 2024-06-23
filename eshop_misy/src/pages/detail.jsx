import { render } from '@czechitas/render';
import { ProductPage } from '../components/ProductPage/ProductPage';
import '../global.css';
import './index.css';
/*
const response = await fetch ("http://localhost:4001/api/misy")
const prevodNaJson = await response.json()
const cistaData = prevodNaJson.data

cistaData.map((produkt) => (
        <div key={produkt.id}><a href={`detail.html?id=${produkt.id}`}>{produkt.nazev} - {produkt.cena}</a></div>
    ))

console.log(produkt)
*/
//6.bod
const params = new URLSearchParams(window.location.search);
const id = params.get('id');

const response = await fetch (`http://localhost:4001/api/misy/${id}`)
const prevodNaJson = await response.json()
const misy = prevodNaJson.data

document.querySelector('#root').innerHTML = render(
  <>
    <ProductPage />
  </>
);
