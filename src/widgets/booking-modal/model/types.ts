export interface FormValues {
  phone: string;
  firstName: string;
  lastName: string;
}

export interface BookingModalProps {
  person: string;
  location: string;
  room: string;
  onClose: () => void;
}
