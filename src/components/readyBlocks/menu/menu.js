import React, { useTransition } from "react";
import { Fragment } from "react";

// SCSS
import './menu.scss';

const Menu = (props, url, distanceImg, distanceBlock, blackColor) => {
    const {positImg, zIndImg, topImg, leftImg} = distanceImg;
    const {leftBlock, justifyBlock} = distanceBlock;

    let linkClass = "menu__link";
    if (blackColor) {
        linkClass += ' menu__link_black';
    }

    return (
        <Fragment>
            <img src={url} className="menu__img" style={{position: positImg, zIndex: zIndImg, top: topImg, left: leftImg}} alt="" />
            <nav className='menu'>
                <ul className='menu__list' style={{marginLeft: leftBlock, justifyContent: justifyBlock}}>
                    <li><a href="" className={linkClass} onClick={(e) => props.newBlock(e)}>Coffee house</a></li>
                    <li><a href="" className={linkClass}>Our coffee</a></li>
                    <li><a href="" className={linkClass}>For your pleasure</a></li>
                </ul>
            </nav>
        </Fragment>
    )
}

export default Menu;