const SearchBar = ({setSearchItem}) => {
    return ( 
        <div className='search'>
           <i className="fas fa-search"></i>                     
        <input type="text" placeholder='Search item...' className='search-input'
            onChange={e => { setSearchItem(e.target.value) }} />
        

</div>
     );
}
 
export default SearchBar;