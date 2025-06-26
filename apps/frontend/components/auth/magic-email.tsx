import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export const MagicEmailSignIn = () => {
    return <section className="pb-8 pt-4 flex flex-col space-y-2">
               <Label htmlFor="email" className="mb-2 text-sm sm:text-[15px] text-muted-foreground">Enter Your Email</Label>
              <Input type="email" id="email" placeholder="example@gmail.com"/>
              <Button  className="font-semibold text-sm sm:text-xl text-muted">Send Email</Button>
    </section>
};
