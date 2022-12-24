
import './cards.scss';

const Cards = (props, obj) => {
    const {src, text, country, price} = obj;
    return (
        <div className="item__body item">
            <div className="item__image">
                <img src={src} alt="" />
            </div>
            <div className="item__text">
                {text}
            </div>
            <div className='item__country'>
                {country}
            </div>
            <div className="item__price">
                {price}
            </div>
        </div>
    )
}

export default Cards;

