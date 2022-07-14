import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
function App() {
	return (
		<div className="wrapper clear">
			<Drawer/>
			<Header/>
			
			<div className="content p-40">
				<div className="d-flex align-center justify-between mb-40">
					<h1>Все кроссовки</h1>
					<div className="search-block d-flex align-center">
						<img src="/img/search.svg" alt="Поиск" />
						<input type="text" placeholder="Поиск..." />
					</div>
				</div>

				<div className="d-flex flex-wrap justify-between">
					<Card />
					<div className="card">
						<div className="favorite">
							<img src="/img/unliked.png" alt="Из избранного" />
						</div>	
						<img width={133} heigth={112} src="/img/sneakers/2.jpg" alt="Blazer" />
						<h5>Мужские Кроссовки Nike Air Max 270</h5>
						<div className="d-flex justify-between align-center">
							<div className="d-flex flex-column">
								<span>Цена</span>
								<b>12 999 руб.</b>
							</div>
							<img className="btn_add"  width={32} heigth={32} src="/img/btn_add.svg" alt="Add" />
						</div>
					</div>
					<div className="card">
						<img width={133} heigth={112} src="/img/sneakers/3.jpg" alt="Blazer" />
						<h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
						<div className="d-flex justify-between align-center">
							<div className="d-flex flex-column">
								<span>Цена</span>
								<b>8 499 руб.</b>
							</div>
							<img  width={32} heigth={32} src="/img/btn_add.svg" alt="Add" />
						</div>
					</div>
					<div className="card">
						<img width={133} heigth={112} src="/img/sneakers/4.jpg" alt="Blazer" />
						<h5>Кроссовки Puma X Aka Boku Future Rider</h5>
						<div className="d-flex justify-between align-center">
							<div className="d-flex flex-column">
								<span>Цена</span>
								<b>8 999 руб.</b>
							</div>
							<img  width={32} heigth={32} src="/img/btn_add.svg" alt="Add" />
						</div>
					</div>
					<div className="card">
						<img width={133} heigth={112} src="/img/sneakers/5.jpg" alt="Blazer" />
						<h5>Мужские Кроссовки Under Armour Curry 8</h5>
						<div className="d-flex justify-between align-center">
							<div className="d-flex flex-column">
								<span>Цена</span>
								<b>15 199 руб.</b>
							</div>
							<img  width={32} heigth={32} src="/img/btn_add.svg" alt="Add" />
						</div>
					</div>
					<div className="card">
						<img width={133} heigth={112} src="/img/sneakers/6.jpg" alt="Blazer" />
						<h5>Мужские Кроссовки Nike Kyrie 7</h5>
						<div className="d-flex justify-between align-center">
							<div className="d-flex flex-column">
								<span>Цена</span>
								<b>11 299 руб.</b>
							</div>
							<img  width={32} heigth={32} src="/img/btn_add.svg" alt="Add" />
						</div>
					</div>
					<div className="card">
						<img width={133} heigth={112} src="/img/sneakers/7.jpg" alt="Blazer" />
						<h5>Мужские Кроссовки Jordan Air Jordan 11</h5>
						<div className="d-flex justify-between align-center">
							<div className="d-flex flex-column">
								<span>Цена</span>
								<b>10 799 руб.</b>
							</div>
							<img  width={32} heigth={32} src="/img/btn_add.svg" alt="Add" />
						</div>
					</div>
					<div className="card">
						<img width={133} heigth={112} src="/img/sneakers/8.jpg" alt="Blazer" />
						<h5>Мужские Кроссовки Nike LeBron XVIII</h5>
						<div className="d-flex justify-between align-center">
							<div className="d-flex flex-column">
								<span>Цена</span>
								<b>16 499 руб.</b>
							</div>
							<img  width={32} heigth={32} src="/img/btn_add.svg" alt="Add" />
						</div>
					</div>
					<div className="card">
						<img width={133} heigth={112} src="/img/sneakers/9.jpg" alt="Blazer" />
						<h5>Мужские Кроссовки Nike Lebron XVIII Low</h5>
						<div className="d-flex justify-between align-center">
							<div className="d-flex flex-column">
								<span>Цена</span>
								<b>13 199 руб.</b>
							</div>
							<img  width={32} heigth={32} src="/img/btn_add.svg" alt="Add" />
						</div>
					</div>
					<div className="card">
						<img width={133} heigth={112} src="/img/sneakers/1.jpg" alt="Blazer" />
						<h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
						<div className="d-flex justify-between align-center">
							<div className="d-flex flex-column">
								<span>Цена</span>
								<b>8 499 руб.</b>
							</div>
							<img  width={32} heigth={32} src="/img/btn_add.svg" alt="Add" />
						</div>
					</div>
					<div className="card">
						<img width={133} heigth={112} src="/img/sneakers/4.jpg" alt="Blazer" />
						<h5>Кроссовки Puma X Aka Boku Future Rider</h5>
						<div className="d-flex justify-between align-center">
							<div className="d-flex flex-column">
								<span>Цена</span>
								<b>8 999 руб.</b>
							</div>
							<img  width={32} heigth={32} src="/img/btn_add.svg" alt="Add" />
						</div>
					</div>
					<div className="card">
						<img width={133} heigth={112} src="/img/sneakers/10.jpg" alt="Blazer" />
						<h5>Мужские Кроссовки Nike Kyrie Flytrap IV</h5>
						<div className="d-flex justify-between align-center">
							<div className="d-flex flex-column">
								<span>Цена</span>
								<b>11 299 руб.</b>
							</div>
							<img  width={32} heigth={32} src="/img/btn_add.svg" alt="Add" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
