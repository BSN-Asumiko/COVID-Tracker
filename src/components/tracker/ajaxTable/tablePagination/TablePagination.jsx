/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

const TablePagination = ({ totalPages, currentPage }) => {

    const getPagination = () => {
        const pages = [];
        const visiblePages = 5;

        if (totalPages <= visiblePages) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            if (currentPage <= 3) {
                pages.push(1, 2, 3, 4, '...', totalPages);
            } else if (currentPage > totalPages - 3) {
                pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
            } else {
                pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
            }
        }
        return pages;
    };

    const paginationItems = getPagination();

    return (
        <Pagination className="w-auto justify-end mx-1">
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                        as={Link}
                        to={`/tracker/2/${Math.max(currentPage - 1, 1)}`}
                    />
                </PaginationItem>
                {paginationItems.map((page, index) => (
                    <PaginationItem key={index}>
                        {page === '...' ? (
                            <PaginationEllipsis />
                        ) : (
                            <PaginationLink as={Link} to={`/tracker/2/${page}`}>
                                {page}
                            </PaginationLink>
                        )}
                    </PaginationItem>
                ))}
                <PaginationItem>
                    <PaginationNext
                        as={Link}
                        to={`/tracker/2/${Math.min(currentPage + 1, totalPages)}`}/>
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
};

export default TablePagination;

