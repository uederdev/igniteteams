import themes from "src/themes";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(theme) => themes.COLORS.GRAY_700};
`;

export const LoadIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: themes.COLORS.GREEN_700,
  size: "large",
}))``;
