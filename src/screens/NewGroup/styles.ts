import { UsersThree } from "phosphor-react-native";
import themes from "src/themes";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  background-color: ${({ theme }) => themes.COLORS.GRAY_700};
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  gap: 8;
`;

export const ImageGroups = styled(UsersThree).attrs(({ theme }) => ({
  size: 56,
  color: themes.COLORS.GREEN_700,
}))`
  align-self: center;
`;
