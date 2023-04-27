/*
------------------------------------------------------
TP 7: Mode d'affichage d'un OS
------------------------------------------------------

- Demander à l'utilisateur d'entrer le nom d'un système d'exploitation.
- Changer le mode d'affichage selon le tableau suivant
    - Windows XP : 0
    - Windows 7 : 0
    - Windows 11 : 0
    - macOS : 1
    - Debian : 2
    - Ubuntu : 2
*/

let mode;
const os = prompt('Quel est le système d\'exploitation ?');

// -------------------------------- //
// Solution 1 - Mouais ok bof
if(os === 'Windows XP') {
    mode = 0;
} else if (os === 'Windows 7') {
    mode = 0;
} else if (os === 'Windows 11') {
    mode = 0;
} else if (os === 'macOS') {
    mode = 1;
} else if (os === 'Debian') {
    mode = 2;
} else if (os === 'Ubuntu') {
    mode = 2;
} else {
    mode = 2;
}

// Solution 2 - Pas mal
switch (os) {
  case 'Windows XP':
      mode = 0;
      break;
  case 'Windows 7':
      mode = 0;
      break;
  case 'Windows 11':
      mode = 0;
      break;
  case 'macOS':
      mode = 1;
  case 'ubuntu':
      mode = 2;
      break;
  case 'debian':
      mode = 2;
      break;
  default:
      mode = 2;
}

// Solution 3 - Pro Gamer
switch (os) {
  case 'Windows XP':
  case 'Windows 7':
  case 'Windows 11':
      mode = 0;
      break;
  case 'macOS':
      mode = 1;
  case 'ubuntu':
  case 'debian':
  default:
      mode = 2;
}

// Solution 4 - Simple et clair
if ( os === 'Windows XP' || os === 'Windows 7' || os === 'Windows 11') {
  mode = 0;
} else if ( os === 'macOS') {
  mode = 1;
} else {
  mode = 2;
}

// ------------------------------------- //
console.log('Le mode d\'affichage est', mode);

