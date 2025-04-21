import { Header } from "@components/Header";
import { Container } from "./styles";
import { HighLight } from "@components/HighLight";
import { GroupCard } from "@components/GroupCard";
import { useState } from "react";
import { FlatList } from "react-native";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

export default function Groups() {
  const [turmas, setTurmas] = useState<string[]>([
    "Turma 01",
    "Turma 02",
    "Turma 03",
    "Turma 04",
    "Turma 05",
    "Turma 06",
    "Turma 07",
    "Turma 08",
    "Turma 09",
  ]);

  return (
    <Container>
      <Header />
      <HighLight titulo="Turmas" subtitulo="Jogue com a sua turma" />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={turmas}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => <GroupCard name={item} />}
        contentContainerStyle={turmas.length === 0 && { flex: 1 }}
        ListEmptyComponent={
          <ListEmpty value="Nenhuma turma cadastrada. Que tal cadastrar alguma?" />
        }
      />
      <Button caption="Criar nova turma" type="PRIMARY" />
    </Container>
  );
}
