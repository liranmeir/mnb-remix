import { Authenticator } from "remix-auth";

import { storage } from "~/utils/session.server";
import { GoogleStrategy } from "remix-auth-google";
// Create an instance of the authenticator
export let authenticator = new Authenticator(storage, {
  sessionKey: "_session",
});
// You may specify a <User> type which the strategies will return (this will be stored in the session)
// export let authenticator = new Authenticator<User>(sessionStorage, { sessionKey: '_session' });

authenticator.use(
  new GoogleStrategy(
    {
      clientID:
        "236194363622-k24dkt4sf8vl7c3n27euckh2mtn2dcv4.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "http://localhost:3000/auth/google/callback",
    },
    async ({ accessToken, refreshToken, extraParams, profile }) => {
      // Get the user data from your DB or API using the tokens and profile
      console.log(profile);
      return { email: profile.emails[0].value };
      // return User.findOrCreate({ email: profile.emails[0].value });
    }
  )
);
