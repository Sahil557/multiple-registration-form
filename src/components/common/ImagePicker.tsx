import { ImagePickerProps } from "./interface";

const ImagePicker: React.FC<ImagePickerProps> = ({ label }) => {
  return (
    <>
      <div className="shrink-0">
        <img
          id="user_snap"
          className="h-14 w-14 object-cover rounded-full"
          src="https://lh3.googleusercontent.com/a-/AFdZucpC_6WFBIfaAbPHBwGM9z8SxyM1oV4wB4Ngwp_UyQ=s96-c"
          alt="Current profile photo"
        />
      </div>
      <label className="block">
        <span className="sr-only">{label}</span>
        <input
          type="file"
          className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
        />
      </label>
    </>
  );
};

export default ImagePicker;
