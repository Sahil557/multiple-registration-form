import React, { useState } from "react";
import {
  InputField,
  Button,
  FileUpload,
  Dropdown,
  DatePicker,
} from "../common";

interface EmploymentDetailsProps {
  onNext: (data: any) => void;
  onPrevious: () => void;
}

const EmploymentDetails: React.FC<EmploymentDetailsProps> = ({
  onNext,
  onPrevious,
}) => {
  const [employmentData, setEmploymentData] = useState({
    type: "",
    organizationName: "",
    jobTitle: "",
    designation: "",
    joiningDate: "",
    currentOrLastAnnualSalary: null as number | null,
    salarySlip: null as File | null,
  });

  const handleInputChange = (
    id: keyof typeof employmentData,
    value: string | number
  ) => {
    setEmploymentData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleFileChange = (file: File | null) => {
    setEmploymentData((prevState) => ({
      ...prevState,
      salarySlip: file,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedData = {
      ...employmentData,
      salarySlip: "salary.q",
    };
    onNext(updatedData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 px-3 md:mb-0">
          <Dropdown
            id="type"
            label="Type"
            required
            options={["Private", "Government", "Other"]}
            onChange={(value) => handleInputChange("type", value)}
            value={employmentData.type}
          />
        </div>
        <div className="w-full md:w-1/2 px-3 md:mb-0">
          <InputField
            id="organizationName"
            placeholder="xyz company"
            label="Organization Name"
            type="text"
            required
            value={employmentData.organizationName}
            onChange={(e) =>
              handleInputChange("organizationName", e.target.value)
            }
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 px-3 md:mb-0">
          <InputField
            id="jobTitle"
            placeholder="Software Developer"
            label="Job Title"
            type="text"
            required
            value={employmentData.jobTitle}
            onChange={(e) => handleInputChange("jobTitle", e.target.value)}
          />
        </div>
        <div className="w-full md:w-1/2 px-3 md:mb-0">
          <InputField
            id="designation"
            placeholder="senior"
            label="Designation"
            type="text"
            required
            value={employmentData.designation}
            onChange={(e) => handleInputChange("designation", e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 px-3 md:mb-0 mb-6">
          <DatePicker
            label="Joining Date"
            value={employmentData.joiningDate}
            onChange={(date) => handleInputChange("joiningDate", date)}
          />
        </div>
        <div className="w-full md:w-1/2 px-3 md:mb-0">
          <InputField
            id="currentOrLastAnnualSalary"
            placeholder="500000"
            label="Current/Last Annual Salary"
            type="number"
            required
            value={employmentData.currentOrLastAnnualSalary}
            onChange={(e) =>
              handleInputChange("currentOrLastAnnualSalary", e.target.value)
            }
          />
        </div>
      </div>
      <div className="flex flex-wrap px-3 mb-6">
        <FileUpload label="Salary Slip" onChange={handleFileChange} />
      </div>
      <div className="flex justify-center">
        <Button
          className="mr-4"
          onClick={onPrevious}
          children="Preview"
          type="submit"
        />
        <Button children="Next" type="submit" />
      </div>
    </form>
  );
};

export default EmploymentDetails;
