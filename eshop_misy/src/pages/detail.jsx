import { render } from '@czechitas/render';
import { ProductPage } from '../components/ProductPage/ProductPage';
import '../global.css';
import './index.css';
import { Product } from '../components/Product/Product';

//6.bod
const params = new URLSearchParams(window.location.search);
const id = params.get('id');

document.querySelector('#root').innerHTML = render(
  <>
    <ProductPage />
    <Product />
  </>
);
