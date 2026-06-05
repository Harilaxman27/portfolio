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
    title: "Runner-Up",
    event: "National Flutter Hackathon",
    year: "2025",
    verifyUrl: "https://example.com/certificate",
    kind: "Certificate",
  },
  {
    title: "DBS Apprenticeship — Selected",
    event: "DBS Bank Apprenticeship Program",
    year: "2024",
    verifyUrl: "https://www.linkedin.com/",
    kind: "LinkedIn",
  },
  {
    title: "Open Source Contributor",
    event: "Hacktoberfest",
    year: "2024",
    verifyUrl: "https://github.com/",
    kind: "GitHub",
  },
  {
    title: "Speaker",
    event: "Kathmandu Dev Meetup",
    year: "2023",
    verifyUrl: "https://example.com/event",
    kind: "Event",
  },
];

export type GalleryItem = {
  src: string;
  title: string;
  description?: string;
  link?: string;
};
