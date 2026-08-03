// ---------------------------------------------------------------------------
// Central content file. Edit the values below to update site copy.
// Swap `image` URLs in `gallery` for real photos when available.
// ---------------------------------------------------------------------------

import profilePhoto from "../assets/profile.jpeg";
import event1Photo from "../assets/event1.jpeg";
import event2Photo from "../assets/event2.jpeg";
import event3Photo from "../assets/event3.jpeg";
import event4Photo from "../assets/event4.jpeg";
import event5Photo from "../assets/event5.jpeg";
import event6Photo from "../assets/event6.jpeg";

export const profile = {
  name: "Aisyah Mahla Nurussalamah",
  title: "Event Coordination & Public Relations",
  tagline:
    "Delivering seamless, high-impact events through meticulous planning, cross-functional coordination, and confident public relations.",
  location: "Bandung, West Java",
  email: "aisyahmahla29@gmail.com",
  phone: "081221155052",
  // Used to build the wa.me link (Indonesian country code, no leading 0).
  whatsappNumber: "6281221155052",
  // Profile photo shown on the Home hero.
  photo: profilePhoto,
};

export const bio = `Communication Science graduate with a strong interest in Event Management and Public Relations. Hands-on experience coordinating 10+ official government-level events during an internship within Bandung City's governmental protocol division. Skilled in end-to-end event logistics, cross-functional coordination, and formal communication — comfortable operating in fast-paced, high-visibility environments where precision and professionalism matter.`;

export const skills = {
  hard: [
    "Event Planning & Coordination",
    "Protocol & Logistics Management",
    "Press Release Writing",
    "Media Relations",
    "Social Media Management",
  ],
  soft: [
    "Public Speaking",
    "Problem Solving",
    "Strategic Communication",
    "Critical Thinking",
    "Adaptability",
  ],
};

export const education = {
  degree: "Bachelor of Communication",
  institution: "Muhammadiyah University of Bandung",
  period: "Oct 2021 – Aug 2025",
  gpa: "3.80 / 4.00",
};

// Most recent first.
export const experience = [
  {
    role: "Freelance Event Crew",
    org: "Sauyunan Creation",
    period: "Jun 2026 – Present",
    bullets: [
      "Post Team & Location Coordinator for \"QRIS Jelajah Kuliner Indonesia\", a West Java-wide culinary event with 21 participating vendors.",
      "Liaison Officer for MC Stage at \"Bandung QRIS Run\", coordinating stage logistics and communication for an event with 2,000+ participants.",
    ],
  },
  {
    role: "Internship — Governmental Protocol",
    org: "Bandung City Leadership",
    period: "Feb 2025 – Mar 2025",
    bullets: [
      "Coordinated end-to-end protocol and logistics for 10+ official city-level events.",
      "Managed the Bandung Mayor & Vice Mayor Inauguration Ceremony 2025–2030 (50+ guests).",
      "Managed the 79th Commemoration of Bandung Lautan Api (100+ guests).",
      "Facilitated communication between city leadership and event organizers across ceremonial and community events.",
    ],
  },
  {
    role: "General Treasurer",
    org: "HIMA Ilmu Komunikasi",
    period: "Dec 2023 – Oct 2024",
    bullets: [
      "Coordinated budget planning and logistics for major departmental events, including Leadership Inauguration, \"MASAKU\" Orientation, and Dies Natalis.",
      "Managed organizational finances with accurate reporting and accountability.",
    ],
  },
  {
    role: "Secretary, Department of Organizational Apparatus Development",
    org: "HIMA Ilmu Komunikasi",
    period: "Jan 2023 – Nov 2023",
    bullets: [
      "Handled administrative operations, documentation, and correspondence.",
      "Prepared internal reporting to support departmental activities.",
    ],
  },
];

// Placeholder images via placehold.co — replace `image` with real event photos later.
export const gallery = [
  {
    id: "inauguration-2025",
    title: "Mayor & Vice Mayor Inauguration Ceremony 2025–2030",
    role: "Protocol & Logistics Coordinator",
    description:
      "Coordinated end-to-end protocol and logistics for the official inauguration ceremony, hosting 50+ guests.",
    image: event1Photo,
  },
  {
    id: "kinemaksi-acfest-kpk",
    title: "KINEMAKSI X ACFEST KPK",
    role: "PIC Finance & Accounting",
    description:
      "Managed finance and accounting for an anti-corruption film festival held in collaboration with KPK, attended by 800+ participants.",
    image: event2Photo,
  },
  {
    id: "qris-kuliner",
    title: "QRIS Jelajah Kuliner Indonesia",
    role: "Post Team & Location Coordinator",
    description:
      "Coordinated locations and on-ground teams for a West Java-wide culinary event with 21 participating vendors.",
    image: event3Photo,
  },
  {
    id: "qris-run",
    title: "Bandung QRIS Run",
    role: "Liaison Officer, MC Stage",
    description:
      "Served as liaison for the MC stage, coordinating run-of-show communication for an event with 2,000+ participants.",
    image: event4Photo,
  },
  {
    id: "protocol-internship",
    title: "Governmental Protocol Internship",
    role: "Protocol & Logistics Support",
    description:
      "Coordinated protocol and logistics across 10+ official city-level events within Bandung City leadership.",
    image: event5Photo,
  },
  {
    id: "hima-events",
    title: "HIMA Ilmu Komunikasi Departmental Events",
    role: "General Treasurer",
    description:
      "Coordinated budget planning and logistics for Leadership Inauguration, MASAKU Orientation, and Dies Natalis.",
    image: event6Photo,
  },
];
