// Interface for Button component props
export interface ButtonProps {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  children: string;
  className?: string;
}

// Interface for DatePicker component props
export interface DatePickerProps {
  label: string;
}

// Interface for ImagePicker component props
export interface ImagePickerProps {
  label: string;
}

// Interface for InputField component props
export interface InputFieldProps {
  id: string;
  type: string;
  label?: string;
  placeholder: string;
  required?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

// Interface for Dropdown component props
export interface DropdownProps {
  id: string;
  label: string;
  required?: boolean;
  options: string[];
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

// Interface for Snackbar component props
export interface SnackbarProps {
  type: string;
  message: string;
  duration?: number;
  onClose?: () => void;
}

// Interface for FileUpload component props
export interface FileUploadProps {
  label: string;
}