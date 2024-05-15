import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import { Button } from "../ui/button";
import { Input } from "../ui/input";
const SubscriptionCard: React.FC = () => {
    return (
        <Card className="col-span-7 md:col-span-2 flex-row bg-[#3F4554] text-white mx-0 my-0 items-center grid grid-flow-row gap-0">
            <CardHeader className="items-center h-7 p-3">
                <CardTitle className="">Get useful news and hot deals</CardTitle>
                {/* <CardDescription>Card Description</CardDescription> */}
            </CardHeader>
            <CardContent className="mx-0 grid grid-flow-row items-center gap-3 my-0">
                <Input className="h-[70px] bg-white" type="email" placeholder="Email"></Input>
                <Button className="h-[50px]">Subscribe to newsletter</Button>
            </CardContent>
            <CardFooter className="grid grid-flow-row items-center pt-0">
                <center><p>FOLLOW IN SOCIAL NETWORKS</p></center>
            </CardFooter>
        </Card>
    )
}

export default SubscriptionCard;