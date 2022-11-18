const Search = ({newSearch, handleChange}) => {
    return ( 
        <>
        <div>
        filter shown with <input value={newSearch} onChange={handleChange} />
        </div>
        </>
     );
}
 
export default Search;