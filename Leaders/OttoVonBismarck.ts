import Leader from '@civ-clone/core-civilization/Leader';
import Civilization from '@civ-clone/core-civilization/Civilization';
import German from '../German';

export class OttoVonBismarck extends Leader {
  static civilization(): typeof Civilization {
    return German;
  }

  name(): string {
    return 'Otto von Bismarck';
  }
}

export default OttoVonBismarck;
