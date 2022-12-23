
import LinesCoffe from '../../readyBlocks/linesCoffe/linesCoffe';
import Title from '../../readyBlocks/title/title';
import ImgBlock from '../../readyBlocks/imgBlock/imgBlock';

// IMG
import girl from '../../img/secondPage/secGirl.jpg';
import betCoffe from '../../img/betBlackCoffee.png';


// SCSS
import './ourBeans.scss';

const OurBeans = (props) => {

    return (
        <div className="main__ourBeans ourBeans">
            <div className="ourBeans__block">
                <div className="ourBeans__wrapper">
                    {ImgBlock(props, girl)}
                    <div className="ourBeans__content content__ourBeans">
                        {Title('About our beans', '20px')}
                        {LinesCoffe(betCoffe, true)}
                        <div className="ourBeans__text">
                            <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>
                            <p>Afraid at highly months do things on at. Situation recommend objection do intention so questions.</p>
                            <p>As greatly removed calling pleased improve an. Last ask him cold feel</p>
                            met spot shy want. Children me laughing we prospect answered followed. At it went
                            is song that held help face.
                        </div>
                    </div>
                </div>
            </div>
            <div className="ourBeans__line">
                
            </div>
        </div>
    )
}

export default OurBeans;