// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //OLD API_COVID: 'https://pomber.github.io/covid19/timeseries.json',
  API_COVID: 'https://api.covid19api.com',
  API_COUNTRIES: 'https://restcountries.eu/rest/v2/all',
  API_IP_S: 'https://ipapi.co/json/',
  API_NEWS: 'https://newsapi.org/v2'
  //API_IP: 'http://api.ipapi.com/',
  //API_IP_CHECK: 'http://api.ipapi.com/check?access_key=fb45b4f9ff47cf18038933d4595a5caa',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
