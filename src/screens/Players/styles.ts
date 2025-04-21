import themes from "src/themes";
import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => themes.COLORS.GRAY_700};
  padding: 24px;
`;

export const Form = styled.View`
  width: 100%;
  background-color: ${({ theme }) => themes.COLORS.GRAY_700};
  flex-direction: row;
  justify-content: center;
  border-radius: 6px;
`;
