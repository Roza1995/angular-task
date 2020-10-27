// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
let baseUrl = 'http://localhost:8000/api';
let serverUrl = 'http://localhost:8000';
let apiVersion = 'v1';
let apiUrls = {
  v1: baseUrl+'/v1',
}

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyD2sCYvSdPyyVWWjKg2cOotHWpE_y1m_kY",
    authDomain: "my-app-68bd5.firebaseapp.com",
    databaseURL: "https://my-app-68bd5.firebaseio.com",
    projectId: "my-app-68bd5",
    storageBucket: "my-app-68bd5.appspot.com",
    messagingSenderId: "652489527223",
    appId: "1:652489527223:web:a81bf7f07686ee25a16232",
    measurementId: "G-825B9V9N1Y"
  },
  sandbox: true,
  apiBaseUrl: baseUrl,
  apiVersion: apiVersion,
  apiUrl: baseUrl,
  apiVersionUrl: apiUrls,
  saveCredentials: true,
  retryError500: {
    enabled: true,
    delay: 5, // in seconds
    retries: 0,
  },
  serverUrl: serverUrl
}




/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
