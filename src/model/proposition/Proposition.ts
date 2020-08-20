import type { PropositionType } from "./PropositionType";
import type { ConnectedProposition } from "./ConnectedProposition";
import type { Argument } from "../argument/Argument";

export interface Proposition {
    id: string;
    type: PropositionType;
    conclusionsArguments?: Argument[];
    partOfConnections?: ConnectedProposition[];
}
