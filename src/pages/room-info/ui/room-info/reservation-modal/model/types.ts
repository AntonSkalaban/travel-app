export interface FormValues {
  phone: string;
  firstName: string;
  lastName: string;
}

export interface ReservationModalProps {
  roomId: string;
  roomName: string;
  onClose: () => void;
}

export enum EmailSuccessMessage {
  en = "Success!",
  ru = "Успешно!",
}

export enum EmailErrorMessage {
  en = "Error!",
  ru = "Успешно!",
}
