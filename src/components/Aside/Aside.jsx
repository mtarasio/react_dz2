import './Aside.scss'
import Dashboard from './img/Dashboard.svg';
import Sales from './img/Sales.svg';
import Catalog from './img/Catalog.svg';
import Customers from './img/Customers.svg';
import Reviews from './img/Reviews.svg';


function Aside() {

  const links = [
    {
      id: 1,
      name: 'Dashboard',
      img: Dashboard
    },
    {
      id: 2,
      name: 'Sales',
      img: Sales
    },
    {
      id: 3,
      name: 'Catalog',
      img: Catalog
    },
    {
      id: 4,
      name: 'Reviews',
      img: Reviews
    },
    {
      id: 5,
      name: 'Customers',
      img: Customers
    }
  ];

  let lis = links.map(({ id, name, img }) => (
    <li className="aside-link" key={id}>
      <img className="aside-icon" src={img} alt="icon" />
      {name}
    </li>
  ));

  return (
    <aside className="aside">
      <nav>
        <ul>{lis}</ul>
      </nav>
    </aside>
  );
}

export default Aside;