/*
* File: Nevjegy.js
* Author: Takács Dániel
* Copyright: 2024, Takács Dániel
* Group: Szoft II/2/N
* Date: 2024-04-10
* Github: https://github.com/danieltakacs1/
* Licenc: GNU GPL
*/

import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function Nevjegy() {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
          <Text style={styles.titleText}>Takács Dániel, SZOFT II/2/N, 2024.04.10.</Text>
          <Button
              title='Versenyzok'
              onPress={() => navigation.navigate("Versenyzok")}
          />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 200,
  },
});
