// Type definitions for User Profile and Projects

export const initialUserData = {
  id: 1,
  name: "Sukankshi Jain",
  email: "sukankshi.jain@razorpay.com",
  role: "Product Manager",
  department: "POS Onboarding POD",
  bio: "Passionate PM focused on scaling POS onboarding and improving merchant experiences.",
  location: "India",
  phone: "+91 98765 43210",
  joinDate: "2023-05-15",
  avatar: "https://ui-avatars.com/api/?name=Sukankshi+Jain&background=4f46e5&color=fff&size=200"
};

export const initialProjects = [
  {
    id: 1,
    title: "CKYC Integration",
    description: "Integration of CKYC to auto-fetch at least 30% of documents and remove Video KYC",
    status: "In Progress",
    priority: "High",
    startDate: "2025-12-01",
    endDate: "2026-03-31",
    tags: ["KYC", "Automation", "Efficiency"]
  },
  {
    id: 2,
    title: "New Bank Onboarding",
    description: "Onboarding of Axis, Kotak, SBI and IDFC banks",
    status: "Planning",
    priority: "High",
    startDate: "2026-01-15",
    endDate: "2026-06-30",
    tags: ["Bank Partnerships", "Expansion"]
  },
  {
    id: 3,
    title: "Omni Migration",
    description: "Migration of Bank Acquired Merchants and Direct Merchants to Omni channel",
    status: "In Progress",
    priority: "Critical",
    startDate: "2025-11-01",
    endDate: "2026-04-30",
    tags: ["Migration", "Omni Channel"]
  },
  {
    id: 4,
    title: "Task Force App Enhancement",
    description: "Maintenance Request support in TF App for device delivery",
    status: "Completed",
    priority: "Medium",
    startDate: "2025-09-01",
    endDate: "2025-12-15",
    tags: ["Device Support", "Maintenance"]
  }
];
