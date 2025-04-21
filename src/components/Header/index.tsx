import { BackButton, Container, ImageButton, Logo } from "./styles";
import { CaretLeft } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";

type Props = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: Props) {
  return (
    <Container>
      {showBackButton && (
        <BackButton>
          <ImageButton />
        </BackButton>
      )}
      <Logo source={require("@assets/logo.png")} />
    </Container>
  );
}
