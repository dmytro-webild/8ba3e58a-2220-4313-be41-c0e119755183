"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import HeroOverlay from "@/components/sections/hero/HeroOverlay";
import FeatureCardSix from "@/components/sections/feature/FeatureCardSix";
import PricingCardTwo from "@/components/sections/pricing/PricingCardTwo";
import FooterCard from "@/components/sections/footer/FooterCard";
import { Sparkles, Zap, CheckCircle, Mail, Twitter, Instagram, Linkedin } from "lucide-react";

export default function CoursesPage() {
  const navItems = [
    { name: "Home", id: "home" },
    { name: "Courses", id: "courses" },
    { name: "Community", id: "community" },
    { name: "Resources", id: "resources" },
    { name: "About", id: "about" },
  ];

  const handleNavigation = (itemId: string) => {
    const routeMap: { [key: string]: string } = {
      home: "/",
      courses: "/courses",
      community: "/community",
      resources: "/resources",
      about: "/about",
    };
    const route = routeMap[itemId];
    if (route) {
      window.location.href = route;
    }
  };

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

      <div id="hero" data-section="hero">
        <HeroOverlay
          title="Expert-Curated Courses for Self-Optimization"
          description="Dive deep into science-backed education covering fitness optimization, nutrition science, skincare, cognitive enhancement, and holistic wellness. Learn from industry experts and transform your approach to personal development."
          tag="Course Catalog"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          buttons={[
            {
              text: "Browse All Courses",
              href: "#courses-section",
            },
            {
              text: "Start Free Trial",
              href: "/signup",
            },
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/person-presenting-information-meeting-white-board_23-2149085958.jpg"
          imageAlt="online learning education course dashboard"
          showBlur={true}
          ariaLabel="Courses page hero - Educational content showcase"
        />
      </div>

      <div id="course-categories" data-section="course-categories">
        <FeatureCardSix
          title="Course Categories"
          description="Explore our comprehensive curriculum organized by topic. Each course is designed by experts and includes practical applications."
          tag="Learning Paths"
          tagIcon={Zap}
          tagAnimation="slide-up"
          features={[
            {
              id: 1,
              title: "Fitness Optimization",
              description: "Master modern training methodologies, periodization, recovery protocols, and evidence-based programming for aesthetic and performance goals.",
              imageSrc: "http://img.b2bpic.net/free-photo/front-view-people-training-together-gym_23-2150289970.jpg",
              imageAlt: "group community people networking together",
            },
            {
              id: 2,
              title: "Nutrition Science",
              description: "Learn the biochemistry of nutrition, macronutrient optimization, supplementation science, and meal planning strategies for your specific goals.",
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-students-library_23-2149204754.jpg",
              imageAlt: "courses library learning resources",
            },
            {
              id: 3,
              title: "Advanced Topics",
              description: "Explore cutting-edge research in skincare science, nootropics, peptides, hormonal optimization, and longevity strategies for high-performers.",
              imageSrc: "http://img.b2bpic.net/free-photo/top-vie-plants-notebook_23-2148785088.jpg",
              imageAlt: "research documents knowledge base",
            },
          ]}
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Choose Your Learning Plan"
          description="Select the membership tier that best fits your learning goals. Upgrade anytime to unlock more advanced content."
          tag="Membership Plans"
          tagIcon={CheckCircle}
          tagAnimation="slide-up"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          plans={[
            {
              id: "starter",
              badge: "Beginner",
              badgeIcon: Sparkles,
              price: "$29",
              subtitle: "per month",
              buttons: [
                {
                  text: "Get Started",
                  href: "/signup",
                },
              ],
              features: [
                "Access to 5+ foundational courses",
                "Community forum participation",
                "Monthly optimization guides",
                "Email support",
                "Weekly group discussions",
              ],
            },
            {
              id: "pro",
              badge: "Recommended",
              badgeIcon: Zap,
              price: "$79",
              subtitle: "per month",
              buttons: [
                {
                  text: "Start Pro",
                  href: "/signup",
                },
              ],
              features: [
                "All Starter courses",
                "20+ advanced courses",
                "Monthly expert consultation",
                "Private coaching group",
                "Priority support",
                "Exclusive research database",
                "Monetization opportunities",
              ],
            },
            {
              id: "premium",
              badge: "Elite",
              badgeIcon: CheckCircle,
              price: "$199",
              subtitle: "per month",
              buttons: [
                {
                  text: "Unlock Premium",
                  href: "/signup",
                },
              ],
              features: [
                "All courses unlimited",
                "Weekly 1-on-1 coaching",
                "Personalized learning paths",
                "Direct expert access",
                "Early new course access",
                "Premium affiliate commissions",
                "VIP community channel",
              ],
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