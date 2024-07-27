import React from "react";
import { InputField, Button, DatePicker, Dropdown } from "../common";

  interface NomineeProps {
    onNext: () => void;
    onPrevious: () => void;
  }
  
  
  const Nominee: React.FC<NomineeProps> = ({ onNext, onPrevious }) => {
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Add validation if necessary
      onNext();
    };
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="ms-3 mb-5">Nominee 1</h2>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 px-3 md:mb-0">
          <InputField
            id="name"
            placeholder="Joe Smith"
            label="Name"
            type="text"
            required={true}
          />
        </div>
        <div className="w-full md:w-1/2 px-3 md:mb-0">
          <InputField
            id="name"
            placeholder="e.g-brother"
            label="Relation"
            type="text"
            required={true}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 px-3 md:mb-0 mb-4">
          <DatePicker label="Date of Birth" />
        </div>
        <div className="w-full md:w-1/2 px-3 md:mb-0">
          <Dropdown
            id="gender"
            label="Gender"
            required
            options={["Male", "Female", "Other"]}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 px-3 md:mb-0">
          <InputField
            id="email"
            type="email"
            label="Email"
            placeholder="john.doe@company.com"
            required
          />
        </div>
        <div className="w-full md:w-1/2 px-3 md:mb-0">
          <InputField
            id="number"
            type="number"
            label="Mobile Number"
            placeholder="3621xxxx"
            required
          />
        </div>
      </div>
      <h2 className="ms-3 mb-5">Nominee 2</h2>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 px-3 md:mb-0">
          <InputField
            id="name"
            placeholder="Joe Smith"
            label="Name"
            type="text"
            required={true}
          />
        </div>
        <div className="w-full md:w-1/2 px-3 md:mb-0">
          <InputField
            id="name"
            placeholder="e.g-brother"
            label="Relation"
            type="text"
            required={true}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 px-3 md:mb-0 mb-4">
          <DatePicker label="Date of Birth" />
        </div>
        <div className="w-full md:w-1/2 px-3 md:mb-0">
          <Dropdown
            id="gender"
            label="Gender"
            required
            options={["Male", "Female", "Other"]}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 px-3 md:mb-0">
          <InputField
            id="email"
            type="email"
            label="Email"
            placeholder="john.doe@company.com"
            required
          />
        </div>
        <div className="w-full md:w-1/2 px-3 md:mb-0">
          <InputField
            id="number"
            type="number"
            label="Mobile Number"
            placeholder="3621xxxx"
            required
          />
        </div>
      </div>
      <div className="flex justify-center">
        <Button className="mr-4" onClick={onPrevious} children="Preview" type="button" />
        <Button children="Next" type="submit" />
      </div>
    </form>
  );
};

export default Nominee;
