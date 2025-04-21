import { Container, SubTitulo, Titulo } from "./styles";

type Props = {
  titulo: string;
  subtitulo: string;
};

export function HighLight({ titulo, subtitulo }: Props) {
  return (
    <Container>
      <Titulo>{titulo}</Titulo>
      <SubTitulo>{subtitulo}</SubTitulo>
    </Container>
  );
}
