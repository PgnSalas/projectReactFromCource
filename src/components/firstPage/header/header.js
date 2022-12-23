import { Component } from "react";

import LinesCoffe from "../../readyBlocks/linesCoffe/linesCoffe.js";
import Menu from "../../readyBlocks/menu/menu.js";
// IMG
// import coffee from './img/coffee.png';
import back from '../../img/background.jpg';
import topCoffee from '../../img/topCoffee.png';
import betCoffe from '../../img/betCoffee.png';

// scss
import './header.scss';


const Header = (props) => {

    return (
        <header className='header'>
            {Menu(props, topCoffee, {positImg: 'relative', zIndImg: 25, topImg: '12px', leftImg: '149px'}, {leftBlock: '180px', justifyBlock: null})}
            <div className="header__main main__header">
                <div className="main__header_block">
                    <div className="main__header_header">
                        <h1>Everything You Love About Coffee</h1>
                    </div>
                    {LinesCoffe(betCoffe)}
                    <div className="main__header_text">
                        <p>We makes every day full of energy and taste</p>
                        <p>Want to try our beans?</p>
                    </div>
                    <div className="main__header_btn">
                        <a href="">More</a>
                    </div>
                </div>
            </div>
            <div className="header_image _ibg">
                <img src={back} alt=""/>
            </div>
        </header>   
    )
}


export default Header;