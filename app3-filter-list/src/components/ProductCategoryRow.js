// step 7
const ProductCategoryRow = ({ category }) => {
    return (
        <tr>
            <th colSpan="2">
                {category}
            </th>
        </tr>
    );
}

export default ProductCategoryRow;