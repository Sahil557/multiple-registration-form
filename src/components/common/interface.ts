// Interface for Button component props
export interface ButtonProps {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  children: string;
  className?: string;
}

// Interface for DatePicker component props
export interface DatePickerProps {
  id?: string;
  label: string;
  value?: string;
  onChange?: (value: string) => void | any;
}

// Interface for ImagePicker component props
export interface ImagePickerProps {
  id: string;
  label: string;
  onChange?: (file: File) => void;
}

// Interface for InputField component props
export interface InputFieldProps {
  id: string;
  type: string;
  value?: string | null | any;
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
  value?: string;
  onChange?: (value: string) => void;
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
  onChange?: (file: File | null) => void;
}