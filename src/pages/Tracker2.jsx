import AjaxTable from '@/components/tracker/ajaxTable/AjaxTable';
import WidgetHead from '@/components/tracker/widgetHead/WidgetHead';
import WidgetBody from '@/components/tracker/widgetBody/WidgetBody';
import SelectDataTable from '@/components/tracker/ajaxTable/selectDataTable/SelectDataTable';
import SearchInput from '@/components/tracker/ajaxTable/searchInput/SearchInput';
import TablePagination from '@/components/tracker/ajaxTable/tablePagination/TablePagination';
import useTracker from '@/hooks/useTracker';
import Loader from '@/components/tracker/loader/Loader';
import Error from '@/components/tracker/error/Error';

const Tracker2 = () => {
  const {
    tableHeads,
    displayedData,
    handleSelectChange,
    handlePageChange,
    handleSort,
    sortConfig,
    filter,
    setFilter,
    itemsToShow,
    currentPage,
    totalPages,
    loading,
    error
  } = useTracker();



  return (
    <div className="w-[90%]">
      <WidgetHead text="Ajax Data Table - COVID 19 Country Wise State" className="bg-[color:var(--col-body)]" />
      {loading ?
        <Loader />
        : error ?
          <Error />
          :
          <WidgetBody className="flex flex-col max-h-[80vh]" >
            <div className="flex justify-between mb-3">
              <SelectDataTable onSelectChange={handleSelectChange} />
              <SearchInput filter={filter} setFilter={setFilter} />
            </div>
            <div className="flex-1 overflow-y-auto">
              <AjaxTable
                tableHeads={tableHeads}
                displayedData={displayedData}
                handleSort={handleSort}
                sortConfig={sortConfig}
              />
            </div>
            <div className="flex justify-between mt-8  shrink-0">
              <p>Showing {(currentPage - 1) * itemsToShow + 1} to {Math.min(currentPage * itemsToShow, displayedData.length)} of {displayedData.length} entries</p>
              { }
              <TablePagination
                handlePageChange={handlePageChange}
                totalPages={totalPages}
                currentPage={currentPage}
              />
            </div>
          </WidgetBody>
      }
    </div>
  );
};

export default Tracker2;

