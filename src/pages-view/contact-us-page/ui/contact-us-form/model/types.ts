export interface FormValues {
  fullName: string;
  email: string;
  message: string;
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
}
