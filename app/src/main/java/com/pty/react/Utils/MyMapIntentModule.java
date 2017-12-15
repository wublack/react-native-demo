package com.pty.react.Utils;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;

import com.facebook.react.bridge.JSApplicationIllegalArgumentException;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by admin on 2017/12/13.
 */

public class MyMapIntentModule extends ReactContextBaseJavaModule {


    private Context reactContext;

    public MyMapIntentModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        return "MyMapIntentModule";
    }

    @ReactMethod
    public void startActivityByClassname(String className){
        try {
            Activity mActivity = getCurrentActivity();
            if (mActivity != null) {
                Intent intent = new Intent();
                intent.setClassName(mActivity, className);
                mActivity.startActivity(intent);
            }
        }catch (Exception e){
            throw new JSApplicationIllegalArgumentException("无法打开activity页面："+e.getStackTrace());
        }
    }
}
