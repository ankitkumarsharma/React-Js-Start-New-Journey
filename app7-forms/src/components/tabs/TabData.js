import FormCrud from "../form-crud/FormCrud";
import FormCrud2 from "../form-crud2/FormCrud2"; 

const TabData = ({item}) => {
    switch (item.id) {
        case 1:
            return <FormCrud />
            break;
        case 2:
            return <FormCrud2 />
            break;
        default:
            return 'No Data'
    }
}

export default TabData;