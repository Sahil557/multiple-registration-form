import React from "react";
import {
  InputField,
  Button,
  FileUpload,
  Dropdown,
  DatePicker,
} from "../common";

interface EmployementDetailsProps {
  onNext: () => void;
  onPrevious: () => void;
}

const EmployementDetails: React.FC<EmployementDetailsProps> = ({ onNext, onPrevious }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add validation if necessary
    onNext();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 px-3 md:mb-0">
          <Dropdown
            id="gender"
            label="Gender"
            required
            options={["Private", "Government", "Other"]}
          />
        </div>
        <div className="w-full md:w-1/2 px-3 md:mb-0">
          <InputField
            id="name"
            placeholder="xyz company"
            label="Organization Name"
            type="text"
            required={true}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 px-3 md:mb-0">
          <InputField
            id="name"
            placeholder="Software Developer"
            label="Job Title"
            type="text"
            required={true}
          />
        </div>
        <div className="w-full md:w-1/2 px-3 md:mb-0">
          <InputField
            id="name"
            placeholder="senior"
            label="Designation"
            type="text"
            required={true}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 px-3 md:mb-0 mb-6">
          <DatePicker label="Joining Date" />
        </div>
        <div className="w-full md:w-1/2 px-3 md:mb-0">
          <InputField
            id="name"
            placeholder="500000"
            label="Current/Last Annual Salary"
            type="number"
            required={true}
          />
        </div>
      </div>
      <div className="flex flex-wrap px-3 mb-6">
        <FileUpload label="Salary Slip" />
      </div>
      <div className="flex justify-center">
        <Button className="mr-4" onClick={onPrevious} children="Preview" type="button" />
        <Button children="Next" type="submit" />
      </div>
    </form>
  );
};

export default EmployementDetails;
