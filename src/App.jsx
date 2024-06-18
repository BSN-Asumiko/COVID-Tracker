import useApi from "./services/useApi";
import { URL_ALL } from "./config/urls";


function App() {

  const data = useApi(URL_ALL);
  
  return (
    <>
      <h1 className="text-3xl font-bold underline">
    Hello world!
      </h1>
    </>
  )
}

export default App;
