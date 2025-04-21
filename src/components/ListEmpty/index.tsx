import { Container, Mensagem } from "./styles";

type Props = {
  value: string;
};

export function ListEmpty({ value }: Props) {
  return (
    <Container>
      <Mensagem>{value}</Mensagem>
    </Container>
  );
}
