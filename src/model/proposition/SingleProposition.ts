import type { Proposition } from "./Proposition";
import type { PropositionType } from "./PropositionType";

export interface SingleProposition extends Proposition {
  type: PropositionType.SINGLE;
  text: string;
}