/* eslint-disable react/prop-types */
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";


const AjaxTable = ({ tableHeads, displayedData, }) => {
    return (
        <Table className="text-base text-[color:var(--col-dark-blue)] border-b-[#ccc] border-b border-solid">
            <TableHeader>
                <TableRow>
                    {
                        tableHeads.map((th, index) => (
                            <TableHead key={index}
                                className="
                                font-semibold 
                                text-[color:var(--col-dark-blue)]">
                                    {th}
                                    <button></button>
                                    <button></button>
                                </TableHead>
                        ))
                    }
                </TableRow>
            </TableHeader>
            <TableBody>
                {displayedData.map((country, index) => (
                    <TableRow key={index} className={`${index % 2 ? " hover:bg-[color:var(--col-bg-table-accent)]": "bg-[color:var(--col-bg-table-odd)] hover:bg-[color:var(--col-bg-table-accent-dark)]"} `}>
                        <TableCell>
                            <img src={country.countryInfo.flag} alt={`${country.country} flag`} className="h-auto w-[30px]" />
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

    );
};

export default AjaxTable;
