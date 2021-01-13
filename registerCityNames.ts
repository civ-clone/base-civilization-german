import German from './German';
import CityName from '@civ-clone/core-civilization/CityName';
import { instance as cityNameRegistryInstance } from '@civ-clone/core-civilization/CityNameRegistry';

([
  'Berlin',
  'Hamburg',
  'Munich',
  'Cologne',
  'Frankfurt',
  'Stuttgart',
  'Düsseldorf',
  'Dortmund',
  'Essen',
  'Leipzig',
  'Bremen',
  'Dresden',
  'Hanover',
  'Nuremberg',
  'Duisburg',
  'Bochum',
  'Wuppertal',
  'Bielefeld',
  'Bonn',
  'Münster',
  'Karlsruhe',
  'Mannheim',
  'Augsburg',
  'Wiesbaden',
  'Gelsenkirchen',
  'Mönchengladbach',
  'Braunschweig',
  'Chemnitz',
  'Kiel',
  'Aachen',
  'Halle',
  'Magdeburg',
  'Freiburg',
  'Krefeld',
  'Lübeck',
  'Oberhausen',
  'Erfurt',
  'Mainz',
  'Rostock',
  'Kassel',
  'Hagen',
  'Hamm',
  'Saarbrücken',
  'Mülheim an der Ruhr',
  'Potsdam',
  'Ludwigshafen am Rhein',
  'Oldenburg',
  'Leverkusen',
  'Osnabrück',
  'Solingen',
] as string[]).forEach((name, i): void =>
  cityNameRegistryInstance.register(new CityName(name, German, i === 0))
);