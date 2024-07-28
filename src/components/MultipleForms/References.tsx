import React, { useState } from "react";
import { InputField, Button } from "../common";

interface Address {
  street: string;
  locality: string;
  state: string;
  district: string;
  pin: string;
}

interface WitnessData {
  fullName: string;
  relation: string;
  phoneNo: string;
  email: string;
  currentAddress: Address;
}

interface ReferencesProps {
  onNext: (data: WitnessData[]) => void;
  onPrevious: () => void;
}

const References: React.FC<ReferencesProps> = ({ onNext, onPrevious }) => {
  const [witnessData, setWitnessData] = useState<WitnessData[]>([
    {
      fullName: "",
      relation: "",
      phoneNo: "",
      email: "",
      currentAddress: {
        street: "",
        locality: "",
        state: "",
        district: "",
        pin: "",
      },
    },
  ]);

  const handleChange = (index: number, field: string, value: string) => {
    const updatedWitnessData = [...witnessData];
    if (["street", "locality", "state", "district", "pin"].includes(field)) {
      updatedWitnessData[index].currentAddress = {
        ...updatedWitnessData[index].currentAddress,
        [field]: value,
      };
    } else {
      updatedWitnessData[index] = {
        ...updatedWitnessData[index],
        [field]: value,
      };
    }
    setWitnessData(updatedWitnessData);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(witnessData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {witnessData.map((witness, index) => (
        <div key={index}>
          <h3 className="ms-3 mb-5">Reference {index + 1}</h3>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 px-3 md:mb-0">
              <InputField
                id={`fullName${index}`}
                placeholder="Joe Smith"
                label="Full Name"
                type="text"
                value={witness.fullName}
                onChange={(e) =>
                  handleChange(index, "fullName", e.target.value)
                }
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-3 md:mb-0">
              <InputField
                id={`relation${index}`}
                placeholder="e.g-brother"
                label="Relation"
                type="text"
                value={witness.relation}
                onChange={(e) =>
                  handleChange(index, "relation", e.target.value)
                }
                required
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
                value={witness.email}
                onChange={(e) => handleChange(index, "email", e.target.value)}
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-3 md:mb-0">
              <InputField
                id={`phoneNo${index}`}
                type="number"
                label="Mobile Number"
                placeholder="3621xxxx"
                value={witness.phoneNo}
                onChange={(e) =>
                  handleChange(index, "phoneNo", e.target.value)
                }
                required
              />
            </div>
          </div>
          <div className="grid gap-6 px-3 md:grid-cols-2">
            <div>
              <InputField
                id={`street${index}`}
                type="text"
                label="Current Address"
                placeholder="Street"
                value={witness.currentAddress.street}
                onChange={(e) =>
                  handleChange(index, "street", e.target.value)
                }
                required
              />
            </div>
            <div className="flex flex-col md:mt-5 xl:mt-5">
              <InputField
                id={`locality${index}`}
                type="text"
                placeholder="Locality"
                value={witness.currentAddress.locality}
                onChange={(e) =>
                  handleChange(index, "locality", e.target.value)
                }
                required
              />
            </div>
          </div>
          <div className="px-3 grid grid-cols-1 md:grid-cols-3 gap-4">
            <InputField
              id={`state${index}`}
              type="text"
              placeholder="State"
              value={witness.currentAddress.state}
              onChange={(e) => handleChange(index, "state", e.target.value)}
              required
            />
            <InputField
              id={`district${index}`}
              type="text"
              placeholder="District"
              value={witness.currentAddress.district}
              onChange={(e) =>
                handleChange(index, "district", e.target.value)
              }
              required
            />
            <InputField
              id={`pin${index}`}
              type="number"
              placeholder="PIN"
              value={witness.currentAddress.pin}
              onChange={(e) => handleChange(index, "pin", e.target.value)}
              required
            />
          </div>
        </div>
      ))}
      <div className="flex justify-center">
        <Button className="mr-4" onClick={onPrevious} type="button">
          Previous
        </Button>
        <Button type="submit">Next</Button>
      </div>
    </form>
  );
};

export default References;
