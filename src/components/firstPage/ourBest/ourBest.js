import React from 'react';

import Title from '../../readyBlocks/title/title';

// SCSS
import './ourBest.scss';

// IMG
import twoCoff from '../../img/twoPocets.png';
import presto from '../../img/betPresto.png';
import allCoff from '../../img/allCoff.png';
import usBack from '../../img/usBack.jpg';


const OurBest = (props) => {

    const items = [
        {src: twoCoff, text: 'Solimo Coffee Beans 2 kg', price: '10.73$'},
        {src: presto, text: 'Presto Coffee Beans 1 kg', price: '15.99$'},
        {src: allCoff, text: 'AROMISTICO Coffee 1 kg', price: '6.99$'},
    ]

    const createItem = items.map(({src, text, price}) => {
        return (
            <div className="ourBest__item">
                <div className="ourBest__item_img">
                    <img src={src} alt="" />
                </div>
                <div className="ourBest__item_text">
                    {text}
                </div>
                <div className="ourBest__item_price">
                    {price}
                </div>
            </div>
        )
    })

    return (
        <div className="main__ourBest ourBest">
            <div className="ourBest__background _ibg">
                <img src={usBack} alt="" />
            </div>
            <div className="ourBest__block">
                {Title('Our best')}
                <div className="ourBest__wrapper">
                    {createItem}
                </div>
            </div>
        </div>
    )
}

export default OurBest;