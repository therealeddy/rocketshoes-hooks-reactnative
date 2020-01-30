var sharedBlacklist = [
  /node_modules[\/\\]react[\/\\]dist[\/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
];

yarn add eslint -D

yarn eslint --init

yarn add prettier eslint-config-prettier eslint-plugin-prettier babel-eslint -D

react-native start --reset-cache

gradlew clean

adb reverse tcp:9090 tcp:9090

adb devices
