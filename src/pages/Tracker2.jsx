import AjaxTable from '@/components/ajaxTable/AjaxTable';
import WidgetHead from '@/components/widgets/WidgetHead';
import WidgetBody from '@/components/widgets/WidgetBody';
import SelectDataTable from '@/components/ajaxTable/SelectDataTable';
import SearchInput from '@/components/ajaxTable/SearchInput';
import TablePagination from '@/components/ajaxTable/TablePagination';
import useTracker from '@/hooks/useTracker';

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
  } = useTracker();



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
            handleSort={handleSort}
            sortConfig={sortConfig}
          />
        </div>
        <div className="flex justify-between mt-8">
          <p>Showing {(currentPage - 1) * itemsToShow + 1} to {Math.min(currentPage * itemsToShow, displayedData.length)} of {displayedData.length} entries</p>
          <TablePagination
            handlePageChange={handlePageChange}
            totalPages={totalPages}
            currentPage={currentPage}
          />
        </div>
      </WidgetBody>
    </>
  );
};

export default Tracker2;

