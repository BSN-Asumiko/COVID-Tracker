import { useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import useApi from "@/services/useApi";
import { URL_COUNTRIES } from "@/config/urls";
import WidgetHead from "../Widgets/WidgetHead/WidgetHead";
import WidgetBody from "../Widgets/WidgetBody/WidgetBody";
import SelectDataTable from "./SelectDataTable/SelectDataTable";
import SearchInput from "./SearchInput/SearchInput";
import WidgetPagination from "./WidgetPagination/WidgetPagination";

const AjaxTable = () => {
    const data = useApi(URL_COUNTRIES) || [];
    const [itemsToShow, setItemsToShow] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
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

    const handleSelectChange = (value) => {
        setItemsToShow(parseInt(value));
    };


    const startIndex = (currentPage - 1) * itemsToShow;
    const displayedData = data.slice(startIndex, startIndex + itemsToShow);
    const totalPages = Math.ceil(data.length / itemsToShow);

    return (
        <>
            <WidgetHead text="Ajax Data Table - COVID 19 Country Wise State"/>
            <WidgetBody>
                <div className="overflow-scroll relative clear-both my-2">
                    <div className="flex justify-between">
                        <SelectDataTable onSelectChange={handleSelectChange} />
                        <SearchInput />
                    </div>
                    <Table className="text-base">
                        <TableHeader>
                            <TableRow>
                                {
                                    tableHeads.map((th, index) => (
                                        <TableHead key={index}
                                            className="font-semibold"
                                        >{th}</TableHead>
                                    ))
                                }
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {displayedData.map((country, index) => (
                                <TableRow key={index}>
                                    <TableCell>
                                        <img src={country.countryInfo.flag} alt={`${country.country} flag`} className=" h-auto w-[30px]" />
                                    </TableCell>
                                    <TableCell>{country.country}</TableCell>
                                    <TableCell>{country.cases}</TableCell>
                                    <TableCell>{country.todayCases}</TableCell>
                                    <TableCell>{country.deaths}</TableCell>
                                    <TableCell>{country.todayDeaths}</TableCell>
                                    <TableCell>{country.recovered}</TableCell>
                                    <TableCell>{country.active}</TableCell>
                                    <TableCell>{country.critical}</TableCell>
                                    <TableCell className="text-right">{country.tests}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
                <div className="flex justify-between">
                    <p>Showing {startIndex + 1} to {Math.min(startIndex + itemsToShow, data.length)} of {data.length} entries</p>
                    <WidgetPagination 
                        handlePageChange={handlePageChange} 
                        totalPages={totalPages}
                        currentPage={currentPage}
                        />
                </div>
            </WidgetBody>
        </>
    );
};

export default AjaxTable;
