import { Tour } from "entities/tour/model";

export interface ToureCardProps extends Omit<Tour, "id" | "__typename"> {}
