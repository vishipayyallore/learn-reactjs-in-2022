import './App.css';

import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';

function App() {
  return (
    <div className="App">

      <div className="header__logo">
        <StorefrontIcon fontSize="large" className="header__logoImage" />
        <h2 className="header__logoImage">eShop</h2>
      </div>

      <div className="header__search">
        <input type="text" placeholder="Search" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">

        <div className="nav__item">
          <span className="nav__itemLineOne">Hello Guest</span>
          <span className="nav__itemLineTwo">Sign In</span>
        </div>

        <div className="nav__item">
          <span className="nav__itemLineOne">Your</span>
          <span className="nav__itemLineTwo">Shop</span>
        </div>

        <div className="nav__item">
          <ShoppingBasketIcon />
          <span className="nav__itemLineTwo">9</span>
        </div>

      </div>

    </div>
  );
}

export default App;
