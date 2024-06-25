/* eslint-disable react/prop-types */
import { useState } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const SelectDataTable = ({ onSelectChange }) => {
    const [selectedValue, setSelectedValue] = useState("10");

    const handleChange = (value) => {
        setSelectedValue(value);
        onSelectChange(value);
    };

    return (
        <label className="flex items-center gap-3">
            Show
            <Select className="rounded-none h-10 mx-2.5 my-0 px-[15px] py-[5px]" value={selectedValue} onValueChange={handleChange}>
                <SelectTrigger className="w-[70px]">
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="10">10</SelectItem>
                    <SelectItem value="25">25</SelectItem>
                    <SelectItem value="50">50</SelectItem>
                    <SelectItem value="100">100</SelectItem>
                </SelectContent>
            </Select>
            entries
        </label>
    );
};

export default SelectDataTable;
