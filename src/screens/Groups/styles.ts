import themes from "src/themes";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => themes.COLORS.GRAY_600};
  padding: 24px;
  gap: 5px;
`;
