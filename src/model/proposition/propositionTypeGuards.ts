import type { PropositionUnion } from "./PropositionUnion";
import type { SingleProposition } from "./SingleProposition";
import { PropositionType } from "./PropositionType";
import type { ConnectedProposition } from "./ConnectedProposition";

export const isSingleProposition = (proposition: PropositionUnion): proposition is SingleProposition => {
  return proposition && proposition.type === PropositionType.SINGLE;
}

export const isConnectedProposition = (proposition: PropositionUnion): proposition is ConnectedProposition => {
  return proposition && proposition.type === PropositionType.CONNECTION;
}
