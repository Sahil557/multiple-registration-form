import React, { useState } from "react";
import PersonalDetails from "./components/MultipleForms/PersonalDetails";
import Documents from "./components/MultipleForms/Documents";
import EmploymentDetails from "./components/MultipleForms/EmployementDetails";
import References from "./components/MultipleForms/References";
import Nominee from "./components/MultipleForms/Nominee";
import BankDetails from "./components/MultipleForms/BankDetails";
import axios from 'axios';

const tabs = [
  {
    id: "PersonalDetails",
    label: "Personal Details",
    component: PersonalDetails,
  },
  { id: "Documents", label: "Documents", component: Documents },
  {
    id: "EmploymentDetails",
    label: "Employment Details",
    component: EmploymentDetails,
  },
  { id: "References", label: "References", component: References },
  { id: "Nominee", label: "Nominee", component: Nominee },
  { id: "BankDetails", label: "Bank Details", component: BankDetails },
];

type TabId =
  | "PersonalDetails"
  | "Documents"
  | "EmploymentDetails"
  | "References"
  | "Nominee"
  | "BankDetails";

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [formData, setFormData] = useState({
    customerData: {},
    documentsData: {},
    employmentStatusData: {},
    witnessData: [],
    nomineeData: [],
    bankDetailsData: {},
  });

  const [tabCompletion, setTabCompletion] = useState<Record<TabId, boolean>>({
    PersonalDetails: false,
    Documents: false,
    EmploymentDetails: false,
    References: false,
    Nominee: false,
    BankDetails: false,
  });

  const handleNext = (currentTab: string, newData: any) => {
    let nextTab = "";

    if (currentTab === "PersonalDetails") {
      setFormData((prevState) => ({
        ...prevState,
        customerData: { ...prevState.customerData, ...newData },
      }));
      nextTab = "Documents";
    } else if (currentTab === "Documents") {
      setFormData((prevState) => ({
        ...prevState,
        documentsData: { ...prevState.documentsData, ...newData },
      }));
      nextTab = "EmploymentDetails";
    } else if (currentTab === "EmploymentDetails") {
      setFormData((prevState) => ({
        ...prevState,
        employmentStatusData: { ...prevState.employmentStatusData, ...newData },
      }));
      nextTab = "References";
    } else if (currentTab === "References") {
      setFormData((prevState) => ({
        ...prevState,
        witnessData: newData,
      }));
      nextTab = "Nominee";
    } else if (currentTab === "Nominee") {
      setFormData((prevState) => ({
        ...prevState,
        nomineeData: newData,
      }));
      nextTab = "BankDetails";
    } else if (currentTab === "BankDetails") {
      setFormData((prevState) => ({
        ...prevState,
        bankDetailsData: { ...prevState.bankDetailsData, ...newData },
      }));
      handleSubmit({ ...formData, bankDetailsData: newData });
      return;
    }

    setTabCompletion((prev) => ({
      ...prev,
      [currentTab]: true,
    }));

    if (nextTab) {
      setActiveTab(nextTab);
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

  const handleSubmit = async (formData: any) => {
    try {
      const response = await axios.post("https://loanmanagementsystem-nrfq.onrender.com/api/v1/customer/register", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      console.log("Success:", response.data);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("There was an error submitting the form. Please try again.");
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
                        (tab.id === "Documents" &&
                          tabCompletion.PersonalDetails) ||
                        (tab.id === "EmploymentDetails" &&
                          tabCompletion.Documents) ||
                        (tab.id === "References" &&
                          tabCompletion.EmploymentDetails) ||
                        (tab.id === "Nominee" && tabCompletion.References) ||
                        (tab.id === "BankDetails" && tabCompletion.Nominee)
                      ) {
                        setActiveTab(tab.id);
                      }
                    }}
                    className={`z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit ${
                      activeTab === tab.id ? "text-white bg-blue-600" : ""
                    } ${
                      !(
                        tab.id === "PersonalDetails" ||
                        tabCompletion[tab.id as TabId]
                      )
                        ? "cursor-not-allowed opacity-50"
                        : ""
                    }`}
                    data-tab-target=""
                    role="tab"
                    aria-selected="true"
                    aria-controls={tab.id}
                  >
                    {tab.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {tabs.map((tab) => {
          const Component = tab.component;
          return (
            <div
              key={tab.id}
              className={`tab-content ${activeTab === tab.id ? "" : "hidden"}`}
            >
              <Component
                onNext={(data: any) => handleNext(tab.id, data)}
                onPrevious={() => handlePrevious(tab.id)}
              />
            </div>
          );
        })}
      </main>
    </div>
  );
}

export default App;
