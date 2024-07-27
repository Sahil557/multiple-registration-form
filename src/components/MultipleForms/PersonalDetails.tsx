import React from "react";
import {
  InputField,
  Dropdown,
  Button,
  DatePicker,
  ImagePicker,
} from "../common";


interface PersonalDetailsProps {
  onNext: () => void;
}

const PersonalDetails: React.FC<PersonalDetailsProps> = ({ onNext }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here, you can add validation to check if all fields are filled.
    // If validation passes, call onNext
    onNext();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        <div className="flex md:mb-4 xl:mb-4 flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <ImagePicker label="Choose profile photo" />
        </div>
        <div>
          <InputField
            id="name"
            placeholder="Enter your name"
            label="Full Name (As per Aadhar)"
            type="text"
            required={true}
          />
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        <div className="relative">
          <DatePicker label="Date of Birth" />
        </div>
        <div>
          <Dropdown
            id="gender"
            label="Gender"
            required
            options={["Male", "Female", "Other"]}
          />
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <InputField
            id="father_name"
            placeholder="Abcd"
            label="Father's Name"
            type="text"
            required={true}
          />
        </div>
        <div>
          <InputField
            id="mother_name"
            placeholder="sdkjcaskjd"
            label="Mother's Name"
            type="text"
            required={true}
          />
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <Dropdown
            id="status"
            label="Marital Status (If Yes)"
            required
            options={["Yes", "No"]}
          />
        </div>
        <div>
          <InputField
            id="spouse"
            type="text"
            label="Spouse Name"
            placeholder="john"
            required
          />
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <InputField
            id="number"
            type="number"
            label="Phone Number"
            placeholder="3621xxxx"
            required
          />
        </div>
        <div className="flex flex-col">
          <InputField
            id="email"
            type="email"
            label="Email"
            placeholder="john.doe@company.com"
            required
          />
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <InputField id="state" type="text" placeholder="State" required />
        <InputField id="district" type="text" placeholder="District" required />
        <InputField id="pin" type="number" placeholder="PIN" required />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <InputField
            id="permanent_address"
            type="text"
            label="Permanent Address"
            placeholder="Street"
            required
          />
        </div>
        <div className="flex flex-col">
          <InputField
            id="locality"
            type="text"
            label="-"
            placeholder="Locality"
            required
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <InputField id="state" type="text" placeholder="State" required />
        <InputField id="district" type="text" placeholder="District" required />
        <InputField id="pin" type="number" placeholder="PIN" required />
      </div>
      <div className="flex justify-center">
        <Button children="Next" type="submit" />
      </div>
    </form>
  );
};

export default PersonalDetails;
