import React, { useEffect, useState } from 'react';
import {
  Linking,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import Config from 'react-native-config';
import { PlayInstallReferrer } from 'react-native-play-install-referrer';
import MapView, { LatLng, Polyline } from 'react-native-maps';
import { Client } from "@googlemaps/google-maps-services-js";
import { decode } from "@googlemaps/polyline-codec";
import { direction } from './direction';

const mapApiClient = new Client();

const decodePolyline = (encoded: string): LatLng[] => {
  return decode(encoded).map(tuple => {
    const [latitude, longitude] = tuple;
    return ({ latitude, longitude } as LatLng);
  })
}

const App = () => {
  const [link, setLink] = useState<string | null>(null);
  const [referrer, setReferrer] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [coordinates, setCoordinates] = useState<LatLng[]>([]);

  useEffect(() => {
    const getUrlAsync = async () => {
      const initialUrl = await Linking.getInitialURL();
      setLink(initialUrl)
    };

    getUrlAsync();
  }, [setLink]);

  useEffect(() => {
    PlayInstallReferrer.getInstallReferrerInfo((installReferrerInfo: any, error: any) => {
      if (error) {
        setError(error);
        setError(error);
        setError(error);
      } else {
        setReferrer(installReferrerInfo);
      }
    });
  }, []);

  useEffect(() => {
    const p = Promise.resolve({ data: direction });
    // const p = mapApiClient.directions({
    //   params: {
    //     key: Config.GOOGLE_MAPS_API_KEY,
    //     origin: {
    //       lat: 40.5361173,
    //       lng: -81.56151369999999
    //     },
    //     destination: {
    //       lat: 40.5300047,
    //       lng: -81.3744083
    //     }
    //   },
    // });

    p.then(res => {
      const { data } = res;
      const coordinates = data.routes
        .flatMap(route => route.legs
          .flatMap(leg => leg.steps
            .flatMap(step => decodePolyline(step.polyline.points))));
      setCoordinates(coordinates);
    })
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Text>{link || 'No Link'}</Text>
      </View>
      {referrer && (
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
      {error && (
        <View>
          <Text>{"Failed to get install referrer info!"}</Text>
          <Text>{"Response code: " + error.responseCode}</Text>
          <Text>{"Message: " + error.message}</Text>
        </View>
      )}

      <MapView
        style={{
          flex: 1,
        }}
        showsUserLocation
        initialRegion={{
          latitude: 38.807034,
          longitude: -121.354969,
          latitudeDelta: 0.009,
          longitudeDelta: 0.009,
        }}
      >
        <Polyline
          coordinates={coordinates}
          strokeColor="blue" // fallback for when `strokeColors` is not supported by the map-provider
          strokeWidth={6}
          fillColor="yellow"
        />
      </MapView>

    </SafeAreaView >
  );
};

export default App;
