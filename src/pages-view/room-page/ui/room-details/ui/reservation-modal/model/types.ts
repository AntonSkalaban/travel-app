export interface ReservationModalProps {
  reservationData: { [key: string]: string };
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
