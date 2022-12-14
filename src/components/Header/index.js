import styles from './Header.module.scss'

function Header(props){
    
    return(
        <header className='d-flex justify-between align-center p-50'>
        <div className='d-flex align-center'>
        <img width={40} height={40} src='/img/logo.png'/>
        <div>
            <h3 className='text-uppercase'>React Sneakers</h3>
            <p className='opacity-5'>Магазин лучших кроссовок</p>
        </div>
        </div>

        <ul  className='d-flex'>
            <li onClick={props.onClickCart} className='mr-30 cu-p'>
                <img width={18} height={18} src='/img/cart.svg' alt='Icon'/>

                <span>1205 руб.</span>
            </li>
        <li>
            <img width={18} height={18} src='/img/profile.svg' alt='Icon'/>
        </li>
        </ul>
        </header>
    );
}

export default Header;

