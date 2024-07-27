import React, { useState } from "react";
import PersonalDetails from "./components/MultipleForms/PersonalDetails";
import Documents from "./components/MultipleForms/Documents";
import EmploymentDetails from "./components/MultipleForms/EmployementDetails";
import References from "./components/MultipleForms/References";
import Nominee from "./components/MultipleForms/Nominee";
import BankDetails from "./components/MultipleForms/BankDetails";

const tabs = [
  { id: "PersonalDetails", label: "Personal Details", component: PersonalDetails },
  { id: "Documents", label: "Documents", component: Documents },
  { id: "EmploymentDetails", label: "Employment Details", component: EmploymentDetails },
  { id: "References", label: "References", component: References },
  { id: "Nominee", label: "Nominee", component: Nominee },
  { id: "BankDetails", label: "Bank Details", component: BankDetails },
];

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [isDocumentsEnabled, setIsDocumentsEnabled] = useState(false);
  const [isEmploymentDetailsEnabled, setIsEmploymentDetailsEnabled] = useState(false);
  const [isReferencesEnabled, setIsReferencesEnabled] = useState(false);
  const [isNomineeEnabled, setIsNomineeEnabled] = useState(false);
  const [isBankDetailsEnabled, setIsBankDetailsEnabled] = useState(false);

  const handleNext = (currentTab: string) => {
    if (currentTab === "PersonalDetails") {
      setIsDocumentsEnabled(true);
      setActiveTab("Documents");
    } else if (currentTab === "Documents") {
      setIsEmploymentDetailsEnabled(true);
      setActiveTab("EmploymentDetails");
    } else if (currentTab === "EmploymentDetails") {
      setIsReferencesEnabled(true);
      setActiveTab("References");
    } else if (currentTab === "References") {
      setIsNomineeEnabled(true);
      setActiveTab("Nominee");
    } else if (currentTab === "Nominee") {
      setIsBankDetailsEnabled(true);
      setActiveTab("BankDetails");
    }
  };

  const handlePrevious = (currentTab: string) => {
    if (currentTab === "Documents") {
      setActiveTab("PersonalDetails");
    } else if (currentTab === "EmploymentDetails") {
      setActiveTab("Documents");
    } else if (currentTab === "References") {
      setActiveTab("EmploymentDetails");
    } else if (currentTab === "Nominee") {
      setActiveTab("References");
    } else if (currentTab === "BankDetails") {
      setActiveTab("Nominee");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>LMP</h1>
      </header>
      <nav className="bg-gray-800 text-white p-4">
        <ul className="flex space-x-4">
          <li>Dashboard</li>
          <li>Customer Profiles</li>
        </ul>
      </nav>
      <main className="p-4">
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
                    onClick={() => {
                      if (
                        tab.id === "PersonalDetails" ||
                        (tab.id === "Documents" && isDocumentsEnabled) ||
                        (tab.id === "EmploymentDetails" && isEmploymentDetailsEnabled) ||
                        (tab.id === "References" && isReferencesEnabled) ||
                        (tab.id === "Nominee" && isNomineeEnabled) ||
                        (tab.id === "BankDetails" && isBankDetailsEnabled)
                      ) {
                        setActiveTab(tab.id);
                      }
                    }}
                    className={`z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit ${
                      activeTab === tab.id ? "text-white bg-blue-600" : ""
                    } ${
                      (tab.id === "Documents" && !isDocumentsEnabled) ||
                      (tab.id === "EmploymentDetails" && !isEmploymentDetailsEnabled) ||
                      (tab.id === "References" && !isReferencesEnabled) ||
                      (tab.id === "Nominee" && !isNomineeEnabled) ||
                      (tab.id === "BankDetails" && !isBankDetailsEnabled)
                        ? "cursor-not-allowed"
                        : ""
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
                    <TabComponent
                      onNext={() => handleNext(tab.id)}
                      onPrevious={() => handlePrevious(tab.id)}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
