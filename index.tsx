import { Image } from 'expo-image';
import { Alert, Linking, Platform, StyleSheet } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { CardList } from '../../components/CardList';
import { View, StatusBar, Button } from 'react-native';


export default function HomeScreen() {
  return (
    <View style={styles.screen}>
      <StatusBar />
     <CardList />
     
    </View>
  );
}

const styles = StyleSheet.create({
 screen: { flex: 1, backgroundColor: '#f6f7fb' },
 button: {backgroundColor: '#071138ff'}
});
