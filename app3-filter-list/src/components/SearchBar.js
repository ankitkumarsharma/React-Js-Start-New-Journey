const SearchBar = (
    // step 9
    { filterText, inStockOnly,
        // step 13
        onFilterTextChange,
        onInStockOnlyChange
    }
) => {
    return (
        <div>
            {/* // step 4 */}
            <form>
                <input
                    // step 9
                    value={filterText}
                    type="text" placeholder="Search..."
                    // step 13
                    onChange={(e) => onFilterTextChange(e.target.value)}
                />
                <label>
                    <input
                        // step 9
                        checked={inStockOnly}
                        // step 13
                        onChange={(e) => onInStockOnlyChange(e.target.checked)}
                        type="checkbox" />
                    {' '}
                    Only show products in stock
                </label>
            </form>
        </div>
    );
}

export default SearchBar;