cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-device.device",
        "file": "plugins/cordova-plugin-device/www/device.js",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "id": "cordova-plugin-statusbar.statusbar",
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "id": "ionic-plugin-keyboard.keyboard",
        "file": "plugins/ionic-plugin-keyboard/www/android/keyboard.js",
        "pluginId": "ionic-plugin-keyboard",
        "clobbers": [
            "cordova.plugins.Keyboard"
        ],
        "runs": true
    },
    {
        "id": "cordova-plugin-inappbrowser.inappbrowser",
        "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
        "pluginId": "cordova-plugin-inappbrowser",
        "clobbers": [
            "cordova.InAppBrowser.open",
            "window.open"
        ]
    },
    {
        "id": "cordova-plugin-velda-devicefeedback.DeviceFeedback",
        "file": "plugins/cordova-plugin-velda-devicefeedback/DeviceFeedback.js",
        "pluginId": "cordova-plugin-velda-devicefeedback",
        "clobbers": [
            "window.plugins.deviceFeedback"
        ]
    },
    {
        "id": "cordova-plugin-fcm.FCMPlugin",
        "file": "plugins/cordova-plugin-fcm/www/FCMPlugin.js",
        "pluginId": "cordova-plugin-fcm",
        "clobbers": [
            "FCMPlugin"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-console": "1.0.6",
    "cordova-plugin-device": "1.1.5",
    "cordova-plugin-splashscreen": "4.0.2",
    "cordova-plugin-statusbar": "2.2.2",
    "cordova-plugin-whitelist": "1.3.2",
    "ionic-plugin-keyboard": "2.2.1",
    "cordova-plugin-inappbrowser": "1.7.0",
    "cordova-plugin-velda-devicefeedback": "0.0.2",
    "cordova-plugin-fcm": "2.1.1"
};
// BOTTOM OF METADATA
});