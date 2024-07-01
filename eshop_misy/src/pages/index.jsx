import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { HomePage } from '../components/HomePage/HomePage';


document.querySelector('#root').innerHTML = render(
  <>
      <div className="homepage">
      <HomePage />
      </div>
  </>
)