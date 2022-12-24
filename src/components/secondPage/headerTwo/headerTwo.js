
import Menu from '../../readyBlocks/menu/menu.js';

// IMG
import bgTwo from '../../img//secondPage/headerBg.jpg';
import topCoffee from '../../img/topCoffee.png'

// SCSS 
import './headerTwo.scss';
import '../../firstPage/header/header.scss'; 

const HeaderTwo = (props) => {
    

    return (
        <header className='headerTwo'>
            {Menu(props, topCoffee, {positImg: 'relative', zIndImg: 25, topImg: '12px', leftImg: '149px'}, {leftBlock: '180px', justifyBlock: null}, null, null)}
            <div className="header__block">
                <div className="main__header_block">
                    <div className="main__header_header header__title_center">
                        <h1>Our Coffee</h1>
                    </div>
                </div>
            </div>
            <img src={bgTwo} className="header_image _ibg" alt="" />
        </header>
    )
}

export default HeaderTwo;