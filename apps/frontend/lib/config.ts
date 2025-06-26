export const navigation = [
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "About", href: "#about" },
];

export const clients = [
  "TechCorp",
  "InnovateLab",
  "DataFlow",
  "CloudSync",
  "DevTools",
  "SmartWork",
  "NextGen",
  "CodeBase",
  "WorkFlow",
  "TeamSync",
  "ProActive",
  "DigitalEdge",
];

import {
  FileText,
  Users,
  Calendar,
  MessageSquare,
  BarChart3,
  Zap,
  Shield,
  Globe,
  Smartphone,
} from "lucide-react";

export const features = [
  {
    icon: FileText,
    title: "Rich Document Editor",
    description:
      "Create beautiful documents with our powerful editor. Support for blocks, tables, and multimedia content.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Work together in real-time with your team. Comments, mentions, and live editing capabilities.",
  },
  {
    icon: MessageSquare,
    title: "Integrated Chat",
    description:
      "Communicate seamlessly without leaving your workspace. Direct messages and team channels.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Get insights into your team productivity with detailed analytics and reporting tools.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Bank-grade security with end-to-end encryption and compliance certifications.",
  },
  {
    icon: Globe,
    title: "Global Access",
    description:
      "Access your workspace from anywhere with our cloud-based platform and offline sync.",
  },
];

export const testimonials = [
  {
    content:
      "Workspace has completely transformed how our team collaborates. The real-time editing and project management features are game-changers.",
    author: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp",
    avatar: "SJ",
  },
  {
    content:
      "The integration capabilities are outstanding. We've connected all our tools and now have a single source of truth for our projects.",
    author: "Michael Chen",
    role: "Engineering Lead",
    company: "InnovateLab",
    avatar: "MC",
  },
  {
    content:
      "Finally, a platform that scales with our needs. From small teams to enterprise deployment, Workspace handles it all beautifully.",
    author: "Emily Rodriguez",
    role: "Operations Director",
    company: "DataFlow",
    avatar: "ER",
  },
  {
    content:
      "The mobile app keeps our remote team connected. I can manage projects and communicate with my team from anywhere.",
    author: "David Park",
    role: "Team Lead",
    company: "CloudSync",
    avatar: "DP",
  },
  {
    content:
      "Security was our main concern, but Workspace exceeded our expectations. Enterprise-grade security with amazing usability.",
    author: "Lisa Thompson",
    role: "IT Director",
    company: "SecureWork",
    avatar: "LT",
  },
  {
    content:
      "The automation features have saved us countless hours. Our workflows are now streamlined and error-free.",
    author: "James Wilson",
    role: "Process Manager",
    company: "EfficiencyPlus",
    avatar: "JW",
  },
];

export const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for individuals and small teams",
    features: ["Up to 5 team members", "10GB storage", "Community support"],
    buttonText: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "$12",
    period: "per user/month",
    description: "Advanced features for growing teams",
    features: [
      "Unlimited team members",
      "100GB storage",
      "Community support",
      "Collaboration",
    ],
    buttonText: "Start Free Trial",
    popular: true,
  },
];

export const footerLinks = {
  Product: ["Features", "Pricing", "Enterprise", "Security", "Integrations"],
  Company: ["About Us", "Careers", "Blog", "Press", "Contact"],
  Resources: [
    "Documentation",
    "Help Center",
    "Community",
    "Tutorials",
    "API Reference",
  ],
  Legal: [
    "Privacy Policy",
    "Terms of Service",
    "Cookie Policy",
    "GDPR",
    "Compliance",
  ],
};
