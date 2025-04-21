import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import themes from "src/themes";
import { UsersThree } from "phosphor-react-native";

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 66px;
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => themes.COLORS.GRAY_500};
  padding: 24px;
  margin-bottom: 6px;
`;

export const NomeTurma = styled.Text`
  ${({ theme }) => css`
    font-size: ${themes.FONT_SIZE.MD}px;
    color: ${themes.COLORS.GRAY_200};
    font-family: ${themes.FONT_FAMILY.REGULAR};
  `};
`;

export const ImagemTurma = styled(UsersThree).attrs(({ theme }) => ({
  size: 32,
  color: themes.COLORS.GREEN_700,
  weight: "fill",
}))`
  margin-right: 15px;
`;
