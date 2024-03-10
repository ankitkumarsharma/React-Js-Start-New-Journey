import FormCrud from "../form-crud/FormCrud";
import FormExp1 from "../form-exp-1/FormExp1";

const TabData = ({item}) => {
    switch (item.id) {
        case 1:
            return <FormExp1 />
            break;
        case 2:
            return <FormCrud />
            break;
        default:
            return 'No Data'
    }
}

export default TabData;