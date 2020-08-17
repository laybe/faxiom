import type { Proposition } from "./Proposition";
import type { PropositionType } from "./PropositionType";

enum ConnectionType {
  CONJUNCTION = 'conjunction',
  DISJUNCTION = 'disjunction'
}
export interface ConnectedProposition extends Proposition {
  type: PropositionType.CONNECTION;
  connectionType: ConnectionType;
  connectedPropositions: Proposition[];
}
