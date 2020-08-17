import type { SingleProposition } from "../proposition/SingleProposition";
import type { PropositionUnion } from "../proposition/PropositionUnion";
import type { ArgumentType } from "./ArgumentType";

export interface Argument {
  id: number;
  type: ArgumentType;
  premise: PropositionUnion;
  conclusion: SingleProposition;
}
