import Button from "../shared-components/Button";
import { tabsData } from "../utils/tabsJson";
import {useState} from 'react';

const Tabs = () => {
    const [tab, setTab] = useState(tabsData)
    const changeTabs = (index)=>{
        tab.forEach(ele => {
            ele.show = false;
        });
        tab[index].show = true;
        setTab(tab);
    }
    const item = tab.map((item,index) => (
        <li key={index} className="nav-item">
            <Button onClick={()=> changeTabs(index)} className={`nav-link ${item.show ? 'active':''}`} type="button">{item.label}</Button>
        </li>
    ));
    const tabContent = tab.map((item,index) => (
        <div key={item.id} className={`tab-pane fade show ${item.show ? 'active':''}`}>
            Hello {item.id}
        </div>
    ));
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

export default Tabs;