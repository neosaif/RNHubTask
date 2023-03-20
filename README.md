# RNHubTask
 * Sample React Native App demonstrating Picture-in-Picture (PiP) functionality.
 *
 * This app plays a video in fullscreen mode by default, and allows the user to enter
 * Picture-in-Picture mode by putting the app in the background or by triggering a button
 * (not shown in this code). The PiP window dimensions are set to 300x150, and the video
 * continues playing in the PiP window even when the app is in the background or inactive.
 *
 * Android - PiP works with native module {PipHandler}
 * IOS - PiP works with inbuilt feature of react-native-video library.
 *
 * Unfortunately, the Picture-in-Picture feature does not work in the iOS Simulator,
 * as it requires hardware support that is not available in the simulator.
 * To test Picture-in-Picture on iOS, you'll need to run your app on a physical device that supports the feature.
 * You can also use Xcode's built-in i pad simulator.
 * @see https://stackoverflow.com/questions/68939003/is-picture-in-picture-possible-on-ios-simulator
 * For Demo
 * @see https://drive.google.com/drive/folders/1RMa6kjfI3odSPn2MUAJZ1FLjeHvmV_0V?usp=share_link
 * @format
 * @version 1.0