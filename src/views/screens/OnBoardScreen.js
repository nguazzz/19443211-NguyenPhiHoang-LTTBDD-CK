import { useEffect, useRef } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Animated,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../../consts/colors";
import { SecondaryButton } from "../components/Button";

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnim,
      }}
    >
      {props.children}
    </Animated.View>
  );
};

const OnBoardScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1604147706283-d7119b5b822c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d2hpdGV8ZW58MHx8MHx8&w=1000&q=80",
      }}
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <View
          style={{
            height: "90%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={style.textContainer}>
            <View
              style={{
                borderRadius: 15,
                padding: 5,
              }}
            >
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "bold",
                  textAlign: "center",
                  color: COLORS.dark,
                }}
              >
                A premium online store for sporter and their stylish choices
              </Text>
            </View>
            <View
              style={{
                borderRadius: 15,
                padding: 10,
                backgroundColor: COLORS.white,
              }}
            >
              <Image
                source={require("../../assets/catergories/pinarello.png")}
              ></Image>
            </View>

            <View
              style={{
                borderRadius: 15,
                padding: 5,
              }}
            >
              <FadeInView style={{}}>
                <Text
                  style={{
                    fontSize: 32,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  POWER BIKE SHOP
                </Text>
              </FadeInView>
            </View>

            <View
              style={{
                alignItems: "center",
              }}
            >
              <SecondaryButton
                onPress={() => navigation.navigate("Home")}
                title="Get started"
                style={{
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const style = StyleSheet.create({
  textContainer: {
    flex: 1,
    paddingHorizontal: 50,
    justifyContent: "space-between",
    paddingBottom: 40,
  },
});

export default OnBoardScreen;
