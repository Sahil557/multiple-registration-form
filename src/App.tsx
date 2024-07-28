import React, { useState } from "react";
import {
  PersonalDetails,
  Documents,
  EmploymentDetails,
  References,
  Nominee,
  BankDetails,
} from "./components/MultipleForms/index";
import registerCustomer from "./Services/registerCustomer";

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

  const [tabCompletion, setTabCompletion] = useState<
    Record<TabId, { completed: boolean; disabled: boolean }>
  >({
    PersonalDetails: { completed: false, disabled: false },
    Documents: { completed: false, disabled: true },
    EmploymentDetails: { completed: false, disabled: true },
    References: { completed: false, disabled: true },
    Nominee: { completed: false, disabled: true },
    BankDetails: { completed: false, disabled: true },
  });

  const handleNext = (currentTab: TabId, newData: any) => {
    let nextTab: TabId | null = null;

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
      [currentTab]: { completed: true, disabled: true },
      [nextTab as TabId]: { ...prev[nextTab as TabId], disabled: false },
    }));

    if (nextTab) {
      setActiveTab(nextTab);
    }
  };

  const handlePrevious = (currentTab: TabId) => {
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
      const response = await registerCustomer(formData);
      console.log("Success:", response);
      alert("Form submitted successfully!");
    } catch (error) {
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
                        !tabCompletion[tab.id as TabId].disabled &&
                        (tab.id === "PersonalDetails" ||
                          (tab.id === "Documents" &&
                            tabCompletion.PersonalDetails.completed) ||
                          (tab.id === "EmploymentDetails" &&
                            tabCompletion.Documents.completed) ||
                          (tab.id === "References" &&
                            tabCompletion.EmploymentDetails.completed) ||
                          (tab.id === "Nominee" &&
                            tabCompletion.References.completed) ||
                          (tab.id === "BankDetails" &&
                            tabCompletion.Nominee.completed))
                      ) {
                        setActiveTab(tab.id);
                      }
                    }}
                    className={`z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg text-slate-700 ${
                      activeTab === tab.id && "text-white bg-blue-600 cursor-pointer"
                    } ${
                      tabCompletion[tab.id as TabId].disabled
                        && "cursor-not-allowed opacity-50"
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
                onNext={(data: any) => handleNext(tab.id as TabId, data)}
                onPrevious={() => handlePrevious(tab.id as TabId)}
              />
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default App;
