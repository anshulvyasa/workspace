import { clients } from "@/lib/config";

const Clients = () => {
  const repeatedClients = [...clients, ...clients];

  return (
    <section className="py-16 border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-muted-foreground text-lg">
            Trusted by teams at leading companies worldwide
          </p>
        </div>

        <div className="overflow-hidden relative">
          <div className="flex animate-slide-left whitespace-nowrap w-max">
            {repeatedClients.map((client, index) => (
              <div
                key={index}
                className="mx-8 px-6 py-4 bg-background rounded-lg border border-border/50 text-nowrap shrink-0 hover-lift "
              >
                <div className="text-xl font-semibold text-muted-foreground">
                  {client}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
