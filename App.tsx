/**
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
 * You can also use Xcode's built-in device emulator to simulate a physical device running iOS,
 * but keep in mind that this is still not a perfect substitute for testing on a real device.
 * @see https://stackoverflow.com/questions/68939003/is-picture-in-picture-possible-on-ios-simulator
 * For Demo
 * @see https://drive.google.com/drive/folders/1RMa6kjfI3odSPn2MUAJZ1FLjeHvmV_0V?usp=share_link
 * @format
 * @version 1.0
 */

import React, {useEffect, useRef} from 'react';
import {StyleSheet, View, AppState, Platform} from 'react-native';
import Video from 'react-native-video';
import PipHandler from './src/PipHandler';

const App = () => {
  const appStateRef = useRef(AppState.currentState);
  useEffect(() => {
    appStateRef.current = AppState.currentState;
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        (appStateRef.current.match('active') && nextAppState === 'inactive') ||
        nextAppState === 'background'
      ) {
        PipHandler.enterPipMode(300, 150);
      }
      appStateRef.current = nextAppState;
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Video
        source={{
          uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
        }} // Can be a URL or a local file.
        controls
        fullscreen
        pictureInPicture={true}
        playInBackground={Platform.OS === 'android' ? true : false}
        playWhenInactive={true}
        style={styles.backgroundVideo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundVideo: {
    height: 300,
    width: '100%',
  },
});

export default App;
