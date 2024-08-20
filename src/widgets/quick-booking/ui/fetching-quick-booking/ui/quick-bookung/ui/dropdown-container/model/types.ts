import { ReactNode } from "react";

export interface DropdownContainerProps {
  icon?: ReactNode;
  title: string;
  selectName: string;
  content: ReactNode;
  isFetching?: boolean;
}
