
import OurBeans from '../ourBeans/ourBeans';
import Filter from '../filter/filter';

// SCSS
import './mainSecond.scss';

const MainSecond = () => {
    return (
        <main className="mainSecond">
            <OurBeans></OurBeans>
            <Filter></Filter>
        </main>
    )
}

export default MainSecond;