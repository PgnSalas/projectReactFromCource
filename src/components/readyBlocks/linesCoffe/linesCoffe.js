
// SCSS
import './linesCoffe.scss';

const LinesCoffe = (url, blackClass) => {

    let lineClass = 'between__line';
    if (blackClass) {
        lineClass += ' blackClass';
    }

    return (
        <div className="between">
            <span className={lineClass}></span>
            <img src={url} className="between__img" alt="" />
            <span className={lineClass}></span>
        </div>
    )
}

export default LinesCoffe;