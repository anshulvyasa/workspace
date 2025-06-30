import { auth } from "@/auth";
import { GitHubSignIn } from "@/components/auth/github-signin";
import { GoogleSignIn } from "@/components/auth/google-signin";
import { MagicEmailSignIn } from "@/components/auth/magic-email";
import BackGroundDesign from "@/components/background-design/background-design";
import Header from "@/components/my-custom-component/landing-page/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { redirect } from "next/navigation";

const SignIn = async () => {
  const session = await auth();

  if (session) {
    redirect("/home-page");
  }

  return (
    <section className="min-h-screen relative overflow-hidden">
      <BackGroundDesign />
      <Header/>
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
