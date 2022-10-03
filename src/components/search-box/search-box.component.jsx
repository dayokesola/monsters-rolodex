import './search-box.styles.css'

const SearchBox = (props) => {
    const { className, placeHolder, onChangeHandler } = props;
    return (<input type='search'
        className={`search-box ${className}`}
        placeholder={placeHolder}
        onChange={onChangeHandler} />

    )
}

export default SearchBox;