import { Tour } from "entities/tour";

export interface ToureCardProps extends Omit<Tour, "id" | "__typename"> {}
