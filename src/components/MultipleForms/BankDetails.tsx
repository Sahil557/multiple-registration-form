import React from "react";
import {
  InputField,
  Button,
} from "../common";
interface BankDetailsProps {
  onPrevious: () => void;
}

const BankDetails: React.FC<BankDetailsProps> = ({ onPrevious }) => {
    return(
      <form>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 px-3 md:mb-0">
          <InputField
            id="name"
            placeholder="Joe Smith"
            label="Account Holder Name"
            type="text"
            required={true}
          />
        </div>
        <div className="w-full md:w-1/2 px-3 md:mb-0">
          <InputField
            id="name"
            placeholder="60154824551452"
            label="Bank Account Number"
            type="number"
            required={true}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 px-3 md:mb-0">
          <InputField
            id="name"
            placeholder="HDFC"
            label="Bank Name"
            type="text"
            required={true}
          />
          <InputField
        id="name"
        placeholder="Rajouri garden"
        label="Branch Name"
        type="number"
        required={true}
      />
        </div>
        <div className="w-full md:w-1/2 px-3 md:mb-0">
          <InputField
            id="name"
            placeholder="HDFC14527"
            label="IFSC Code"
            type="text"
            required={true}
          />
        </div>
      </div>
      <div className="flex justify-center">
        <Button className="mr-4" onClick={onPrevious} children="Preview" type="submit" />
        <Button children="Submit" type="submit" />
      </div>
    </form>
    );
  };
  
export default BankDetails;