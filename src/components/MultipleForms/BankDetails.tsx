import React, { useState } from "react";
import { InputField, Button } from "../common";

interface BankDetailsProps {
  onNext: (data: any) => void;
  onPrevious: () => void;
}

const BankDetails: React.FC<BankDetailsProps> = ({ onNext, onPrevious }) => {
  const [bankDetails, setBankDetails] = useState({
    bankAccountNo: "",
    bankName: "",
    ifscCode: "",
    branchName: "",
    accountHolderName: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setBankDetails((prevDetails) => ({
      ...prevDetails,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(bankDetails);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 px-3 md:mb-0">
          <InputField
            id="accountHolderName"
            placeholder="Joe Smith"
            label="Account Holder Name"
            type="text"
            required
            value={bankDetails.accountHolderName}
            onChange={handleChange}
          />
        </div>
        <div className="w-full md:w-1/2 px-3 md:mb-0">
          <InputField
            id="bankAccountNo"
            placeholder="60154824551452"
            label="Bank Account Number"
            type="text"
            required
            value={bankDetails.bankAccountNo}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 px-3 md:mb-0">
          <InputField
            id="bankName"
            placeholder="HDFC"
            label="Bank Name"
            type="text"
            required
            value={bankDetails.bankName}
            onChange={handleChange}
          />
          <InputField
            id="branchName"
            placeholder="Rajouri garden"
            label="Branch Name"
            type="text"
            required
            value={bankDetails.branchName}
            onChange={handleChange}
          />
        </div>
        <div className="w-full md:w-1/2 px-3 md:mb-0">
          <InputField
            id="ifscCode"
            placeholder="HDFC14527"
            label="IFSC Code"
            type="text"
            required
            value={bankDetails.ifscCode}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex justify-center">
        <Button className="mr-4" onClick={onPrevious} type="button">
          Previous
        </Button>
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
};

export default BankDetails;
