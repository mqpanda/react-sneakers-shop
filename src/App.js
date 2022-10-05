import Card from './components/Card'
import Header from './components/Header';
import Drawer from './components/Drawer';

const arr = [
  {name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, imageUrl: '/img/sneakers/nike-blazer-mid.png'},
  {name: 'Мужские Кроссовки Puma X Future Rider', price: 13999, imageUrl: '/img/sneakers/puma-x.png'},
  {name: 'Мужские Кроссовки Nike Blazer Mid ', price: 8999, imageUrl: '/img/sneakers/nike-blazer.png'},
  {name: 'Мужские Кроссовки Nike Air Max 270', price: 16999, imageUrl: '/img/sneakers/nike-air-max-270.png'},
];

function App() {
  return (
    <div className='wrapper clear'>
      <Drawer/>
      <Header/>

      <div className='content p-40'>
        <div className='d-flex align center justify-between mb-40'>
          <h1>Все кроссовки</h1>

          <div className='search-block d-flex'>
            <img src='/img/search.svg' alt='Search'/>
            <input placeholder='Поиск...'/>
          </div>

        </div>

        <div className='d-flex'>

          {arr.map((obj) =>(
            <Card title= {obj.name} price={obj.price} imageUrl={obj.imageUrl}/>
          ))}
          
        </div>

      </div> 
      
    </div>
  );
}

export default App;
