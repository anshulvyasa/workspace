import { GitHubSignIn } from "@/components/auth/github-signin";
import { GoogleSignIn } from "@/components/auth/google-signin";
import { MagicEmailSignIn } from "@/components/auth/magic-email";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SignIn = () => {
  return (
    <section className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5 z-0" />
      <div className="absolute left-1/4 top-1/4 w-72 h-72 rounded-full animate-float bg-primary/10 blur-3xl z-0" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-float z-0"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative z-10 flex justify-center items-center min-h-screen w-full">
        <Card className="bg-background/20  w-[90vw] max-w-sm">
          <CardHeader className="text-center -my-4">
            <CardTitle className="gradient-text p-2 font-bold text-xl sm:text-2xl md:text-3xl">
              Sign in
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col justify-center ">
            <MagicEmailSignIn />
            <div className="flex  justify-center items-center space-x-2  ">
              <GoogleSignIn />
              <GitHubSignIn />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SignIn;
