const BackGroundDesign = () => {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      <div className="absolute left-1/4 top-1/4 w-72 h-72 rounded-full animate-float bg-primary/10 blur-3xl" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />
    </div>
  );
};

export default BackGroundDesign;
