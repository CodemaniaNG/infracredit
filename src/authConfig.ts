import { LogLevel } from "@azure/msal-browser";

export const msalConfig = {
    auth: {
        clientId: "f8dbd477-64cc-4b20-b990-43b6b7b9a3a0",
        authority: "https://login.microsoftonline.com/f2c465ef-ecef-47df-bc31-9fc90ed38aa9",
        redirectUri: "http://localhost:3000",
    },
    cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: false,
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
            }
        },
        },
    },
};

export const loginRequest = {
    scopes: ["User.Read"],
};
