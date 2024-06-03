import { useEffect } from "react";
import Table from "./components/table/Table";
import axios from "axios";

function App() {
  const getProdutos = async () => {
    const URL_PRODUTOS = "https://dripstore-api-2ych.onrender.com/api/produto";

    try {
      const resulte = await axios.get(URL_PRODUTOS);
      console.log(resulte);
    } catch (error) {
      console.log(`Erro ao logar${error} com async`);
    }
  };

  useEffect(() => {
    getProdutos();
  }, []);

  return (
    <div>
      <Table />
    </div>
  );
}

export default App;
