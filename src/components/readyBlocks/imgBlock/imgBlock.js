
import './imgBlock.scss';

const ImgBlock = (props, url) => {

    return (
        <div className="img">
            <img src={url} alt="" />
        </div>
    )
    
}

export default ImgBlock;