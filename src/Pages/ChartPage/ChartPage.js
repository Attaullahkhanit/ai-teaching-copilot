import React, { useEffect } from 'react';
import { ZIMKitManager, Common } from '@zegocloud/zimkit-react';
import '@zegocloud/zimkit-react/index.css';
import Dashbaord from '../Dashboard/Dashboard/Dashboard';

const ChartPage = () => {
  const appConfig = {
    appID: 1533675326,        // The AppID you get from the ZEGOCLOUD admin console.
    serverSecret: 'wss://webliveroom1533675326-api.coolzcloud.com/ws' // The serverSecret you get from ZEGOCLOUD Admin Console.
  };

  const userInfo = {
    userID: 'TeachingCopilot',       // Your ID as a user.
    userName: 'TC Helper',     // Your name as a user.
    userAvatarUrl: 'http://teachingcopilot.com/assets/images/t-c-logo.png' // The image you set as a user avatar must be network images. e.g., https://storage.zego.im/IMKit/avatar/avatar-0.png
  };

  useEffect(() => {
    const zimKit = new ZIMKitManager();
    const token = zimKit.generateKitTokenForTest(appConfig.appID, appConfig.serverSecret, userInfo.userID);

    const initializeZimKit = async () => {
      await zimKit.init(appConfig.appID);
      await zimKit.connectUser(userInfo, token);
    };

    initializeZimKit();
  }, []);

  return (
    <Dashbaord> 
      <Common></Common>
    </Dashbaord>
  );
};

export default ChartPage;
