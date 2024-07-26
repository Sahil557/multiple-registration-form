import { Tabs } from './components/common';
import { PersonalDetails, Documents, EmployementDetails, References, Nominee, BankDetails } from './components/MultipleForms';

const tabs = [
  { id: "PersonalDetails", label: "Personal Details", component: PersonalDetails },
  { id: "Documents", label: "Documents", component: Documents },
  { id: "EmploymentDetails", label: "Employment Details", component: EmployementDetails },
  { id: "References", label: "References", component: References },
  { id: "Nominee", label: "Nominee", component: Nominee },
  { id: "BankDetails", label: "Bank Details", component: BankDetails },
];

const App: React.FC = () => {
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
        <Tabs tabs={tabs} />
      </main>
    </div>
  );
}

export default App;
