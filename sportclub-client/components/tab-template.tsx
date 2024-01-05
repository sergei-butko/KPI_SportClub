import React from 'react';
import {TabTemplateType} from "@/types/tabTemplateType";

function TabTemplate(props: { hash: string, tabs: TabTemplateType }) {
    return (
        <div
            className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 mb-2">
            <ul className="flex flex-wrap -mb-px">
                {props.tabs.map(tab => {
                    return (
                        <li className="mr-2" key={tab.hash}>
                            <a href={tab.hash}
                               className={`inline-block p-4 border-b-2 rounded-t-lg ${props.hash.includes(tab.shouldContain) ? 'active text-sky-600 border-sky-600' : 'border-transparent'}`}>{tab.name}</a>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default TabTemplate;