import { Button } from "../ui/button";

export const GoogleSignIn = () => {
  return (
    <Button variant="outline" className="py-4 h-12 rounded-2xl hover-lift">
      <div className="flex items-center space-x-1 ">
        <img src="google.png" alt="G" className="h-4 w-4  sm:h-6 sm:w-6 " />
        <h1 className="font-semibold text-sm  sm:text-xl text-muted-foreground pb-1">Google</h1>
      </div>
    </Button>
  );
};
