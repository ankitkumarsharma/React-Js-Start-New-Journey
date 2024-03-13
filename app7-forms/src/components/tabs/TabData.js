import FormCrud from "../form-crud/FormCrud";
import FormCrud2 from "../form-crud2/FormCrud2"; 
import FormCrud3Validation from "../form-crud3-validation/FormCrud3Validation";

const TabData = ({item}) => {
    switch (item.id) {
        case 1:
            return <FormCrud />
            break;
        case 2:
            return <FormCrud2 />
            break;
            case 3:
            return <FormCrud3Validation />
            break;
        default:
            return 'No Data'
    }
}

export default TabData;