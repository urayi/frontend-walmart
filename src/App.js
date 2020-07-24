import React, { useState } from 'react';
import logo from './assets/logo.svg';
import marketIcon from './assets/marketIcon.svg';
import liderCart from './assets/liderCart.svg';
import './App.css';
import Products from './components/Products/Products';

function App(props) {

  const [products, setProducts] = useState([]);
  const [isPromotion, setIsPromotion] = useState(false);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  const getProducts = (event) => {
    setLoading(true);
    event.preventDefault();
    fetch(`https://walmart-back.herokuapp.com/api/products?query=${search.trim()}`)
      .then(res => res.json())
      .then(
        (result) => {
          setProducts(result.data);
          setIsPromotion(result.isPromotion);
          console.log(result);
          setLoading(false);
        },
        (error) => {
          console.log(error);
          setLoading(false);
        }
      )
  };

  return (
    <div>
      <section>
        <div className="d-flex">
          <div id="header" className="header-info">
            <span>Servicio al cliente de Lider.cl: WhatsApp <a href="https://api.whatsapp.com/send?phone=56957211492&amp;text=Hola!%20Tengo%20una%20consulta">+56957211492</a>
       | Horario: de lunes a viernes de 8:00 a 22:00 y sábado, domingo y festivos de 9:00 a 22:00</span>
          </div>
          <div className="site-header compact" style={{ backgroundColor: '#0071ce' }}>
            <div className="logo">
              <a href="/"><img alt="Lider Logo" src={logo} /></a>
            </div>
            <div className="menu-icon-container d-none d-md-block">
              <div style={{ cursor: 'pointer' }}>
                <i className="zmdi zmdi-menu menu-icon"></i>
                <div className="show-category">Categorías</div>
              </div>
            </div>

            <div style={{ width: '100%', margin: '0px 4%' }}>
              <div className="search-width">
                <div className="search-box-container-header" style={{ paddingTop: '10px' }}>
                  <section>
                    <div className="ais-InstantSearch__root">
                      <div className="ais-InstantSearch__root">
                        <div className="ais-SearchBox">
                          <form className="ais-SearchBox-form" onSubmit={getProducts}>
                            <input type="search" placeholder="¿Qué estás buscando?" className="ais-SearchBox-input"
                              value={search} onChange={e => setSearch(e.target.value)} />
                            <button type="submit" title="Submit your search query." className="ais-SearchBox-submit search-input-icons">
                              <svg className="ais-SearchBox-submitIcon"
                                xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 40 40">
                                <path d="M26.804 29.01c-2.832 2.34-6.465 3.746-10.426 3.746C7.333 32.756 0 25.424 0 16.378 0 7.333 7.333 0 16.378 0c9.046 0 16.378 7.333 16.378 16.378 0 3.96-1.406 7.594-3.746 10.426l10.534 10.534c.607.607.61 1.59-.004 2.202-.61.61-1.597.61-2.202.004L26.804 29.01zm-10.426.627c7.323 0 13.26-5.936 13.26-13.26 0-7.32-5.937-13.257-13.26-13.257C9.056 3.12 3.12 9.056 3.12 16.378c0 7.323 5.936 13.26 13.258 13.26z"></path>
                              </svg>
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>

            <div className="cart-supermarket-width">
              <div className="cart-container d-none d-md-flex" style={{ backgroundColor: 'rgb(6, 86, 143)' }}>
                <a aria-haspopup="true" href="/" className="p-0 nav-link" aria-expanded="false">
                  <div id="shoppingCart" className="d-flex justify-content-between shopping-cart-images">
                    <img alt="cart" src={liderCart} width="29" height="25" />
                    <div className="cart-quantity">
                      <div id="quantityNumber" className="quantity-number">0</div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="go-to-supermarket-link d-none d-md-block">
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <img alt="market-icon" width="20" src={marketIcon} style={{ marginRight: '5px' }} />Supermercado</a>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section>
        <div className="AppContainer">
          <div className="AppFilters">
            <div>
              <p className="mb-10 pt-20" style={{ fontSize: '18px', display: search && search !== '' ? null : 'none' }}>
                Resultados para <strong className="text-capitalize">{search}</strong>:
              </p>
            </div>
            <button className="btn mb-3 d-none d-sm-block">Ordenar po: Destacados <i className="zmdi zmdi-chevron-right"></i></button>
          </div>
          <div className="row">
            <div className="AppSidebar d-none d-lg-block col-lg-3">
              <h1>Filtros</h1>
            </div>
            {
              !loading &&
              <div className="col-lg-9 col-12">
                <Products products={products} isPromotion={isPromotion} />
              </div>
            }
            {
              loading &&
              <div className="col-lg-9 col-12 text-center">
                <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
              </div>
            }
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
