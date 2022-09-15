// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  firebase: {
    projectId: 'sorsogon-db-system',
   appId: '1:828386328406:web:3401566eb8f3f8b08720f7',
   storageBucket: 'sorsogon-db-system.appspot.com',
   apiKey: 'AIzaSyDwr0DeDok6oUmp_Ley692ywf5GtGKnQXY',
  authDomain: 'sorsogon-db-system.firebaseapp.com',
  messagingSenderId: '828386328406',
  },


};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
/*
npm install firebase
firebase login
firebase init
 "outputPath": "dist/jollibee-app" remove app angular.json
ng build --configuration production
firebase deploy

*/
