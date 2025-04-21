import themes from "src/themes";
import styled from "styled-components/native";

export const Botao = styled.TouchableOpacity`
  border-radius: 5px;
  height: 46px;
  align-items: center;
  justify-content: center;
  background-color: ${(theme) => themes.COLORS.GREEN_700};
`;

export const BotaoTexto = styled.Text`
  font-family: ${(theme) => themes.FONT_FAMILY.BOLD};
  font-size: ${(theme) => themes.FONT_SIZE.MD}px;
  color: ${(theme) => themes.COLORS.WHITE};
`;
