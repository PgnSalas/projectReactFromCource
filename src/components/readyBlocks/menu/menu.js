import React, { useTransition } from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";

// SCSS
import './menu.scss';

const Menu = (props, url, distanceImg, distanceBlock, blackColor, marg) => {
    const {positImg, zIndImg, topImg, leftImg} = distanceImg;
    const {leftBlock, justifyBlock} = distanceBlock;
    const {newBlock, nextPage} = props;

    let linkClass = "menu__link";
    if (blackColor) {
        linkClass += ' menu__link_black';
    }

    const menuLink = [
        {clas: linkClass, text: 'Coffee house', atrib: 'first-page'},
        {clas: linkClass, text: 'Our coffee', atrib: 'second-page'},
        {clas: linkClass, text: 'For your pleasure', atrib: 'third-page'},
    ]

    const createLink = menuLink.map((item, index) => {
        if (index === 0) {
            return (
                <li key={item.atrib}>
                    <Link  to="/" className={item.clas}>{item.text}</Link>
                </li>   
            )
        } else if (index === 1) {
            return (
                <li key={item.atrib}>
                    <Link  to="/twoPage" className={item.clas}>{item.text}</Link>
                </li>   
            )
        } else if (index === 2) {
                return (
                    <li key={item.atrib}>
                        <a className={item.clas}>{item.text}</a>
                    </li> 
                )
        }
    })

    return (
        <Fragment>
            <img src={url} className="menu__img" style={{position: positImg, zIndex: zIndImg, top: topImg, left: leftImg}} alt="" />
            <nav className='menu' style={{marginBottom: marg}}>
                <ul className='menu__list' style={{marginLeft: leftBlock, justifyContent: justifyBlock}}>
                    {createLink}
                </ul>
            </nav>
        </Fragment>
    )
}

export default Menu;