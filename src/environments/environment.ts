// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

import * as firebase from 'firebase';

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBQ3Twxs0IiNmCIme02MlgvvmiQYaX5Ydw',
    authDomain: 'photoproject-ee13f.firebaseapp.com',
    databaseURL: 'https://photoproject-ee13f.firebaseio.com',
    projectId: 'photoproject-ee13f',
    storageBucket: 'photoproject-ee13f.appspot.com',
    messagingSenderId: '34382431548'
  }
};
