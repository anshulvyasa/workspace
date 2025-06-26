import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { footerLinks } from "@/lib/config";
import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border/50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1  lg:grid-cols-6 gap-8 mb-12">
          <div className="lg:col-span-2">
            {/* logo and company info  */}
            <div className="flex items-center mb-4 space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm font-bold">W</span>
              </div>
              <span className="gradient-text font-bold text-xl">WorkSpace</span>
            </div>

            <p className="text-muted-foreground max-w-sm mb-6">
              Empowering teams worldwide with the ultimate collaboration and
              productivity platform.
            </p>

            {/* newsletter  */}
            <div className="space-y-2">
              <p className="font-bold ">Stay Updated</p>
              <div className="flex space-x-2">
                <Input placeholder="Enter your email" className="flex-1" />
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors duration-2000"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info  */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 p-6 bg-background rounded-lg border border-border/50 ">
          <div className="flex items-center space-x-3">
            <Mail className="h-4 w-4 text-primary" />
            <div>
              <p className="font-semibold">Email</p>
              <p className="text-muted-foreground">anshulvtech121@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Phone className="h-4 w-4 text-primary" />
            <div>
              <p className="font-semibold">Phone</p>
              <p className="text-muted-foreground">7355279333</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="w-4 h-4 text-primary" />
            <div>
              <p className="font-semibold">Location</p>
              <p className="text-muted-foreground">
                Orai,jalaun ,pincode:285001
              </p>
            </div>
          </div>
        </div>


         {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/50">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2024 Workspace. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Twitter className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Github className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Linkedin className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
