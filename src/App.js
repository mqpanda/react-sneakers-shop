import Card from './components/Card'
import Header from './components/Header';
import Drawer from './components/Drawer';
import React from 'react';
import axios from 'axios';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios.get('https://63447dc6dcae733e8fe04776.mockapi.io/items').then(res => {
      setItems(res.data);
    })
    axios.get('https://63447dc6dcae733e8fe04776.mockapi.io/cart').then(res => {
      setCartItems(res.data);
    })
  }, []);

  const onAddToCart = (obj) => {
    axios.post('https://63447dc6dcae733e8fe04776.mockapi.io/cart', obj);
    setCartItems(prev => [...prev, obj]);
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const onRemoveItem = (id) => {
    axios.delete(`/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };
 
  return (
    <div className='wrapper clear'>
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />}
      <Header onClickCart={() => setCartOpened(true)} />

      <div className='content p-40'>
        <div className='d-flex align-center justify-between mb-40 m-card'>
          <h1>{searchValue ? `Поиск по запросу: "${searchValue}"`: 'Все кроссовки'}</h1>

          <div className='search-block d-flex'>
            <img src='/img/search.svg' alt='Search'/>
            {searchValue && <img onClick={() => setSearchValue('')} className='clear-search cu-p' src='./img/btn-remove.svg' alt='Clear'/>}
            <input onChange={onChangeSearchInput} value={searchValue} placeholder='Поиск...'/>
          </div>

        </div>

        <div className='d-flex flex-wrap '>

          {items
          .filter((item) => item.title.toLowerCase().includes(searchValue))
          .map((item) =>(
            <Card key={item.title} 
            title= {item.title} 
            price={item.price} 
            imageUrl={item.imageUrl}
            onFavorite={() => console.log('Добавили в избранное')}
            onPlus={(obj) => onAddToCart(obj)}
            />
          ))}
          
        </div>

      </div> 
      
    </div>
  );
}

export default App;
