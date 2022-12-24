import React, { useTransition } from "react";
import { Fragment } from "react";

// SCSS
import './menu.scss';

const Menu = (props, url, distanceImg, distanceBlock, blackColor, marg) => {
    const {positImg, zIndImg, topImg, leftImg} = distanceImg;
    const {leftBlock, justifyBlock} = distanceBlock;

    let linkClass = "menu__link";
    if (blackColor) {
        linkClass += ' menu__link_black';
    }

    const menuLink = [
        {clas: linkClass, text: 'Coffee house', atrib: 'first-page'},
        {clas: linkClass, text: 'Our coffee', atrib: 'second-page'},
        {clas: linkClass, text: 'For your pleasure', atrib: 'third-page'},
    ]

    const createLink = menuLink.map(({clas, text, atrib}) => {

        return (
            <li>
                <a onClick={(e) => props.newBlock(e)} href="" key={atrib} className={clas}>{text}</a>
            </li>
        )
    })

    return (
        <Fragment>
            <img src={url} className="menu__img" style={{position: positImg, zIndex: zIndImg, top: topImg, left: leftImg}} alt="" />
            <nav className='menu' style={{marginBottom: marg}}>
                <ul className='menu__list' style={{marginLeft: leftBlock, justifyContent: justifyBlock}}>
                    {createLink}
                    {/* <li><a href="" className={linkClass}>Coffee house</a></li> */}
                    {/* <li><a href="" className={linkClass} onClick={(e) => props.newBlock(e)}>Our coffee</a></li> */}
                    {/* <li><a href="" className={linkClass}>For your pleasure</a></li> */}
                </ul>
            </nav>
        </Fragment>
    )
}

export default Menu;