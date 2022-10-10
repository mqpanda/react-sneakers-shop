 import React from 'react';
 import styles from './Card.module.scss'

 function Card(props)
 {
    const [isAdded, setIsAdded] = React.useState(false);
    const onClickPlus = () => {
        setIsAdded(!isAdded);
    }

    const [isUnliked, setIsUnliked] = React.useState(false);
    const onClickLiked = () => {
        setIsUnliked(!isUnliked);
    }


    return(
        <div className={styles.card}>
            <div className={styles.favorite} onClick={props.onFavorite}>
                <img onClick={onClickLiked} src={isUnliked ? '/img/heart-liked.svg' : '/img/heart-unliked.svg'} alt='Unliked'/>
            </div>
            <img className={styles.image} width={133} height={112} src={props.imageUrl} alt='Sneakers'></img>
           
            <h5 className='mb-40'>{props.title}</h5>
            <div className='d-flex justify-between align-center'>
                <div className='d-flex flex-column  '>
                    <span>Цена:</span>
                    <b>{props.price} руб.</b>
                </div>

                <img className={styles.plus} onClick={onClickPlus} src={isAdded ? '/img/btn-checked.svg' : '/img/btn-plus.svg'} alt='Plus'></img>
                
            </div>
        </div>
    );
 }

 export default Card;
 
