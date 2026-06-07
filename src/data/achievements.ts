export type Achievement = {
  title: string;
  event: string;
  year: string;
  /** Where the Verify button opens — certificate URL, LinkedIn post, GitHub repo, event page, etc. */
  verifyUrl: string;
  /** Optional kind label shown subtly on the card */
  kind?: "Certificate" | "LinkedIn" | "GitHub" | "Event";
};

// Add / edit your achievements here.
export const achievements: Achievement[] = [
  {
    title: "1st Prize, Team VibeSeek",
    event: "VNR DESIGN-A-THON 2025, VNRVJIET, Hyderabad",
    year: "2025",
    verifyUrl: "https://www.linkedin.com/posts/salendraharilaxman_designathon-winners-innovationunleashed-activity-7304014862379098112-c-BA?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEznqO0BwAqBULk8aLT1QU1IRXZYjWfHEeQ",
    kind: "Event",
  },
  {
    title: "2nd Prize, Team VibeSeek",
    event: "Epitome'25 Hackathon, Gokaraju Rangaraju Engineering College",
    year: "2025",
    verifyUrl: "https://www.linkedin.com/posts/salendraharilaxman_hackathon-epitome25-runnerup-activity-7301147583131844608-Zonj?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEznqO0BwAqBULk8aLT1QU1IRXZYjWfHEeQ",
    kind: "Event",
  },
  {
    title: "2nd Prize, Sustainability Domain",
    event: "HackSavvy-25, MGIT",
    year: "2025",
    verifyUrl: "https://www.linkedin.com/posts/salendraharilaxman_eduverse-hacksavvy25-sustainability-activity-7316839292280926209-Ix0g?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEznqO0BwAqBULk8aLT1QU1IRXZYjWfHEeQ",
    kind: "Event",
  },
  {
    title: "Supervised ML: Regression & Classification",
    event: "Coursera — Stanford University",
    year: "2025",
    verifyUrl: "https://coursera.org/share/0d47e444515c3e5d8d5b025a85c8bd82",
    kind: "Certificate",
  },
  {
    title: "Advanced Learning Algorithms",
    event: "Stanford University via Coursera",
    year: "2025",
    verifyUrl: "https://coursera.org/share/ba7c68a38bb126243fcb8d7eae787100",
    kind: "Certificate",
  },
];

export type GalleryItem = {
  src: string;
  title: string;
  description?: string;
  link?: string;
};
