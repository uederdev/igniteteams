import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const Label = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.COLORS.RED_DARK};
  font-weight: bold;
`;
