import AjaxTable from '@/components/AjaxTable/AjaxTable'
import WidgetHead from '@/components/Widgets/WidgetHead/WidgetHead';
import WidgetBody from '@/components/Widgets/WidgetBody/WidgetBody';
import SelectDataTable from '@/components/AjaxTable/SelectDataTable/SelectDataTable';
import SearchInput from '@/components/AjaxTable/SearchInput/SearchInput';
import TablePagination from '@/components/AjaxTable/TablePagination/TablePagination';
import useApi from '@/services/useApi';
import { URL_COUNTRIES } from '@/config/urls';
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Tracker2 = () => {
  const data = useApi(URL_COUNTRIES) || [];
  const { page } = useParams();
  const [itemsToShow, setItemsToShow] = useState(10);
  const [currentPage, setCurrentPage] = useState(parseInt(page) || 1);
  const [filter, setFilter] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentPage(parseInt(page) || 1);
  }, [page]);

  const handleSelectChange = (value) => {
    setItemsToShow(parseInt(value));
    setCurrentPage(1);
    navigate(`/tracker/3/1`);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    navigate(`/tracker/3/${pageNumber}`);
  };

  const tableHeads = [
    'Flag',
    'Countries',
    'Cases',
    'NewCases',
    'Deaths',
    'NewDeaths',
    'Recovered',
    'Active',
    'Critical',
    'Tested'
  ];

  const startIndex = (currentPage - 1) * itemsToShow;
  const totalPages = Math.ceil(data.length / itemsToShow);

  const filteredData = data.filter(country =>
    country.country.toLowerCase().includes(filter.toLowerCase())
  );
  
  const displayedData = filteredData.slice(startIndex, startIndex + itemsToShow);


  return (
    <>
      <WidgetHead text="Ajax Data Table - COVID 19 Country Wise State" />
      <WidgetBody>
        <div className="overflow-scroll relative clear-both my-3">
          <div className="flex justify-between mb-3">
            <SelectDataTable onSelectChange={handleSelectChange} />
            <SearchInput filter={filter} setFilter={setFilter} />
          </div>
          <AjaxTable
            tableHeads={tableHeads}
            displayedData={displayedData}
          />
        </div>
        <div className="flex justify-between mt-8">
          <p>Showing {startIndex + 1} to {Math.min(startIndex + itemsToShow, data.length)} of {data.length} entries</p>
          <TablePagination
            handlePageChange={handlePageChange}
            totalPages={totalPages}
            currentPage={currentPage}
          />
        </div>
      </WidgetBody>


    </>
  )
}

export default Tracker2;
