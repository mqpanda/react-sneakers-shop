import Card from './components/Card'
import Header from './components/Header';
import Drawer from './components/Drawer';
import React from 'react';




function App() {
  const [items, setItems] = React.useState([]);

  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch('https://63447dc6dcae733e8fe04776.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);
 
  return (
    <div className='wrapper clear'>
      {cartOpened && <Drawer onClose={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)} />

      <div className='content p-40'>
        <div className='d-flex align-center justify-between mb-40 all'>
          <h1>Все кроссовки</h1>

          <div className='search-block d-flex'>
            <img src='/img/search.svg' alt='Search'/>
            <input placeholder='Поиск...'/>
          </div>

        </div>

        <div className='d-flex flex-wrap '>

          {items.map((obj) =>(
            <Card key={obj.title.toString()} 
            title= {obj.title} 
            price={obj.price} 
            imageUrl={obj.imageUrl}
            />
          ))}
          
        </div>

      </div> 
      
    </div>
  );
}

export default App;
