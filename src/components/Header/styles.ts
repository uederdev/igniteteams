import { CaretLeft } from "phosphor-react-native";
import themes from "src/themes";
import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Logo = styled.Image`
  width: 46px;
  height: 56px;
`;

export const BackButton = styled.TouchableOpacity.attrs(({ theme }) => ({
  activeOpacity: 0.5,
}))`
  flex: 1;
`;

export const ImageButton = styled(CaretLeft).attrs(({ theme }) => ({
  color: themes.COLORS.WHITE,
  size: 32,
}))``;
