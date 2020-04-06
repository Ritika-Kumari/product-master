// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
export const environment = {
  production: false,
  apiEndPoint: 'https://localhost:5001/api',
  apiSCMEndPoint: 'http://localhost:62613/api',
  // apiEndPoint: 'http://192.168.3.169:57587/api',
  // apiSCMEndPoint: 'http://192.168.3.169:62613/api',
  scmUserName: 'SCMKey',
  scmPassword: 'LwRT85!@',
  mobileRegex: `^((?!(6000000000))[6-9][0-9]{9})*$`,
  redirectToError: false,
  consoleError: true
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
