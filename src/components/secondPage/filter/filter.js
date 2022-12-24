import { Component } from 'react';
import Cards from '../../readyBlocks/cards/cards.js';

// IMG
import allCoff from '../../img/allCoff.png'; 

// SCSS
import './filter.scss';
import '../../firstPage/ourBest/ourBest.scss';

const Filter = (props) => {

    const btnsFilter = [
        {name: 'Brazil', label: 'Brazil'},
        {name: 'Kenya', label: 'Kenya'},
        {name: 'Columbia', label: 'Columbia'},
    ];

    const createButtons = btnsFilter.map(({name, label}) => {
        return (
            <button 
            type="button"
            className="filter__buttons"
            key={name}>
            {label}
            </button>
        )
    })

    const buttons = [
        {src: allCoff, text: 'AROMISTICO Coffee 1 kg', country: "Brazil", price: '6.99$', key: 1},
        {src: allCoff, text: 'AROMISTICO Coffee 1 kg', country: "Kenya", price: '6.99$', key: 2},
        {src: allCoff, text: 'AROMISTICO Coffee 1 kg', country: "Columbia", price: '6.99$', key: 3},
        {src: allCoff, text: 'AROMISTICO Coffee 1 kg', country: "Brazil", price: '6.99$', key: 4},
        {src: allCoff, text: 'AROMISTICO Coffee 1 kg', country: "Brazil", price: '6.99$', key: 5},
        {src: allCoff, text: 'AROMISTICO Coffee 1 kg', country: "Brazil", price: '6.99$', key: 6},
    ]

    const createBtns = buttons.map(({src, text, country, price, key}) => {
        return (
            Cards(props, {src, text, country, price, key})
        )
    })

    return (
        <div className="main__filter filter">
            <div className="filter__block">
                <form action="" className="filter__form">
                    <label htmlFor="name" className="filter__label_input">Lookiing for</label>
                    <input type="text" className="filter__input"  placeholder="start typing here..." name="name"/>

                    <label htmlFor="" className="filter__label_input label_2">Or filter</label>
                    {createButtons}
                </form>
                <div className="filter__wrapper">
                    {createBtns}
                </div>
            </div>
        </div>
    )
}

export default Filter;