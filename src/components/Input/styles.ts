import { TextInput } from "react-native";
import themes from "src/themes";
import styled, { css } from "styled-components/native";

export const Container = styled(TextInput)`
  padding: 16px;
  min-height: 56px;
  max-height: 56px;
  border-radius: 6px;
  ${({ theme }) => css`
    font-size: ${themes.FONT_SIZE.LG}px;
    color: ${themes.COLORS.WHITE};
    font-family: ${themes.FONT_FAMILY.REGULAR};
    background-color: ${themes.COLORS.GRAY_500};
  `}
`;
