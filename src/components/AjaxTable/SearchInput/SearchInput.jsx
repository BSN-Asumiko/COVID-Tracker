/* eslint-disable react/prop-types */
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const SearchInput = ({ filter, setFilter }) => {
    return (
        <>
            <Label htmlFor="search" className="flex gap-2 items-center">
                Search
                <Input
                    type="text"
                    name="search"
                    value={filter}
                    onChange={e => setFilter(e.target.value)}
                />
            </Label>
        </>
    );
};

export default SearchInput;