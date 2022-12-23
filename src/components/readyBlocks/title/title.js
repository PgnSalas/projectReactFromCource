
// SCSS 
import './title.scss';

const Title = (text, indent) => {


    return (
        <div className="title" style={{marginBottom: indent}}>
            <h2>{text}</h2>
        </div>
    )
}

export default Title; 