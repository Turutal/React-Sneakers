function Header() {
    return (
        <header className="d-flex justify-between align-center p-40">
				<div className="d-flex align-center">
					<img width={40} height={40} src="/img/logo.png" alt="Логотип"  />
					<div>
					  <h3 className="text-uppercase">React sneakers</h3>
						<p>Магазин лучших кроссовок</p>
					</div>
				</div>
				<ul className="d-flex align-center">
					<li className="cart">
					<img width={18} height={18} src="/img/cart.svg"alt="Логотип"  />
						<span className="cart_price">1205 руб.</span>
					</li>
					<li>
					<img width={20} height={20} src="/img/fav.svg"alt="Избранное"  />
					</li>
					<li>
					<img width={20} height={20} src="/img/user.svg"alt="Пользователь"  />
					</li>
				</ul>
			</header>
    );
}

export default Header;