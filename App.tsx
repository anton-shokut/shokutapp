import React, { useEffect, useState } from 'react';
import {
  Linking,
  SafeAreaView,
  Text,
  View,
} from 'react-native';

const App = () => {
  const [link, setLink] = useState<string|null>(null);

 useEffect(() => {
  const getUrlAsync = async () => {
    const initialUrl = await Linking.getInitialURL();
    setLink(initialUrl)
  };

  getUrlAsync();
 }, [setLink])

  return (
    <SafeAreaView>
      <View>
        <Text>{link || 'No Link'}</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
