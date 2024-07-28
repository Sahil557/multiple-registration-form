import React, { useState } from "react";
import { InputField, Button, DatePicker, Dropdown } from "../common";

interface NomineeData {
  fullName: string;
  relation: string;
  dob: string;
  gender: string;
  email: string;
  phoneNo: string;
}

interface NomineeProps {
  onNext: (data: NomineeData[]) => void;
  onPrevious: () => void;
}

const Nominee: React.FC<NomineeProps> = ({ onNext, onPrevious }) => {
  const [nomineeData, setNomineeData] = useState<NomineeData[]>([
    { fullName: "", relation: "", dob: "", gender: "", email: "", phoneNo: "" },
    { fullName: "", relation: "", dob: "", gender: "", email: "", phoneNo: "" },
  ]);

  const handleChange = (index: number, field: string, value: string) => {
    const updatedNomineeData = [...nomineeData];
    updatedNomineeData[index] = {
      ...updatedNomineeData[index],
      [field]: value,
    };
    setNomineeData(updatedNomineeData);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(nomineeData); // Directly pass nomineeData array
  };

  return (
    <form onSubmit={handleSubmit}>
      {nomineeData.map((nominee, index) => (
        <div key={index}>
          <h2 className="ms-3 mb-5">Nominee {index + 1}</h2>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 px-3 md:mb-0">
              <InputField
                id={`name${index}`}
                placeholder="Joe Smith"
                label="Name"
                type="text"
                required
                value={nominee.fullName}
                onChange={(e) => handleChange(index, "fullName", e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/2 px-3 md:mb-0">
              <InputField
                id={`relation${index}`}
                placeholder="e.g-brother"
                label="Relation"
                type="text"
                required
                value={nominee.relation}
                onChange={(e) =>
                  handleChange(index, "relation", e.target.value)
                }
              />
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 px-3 md:mb-0 mb-4">
              <DatePicker
                label="Date of Birth"
                value={nominee.dob}
                onChange={(date) =>
                  handleChange(index, "dob", date.toString())
                }
              />
            </div>
            <div className="w-full md:w-1/2 px-3 md:mb-0">
              <Dropdown
                id={`gender${index}`}
                label="Gender"
                required
                options={["Male", "Female", "Other"]}
                value={nominee.gender}
                onChange={(value) => handleChange(index, "gender", value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 px-3 md:mb-0">
              <InputField
                id={`email${index}`}
                type="email"
                label="Email"
                placeholder="john.doe@company.com"
                required
                value={nominee.email}
                onChange={(e) => handleChange(index, "email", e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/2 px-3 md:mb-0">
              <InputField
                id={`phoneNo${index}`}
                type="number"
                label="Mobile Number"
                placeholder="3621xxxx"
                required
                value={nominee.phoneNo}
                onChange={(e) => handleChange(index, "phoneNo", e.target.value)}
              />
            </div>
          </div>
        </div>
      ))}
      <div className="flex justify-center">
        <Button
          className="mr-4"
          onClick={onPrevious}
          children="Previous"
          type="button"
        />
        <Button children="Next" type="submit" />
      </div>
    </form>
  );
};

export default Nominee;
