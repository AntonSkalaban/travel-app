export interface FormValues {
  email: string;
}
export interface SubscribeProps {
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
