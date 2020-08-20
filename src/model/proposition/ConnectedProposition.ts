import type { Proposition } from "./Proposition";
import type { PropositionType } from "./PropositionType";
import type { PropositionUnion } from "./PropositionUnion";
import type { ConnectionType } from "./ConnectionType";

export interface ConnectedProposition extends Proposition {
  type: PropositionType.CONNECTION;
  connectionType: ConnectionType;
  connectedPropositions: PropositionUnion[];
}
