import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { HomePage } from '../components/HomePage/HomePage';


const response = await fetch ("http://localhost:4000/api/misy")
const prevodNaJson = await response.json()
const cistaData = prevodNaJson.data
console.log(cistaData)

document.querySelector('#root').innerHTML = render(
  <>
    <HomePage />
    {
      cistaData.map((item) => (
        <div key={item.id}>
          <h2>Název: {item.nazev}</h2>
          <img src={item.img}></img>
          <h3>Cena: {item.cena}</h3>
          <a href={`/detail.html?id=${item.id}`}>
              <button>Detail produktu</button>
          </a>
      </div>
      ))
    }

  </>
);
