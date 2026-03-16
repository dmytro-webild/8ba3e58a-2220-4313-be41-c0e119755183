"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import HeroOverlay from "@/components/sections/hero/HeroOverlay";
import TextSplitAbout from "@/components/sections/about/TextSplitAbout";
import FeatureCardSix from "@/components/sections/feature/FeatureCardSix";
import FooterCard from "@/components/sections/footer/FooterCard";
import { Heart, Target, Zap, Mail, Twitter, Instagram, Linkedin } from "lucide-react";

export default function AboutPage() {
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
          brandName="OptimizeX"
          navItems={navItems}
          button={{
            text: "Join Now",
            href: "/community",
          }}
        />
      </div>

      <div id="about-hero" data-section="about-hero">
        <HeroOverlay
          title="Our Mission: Empower Peak Human Performance"
          description="OptimizeX exists to democratize access to evidence-based knowledge on self-optimization. We're building the world's most comprehensive platform for individuals committed to continuous improvement across fitness, health, aesthetics, and cognitive enhancement."
          tag="About OptimizeX"
          tagIcon={Heart}
          tagAnimation="slide-up"
          buttons={[
            {
              text: "Join Our Community",
              href: "/community",
            },
            {
              text: "Explore Courses",
              href: "/courses",
            },
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/diverse-models-laughing-enjoying-time-together-look-camera_1153-9382.jpg?_wi=2"
          imageAlt="Our mission and values visualization"
          showBlur={true}
          ariaLabel="About OptimizeX hero section"
        />
      </div>

      <div id="our-story" data-section="our-story">
        <TextSplitAbout
          title="The OptimizeX Story"
          description={[
            "OptimizeX was founded by a group of researchers, coaches, and fitness enthusiasts who noticed a critical gap: quality, science-backed information about optimization was scattered, often contradictory, and sometimes outright deceptive. We believed individuals deserved better.",
            "What started as a small community has grown into a thriving ecosystem serving thousands of high-performers worldwide. We've curated knowledge from leading experts in fitness, nutrition, skincare science, cognitive enhancement, and holistic wellness into a cohesive learning platform.",
            "Today, OptimizeX represents more than just courses and content. We're a movement of individuals committed to evidence-based self-improvement, supporting each other through our transformation journeys, and sharing knowledge that genuinely improves lives.",
          ]}
          useInvertedBackground={false}
          buttons={[
            {
              text: "Start Your Journey",
              href: "/signup",
            },
          ]}
        />
      </div>

      <div id="our-values" data-section="our-values">
        <FeatureCardSix
          title="Our Core Values"
          description="The principles that guide everything we do at OptimizeX."
          tag="Values"
          tagIcon={Target}
          tagAnimation="slide-up"
          features={[
            {
              id: 1,
              title: "Evidence-Based Education",
              description: "Every course, article, and recommendation is grounded in scientific research and real-world application. We prioritize accuracy and fact-checking above all else.",
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-students-library_23-2149204754.jpg?_wi=2",
              imageAlt: "Research and evidence-based learning",
            },
            {
              id: 2,
              title: "Community First",
              description: "We believe transformation happens together. Our community is the heart of OptimizeX, where members support each other, share experiences, and collectively rise to higher levels of optimization.",
              imageSrc: "http://img.b2bpic.net/free-photo/group-beautiful-women-celebrating-together_23-2148407549.jpg?_wi=3",
              imageAlt: "Community collaboration and support",
            },
            {
              id: 3,
              title: "Continuous Improvement",
              description: "Just as we encourage our members to never stop optimizing, we continuously improve our platform, expand our course library, and evolve our resources based on member feedback and emerging research.",
              imageSrc: "http://img.b2bpic.net/free-photo/top-vie-plants-notebook_23-2148785088.jpg?_wi=3",
              imageAlt: "Continuous learning and growth",
            },
          ]}
          textboxLayout="default"
          useInvertedBackground={true}
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