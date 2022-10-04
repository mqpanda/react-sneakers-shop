 function Card(){
    return(
        <div className='card'>
        <div className='favorite'>
        <img src='/img/heart-unliked.svg' alt='unliked'/>
        </div>
        <img width={133} height={112} src='/img/sneakers/nike-blazer.png' alt='Sneakers'></img>
        <h5 className='mb-40'>Мужские Кроссовки Nike Blazer Mid Suede</h5>
        <div className='d-flex justify-between align-center'>
        <div className='d-flex flex-column  '>
            <span>Цена:</span>
            <b>12 999 руб.</b>
        </div>
        <button className='button'>
            <img width={11} height={11} src='/img/btn.svg' alt=''></img>
        </button>
        </div>
        </div>
    );
 }

 export default Card;
 
