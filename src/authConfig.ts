import { LogLevel } from "@azure/msal-browser";

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

export const loginRequest = {
  scopes: ["api://7fa641ce-19fc-46ae-a324-ccf81bfd5218/Grant.API.Access"],
  // scopes: ["User.Read"],
};

export const graphConfig = {
  graphMeEndpoint: "https://graph.microsoft.com/v1.0/me", //e.g. https://graph.microsoft.com/v1.0/me
};
