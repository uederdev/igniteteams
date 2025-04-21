import { Header } from "@components/Header";
import { Container, Form } from "./styles";
import { HighLight } from "@components/HighLight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { View } from "react-native";

export function Players() {
  return (
    <Container>
      <Header showBackButton />

      <HighLight
        titulo="Nome da turma"
        subtitulo="adicione a galera e separe os times"
      />

      <Form>
        <Input
          style={{ flex: 1, borderTopEndRadius: 0, borderBottomEndRadius: 0 }}
          placeholder="Nome da pessoa"
          autoCorrect={false}
          returnKeyType="done"
        />
        <ButtonIcon
          icon="add"
          style={{
            borderTopStartRadius: 0,
            borderBottomStartRadius: 0,
          }}
        />
      </Form>
    </Container>
  );
}
