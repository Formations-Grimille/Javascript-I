let mode;
const os = prompt('Quel est le système d\'exploitation ?');

// -------------------------------- //
// Solution 1
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

// Solution 2
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

// Solution 3
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

// Solution 4
if ( os === 'Windows XP' || os === 'Windows 7' || os === 'Windows 11') {
  mode = 0;
} else if ( os === 'macOS') {
  mode = 1;
} else {
  mode = 2;
}

// ET => &&
// OU => ||


// ------------------------------------- //
console.log('Le mode d\'affichage est', mode);

