import themes from "src/themes";
import styled from "styled-components/native";

export const Container = styled.View`
  align-items: center;
  margin: 32px 0;
  width: 100%;
`;

export const Titulo = styled.Text`
  font-family: ${({ theme }) => themes.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => themes.FONT_SIZE.XL}px;
  color: ${({ theme }) => themes.COLORS.WHITE};
  text-align: center;
`;

export const SubTitulo = styled.Text`
  font-family: ${({ theme }) => themes.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => themes.FONT_SIZE.MD}px;
  color: ${({ theme }) => themes.COLORS.GRAY_300};
  text-align: center;
`;
