import { Fragment } from 'react';

import FooterBlock from '../../readyBlocks/footerBlock/footerBlock.js';
// SCSS 
import './footer.scss';

const Footer = (props) => {

    return (
        <Fragment>
            {FooterBlock(props)}
        </Fragment>
    )
}

export default Footer;