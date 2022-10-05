 function Card(props)
 {
    return(
        <div className='card'>
        <div className='favorite'>
        <img src='/img/heart-unliked.svg' alt='unliked'/>
        </div>
        <img width={133} height={112} src={props.imageUrl} alt='Sneakers'></img>
        <h5 className='mb-40'>{props.title}</h5>
        <div className='d-flex justify-between align-center'>
        <div className='d-flex flex-column  '>
            <span>Цена:</span>
            <b>{props.price} руб.</b>
        </div>
        <button className='button'>
            <img width={11} height={11} src='/img/btn.svg' alt=''></img>
        </button>
        </div>
        </div>
    );
 }

 export default Card;
 
