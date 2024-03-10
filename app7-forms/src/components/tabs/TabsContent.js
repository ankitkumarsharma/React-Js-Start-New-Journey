import Button from "../../shared-components/Button";
import TabData from "./TabData";
const TabsContent = ({ onClick, tabs }) => {
    const item = tabs.map((item, index) => (
        <li key={index} className="nav-item">
            <Button onClick={() => onClick(index)} className={`nav-link ${item.show ? 'active' : ''}`} type="button">{item.label}</Button>
        </li>
    ));
    const tabContent = tabs.map((item, index) => {
        return <div key={item.id} className={`tab-pane fade show ${item.show ? 'active' : ''}`}>
            <TabData item={item} />
        </div>
    }
    );

    return (
        <>
            <ul className="nav nav-tabs">
                {item}
            </ul>
            <div className="tab-content" id="myTabContent">
                {tabContent}
            </div>
        </>
    );
}

export default TabsContent;