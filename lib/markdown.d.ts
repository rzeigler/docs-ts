import { Node } from './parser';
import { Validation } from 'fp-ts/lib/Validation';
export declare function parseLink(s: string): Validation<Array<string>, RegExpMatchArray>;
export declare function printHeader(title: string, order: number): string;
export declare function printNode(node: Node): string;
