 import './ProductCard.css'

 function ProductCard(props) {
    return(
        <div className='product-card-container'>
            <div className='img-container'>
              <img src={props.img} alt="" />
            </div>
            <div className='price-name-container'>
                <p className='product-name'>{props.title}</p>
                <p className='product-price'>${props.price}</p>
            </div>
            <span><i className="fa-solid fa-cart-plus"></i></span>
        </div>
    )
 }

 export { ProductCard }