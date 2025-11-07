import React from 'react';
import { View, Text, Image, StyleSheet, Button, Linking } from 'react-native';
 
// export par défaut
export default function CardItem({ title, description, image, url }) {
 return (
   <View style={styles.card}>
     <Image source={{ uri: image }} style={styles.cover} />
     <View style={styles.body}>
       <Text style={styles.title}>{title}</Text>
       <Text style={styles.desc}>{description}</Text>
     </View>
     <Button title='Press Me' onPress={async () => {
           const ok = await Linking.canOpenURL(url);
           if (ok) {
             await Linking.openURL(url);
           }
          }}/>
   </View>
 );
}
 
const styles = StyleSheet.create({
 card: {
   width: '100%',
   backgroundColor: '#fff',
   borderRadius: 12,
   overflow: 'hidden',
   marginBottom: 16,
   elevation: 3, // ombre Android
 },
 cover: { width: '100%', height: 150 },
 body: { padding: 12 },
 title: { fontSize: 16, fontWeight: 'bold', marginBottom: 6 },
 desc: { color: '#555' }
});