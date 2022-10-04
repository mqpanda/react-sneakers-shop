function Drawer(){
    return(

        <div className='overlay' style={{display: 'none'}}>
            <div className='drawer'>
                <h2 className='d-flex justify-between mb-30'>Корзина <img className='cu-p'  src='/img/btn-remove.svg' alt='Remove'/></h2>

                <div className='items'>
                    {/* Карточка товара в корзине */}
                    <div className='cartItem d-flex align-center mb-20'>

                        <div style={{ backgroundImage: 'url(/img/sneakers/nike-blazer.png)'}} className='cartItemImg'>
                        
                        </div>

                        <div className='mr-20 flex'>
                            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                            <b>12 999 руб.</b>
                        </div>

                        <img className='removeBtn' src='/img/btn-remove.svg' alt='Remove'/>

                    </div>

                    <div className='cartItem d-flex align-center mb-20'>

                        <div style={{ backgroundImage: 'url(/img/sneakers/nike-blazer.png)'}} className='cartItemImg'>
                        
                        </div>

                        <div className='mr-20 flex'>
                            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                            <b>12 999 руб.</b>
                        </div>

                        <img className='removeBtn' src='/img/btn-remove.svg' alt='Remove'/>


                    </div>
                
                </div>
            
            
                <div className='cartTotalBlock'>
                    <ul>
                    <li className='d-flex mb-5'>
                        <span>Итого:</span>
                        <div></div>
                        <b>21 498 руб.</b>
                    </li>
                    <li className='d-flex'>
                        <span>Комиссия 5%:</span>
                        <div></div>
                        <b>1074 руб.</b>
                    </li>
                    </ul>
            
                    <button className='greenButton'>Оформить заказ <img src='/img/arrow.svg' alt='Arrow'></img></button>

                </div>

            </div>
        </div>
        

    );

}

export default Drawer;