import { Fragment } from "react";

import FooterBlock from '../../readyBlocks/footerBlock/footerBlock.js';

// SCSS
import './footerTwo.scss';

const FooterTwo = (props) => {
    
    return (
        <Fragment>
            {FooterBlock(props)}
        </Fragment>
    )
}

export default FooterTwo;