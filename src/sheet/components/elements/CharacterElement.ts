
export interface CharacterElement {
    type: CharacterElementType,
    title: string,
}

export interface NumericCharacterElement extends CharacterElement {
    values: Map<String, any>
    maxValue?: number
}

export interface TextCharacterElement extends CharacterElement {
    value: string
}

export interface TagsCharacterElement extends CharacterElement {
    values: String[]
}

enum CharacterElementType {
    Numeric, Percentage, Text, Tags
}