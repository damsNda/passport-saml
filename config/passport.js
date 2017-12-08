const SamlStrategy = require('passport-saml').Strategy;

module.exports = function (passport, config) {

  passport.serializeUser(function (user, done) {
    done(null, user);
  });

  passport.deserializeUser(function (user, done) {
    done(null, user);
  });

  passport.use(new SamlStrategy(
    {
      path: config.passport.saml.path,
      entryPoint: config.passport.saml.entryPoint,
      issuer: config.passport.saml.issuer,
      cert: config.passport.saml.cert
    },
    function (profile, done) {
      return done(null,
        {
          id: profile.nameID,
          email: profile.nameID,
          displayName: profile.nameID,
          firstName: profile.nameID,
          lastName: profile.nameID
        });
    })
  );

};
