import useApi from "./services/useApi";
import { URL_ALL } from "./config/urls";
import { Navbar } from '../src/components/ui/navbar';


function App() {

  const data = useApi(URL_ALL);
  
  return (
    <>
      <Navbar />
    </>
  )
}

export default App;
