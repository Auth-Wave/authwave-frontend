import Link from "next/link";
import {
  Github,
  Twitter,
  Linkedin,
  DiscIcon as Discord,
  Mail,
  Pen,
  Key,
  Shield,
  Lock,
  Database,
  Code,
  Monitor,
  RefreshCw,
  Clock,
} from "lucide-react";
import LandingPageHeader from "@/components/headers/landing-page-header";
import LandingPageFooter from "@/components/footers/landing-page-footer";
import Hero from "@/components/sections/hero-section";
import Features from "@/components/sections/features-section";
import AuthMethods from "@/components/sections/auth-methods-section";

// Main landing page component
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-bg-1 text-white scroll-smooth">
      {/* Header/Navigation */}
      <LandingPageHeader />

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* Authentication Methods Section */}
      <AuthMethods />

      {/* Security Section */}
      <section className="py-20 px-4" id="security">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Uncompromised Security at Every Layer
          </h2>
          <p className="text-gray-400 mb-16 text-lg">
            Enterprise-grade security measures to protect your applications and
            users
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-[#1A1A1A] rounded-xl p-8 card-hover"
              >
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  {feature.icon}
                  {feature.title}
                </h3>
                <ul className="space-y-3 text-left">
                  {feature.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-[#00B6F0]">✓</span>
                      <span className="text-gray-300">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Integration Section */}
      <section className="py-20 px-4 bg-[#1A1A1A]" id="api-integration">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
            Simple API Integration
          </h2>
          <p className="text-gray-400 text-center mb-16 text-lg">
            Integrate secure authentication into your applications with just a
            few lines of code
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {apiSteps.map((step, index) => (
              <div
                key={index}
                className="bg-[#0D0D0D] rounded-xl overflow-hidden"
              >
                <div className="p-4 bg-[#1A1A1A] border-b border-gray-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <span className="text-[#00B6F0]">{index + 1}</span>
                    {step.title}
                  </h3>
                  <pre className="text-sm overflow-x-auto bg-[#1A1A1A] p-4 rounded-lg">
                    <code className="text-gray-300">{step.code}</code>
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <LandingPageFooter />
    </div>
  );
}

// Features data
const features = [
  {
    icon: <Mail className="w-6 h-6 text-[#00B6F0]" />,
    title: "Multiple Authentication Methods",
    description:
      "Flexible login options including email/password, Magic URL, and OTP via email.",
    bullets: [
      "Email/Password Login",
      "Passwordless Authentication",
      "OTP via Email",
    ],
  },
  {
    icon: <Database className="w-6 h-6 text-[#00B6F0]" />,
    title: "Advanced User Management",
    description:
      "Comprehensive tools for user registration, verification, and account security.",
    bullets: [
      "Easy Registration Flow",
      "Email Verification",
      "Account Protection",
    ],
  },
  {
    icon: <RefreshCw className="w-6 h-6 text-[#00B6F0]" />,
    title: "Multi-Project Support",
    description:
      "Manage multiple applications with project-specific settings and configurations.",
    bullets: [
      "Custom Email Templates",
      "Project-Level Limits",
      "Individual Configurations",
    ],
  },
  {
    icon: <Shield className="w-6 h-6 text-[#00B6F0]" />,
    title: "Security Logging & Analysis",
    description: "Comprehensive security logging and real-time analytics.",
    bullets: ["Activity Monitoring", "Security Alerts", "Audit Logs"],
  },
  {
    icon: <Lock className="w-6 h-6 text-[#00B6F0]" />,
    title: "Powerful Admin Dashboard",
    description: "Complete control over user management and security settings.",
    bullets: ["User Management", "Role Management", "Security Settings"],
  },
  {
    icon: <Code className="w-6 h-6 text-[#00B6F0]" />,
    title: "API Security",
    description:
      "Enterprise-grade API security with multiple layers of protection.",
    bullets: ["Rate Limiting", "Token Security", "Access Control"],
  },
];

const securityFeatures = [
  {
    icon: <Shield className="w-6 h-6 text-[#00B6F0]" />,
    title: "Token Security",
    bullets: [
      "JWT-based access/refresh tokens with expiration handling",
      "Automatic token rotation and revocation",
    ],
  },
  {
    icon: <Lock className="w-6 h-6 text-[#00B6F0]" />,
    title: "Password Protection",
    bullets: [
      "Bcrypt hashing with salt rounds optimization",
      "Secure password reset flow with timeouts",
    ],
  },
  {
    icon: <RefreshCw className="w-6 h-6 text-[#00B6F0]" />,
    title: "Rate Limiting",
    bullets: [
      "IP and user-agent based request tracking",
      "Customizable rate limits per endpoint",
    ],
  },
  {
    icon: <Monitor className="w-6 h-6 text-[#00B6F0]" />,
    title: "Session Control",
    bullets: [
      "Device-based session management",
      "One-click session revocation",
    ],
  },
  {
    icon: <Database className="w-6 h-6 text-[#00B6F0]" />,
    title: "Data Protection",
    bullets: [
      "MongoDB security best practices",
      "Input sanitization and encryption",
    ],
  },
  {
    icon: <Code className="w-6 h-6 text-[#00B6F0]" />,
    title: "API Security",
    bullets: ["Unique project keys and IDs", "Key regeneration capabilities"],
  },
];

const apiSteps = [
  {
    title: "Install AuthWave",
    code: `npm install @authwave/sdk\n# or\nyarn add @authwave/sdk`,
  },
  {
    title: "Initialize SDK",
    code: `import { AuthWave } from '@authwave/sdk';\n\nconst auth = new AuthWave({\n  projectId: 'your-project-id',\n  apiKey: 'your-api-key'\n});`,
  },
  {
    title: "Implement Authentication",
    code: `// Email/Password Login\nawait auth.signIn({\n  email,\n  password\n});\n\n// Magic Link\nawait auth.sendMagicLink({\n  email\n});\n\n// OTP Verification\nawait auth.verifyOTP({\n  email,\n  code\n});`,
  },
];
