import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { FaGithub } from "react-icons/fa";

export const GitHubSignIn = () => {
  return (
    <Button variant="outline" className="py-4 h-12 rounded-2xl hover-lift">
      <div className="flex items-center space-x-1 ">
        <FaGithub size={26} />
        <h1 className="font-semibold text-sm sm:text-xl text-muted-foreground pb-1">
          GitHub
        </h1>
      </div>
    </Button>
  );
};
