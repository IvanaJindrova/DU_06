import { render } from '@czechitas/render';
import '../global.css';
import './index.css';

const response = await fetch ("http://localhost:4001/api/misy")
const prevodNaJson = await response.json()
const cistaData = prevodNaJson.data
console.log(cistaData)

document.querySelector('#root').innerHTML = render(
  <>
    <h1>Mísy na prodej</h1>
    {
      cistaData.map((item) => (
        <div key={item.id}><a href={`detail.html?id=${item.id}`}>{item.nazev} - {item.cena}</a></div>
      ))
    }

  </>
);
