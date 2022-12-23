
import LinesCoffe from '../../readyBlocks/linesCoffe/linesCoffe.js';
import Menu from '../../readyBlocks/menu/menu.js';
// SCSS 
import './footer.scss';

// IMG
import blackCoffe from '../../img/footerBlackCoffee.png';
import betCoffe from '../../img/betBlackCoffee.png';

const Footer = (props) => {

    return (
        <div className="footer">
            {Menu(props, blackCoffe, {positImg: 'relative', zIndImg: 25, topImg: '15px', leftImg: '39.9%'}, {leftBlock: null, justifyBlock: 'center'}, true)}
            <div className="footer__block">
                {/* <div className="footer__list">
                    <ul className="footer__list_main">
                        <li><a href="" className="footer__link">Coffee house</a></li>
                        <li><a href="" className="footer__link">Our coffee</a></li>
                        <li><a href="" className="footer__link">For your pleasure</a></li>
                    </ul>
                </div> */}
                {LinesCoffe(betCoffe, true)}
            </div>
        </div>
    )
}

export default Footer;