import { TouchableOpacityProps } from "react-native";
import { BotaoTexto, ButtonTypeProps, Container } from "./styles";

type Props = TouchableOpacityProps & {
  caption: string;
  type?: ButtonTypeProps;
};

export function Button({ caption, type = "PRIMARY", ...rest }: Props) {
  return (
    <Container {...rest} type={type}>
      <BotaoTexto>{caption}</BotaoTexto>
    </Container>
  );
}
