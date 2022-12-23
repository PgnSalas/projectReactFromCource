
// SCSS
import './filter.scss';

const Filter = (props) => {

    const btnsFilter = [
        {name: 'Brazil', label: 'Brazil'},
        {name: 'Kenya', label: 'Kenya'},
        {name: 'Columbia', label: 'Columbia'},
    ];


    const createButtons = btnsFilter.map(({name, label}) => {
        return (
            <button 
            type="button"
            className=""
            key={name}>
            {label}
            </button>
        )
    })

    return (
        <div className="main__filter filter">
            <div className="filter__block">
                <form action="" className="filter__form">
                    <label htmlFor="name" className="filter__label_input">Lookiing for</label>
                    <input type="text" className="filter__input"  placeholder="start typing here..." name="name"/>

                    <label htmlFor="">Or filter</label>
                    {createButtons}
                </form>
            </div>
        </div>
    )
}

export default Filter;