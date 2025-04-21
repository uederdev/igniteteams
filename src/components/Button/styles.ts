import { TouchableOpacity } from "react-native";
import themes from "src/themes";
import styled, { css } from "styled-components/native";

export type ButtonTypeProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: ButtonTypeProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? themes.COLORS.GREEN_700 : themes.COLORS.RED_DARK};
`;

export const BotaoTexto = styled.Text`
  ${({ theme }) => css`
    font-family: ${themes.FONT_FAMILY.BOLD};
    font-size: ${themes.FONT_SIZE.MD}px;
    color: ${themes.COLORS.WHITE};
  `};
`;
