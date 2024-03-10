import { useState } from 'react';
import { tabsData } from "../../utils/tabsJson";
import TabsContent from "./TabsContent";

const Tabs = () => {
    const [tabs, setTabs] = useState(tabsData)
    const changeTabs = (index)=>{
        tabs.forEach(ele => {
            ele.show = false;
        });
        tabs[index].show = true;
        setTabs([...tabs]);
    }
    return <TabsContent onClick={changeTabs} tabs={tabs}/>
}

export default Tabs;