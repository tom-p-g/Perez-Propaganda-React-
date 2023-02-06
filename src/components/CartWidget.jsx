const CartWidget = () => {
    const cartCounter = 5
  return (
    <div className="btnCartWidget">
        <i class="fa fa-shopping-cart"></i>
        <div id="cartCounter">
            <p>{cartCounter}</p>
        </div>


    </div>
  )
}

export default CartWidget