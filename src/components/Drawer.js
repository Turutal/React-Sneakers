function Drawer() {
    return(
        <div style={{display: 'none'}} className="overlay">
            <div className="drawer">
                <h2 className="d-flex justify-between">
                Корзина<img className="remove-btn" src="/img/btn_remove.svg" alt="Remove" />
                </h2>
                <div className="items">
                    <div className="cart-item d-flex align-center">
                        <img className="mr-20" width={70} height={70} src="/img/sneakers/2.jpg" alt="Sneakers" />
                        <div>
                            <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 руб.</b>
                        </div>
                        <img className="remove-btn" src="/img/btn_remove.svg" alt="Remove" />
                    </div>

                    <div className="cart-item d-flex align-center">
                        <img className="mr-20" width={70} height={70} src="/img/sneakers/4.jpg" alt="Sneakers" />
                        <div>
                            <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                            <b>8 499 руб.</b>
                        </div>
                        <img className="remove-btn" src="/img/btn_remove.svg" alt="Remove" />
                    </div>
                </div>

                <ul className={"cart-total-block"}>
                    <li className="d-flex">
                        <span>Итого:</span>
                        <div></div>
                        <b>24 489 руб.</b>
                    </li>
                    <li className="d-flex">
                        <span>Налог 5%:</span>
                        <div></div>
                        <b>1074 руб.</b>
                    </li>
                </ul>
                <button className="green-button">Оформить заказ <img src="/img/arrow.svg" alt="Arrow"/></button>
            </div>
        </div>
    );
}

export default Drawer;