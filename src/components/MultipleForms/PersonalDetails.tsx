import React, { useState } from "react";
import {
  InputField,
  Dropdown,
  Button,
  DatePicker,
  ImagePicker,
} from "../common";

interface PersonalDetailsProps {
  onNext: (data: any) => void;
  onPrevious: () => void;
}

interface Address {
  street: string;
  locality: string;
  state: string;
  district: string;
  pin: string;
}

interface FormData {
  fullName: string;
  gender: string;
  dob: string;
  fatherName: string;
  motherName: string;
  maritalStatus: string;
  spouseName: string;
  phoneNo: string;
  email: string;
  currentAddress: Address;
  permanentAddress: Address;
  avatar: string;
}

const PersonalDetails: React.FC<PersonalDetailsProps> = ({ onNext }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    dob: "",
    fatherName: "",
    motherName: "",
    maritalStatus: "",
    spouseName: "",
    phoneNo: "",
    email: "",
    currentAddress: {
      street: "",
      locality: "",
      state: "",
      district: "",
      pin: "",
    },
    permanentAddress: {
      street: "",
      locality: "",
      state: "",
      district: "",
      pin: "",
    },
    avatar: "pic.q",
  });

  // (The rest of the code remains the same)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    // Split the id to handle nested state
    const [mainKey, nestedKey] = id.split(".") as [keyof FormData, string?];

    if (nestedKey) {
      // Ensure mainKey exists and is of type Address
      if (mainKey === "currentAddress" || mainKey === "permanentAddress") {
        setFormData((prevState) => ({
          ...prevState,
          [mainKey]: {
            ...(prevState[mainKey] as Address),
            [nestedKey]: value,
          },
        }));
      } else {
        console.error(`Invalid mainKey: ${mainKey}`);
      }
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [id as keyof FormData]: value,
      }));
    }
  };

  const handleDropdownChange = (id: string, value: string) => {
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleDateChange = (id: string, file: string) => {
    setFormData((prevState) => ({
      ...prevState,
      [id]: file,
    }));
  };

  const handleImageChange = (id: string, file: File) => {
    setFormData((prevState) => ({
      ...prevState,
      [id]: file,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        <div className="flex md:mb-4 xl:mb-4 flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <ImagePicker
            id="avatar"
            label="Choose profile photo"
            onChange={(file) => {}}
          />
        </div>
        <div>
          <InputField
            id="fullName"
            placeholder="Enter your name"
            label="Full Name (As per Aadhar)"
            type="text"
            required={true}
            value={formData.fullName}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        <div className="relative">
          <DatePicker
            id="dob"
            label="Date of Birth"
            value={formData.dob}
            onChange={(value) => handleDateChange("dob", value)}
          />
        </div>
        <div>
          <Dropdown
            id="gender"
            label="Gender"
            required
            options={["Male", "Female", "Other"]}
            value={formData.gender}
            onChange={(value) => handleDropdownChange("gender", value)}
          />
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <InputField
            id="fatherName"
            placeholder="Abcd"
            label="Father's Name"
            type="text"
            required={true}
            value={formData.fatherName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <InputField
            id="motherName"
            placeholder="sdkjcaskjd"
            label="Mother's Name"
            type="text"
            required={true}
            value={formData.motherName}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <Dropdown
            id="maritalStatus"
            label="Marital Status (If Yes)"
            required
            options={["Yes", "No"]}
            value={formData.maritalStatus}
            onChange={(value) => handleDropdownChange("maritalStatus", value)}
          />
        </div>
        <div>
          <InputField
            id="spouseName"
            type="text"
            label="Spouse Name"
            placeholder="john"
            required
            value={formData.spouseName}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <InputField
            id="phoneNo"
            type="number"
            label="Phone Number"
            placeholder="3621xxxx"
            required
            value={formData.phoneNo}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col">
          <InputField
            id="email"
            type="email"
            label="Email"
            placeholder="john.doe@company.com"
            required
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <InputField
            id="currentAddress.street"
            type="text"
            label="Current Address"
            placeholder="Street"
            required
            value={formData.currentAddress.street}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col md:mt-5 xl:mt-5">
          <InputField
            id="currentAddress.locality"
            type="text"
            placeholder="Locality"
            required
            value={formData.currentAddress.locality}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <InputField
          id="currentAddress.state"
          type="text"
          placeholder="State"
          required
          value={formData.currentAddress.state}
          onChange={handleInputChange}
        />
        <InputField
          id="currentAddress.district"
          type="text"
          placeholder="District"
          required
          value={formData.currentAddress.district}
          onChange={handleInputChange}
        />
        <InputField
          id="currentAddress.pin"
          type="number"
          placeholder="PIN"
          required
          value={formData.currentAddress.pin}
          onChange={handleInputChange}
        />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <InputField
            id="permanentAddress.street"
            type="text"
            label="Permanent Address"
            placeholder="Street"
            required
            value={formData.permanentAddress.street}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col">
          <InputField
            id="permanentAddress.locality"
            type="text"
            label="-"
            placeholder="Locality"
            required
            value={formData.permanentAddress.locality}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <InputField
          id="permanentAddress.state"
          type="text"
          placeholder="State"
          required
          value={formData.permanentAddress.state}
          onChange={handleInputChange}
        />
        <InputField
          id="permanentAddress.district"
          type="text"
          placeholder="District"
          required
          value={formData.permanentAddress.district}
          onChange={handleInputChange}
        />
        <InputField
          id="permanentAddress.pin"
          type="number"
          placeholder="PIN"
          required
          value={formData.permanentAddress.pin}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex justify-center">
        <Button children="Next" type="submit" />
      </div>
    </form>
  );
};

export default PersonalDetails;
