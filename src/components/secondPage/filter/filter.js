import { useState, useEffect, useMemo } from 'react';
import Cards from '../../readyBlocks/cards/cards.js';

// IMG
import allCoff from '../../img/allCoff.png'; 

// SCSS
import './filter.scss';
import '../../firstPage/ourBest/ourBest.scss';

const Filter = (props) => {

    const [cards, setCards] = useState([]);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        setCards(cardsArray);
    }, []);

    useEffect(() => {
        searchCards();
    }, [inputValue]);

    const cardsArray = [
        {src: allCoff, text: 'AROMISTICO Coffee 1 kg', country: "Brazil", price: '6.99$', key: 1},
        {src: allCoff, text: 'BROMISTICO Coffee 1 kg', country: "Kenya", price: '6.99$', key: 2},
        {src: allCoff, text: 'DROMISTICO Coffee 1 kg', country: "Columbia", price: '6.99$', key: 3},
        {src: allCoff, text: 'AROMISTICO Coffee 1 kg', country: "Brazil", price: '6.99$', key: 4},
        {src: allCoff, text: 'GROMISTICO Coffee 1 kg', country: "Brazil", price: '6.99$', key: 5},
        {src: allCoff, text: 'GROMISTICO Coffee 1 kg', country: "Brazil", price: '6.99$', key: 6},
    ];

    const onValueChange = (e) => {
        setInputValue(e.target.value);
    };

    const searchCards = () => {
        setCards(cardsArray.filter(card => card.text.toLowerCase().indexOf(inputValue) > -1));
    }

    // filter cards by the country
    const filterCards = (arr, country) => {
        setCards(arr.filter(card => card.country == country ? card : null));
    };

    const cardsAll = (arr) => {
        setCards(arr);
    };

    // create buttons for the page
    const createBtns = cards.map(({src, text, country, price, key}) => {
        return (
            Cards(props, {src, text, country, price, key})
        )
    });

    return (
        <div className="main__filter filter">
            <div className="filter__block">
                <form action="" className="filter__form">
                    <label htmlFor="name" className="filter__label_input">Looking for</label>
                    <input type="text" className="filter__input"  placeholder="start typing here..." 
                            name="name"
                            onChange={onValueChange}/>
                    <label htmlFor="" className="filter__label_input label_2">Or filter</label>
                    <button
                        type="button"
                        className="filter__buttons"
                        onClick={() => cardsAll(cardsArray)}>
                        All
                    </button>
                    <button
                        type="button"
                        className="filter__buttons"
                        onClick={() => filterCards(cardsArray, 'Brazil')}>
                        Brazil
                    </button>
                    <button
                        type="button"
                        className="filter__buttons"
                        onClick={() => filterCards(cardsArray, 'Kenya')}>
                        Kenya
                    </button>
                    <button
                        type="button"
                        className="filter__buttons"
                        onClick={() => filterCards(cardsArray, 'Columbia')}>
                        Columbia
                    </button>
                </form>
                <div className="filter__wrapper" style={{'justifyContent': createBtns.length < 3 ? 'start' : 'space-between', 'gap': createBtns.length < 3 ? '70px' : '0px'}}>
                    {createBtns}
                </div>
            </div>
        </div>
    )
}

export default Filter;