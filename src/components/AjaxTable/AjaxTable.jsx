/* eslint-disable react/prop-types */
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";


const AjaxTable = ({ tableHeads, displayedData, handleSort, sortConfig }) => {
    return (
        <Table className="text-base text-[color:var(--col-dark-blue)] border-b-[#ccc] border-b border-solid">
            <TableHeader>
                <TableRow>
                    {
                        tableHeads.map((th, index) => (
                            <TableHead key={index}
                                className="
                                font-semibold 
                                text-[color:var(--col-dark-blue)] ">
                                <button className="flex" type="button" onClick={() => handleSort(th)}>
                                    <span className="sr-only">sort data per {th}</span>
                                    {th}
                                    <img className="w-5" src={`/public/assets/images/${sortConfig.direction === 'ascending' ? 'sort_asc.png' : 'sort_desc.png'}`} alt="sort icon" />
                                </button>
                            </TableHead>
                        ))
                    }
                </TableRow>
            </TableHeader>
            <TableBody>
                {displayedData.map((country, index) => (
                    <TableRow key={index} className={`${index % 2 ? " hover:bg-[rgb(var(--col-bg-table-accent))]" : "bg-[rgb(var(--col-bg-table-odd))] hover:bg-[rgb(var(--col-bg-table-accent-dark))]"} `}>
                        <TableCell className={` ${sortConfig.key === 'country' ? 'sorted-column-rgba' : ''}`}>
                            <img src={country.countryInfo.flag} alt={`${country.country} flag`} className="h-auto w-[30px]" />
                        </TableCell>
                        <TableCell className={` ${sortConfig.key === 'country' ? 'sorted-column-rgba' : ''}`}>{country.country}</TableCell>
                        <TableCell className={` ${sortConfig.key === 'cases' ? 'sorted-column-rgba' : ''}`}>{country.cases}</TableCell>
                        <TableCell className={` ${sortConfig.key === 'todayCases' ? 'sorted-column-rgba' : ''}`}>{country.todayCases}</TableCell>
                        <TableCell className={` ${sortConfig.key === 'deaths' ? 'sorted-column-rgba' : ''}`}>{country.deaths}</TableCell>
                        <TableCell className={` ${sortConfig.key === 'todayDeaths' ? 'sorted-column-rgba' : ''}`}>{country.todayDeaths}</TableCell>
                        <TableCell className={` ${sortConfig.key === 'recovered' ? 'sorted-column-rgba' : ''}`}>{country.recovered}</TableCell>
                        <TableCell className={` ${sortConfig.key === 'active' ? 'sorted-column-rgba' : ''}`}>{country.active}</TableCell>
                        <TableCell className={` ${sortConfig.key === 'critical' ? 'sorted-column-rgba' : ''}`}>{country.critical}</TableCell>
                        <TableCell className={`text-right ${sortConfig.key === 'tests' ? 'sorted-column-rgba' : ''}`}>{country.tests}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>

    );
};

export default AjaxTable;
