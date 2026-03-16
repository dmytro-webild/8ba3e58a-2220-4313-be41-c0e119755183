"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import HeroOverlay from "@/components/sections/hero/HeroOverlay";
import TextSplitAbout from "@/components/sections/about/TextSplitAbout";
import FeatureCardSix from "@/components/sections/feature/FeatureCardSix";
import PricingCardTwo from "@/components/sections/pricing/PricingCardTwo";
import TestimonialCardTen from "@/components/sections/testimonial/TestimonialCardTen";
import FaqSplitMedia from "@/components/sections/faq/FaqSplitMedia";
import ContactSplit from "@/components/sections/contact/ContactSplit";
import FooterCard from "@/components/sections/footer/FooterCard";
import { Sparkles, Zap, CheckCircle, HelpCircle, Mail, Twitter, Instagram, Linkedin } from "lucide-react";

export default function HomePage() {
  const navItems = [
    { name: "Home", id: "home" },
    { name: "Courses", id: "courses" },
    { name: "Community", id: "community" },
    { name: "Resources", id: "resources" },
    { name: "About", id: "about" },
  ];

  const navMapping: Record<string, string> = {
    "home": "/",
    "courses": "/courses",
    "community": "/community",
    "resources": "/resources",
    "about": "/about",
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
          title="Unlock Your Peak Performance Potential"
          description="Master the science of self-optimization. Access expert-curated courses on fitness, nutrition, nootropics, skincare, and holistic wellness. Join our exclusive community of high-achievers committed to continuous improvement."
          tag="Educational Platform"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          buttons={[
            {
              text: "Explore Courses",
              href: "/courses",
            },
            {
              text: "Join Community",
              href: "/community",
            },
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/diverse-models-laughing-enjoying-time-together-look-camera_1153-9382.jpg"
          imageAlt="Athletic professional demonstrating fitness optimization"
          showBlur={true}
          ariaLabel="Hero section - OptimizeX platform overview"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Why OptimizeX?"
          description={[
            "OptimizeX is your comprehensive resource for evidence-based self-improvement. We believe in empowering individuals with knowledge about fitness optimization, skincare science, cognitive enhancement, and overall wellness.",
            "Our platform combines educational depth with community support. Whether you're interested in understanding the science behind supplementation, mastering modern fitness techniques, or discovering the latest in skincare innovation, OptimizeX provides verified, research-backed information.",
            "Join thousands of high-performers who are committed to becoming the best versions of themselves through education, community support, and continuous learning.",
          ]}
          useInvertedBackground={false}
          buttons={[
            {
              text: "Start Learning Today",
              href: "/courses",
            },
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardSix
          title="Comprehensive Learning Ecosystem"
          description="Everything you need to optimize your physical appearance, mental performance, and overall health in one integrated platform."
          tag="Our Platform"
          tagIcon={Zap}
          tagAnimation="slide-up"
          features={[
            {
              id: 1,
              title: "Expert Courses",
              description: "Structured, in-depth courses covering fitness programming, nutrition science, skincare optimization, peptides, nootropics, and performance enhancement.",
              imageSrc: "http://img.b2bpic.net/free-photo/person-presenting-information-meeting-white-board_23-2149085958.jpg",
              imageAlt: "Course materials and learning resources",
            },
            {
              id: 2,
              title: "Private Community",
              description: "Connect with like-minded individuals, share experiences, discuss strategies, and get support from a community committed to self-improvement.",
              imageSrc: "http://img.b2bpic.net/free-photo/group-beautiful-women-celebrating-together_23-2148407549.jpg",
              imageAlt: "Community members networking and collaborating",
            },
            {
              id: 3,
              title: "Research Library",
              description: "Access curated articles, studies, and resources about optimization techniques, health science, and evidence-based self-improvement strategies.",
              imageSrc: "http://img.b2bpic.net/free-photo/top-vie-plants-notebook_23-2148785088.jpg",
              imageAlt: "Research documents and knowledge base",
            },
          ]}
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Simple, Transparent Pricing"
          description="Choose the plan that fits your learning journey. All plans include access to our core course library and community resources."
          tag="Flexible Options"
          tagIcon={CheckCircle}
          tagAnimation="slide-up"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          plans={[
            {
              id: "starter",
              badge: "Popular",
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
                "Access to 5+ core courses",
                "Community forum access",
                "Monthly optimization guides",
                "Email support",
                "Weekly group discussions",
              ],
            },
            {
              id: "pro",
              badge: "Best Value",
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
                "All Starter features",
                "20+ advanced courses",
                "1-on-1 consultation (monthly)",
                "Private coaching group",
                "Priority support",
                "Exclusive research database",
                "Affiliate commission opportunities",
              ],
            },
            {
              id: "premium",
              badge: "VIP",
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
                "All Pro features",
                "Unlimited course access",
                "Monthly 1-on-1 coaching sessions",
                "Custom optimization plans",
                "Direct access to experts",
                "Early access to new content",
                "Higher affiliate commissions",
              ],
            },
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTen
          title="Success Stories from Our Community"
          description="Real results from real members who transformed their approach to self-optimization."
          textboxLayout="default"
          useInvertedBackground={true}
          testimonials={[
            {
              id: "1",
              title: "Transformed My Fitness Journey",
              quote: "OptimizeX's structured courses gave me a scientific framework for my training. The community support kept me accountable, and I've seen better results in 3 months than the previous 2 years.",
              name: "James Mitchell",
              role: "Software Engineer & Fitness Enthusiast",
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-fashionable-well-dressed-man-with-beard-posing-outdoors_1328-3268.jpg",
              imageAlt: "James Mitchell - OptimizeX member",
            },
            {
              id: "2",
              title: "Finally Understanding the Science",
              quote: "No more guessing or following hype. OptimizeX provided me with evidence-based knowledge about supplements, skincare, and optimization techniques. The research library is invaluable.",
              name: "Sarah Chen",
              role: "Dermatology Student",
              imageSrc: "http://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1569.jpg",
              imageAlt: "Sarah Chen - OptimizeX member",
            },
            {
              id: "3",
              title: "Community Changed Everything",
              quote: "Being part of a group of like-minded individuals who are serious about optimization is motivating. The discussions in our community are insightful, and the support system is unmatched.",
              name: "Marcus Johnson",
              role: "Entrepreneur",
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-young-colleagues-having-meeting_23-2149060278.jpg",
              imageAlt: "Marcus Johnson - OptimizeX member",
            },
            {
              id: "4",
              title: "Worth Every Dollar",
              quote: "The Pro tier is a game-changer. The 1-on-1 coaching and custom optimization plans saved me months of trial and error. Plus, the affiliate opportunities have been lucrative.",
              name: "David Rodriguez",
              role: "Professional Athlete",
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-people-high-five-gym_23-2149049819.jpg",
              imageAlt: "David Rodriguez - OptimizeX member",
            },
            {
              id: "5",
              title: "Exceeded My Expectations",
              quote: "I joined thinking it would just be fitness tips. Instead, I got a comprehensive ecosystem covering nutrition, skincare, cognitive enhancement, and more. OptimizeX is exactly what I was looking for.",
              name: "Emily Watson",
              role: "Medical Professional",
              imageSrc: "http://img.b2bpic.net/free-photo/front-close-view-pink-notepad-with-pen-magnifier-success-note-gray-background_179666-19264.jpg",
              imageAlt: "Emily Watson - OptimizeX member",
            },
            {
              id: "6",
              title: "Perfect Resource Hub",
              quote: "The combination of expert courses, active community, and research library creates a perfect learning environment. I recommend OptimizeX to everyone serious about optimization.",
              name: "Alex Foster",
              role: "Fitness Coach",
              imageSrc: "http://img.b2bpic.net/free-photo/beautiful-woman-posing-confident-way_23-2148974022.jpg",
              imageAlt: "Alex Foster - OptimizeX member",
            },
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Get answers to common questions about OptimizeX courses, community, and membership."
          tag="Support"
          tagIcon={HelpCircle}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          mediaAnimation="slide-up"
          faqsAnimation="slide-up"
          faqs={[
            {
              id: "1",
              title: "What type of content is covered in the courses?",
              content: "Our courses cover comprehensive topics including fitness optimization, nutrition science, skincare and aesthetics, cognitive enhancement, supplementation education, lifestyle optimization, and evidence-based self-improvement strategies. All content is research-backed and regularly updated.",
            },
            {
              id: "2",
              title: "Is OptimizeX a substitute for medical advice?",
              content: "OptimizeX provides educational information only. We always emphasize that members should consult with healthcare professionals before making significant lifestyle or health decisions. Our community includes medical professionals, but personal medical advice should come from qualified practitioners.",
            },
            {
              id: "3",
              title: "Can I access courses on mobile?",
              content: "Yes! All courses are accessible on desktop, tablet, and mobile devices. You can download course materials for offline access with the Pro and Premium plans.",
            },
            {
              id: "4",
              title: "What payment methods do you accept?",
              content: "We accept all major credit cards, PayPal, and cryptocurrency payments. Billing is monthly or annual (with a discount). You can cancel anytime.",
            },
            {
              id: "5",
              title: "Are there affiliate opportunities?",
              content: "Yes! Pro and Premium members get access to our affiliate program. Earn commissions promoting OptimizeX courses and trusted partner products. Higher tier members receive higher commission rates.",
            },
            {
              id: "6",
              title: "How active is the community?",
              content: "Our community is very active with daily discussions, weekly group challenges, monthly AMAs with experts, and peer support. Community managers ensure discussions remain respectful and focused on evidence-based information.",
            },
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Stay Updated"
          title="Join Our Newsletter"
          description="Get weekly optimization tips, research summaries, and exclusive content directly in your inbox."
          tagIcon={Mail}
          tagAnimation="slide-up"
          background={{ variant: "radial-gradient" }}
          useInvertedBackground={true}
          mediaAnimation="slide-up"
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive weekly newsletters and optimization tips from OptimizeX. You can unsubscribe anytime."
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