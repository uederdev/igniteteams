import { Header } from "@components/Header";
import { Container, Content, ImageGroups } from "./styles";
import { HighLight } from "@components/HighLight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

export function NewGroup() {
  return (
    <Container>
      <Header showBackButton />
      <Content>
        <ImageGroups />
        <HighLight
          titulo="Turmas"
          subtitulo="crie uma turma para adicionar pessoas"
        />
        <Input placeholder="Informe o nome da turma" />
        <Button caption="Criar" />
      </Content>
    </Container>
  );
}
