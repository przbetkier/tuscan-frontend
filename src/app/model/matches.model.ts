import { SimpleMatch } from "./simple-match.model";

export class Matches {
    constructor(public simpleMatchList: SimpleMatch[],
                public matchesCount: number) {}
}