import themes from "src/themes";
import styled from "styled-components/native";

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const Mensagem = styled.Text`
  color: ${(theme) => themes.COLORS.GRAY_200};
  font-size: ${(theme) => themes.FONT_SIZE.MD}px;
  font-weight: ${(theme) => themes.FONT_FAMILY.REGULAR};
  text-align: center;
`;
