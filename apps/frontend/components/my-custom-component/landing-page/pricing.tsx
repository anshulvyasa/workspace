import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { plans } from "@/lib/config";
import { Check, Divide, Star } from "lucide-react";
import { features } from "process";

const Pricing = () => {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-bold mb-4 text-3xl md:text-4xl">
            Simple, transparent <span className="gradient-text">pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect plan for your team. Start free and scale as you
            grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto gap-8 ">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`hover-lift relative bg-background ${plan.popular ? "border border-primary" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="flex items-center bg-primary text-primary-foreground rounded-full px-4 py-1 text-sm font-medium">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="text-4xl font-bold">
                  {plan.price}/
                  <span className="text-lg text-muted-foreground font-normal">
                    {plan.period}
                  </span>
                </div>
                <CardDescription className="text-base">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {plan.popular ? (
                  <Button className="w-full">{plan.buttonText}</Button>
                ) : (
                  <Button variant="outline" className="w-full">
                    {plan.buttonText}
                  </Button>
                )}


                <ul className="space-y-3">
                    {plan.features.map((features,index)=>(
                        <li key={index} className="flex items-center" >
                            <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0"/>
                            <span className="text-muted-foreground">{features}</span>
                        </li>
                    ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
