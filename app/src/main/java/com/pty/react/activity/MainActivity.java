package com.pty.react.activity;

import com.facebook.react.ReactActivity;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import javax.annotation.Nullable;

public class MainActivity extends ReactActivity {

    @Nullable
    @Override
    protected String getMainComponentName() {

//        ReactContext mReactContext = (ReactContext) getApplicationContext();
//        mReactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit("asdf","");
        return "HelloWorld";
    }



}
