import {
  FaHome,
  FaTasks,
  FaEnvelope,
  FaUserFriends,
  FaShoppingCart,
  FaSignInAlt,
  FaCog,
  FaCheckCircle,
  FaFileUpload,
  FaUsers,
} from "react-icons/fa";

export const sidebarLinks = [
  {
    id: 1,
    href: "#",
    icon: FaHome,
    text: "Home",
  },
  {
    id: 2,
    href: "#",
    icon: FaTasks,
    text: "Tasks",
    badge: {
      text: "In Progress",
      color: "bg-yellow-100 text-yellow-800",
      darkColor: "dark:bg-yellow-700 dark:text-yellow-300",
    },
  },
  {
    id: 3,
    href: "#",
    icon: FaEnvelope,
    text: "Messages",
    badge: {
      text: "4",
      color: "bg-blue-100 text-blue-800",
      darkColor: "dark:bg-blue-900 dark:text-blue-300",
    },
  },
  {
    id: 4,
    href: "#",
    icon: FaUserFriends,
    text: "Teams",
  },
  {
    id: 5,
    href: "#",
    icon: FaShoppingCart,
    text: "Orders",
  },
  {
    id: 6,
    href: "#",
    icon: FaSignInAlt,
    text: "Log Out",
  },
  {
    id: 7,
    href: "#",
    icon: FaCog,
    text: "Settings",
  },
];

export const recentActivities = [
  {
    id: 1,
    icon: FaSignInAlt,
    time: "5 minutes ago",
    description: "User logged into the dashboard",
  },
  {
    id: 2,
    icon: FaCheckCircle,
    time: "1 hour ago",
    description: "Finished 'Design Landing Page' task",
  },
  {
    id: 3,
    icon: FaEnvelope,
    time: "2 hours ago",
    description: "Received a message from John Doe",
  },
  {
    id: 4,
    icon: FaFileUpload,
    time: "3 hours ago",
    description: "Uploaded 'Project Report' document",
  },
  {
    id: 5,
    icon: FaUsers,
    time: "Yesterday",
    description: "Attended team meeting",
  },
];

export const events = [
  {
    date: "10 Oct",
    title: "Q4 Business Review",
    description:
      "A comprehensive review of the company's Q4 performance and strategic planning for the next fiscal year.",
  },
  {
    date: "18 Oct",
    title: "Global Marketing Summit",
    description:
      "An exclusive summit discussing global marketing trends, digital strategies, and new growth opportunities.",
  },
  {
    date: "25 Nov",
    title: "Product Launch Webinar",
    description:
      "Join us for the live launch of our latest product line, with insights from the development team.",
  },
  {
    date: "02 Dec",
    title: "End-of-Year Financial Analysis",
    description:
      "A detailed financial report highlighting the company's performance and projections for the coming year.",
  },
  {
    date: "15 Dec",
    title: "Client Appreciation Gala",
    description:
      "An elegant evening to thank and celebrate our valued clients and business partners for their continued support.",
  },
];
