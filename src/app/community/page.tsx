"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import HeroOverlay from "@/components/sections/hero/HeroOverlay";
import FeatureCardSix from "@/components/sections/feature/FeatureCardSix";
import TestimonialCardTen from "@/components/sections/testimonial/TestimonialCardTen";
import FooterCard from "@/components/sections/footer/FooterCard";
import { Users, Zap, Mail, Twitter, Instagram, Linkedin } from "lucide-react";

export default function CommunityPage() {
  const navItems = [
    { name: "Home", id: "home" },
    { name: "Courses", id: "courses" },
    { name: "Community", id: "community" },
    { name: "Resources", id: "resources" },
    { name: "About", id: "about" },
  ];

  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="compact"
      sizing="mediumLargeSizeLargeTitles"
      background="fluid"
      cardStyle="gradient-mesh"
      primaryButtonStyle="double-inset"
      secondaryButtonStyle="solid"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="copemaxxing "
          navItems={navItems}
          button={{
            text: "Join Now",
            href: "/community",
          }}
        />
      </div>

      <div id="community-hero" data-section="community-hero">
        <HeroOverlay
          title="Join Our Elite Optimization Community"
          description="Connect with thousands of high-performers dedicated to continuous self-improvement. Access exclusive discussions, peer support, expert insights, and collaborative challenges designed to accelerate your transformation journey."
          tag="Community Hub"
          tagIcon={Users}
          tagAnimation="slide-up"
          buttons={[
            {
              text: "Join Community",
              href: "/signup",
            },
            {
              text: "Explore Benefits",
              href: "#benefits",
            },
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/front-view-people-training-together-gym_23-2150289970.jpg?_wi=2"
          imageAlt="Community members networking and supporting each other"
          showBlur={true}
          ariaLabel="Community hero section"
        />
      </div>

      <div id="community-features" data-section="community-features">
        <FeatureCardSix
          title="What You Get as a Community Member"
          description="Experience the power of a supportive network dedicated to optimization and continuous improvement."
          tag="Member Benefits"
          tagIcon={Zap}
          tagAnimation="slide-up"
          features={[
            {
              id: 1,
              title: "Daily Discussions & Threads",
              description: "Engage in real-time conversations about fitness techniques, nutrition strategies, cognitive optimization, skincare science, and personal development. Get answers from experienced members and experts.",
              imageSrc: "http://img.b2bpic.net/free-photo/group-beautiful-women-celebrating-together_23-2148407549.jpg?_wi=2",
              imageAlt: "Community forum and discussion board",
            },
            {
              id: 2,
              title: "Weekly Challenges & Accountability",
              description: "Participate in structured challenges that keep you motivated and accountable. From 30-day fitness challenges to nutrition tracking competitions, our community thrives on mutual support and shared goals.",
              imageSrc: "http://img.b2bpic.net/free-photo/front-view-people-training-together-gym_23-2150289970.jpg?_wi=3",
              imageAlt: "Group fitness training and accountability",
            },
            {
              id: 3,
              title: "Expert AMAs & Events",
              description: "Monthly Ask-Me-Anything sessions with fitness coaches, nutrition scientists, dermatologists, and health professionals. Exclusive webinars and live Q&A sessions covering cutting-edge optimization topics.",
              imageSrc: "http://img.b2bpic.net/free-photo/person-presenting-information-meeting-white-board_23-2149085958.jpg?_wi=3",
              imageAlt: "Expert presentation and educational event",
            },
          ]}
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="community-testimonials" data-section="community-testimonials">
        <TestimonialCardTen
          title="Why Members Love OptimizeX Community"
          description="Hear from community members about their experiences and transformations."
          textboxLayout="default"
          useInvertedBackground={false}
          testimonials={[
            {
              id: "1",
              title: "The Support System Changed My Life",
              quote: "I was struggling alone before joining. The community's daily motivation, practical advice, and genuine friendships made me stick with my optimization journey. I've never felt more supported.",
              name: "James Mitchell",
              role: "Software Engineer & Fitness Enthusiast",
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-fashionable-well-dressed-man-with-beard-posing-outdoors_1328-3268.jpg?_wi=2",
              imageAlt: "James Mitchell testimonial",
            },
            {
              id: "2",
              title: "Expert Knowledge at My Fingertips",
              quote: "The combination of active community members and monthly expert AMAs gives me access to knowledge I'd normally spend thousands on consultants for. The value is incredible.",
              name: "Sarah Chen",
              role: "Dermatology Student",
              imageSrc: "http://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1569.jpg?_wi=2",
              imageAlt: "Sarah Chen testimonial",
            },
            {
              id: "3",
              title: "Found My Tribe",
              quote: "Finally surrounded by people who understand the pursuit of optimization. It's not just about fitness—it's about holistic growth. This community gets it.",
              name: "Marcus Johnson",
              role: "Entrepreneur",
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-young-colleagues-having-meeting_23-2149060278.jpg?_wi=2",
              imageAlt: "Marcus Johnson testimonial",
            },
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterCard
          logoText="OptimizeX"
          copyrightText="© 2025 OptimizeX. All rights reserved."
          socialLinks={[
            {
              icon: Twitter,
              href: "https://twitter.com/optimizex",
              ariaLabel: "Twitter",
            },
            {
              icon: Instagram,
              href: "https://instagram.com/optimizex",
              ariaLabel: "Instagram",
            },
            {
              icon: Linkedin,
              href: "https://linkedin.com/company/optimizex",
              ariaLabel: "LinkedIn",
            },
            {
              icon: Mail,
              href: "mailto:support@optimizex.com",
              ariaLabel: "Email",
            },
          ]}
        />
      </div>
    </ThemeProvider>
  );
}