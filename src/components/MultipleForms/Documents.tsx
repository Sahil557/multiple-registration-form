import React, { useState } from "react";
import { InputField, Button, FileUpload } from "../common";

// Define the structure of documents data
interface Document {
  number: string;
  file: File | null | string;
}

interface DocumentsProps {
  onNext: (data: { [key: string]: Document }) => void; // Adjusted type to match the structure
  onPrevious: () => void;
}

const Documents: React.FC<DocumentsProps> = ({ onNext, onPrevious }) => {
  const [documentsData, setDocumentsData] = useState({
    AadharCard: { number: "", file: "pic.q" } as Document,
    PANCard: { number: "", file: "pic.q" } as Document,
    VoterID: { number: "", file: "pic.q" } as Document,
    DrivingLicense: { number: "", file: "pic.q" } as Document,
    Passport: { number: "", file: "pic.q" } as Document,
    ITRNo: { number: "", file: "pic.q" } as Document,
  });

  const handleInputChange = (id: keyof typeof documentsData, value: string) => {
    setDocumentsData((prevState) => ({
      ...prevState,
      [id]: {
        ...prevState[id],
        number: value,
      },
    }));
  };

  const handleFileChange = (id: keyof typeof documentsData, file: File | null) => {
    setDocumentsData((prevState) => ({
      ...prevState,
      [id]: {
        ...prevState[id],
        file: file,
      },
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    onNext(documentsData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {Object.entries(documentsData).map(([key, { number, file }]) => (
        <div key={key} className="flex flex-wrap mb-6">
          <div className="w-full md:w-1/2 px-3 md:mb-0">
            <InputField
              id={key}
              placeholder="Enter number"
              label={`${key.replace(/([A-Z])/g, ' $1')} Number`}
              type="text"
              required
              value={number}
              onChange={(e) => handleInputChange(key as keyof typeof documentsData, e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <FileUpload
              label={`${key.replace(/([A-Z])/g, ' $1')} File`}
              onChange={(file) => {}}
            />
          </div>
        </div>
      ))}
      <div className="flex justify-center">
        <Button className="mr-4"onClick={onPrevious} children="Preview" type="submit" />
        <Button children="Next" type="submit" />
      </div>
    </form>
  );
};

export default Documents;
