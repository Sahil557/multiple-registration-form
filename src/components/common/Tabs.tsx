import React, { useState } from "react";

interface Tab {
  id: string;
  label: string;
  component: React.FC;
}

interface TabsProps {
  tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="w-full">
      <div className="relative right-0">
        <ul
          className="relative flex flex-wrap p-1 list-none rounded-xl bg-blue-gray-50/60"
          data-tabs="tabs"
          role="list"
        >
          {tabs.map((tab) => (
            <li key={tab.id} className="z-30 flex-auto text-center">
              <a
                onClick={() => setActiveTab(tab.id)}
                className={`z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit ${
                  activeTab === tab.id ? "text-white bg-blue-600" : ""
                }`}
                data-tab-target={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                aria-controls={tab.id}
              >
                <span className="ml-1">{tab.label}</span>
              </a>
            </li>
          ))}
        </ul>
        <div data-tab-content="" className="p-5">
          {tabs.map((tab) => {
            const TabComponent = tab.component;
            return (
              <div
                key={tab.id}
                className={`transition-opacity duration-300 ${
                  activeTab === tab.id ? "opacity-100" : "opacity-0 hidden"
                }`}
                id={tab.id}
                role="tabpanel"
              >
                <TabComponent />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
