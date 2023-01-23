import { StyleSheet, Text, View,FlatList } from "react-native";
import Header from "../../components/Header";
import Balance from "../../components/Balance";
import Movements from "../../components/Movements";
import Actions from "../../components/Actions";

const list = [
  {
    id: 1,
    label: "Boleto conta luz",
    value: "300,50",
    date: "20/01/2023",
    type: 0 //despesas
  },
  {
    id: 2,
    label: "Pix Leandro",
    value: "5.000,00",
    date: "22/01/2023",
    type: 1 //entrada
  },
  {
    id: 3,
    label: "Salário",
    value: "15.000,00",
    date: "21/01/2023",
    type: 1 //entrada
  },
];

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Nycollas Capelum" />

      <Balance saldo="4.000,00" gastos="-500,00" />

      <Actions/>

      <Text style={styles.title}>Últimas Movimentações</Text>

    <FlatList style={styles.list}
    data={list}
    keyExtractor={(item) => String(item.id)}
    showsVerticalScrollIndicator={false}
    renderItem={({item}) => <Movements data={item} />}
    />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    margin:14,
  },
  list:{
    marginStart:14,
    marginEnd:14,
  }
});
