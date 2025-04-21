import themes from "src/themes";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const Mensagem = styled.Text`
  ${({ theme }) => css`
    color: ${themes.COLORS.GRAY_200};
    font-size: ${themes.FONT_SIZE.MD}px;
    font-weight: ${themes.FONT_FAMILY.REGULAR};
  `}
  text-align: center;
`;
