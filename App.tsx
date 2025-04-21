import Groups from "@screens/Groups";
import { StatusBar } from "expo-status-bar";
import themed from "src/themes";
import { ThemeProvider } from "styled-components";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { Loading } from "@components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={themed}>
      <StatusBar style="light" translucent backgroundColor="transparent" />
      {fontsLoaded ? <Groups /> : <Loading />}
    </ThemeProvider>
  );
}
