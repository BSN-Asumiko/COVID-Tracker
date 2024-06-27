import { URL_HISTORY } from "@/config/urls";
import { transformData } from "@/utils/transformData";
import useApi from "@/services/useApi";


const Tracker6 = () => {

  const { data } = useApi(URL_HISTORY);
  console.log(data);
  let transformedData = transformData(data);
  console.log(transformedData);
  // let displayData = transformData.sort((a, b) => b.deaths - a.deaths).slice(0, 10); 
  return (
    <div>Tracker6</div>
  )
}

export default Tracker6;