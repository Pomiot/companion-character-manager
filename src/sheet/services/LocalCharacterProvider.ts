import { CharacterElementGroup } from './../Character';
import { CharacterProvider } from './CharacterProvider';

export class LocalCharacterProvider implements CharacterProvider {

    retrieveCharacter(): CharacterElementGroup[] {
        var layout = [
            { i: 'a', x: 0, y: 0, w: 1, h: 1, static: true },
            { i: 'b', x: 1, y: 0, w: 3, h: 1, minW: 2, maxW: 4 },
            { i: 'c', x: 2, y: 1, w: 1, h: 1 },
            { i: 'd', x: 4, y: 2, w: 1, h: 1 },
            { i: 'e', x: 4, y: 3, w: 1, h: 1 }
        ];
        return layout;
    }
}