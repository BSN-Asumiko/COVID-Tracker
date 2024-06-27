/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import useApi from '@/services/useApi';
import { URL_COUNTRIES } from '@/config/urls';
import { mapTableHeadToKey, sortData, filterData } from '@/utils/utils.js';
import usePagination from './usePagination';

const useTracker = () => {
    const {data, loading, error }= useApi(URL_COUNTRIES) || [];
    const [itemsToShow, setItemsToShow] = useState(10);
    const [filter, setFilter] = useState("");
    const [sortedData, setSortedData] = useState([]);
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

    useEffect(() => {
        setSortedData(data);
    }, [data]);

    const handleSelectChange = (value) => {
        setItemsToShow(parseInt(value));
    };

    const handleSort = (th) => {
        const key = mapTableHeadToKey(th);
        if (!key) return;
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        const sortedArray = sortData([...sortedData], key, direction);
        setSortedData(sortedArray);
        setSortConfig({ key, direction });
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

    const filteredDataResult = filterData(sortedData, filter);

    const { paginatedData: displayedData, totalPages, currentPage, handlePageChange } = usePagination(filteredDataResult, itemsToShow);

    return {
        tableHeads,
        displayedData,
        handleSelectChange,
        handlePageChange,
        handleSort,
        sortConfig,
        filter,
        setFilter,
        currentPage,
        totalPages,
        itemsToShow,
        loading,
        error
    };
};

export default useTracker;

