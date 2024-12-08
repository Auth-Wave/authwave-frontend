import {
  Users,
  Key,
  LogOut,
  UserCheck,
  UserPlus,
  UserX,
  ShieldHalf,
  KeyRound,
  ShieldCheck,
  Shield,
  Clock,
  Smartphone,
  Monitor,
  Globe,
  CircleOff,
} from "lucide-react";
import SecurityFeatureCard from "@/components/cards/security-feature-card";
import UserManagementCard from "../cards/user-management-card";
import SessionManagementCard from "../cards/session-management-card";

const UserAndSessionManagement = () => {
  return (
    <section
      className="w-full pt-100 pb-50 2xl:pt-180 min-h-screen flex-center bg-bg-1"
      id="user-and-session-management"
    >
      <div className="w-full flex-center flex-col text-center gap-50 2xl:gap-80">
        <div className="flex-center flex-col text-center gap-12 2xl:gap-18">
          <h2 className="font-bold text-40 2xl:text-70 leading-tight">
            Advanced{" "}
            <span className="text-gradient">User and Session Management</span>
          </h2>
          <p className="text-white/60 font-normal text-18 2xl:text-24 leading-normal mx-auto">
            Efficient tools to manage users and sessions effortlessly
          </p>
        </div>
        <div className="w-full grid grid-cols-2 grid-rows-2 gap-24 2xl:gap-35 px-24 2xl:px-120">
          {userManagementFeatures.map((feature, index) => (
            <UserManagementCard
              key={index}
              {...feature}
              className="w-full h-full"
            />
          ))}
          <div className="col-span-2">
            {sessionManagementFeatures.map((feature, index) => (
              <SessionManagementCard
                key={index}
                {...feature}
                className="w-full"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserAndSessionManagement;
const userManagementFeatures = [
  {
    icon: <UserPlus className="w-full h-full text-p-accent" />,
    title: "Smart Registration Flow",
    bullets: [
      {
        title: "Streamlined User Onboarding",
        description:
          "Simple and intuitive registration process with customizable fields.",
      },
      {
        title: "Email Verification",
        description:
          "Automated email verification with customizable templates.",
      },
      {
        title: "Welcome Experience",
        description: "Personalized welcome emails and onboarding flows.",
      },
    ],
  },
  {
    icon: <ShieldCheck className="w-full h-full text-p-accent" />,
    title: "Account Protection",
    bullets: [
      {
        title: "Adaptive Security",
        description:
          "Automatic account lockout after repeated failed login attempts.",
      },
      {
        title: "Password Recovery",
        description: "Secure password reset flow with time-limited tokens.",
      },
      {
        title: "Activity Monitoring",
        description:
          "Real-time tracking of suspicious activities and login attempts.",
      },
    ],
  },
];

const sessionManagementFeatures = [
  {
    icon: <KeyRound className="w-full h-full text-p-accent" />,
    title: "Session Management",
    description:
      "Track and manage user sessions across multiple devices with comprehensive security controls",
    bullets: [
      {
        title: "Device Tracking",
        icon: <Smartphone className="w-full h-full text-p-accent" />,
      },
      {
        title: "Session Timeouts",
        icon: <Clock className="w-full h-full text-p-accent" />,
      },
      {
        title: "Instant Revocation",
        icon: <CircleOff className="w-full h-full text-p-accent" />,
      },
      {
        title: "User-agent Tracking",
        icon: <Monitor className="w-full h-full text-p-accent" />,
      },
      {
        title: "IP Tracking",
        icon: <Globe className="w-full h-full text-p-accent" />,
      },
    ],
  },
];