import { useFonts } from "expo-font";
import { Stack } from "expo-router";
export default function RootLayout() {
  useFonts({
    "AcuminPro-Regular": require("../assets/fonts/Acumin-RPro.otf"),
    "AcuminPro-Bold": require("../assets/fonts/Acumin-BdPro.otf"),
  });
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
