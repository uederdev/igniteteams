import { TouchableOpacityProps } from "react-native";
import { Container, ImagemTurma, NomeTurma } from "./styles";

type Props = TouchableOpacityProps & {
  name: string;
};

export function GroupCard({ name, ...rest }: Props) {
  return (
    <Container {...rest}>
      <ImagemTurma />
      <NomeTurma>{name}</NomeTurma>
    </Container>
  );
}
