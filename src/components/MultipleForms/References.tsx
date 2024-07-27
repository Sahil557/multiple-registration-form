import React from "react";
import { InputField, Button, DatePicker, Dropdown } from "../common";

interface RefrencesProps {
  onNext: () => void;
  onPrevious: () => void;
}


const References: React.FC<RefrencesProps> = ({ onNext, onPrevious }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add validation if necessary
    onNext();
  };
  return (
    <form onSubmit={handleSubmit}>
      <h3 className="ms-3 mb-5">Reference 1</h3>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 px-3 md:mb-0">
          <InputField
            id="name"
            placeholder="Joe Smith"
            label="Full Name"
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
      <div className="grid gap-6 px-3 md:grid-cols-2">
        <div>
          <InputField
            id="current_address"
            type="text"
            label="Current Address"
            placeholder="Street"
            required
          />
        </div>
        <div className="flex flex-col md:mt-5 xl:mt-5">
          <InputField
            id="locality"
            type="text"
            placeholder="Locality"
            required
          />
        </div>
      </div>
      <div className="px-3 grid grid-cols-1 md:grid-cols-3 gap-4">
        <InputField id="state" type="text" placeholder="State" required />
        <InputField id="district" type="text" placeholder="District" required />
        <InputField id="pin" type="number" placeholder="PIN" required />
      </div>
      <div className="flex justify-center">
        <Button className="mr-4" onClick={onPrevious} children="Preview" type="button" />
        <Button children="Next" type="submit" />
      </div>
    </form>
  );
};

export default References;
