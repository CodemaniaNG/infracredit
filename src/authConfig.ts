// import { LogLevel } from "@azure/msal-browser";

// export const msalConfig = {
//   auth: {
//     clientId: "193caef0-f9bd-43ec-a644-16492a6fc629",
//     authority:
//       "https://login.microsoftonline.com/f2c465ef-ecef-47df-bc31-9fc90ed38aa9",
//     redirectUri: "http://localhost:3000/",
//   },
//   cache: {
//     cacheLocation: "sessionStorage", // This configures where your cache will be stored
//     storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
//   },
//   system: {
//     loggerOptions: {
//       loggerCallback: (level: any, message: any, containsPii: any) => {
//         if (containsPii) {
//           return;
//         }
//         switch (level) {
//           case LogLevel.Error:
//             console.error(message);
//             return;
//           case LogLevel.Info:
//             console.info(message);
//             return;
//           case LogLevel.Verbose:
//             console.debug(message);
//             return;
//           case LogLevel.Warning:
//             console.warn(message);
//             return;
//           default:
//             return;
//         }
//       },
//     },
//   },
// };

// export const loginRequest = {
//   scopes: ["api://44816804-8eef-4d5f-872f-634fb31735fb/Weather.Read"],
// };

// export const graphConfig = {
//   graphMeEndpoint: "https://graph.microsoft.com/v1.0/me", //e.g. https://graph.microsoft.com/v1.0/me
// };

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { LogLevel } from "@azure/msal-browser";

/**
 * Configuration object to be passed to MSAL instance on creation.
 * For a full list of MSAL.js configuration parameters, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md
 */
export const msalConfig = {
  auth: {
    clientId: "09c7d2b1-b72c-4ea5-b4a0-bb3db24f4c1a",
    authority:
      "https://login.microsoftonline.com/f2c465ef-ecef-47df-bc31-9fc90ed38aa9",
    redirectUri: "http://localhost:3000/",
  },
  cache: {
    cacheLocation: "sessionStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
  system: {
    loggerOptions: {
      loggerCallback: (level: any, message: any, containsPii: any) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            return;
          case LogLevel.Info:
            console.info(message);
            return;
          case LogLevel.Verbose:
            console.debug(message);
            return;
          case LogLevel.Warning:
            console.warn(message);
            return;
          default:
            return;
        }
      },
    },
  },
};

/**
 * Scopes you add here will be prompted for user consent during sign-in.
 * By default, MSAL.js will add OIDC scopes (openid, profile, email) to any login request.
 * For more information about OIDC scopes, visit:
 * https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
 */
export const loginRequest = {
  scopes: ["api://7fa641ce-19fc-46ae-a324-ccf81bfd5218/Grant.API.Access"],
  // scopes: ["User.Read"],
};

/**
 * Add here the scopes to request when obtaining an access token for MS Graph API. For more information, see:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/resources-and-scopes.md
 */
export const graphConfig = {
  graphMeEndpoint: "https://graph.microsoft.com/v1.0/me", //e.g. https://graph.microsoft.com/v1.0/me
};
