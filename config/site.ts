export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "HiDrone",
  description: "Homepage currently missing 😅",
  navItems: [
    {
      label: "Hire",
      href: "/hire",
    },
    {
      label: "Supply",
      href: "/supply",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/PLLima/HiDrone",
  },
};
