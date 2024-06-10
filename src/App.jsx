import { useEffect, useState } from "react";
import Table from "./components/table/Table";
import axios from "axios";

function App() {

  const [data, setData ] = useState([])


  const getProdutos = async () => {
    const URL_PRODUTOS = "https://dripstore-api-2ych.onrender.com/api/produto";

    try {
      const response = await axios.get(URL_PRODUTOS);
      console.log(response.data);
      setData(response.data)
    } catch (error) {
      console.log(`Erro ao buscar o produto: ${error}`);
    }
  };

  useEffect(() => {
    getProdutos();
  }, []);

  return (
    <div>
       <Table data={data}/>)
      
    </div>
  );
}

export default App;
