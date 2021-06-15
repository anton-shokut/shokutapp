import React, { useEffect, useState } from 'react';
import {
  Linking,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import { PlayInstallReferrer } from 'react-native-play-install-referrer';

const App = () => {
  const [link, setLink] = useState<string | null>(null);
  const [referrer, setReferrer] = useState<any>(null);
  const [error, setError] = useState<any>(null);

 useEffect(() => {
  const getUrlAsync = async () => {
    const initialUrl = await Linking.getInitialURL();
    setLink(initialUrl)
  };

  getUrlAsync();
 }, [setLink])

 useEffect(() => {
  PlayInstallReferrer.getInstallReferrerInfo((installReferrerInfo: any, error: any) => {
    if(error) {
      setError(error); 
    } else {
      setReferrer(installReferrerInfo);
    }
  });
 }, [])

  return (
    <SafeAreaView>
      <View>
        <Text>{link || 'No Link'}</Text>
      </View>
      { referrer && (
        <View>
          <Text>{"Install referrer = " + referrer.installReferrer}</Text>
          <Text>{"Referrer click timestamp seconds = " + referrer.referrerClickTimestampSeconds}</Text>
          <Text>{"Install begin timestamp seconds = " + referrer.installBeginTimestampSeconds}</Text>
          <Text>{"Referrer click timestamp server seconds = " + referrer.referrerClickTimestampServerSeconds}</Text>
          <Text>{"Install begin timestamp server seconds = " + referrer.installBeginTimestampServerSeconds}</Text>
          <Text>{"Install version = " + referrer.installVersion}</Text>
          <Text>{"Google Play instant = " + referrer.googlePlayInstant}</Text>
        </View>
      )}
      { error && (
        <View>
          <Text>{"Failed to get install referrer info!"}</Text>
          <Text>{"Response code: " + error.responseCode}</Text>
          <Text>{"Message: " + error.message}</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default App;
