# Structure

- src
    - assets
        - images
        - font
        - etc.
    - Components
        - your custome component
    - config
        - for config file ( e.g. firebase config)
    - constants
        - constant file.
    - Containers
        - Welcome: Screens for welcome (e.g. login, register, splash, forgot password, etc .)
        - Home: Screens for home (e.g. Screen 1, Screen 2)
    - navigation
        - your navigation flow
    - App.js
        - entery point of our React native application

# How to run

1. ios:
    - cd ios
    - pod install
    - cd ..
    - npx react-native run-ios

2. Android:
    - npx react-native run-android