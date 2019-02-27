import { Layout } from "react-grid-layout";
import { CharacterElement } from "./components/elements/CharacterElement";

export interface Character {
    name: String;
    characterBits: CharacterElementGroup[];
}

export interface CharacterElementGroup extends Layout {
    type?: string;
    i: string,
    x: number,
    y: number,
    w: number,
    h: number,
    static?: boolean
    minW?: number,
    maxW?: number,
    content?: CharacterElement
}