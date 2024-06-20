import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const usePagination = (data, itemsPerPage) => {
    const { page } = useParams();
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(parseInt(page) || 1);
    const [paginatedData, setPaginatedData] = useState([]);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        setPaginatedData(data.slice(startIndex, endIndex));
        setTotalPages(Math.ceil(data.length / itemsPerPage));
    }, [data, itemsPerPage, currentPage]);

    useEffect(() => {
        setCurrentPage(parseInt(page) || 1);
    }, [page]);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        navigate(`/tracker/2/${pageNumber}`);
    };

    return { paginatedData, totalPages, currentPage, handlePageChange };
};

export default usePagination;
