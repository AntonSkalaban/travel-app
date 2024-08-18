export interface EmailFormProps {
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
