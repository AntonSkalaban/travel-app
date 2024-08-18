export interface FormValues {
  phone: string;
  firstName: string;
  lastName: string;
}

export interface FormProps {
  isFetching: boolean;
  sendData: (
    data: {
      [key: string]: string;
    },
    templateID: string | undefined,
  ) => Promise<void>;
  showAlert: () => void;
  isBtnDisabled: boolean;
  formData?: { [key: string]: string };
}
