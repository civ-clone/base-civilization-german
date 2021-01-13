import Leader from '@civ-clone/core-civilization/Leader';
import Civilization from '@civ-clone/core-civilization/Civilization';
import German from '../German';

export class FrederickTheGreat extends Leader {
  static civilization(): typeof Civilization {
    return German;
  }

  name(): string {
    return 'Frederick the Great';
  }
}

export default FrederickTheGreat;
