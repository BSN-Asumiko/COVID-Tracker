import { URL_HISTORY } from "@/config/urls";
import { getTopCountriesByCases } from "@/utils/transformData";

import useApi from "@/services/useApi";
import LinearGrafic from "@/components/tracker/linearGrafic/LinearGrafic";
import Loader from "@/components/tracker/loader/Loader";
import Error from "@/components/tracker/error/Error";


const Tracker6 = () => {

  const { data, loading, error } = useApi(URL_HISTORY);

  const topCountries = getTopCountriesByCases(data, 6);


  return (
      loading ? 
      <Loader />
      : error ?
      <Error />
      : 
      <LinearGrafic country={topCountries[0]}/>
  )
}

export default Tracker6;