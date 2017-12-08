module.exports = {
  development: {
    app: {
      name: 'Passport SAML strategy example',
      port: process.env.PORT || 5450
    },
    passport: {
      strategy: 'saml',
      saml: {
        path: process.env.SAML_PATH || '/saml-sample/login/callback',
        entryPoint: process.env.SAML_ENTRY_POINT || 'https://localhost:9031/idp/SSO.saml2',
        issuer: 'sam3Test',
        cert: process.env.SAML_CERT || null
      }
    }
  }
};
