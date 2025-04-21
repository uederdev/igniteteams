import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import themes from "src/themes";

export type ButtonIconStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: ButtonIconStyleProps;
};

export const Container = styled(TouchableOpacity)`
  height: 56px;
  width: 56px;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background-color: ${(theme) => themes.COLORS.GRAY_500};
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
  size: 24,
  color: type === "PRIMARY" ? themes.COLORS.GREEN_700 : themes.COLORS.RED,
}))``;
