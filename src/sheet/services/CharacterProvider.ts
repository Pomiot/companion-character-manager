import { CharacterElementGroup } from '../Character';


export interface CharacterProvider {

    retrieveCharacter(): CharacterElementGroup[];
}