import * as Notifications from 'expo-notifications';

export async function GetPushNotificationToken(){
  const {granted} = await Notifications.getPermissionsAsync();
  if(!granted) {
    Notifications.requestPermissionsAsync;
  }
  if(granted) {
    const pushToken = await Notifications.getExpoPushTokenAsync();
    console.log('NOTIFICATION TOKEN =>', pushToken.data)
    return pushToken.data;
  }
}