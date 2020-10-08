// the lines that need to be added to index.js
export const config = {
  imports: [`import { UserAgentApplication } from 'msal'`],
  init: `const azureAdClient = new UserAgentApplication({
    auth: {
      clientId: process.env.AZUREAD_CLIENT_ID,
      authority: process.env.AZUREAD_AUTHORITY,
      redirectUri: process.env.AZUREAD_REDIRECT_URI,
      postLogoutRedirectUri: process.env.AZUREAD_LOGOUT_REDIRECT_URI,
    },
  })`,
  authProvider: {
    client: 'azureAdClient',
    type: 'azureAd',
  },
}

// required packages to install
export const webPackages = ['msal']
export const apiPackages = []

// any notes to print out when the job is done
export const notes = [
  'You will need to create several environment variables with your Azure AD config options. Check out web/src/index.js for the variables you need to add.',
  '\n',
  'RedwoodJS specific Documentation:',
  'https://redwoodjs.com/docs/authentication#azure-ad',
  '\n',
  'MSAL.js Documentation:',
  'https://docs.microsoft.com/en-us/azure/active-directory/develop/msal-js-initializing-client-applications'
]
