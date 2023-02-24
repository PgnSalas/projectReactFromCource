import Menu from '../menu/menu';
import LinesCoffe from '../linesCoffe/linesCoffe';

import blackCoffe from '../../img/footerBlackCoffee.png';
import betCoffe from '../../img/betBlackCoffee.png';

// SCSS
import './footerBlock.scss';

const FooterBlock = (props) => {
    return (
        <footer className='footer'>
            {Menu(props, blackCoffe, {positImg: 'relative', zIndImg: 25, topImg: '15px', leftImg: '37.5%'}, {leftBlock: null, justifyBlock: 'center'}, true, 30)}
            {LinesCoffe(betCoffe, true)}
        </footer>
    )
}

export default FooterBlock;