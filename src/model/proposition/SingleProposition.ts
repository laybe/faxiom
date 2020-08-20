import type { Proposition } from "./Proposition";
import type { PropositionType } from "./PropositionType";
import type { Argument } from "../argument/Argument";

export interface SingleProposition extends Proposition {
  type: PropositionType.SINGLE;
  text: string;
  premisesArguments?: Argument[];
}