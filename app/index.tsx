import { View, Text, ImageBackground, StyleSheet } from "react-native";
import React from "react";
import beachImage from "@/assets/meditation-images/beach.webp";
import "../global.css";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "expo-router";
import AppGradient from "@/components/AppGradient";

const App = () => {
  const router = useRouter();
  return (
    <View className="flex-1">
      <ImageBackground
        className="flex-1"
        source={beachImage}
        resizeMode="cover"
      >
        <AppGradient colors={["rgba(0, 0, 0, 0.4)", "rgba(0, 0, 0, 0.8)"]}>
          {/* iOS specific view for rendering content within safe area boundaries: all padding rules will be ignored on other devices */}
          <SafeAreaView className="flex-1 px-1 justify-between">
            <View>
              <Text className="text-center text-white font-bold text-4xl">
                Simple Meditation
              </Text>
              <Text className="text-center text-white text-regular text-2xl mt-3">
                Simplifying Meditation for Everyone
              </Text>
            </View>

            <View>
              <CustomButton
                onPress={() => router.push("/nature-meditate")}
                title="Get Started"
              />
            </View>

            <StatusBar style="light" />
          </SafeAreaView>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default App;
