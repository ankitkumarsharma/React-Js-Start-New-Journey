import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

const ProductTable = ({ products,
    // step 10
    filterText, inStockOnly
}) => {
    // step 5
    const rows = [];
    let lastCategory = null;
    products.forEach(product => {
        // step 11
        if (product.name.toLowerCase().indexOf(
            filterText.toLowerCase()
        ) === -1
        ) {
            return;
        }
        if (inStockOnly && !product.stocked) {
            return;
        }

        // step 5
        if (product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow
                    category={product.category}
                    key={product.category}
                />
            );
        }
        rows.push(
            <ProductRow
                product={product}
                key={product.name}
            />
        );
        lastCategory = product.category;
    });
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        </div>
    );
}

export default ProductTable;