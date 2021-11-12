## Expo Facebook Login Bug

Update the following in `app.json` if desired:

* `ios.bundleIdentifier`
* `facebookScheme`
* `facebookAppId`

Update Facebook App ID in the `Facebook.initializeAsync()` call in `App.js`.

Add device with:

```
eas device:create
```

Create internal build using EAS:

```
eas build --platform ios --profile development
```

On your test device, make sure you:

* Have the Facebook app installed and are __logged in__
* Are __logged out__ of Facebook in Safari

When the build completes, install it on your test device.

Start a dev client bundler:

```
expo start --dev-client
```

Connect to the bundler from the app.

Tap "Continue with Facebook" and agree to all prompts.

You'll be brought back to the app but the browser never closes until you cancel.

Additionally, the app will log the return URL that Facebook opens, which looks like this:

```
fb1310861962685645://authorize...
```

This URL should be handled by the Facebook SDK and not reach the app.