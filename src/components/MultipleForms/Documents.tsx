import React from "react";
import { InputField, Button, FileUpload } from "../common";

const Documents: React.FC = () => {
  return (
    <form>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 px-3 md:mb-0">
          <InputField
            id="name"
            placeholder="2020-2036-2020"
            label="Aadhar Card Number"
            type="number"
            required={true}
          />
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6">
          <FileUpload label="Aadhar Card File" />
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 px-3 md:mb-0">
          <InputField
            id="name"
            placeholder="CDX87SGA"
            label="Pan Card Number"
            type="text"
            required={true}
          />
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6">
          <FileUpload label="Pan Card File" />
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 px-3 md:mb-0">
          <InputField
            id="name"
            placeholder="TNX9101"
            label="Voter ID"
            type="text"
            required={true}
          />
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6">
          <FileUpload label="Voter ID File" />
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 px-3 md:mb-0">
          <InputField
            id="name"
            placeholder="DL-5241-20912"
            label="Driving License"
            type="text"
            required={true}
          />
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6">
          <FileUpload label="Driving License File" />
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 px-3 md:mb-0">
          <InputField
            id="name"
            placeholder="PS-292-19"
            label="Passport"
            type="text"
            required={true}
          />
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6">
          <FileUpload label="Passport File" />
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 px-3 md:mb-0">
          <InputField
            id="name"
            placeholder="ITR71829"
            label="ITR File"
            type="text"
            required={true}
          />
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6">
          <FileUpload label="ITR File" />
        </div>
      </div>
      <div className="flex justify-center">
        <Button className="mr-4" children="Preview" type="submit" />
        <Button children="Next" type="submit" />
      </div>
    </form>
  );
};

export default Documents;
