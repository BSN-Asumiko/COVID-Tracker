
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"


const SearchInput = () => {
    return (
        <>
            <Label htmlFor="search" className="flex gap-2 items-center">
                Search
                <Input type="text" name="search" />
            </Label>

        </>
    )
}
export default SearchInput