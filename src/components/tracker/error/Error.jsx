import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const Error = () => {
    return (
        <Alert className="my-10" variant="destructive">
            <AlertTitle>Oooops!</AlertTitle>
            <AlertDescription>
                Something went wrong, try again later!
            </AlertDescription>
        </Alert>

    )
}
export default Error