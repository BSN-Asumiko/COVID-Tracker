import useApi from "./services/useApi";
import { URL_ALL } from "./config/urls";
import { Button } from "./components/ui/button";


function App() {

  const data = useApi(URL_ALL);
  
  return (
    <>
      <h1 className="text-3xl font-bold underline">
    Hello world!
      </h1>
      <Button>Click me</Button>
    </>
  )
}

export default App;
