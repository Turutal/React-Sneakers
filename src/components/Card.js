function Card() {
    return (
    <div className="card">
        <div className="favorite">
            <img src="/img/liked.svg" alt="В избранное" />
        </div>
        <img width={133} heigth={112} src="/img/sneakers/1.jpg" alt="Blazer" />
        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
        <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
                <span>Цена</span>
                <b>12 999 руб.</b>
            </div>
            <img  width={32} heigth={32} src="/img/btn_add.svg" alt="Add" />
        </div>
    </div>
    );
}

export default Card;