 import React from 'react';
 import styles from './Card.module.scss'

 function Card({ title, imageUrl, price, onFavorite, onPlus})
 {
    const [isAdded, setIsAdded] = React.useState(false);
    const onClickPlus = () => {
        onPlus({title, imageUrl, price});
        setIsAdded(!isAdded);
    }

    const [isUnliked, setIsUnliked] = React.useState(false);
    const onClickLiked = () => {
        setIsUnliked(!isUnliked);
    }


    return(
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onFavorite}>
                <img onClick={onClickLiked} src={isUnliked ? '/img/heart-liked.svg' : '/img/heart-unliked.png'} alt='Unliked'/>
            </div>
            <img className={styles.image} width={133} height={112} src={imageUrl} alt='Sneakers'></img>
           
            <h5 className='mb-40'>{title}</h5>
            <div className='d-flex justify-between align-center'>
                <div className='d-flex flex-column  '>
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                </div>

                <img className={styles.plus} onClick={onClickPlus} src={isAdded ? '/img/btn-checked.svg' : '/img/btn-plus.svg'} alt='Plus'></img>
                
            </div>
        </div>
    );
 }

 export default Card;
 
