import {
  Phone, UserPlus, CalendarCheck, Wrench, BookOpen, PhoneForwarded, Repeat, BellRing,
  FileText, Target, GitBranch, Workflow, BarChart3, ClipboardList,
  type LucideIcon,
} from "lucide-react";

export type Feature = { icon: LucideIcon; title: string; body: string };

export const FEATURES: Feature[] = [
  { icon: Phone, title: "AI Calling Agent", body: "Answers when your team can't, in a natural voice that follows your business rules." },
  { icon: UserPlus, title: "Lead Capture", body: "Names, numbers and intent captured cleanly, so no opportunity disappears." },
  { icon: CalendarCheck, title: "Appointments & Bookings", body: "Checks availability and books or requests slots the way your business works." },
  { icon: Wrench, title: "Service Requests", body: "Turns issues and job requests into structured tasks for the right person." },
  { icon: BookOpen, title: "Business Knowledge", body: "Hours, services, policies and FAQs, so answers stay accurate and on-brand." },
  { icon: PhoneForwarded, title: "Human Transfers", body: "Hands off to your team when a call needs a person, with context attached." },
  { icon: Repeat, title: "Follow-ups", body: "Schedules callbacks and reminders so nothing is left hanging." },
  { icon: BellRing, title: "Owner Alerts", body: "Important calls and outcomes reach the right people the moment they matter." },
  { icon: FileText, title: "Conversation Summaries", body: "Every call becomes a short, readable summary with next steps." },
  { icon: Target, title: "Opportunity Tracking", body: "See which conversations became leads, bookings and requests." },
  { icon: GitBranch, title: "Smart Routing", body: "Route by time, topic, team or location, with your phone as the first stop." },
  { icon: Workflow, title: "Business Automation", body: "Approved actions run automatically. You choose exactly which." },
  { icon: BarChart3, title: "Analytics", body: "Call volume, outcomes and response patterns in one clear view." },
  { icon: ClipboardList, title: "Smart Reports", body: "Daily and weekly summaries that tell owners what happened and what's next." },
];

export type Industry = { name: string; outcome: string; example: string };

export const INDUSTRIES: Industry[] = [
  { name: "Hotels & Motels", outcome: "Room inquiry / booking", example: "Rate questions, availability and booking requests, around the clock." },
  { name: "Restaurants", outcome: "Reservation", example: "Table reservations, hours and menu questions during the rush." },
  { name: "Dental Offices", outcome: "Appointment", example: "New and returning patient appointments, routed to the right provider." },
  { name: "Healthcare Offices", outcome: "Appointment request", example: "Appointment requests and message-taking with sensible escalation rules." },
  { name: "Auto Repair", outcome: "Service appointment", example: "Service bookings and status questions while the team is under the hood." },
  { name: "Home Services", outcome: "Service request", example: "Job requests with address, issue and urgency captured on the first call." },
  { name: "Real Estate", outcome: "Property inquiry", example: "Property inquiries and showing requests, captured as qualified leads." },
  { name: "Property Management", outcome: "Maintenance request", example: "Tenant requests and prospect calls sorted and routed." },
  { name: "Salons & Spas", outcome: "Appointment", example: "Appointments and service questions without pausing a treatment." },
  { name: "Retail", outcome: "Customer inquiry", example: "Stock, hours and order questions answered, with follow-ups for the rest." },
  { name: "Professional Services", outcome: "New client inquiry", example: "New client inquiries captured and routed before they call a competitor." },
  { name: "Local Businesses", outcome: "Lead or request", example: "Whatever your front line handles, configured to your rules." },
  { name: "Multi-location Businesses", outcome: "Location routing", example: "One platform, with each location's hours, rules and routing." },
];

export const WORKFLOW_STEPS = [
  { title: "Customer calls", body: "Calls reach your existing business number as they always have." },
  { title: "Your team gets first chance", body: "If someone's free, they answer. StayDesk stays out of the way." },
  { title: "StayDesk takes over", body: "If staff are busy, unavailable or it's after hours, StayDesk picks up." },
  { title: "Understands the request", body: "It works out what the customer needs and draws on your business knowledge." },
  { title: "Takes approved action", body: "It captures details, books, requests or schedules, only within your rules." },
  { title: "Updates and notifies", body: "Your systems are updated, your team is alerted, and the outcome is recorded." },
];

export const DASH_NAV = [
  "Overview", "Calls", "Opportunities", "Follow-ups", "Business Knowledge",
  "Call Routing", "Agent", "Reports", "Settings",
] as const;
