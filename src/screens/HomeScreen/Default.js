import React from "react";
import { View, Text, ScrollView , StyleSheet, Platform} from "react-native";
import { theme } from "../../theme";
import { Subheading } from "react-native-paper"
const DefaultScreen = () => {
    return (
        <View
            style={{ flex: 1, backgroundColor: theme.colors.primary }}
        >
            <ScrollView
                style={{
                    backgroundColor: theme.colors.text,
                    borderTopRightRadius: theme.roundness,
                    borderTopLeftRadius: theme.roundness,
                    paddingTop: '5%',
                }}
                keyboardShouldPersistTaps={'always'}
                contentContainerStyle={{ paddingBottom: 400 }}
            >
                <Subheading
                    theme={{ colors: { text: 'gray' } }}
                    style={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: 20,
                        paddingBottom: 10,
                        color: theme.colors.primary
                    }}
                >
                    We are one City
          </Subheading>
          <View>
              <View style={styles.containerStyle}>
                  <Text>Ucity</Text>

              </View>
              <View style={styles.containerStyle}>
                  <Text>Ucity</Text>

              </View>
              <View style={styles.containerStyle}>
                  <Text>Ucity</Text>

              </View>
          </View>

            </ScrollView>
        </View>


    )
}

const styles = StyleSheet.create({
    containerStyle:{
        backgroundColor:theme.colors.primary,
        borderRadius:12,
        margin:20,
        paddingLeft:Platform.OS === "web"?30:20,
        paddingTop:Platform.OS === "web"?20:20,
        paddingBottom:Platform.OS ==="web"?20:20,
        paddingRight:20
    },
})
export default DefaultScreen
