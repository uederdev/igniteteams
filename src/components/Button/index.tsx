import { TouchableOpacityProps } from "react-native";
import { Botao, BotaoTexto } from "./styles";

type Props = TouchableOpacityProps & {
  caption: string;
  cor: string;
};

export function Button({ caption, cor, ...rest }: Props) {
  return (
    <Botao>
      <BotaoTexto>{caption}</BotaoTexto>
    </Botao>
  );
}
