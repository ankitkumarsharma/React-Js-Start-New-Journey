import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
import { useState } from 'react';

const FilterableTable = ({ products }) => {
    // step 8
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);

    return (
        <div>
            {/* // step 3 */}
            <SearchBar
                // step 8
                filterText={filterText}
                inStockOnly={inStockOnly}
                // step 12
                onFilterTextChange={setFilterText}
                onInStockOnlyChange={setInStockOnly}
            />
            <ProductTable
                // step 8
                filterText={filterText}
                inStockOnly={inStockOnly}
                products={products} />
        </div>
    );
}

export default FilterableTable;