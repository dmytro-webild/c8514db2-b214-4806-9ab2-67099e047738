"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="compact"
        sizing="medium"
        background="none"
        cardStyle="gradient-bordered"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Menü",
          id: "menu",
        },
        {
          name: "Über uns",
          id: "about",
        },
        {
          name: "Kontakt",
          id: "contact",
        },
      ]}
      brandName="Pizzeria Venezia"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      background={{
        variant: "plain",
      }}
      imagePosition="right"
      title="Pizza für die Seele im Herzen von Lüdenscheid"
      description="Authentischer Geschmack wie in Italien. Frische Zutaten, leidenschaftlich zubereitet und direkt zu Ihnen nach Hause geliefert."
      buttons={[
        {
          text: "Jetzt bestellen",
          href: "#menu",
        },
        {
          text: "Tisch reservieren",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/raw-pizza-oven_23-2147772089.jpg"
      mediaAnimation="blur-reveal"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/freshly-baked-pizza-rustic-wooden-table-generated-by-ai_188544-24094.jpg",
          alt: "Kunde 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/national-qutab-with-sumakh-other-spices_114579-2393.jpg",
          alt: "Kunde 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/side-view-man-sprinkles-kutab-with-sumach-with-yogurt_141793-3879.jpg",
          alt: "Kunde 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/baking-pizza-wood-fired-oven_52683-106697.jpg",
          alt: "Kunde 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-woman-eating-delicious-tiramisu-cafe_1303-25273.jpg",
          alt: "Kunde 5",
        },
      ]}
      avatarText="Von über 1.000 glücklichen Pizzaliebhabern empfohlen."
      marqueeItems={[
        {
          type: "text",
          text: "100% Authentisch",
        },
        {
          type: "text",
          text: "Frische Zutaten",
        },
        {
          type: "text",
          text: "Steinofen-Qualität",
        },
        {
          type: "text",
          text: "Hausgemacht",
        },
        {
          type: "text",
          text: "Schnelle Lieferung",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="Lüdenscheids gemütlichste Pizzeria"
      description="Wir bei Pizzeria Venezia glauben, dass Pizza mehr als nur ein Gericht ist. Es ist ein Gefühl – das Gefühl von Familie, italienischer Tradition und höchster Qualität. Seit Jahren verzaubern wir unsere Gäste mit authentischen Rezepten und Zutaten, die täglich frisch für Sie ausgewählt werden."
      metrics={[
        {
          value: "100%",
          title: "Authentisch",
        },
        {
          value: "15+",
          title: "Jahre Erfahrung",
        },
        {
          value: "1000+",
          title: "Zufriedene Gäste",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/side-view-chef-baking-delicious-pizza_23-2150134249.jpg"
      mediaAnimation="slide-up"
      metricsAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Frische Zutaten",
          description: "Nur das Beste kommt in unseren Ofen.",
          imageSrc: "http://img.b2bpic.net/free-photo/pepperoni-pizza-slices-wooden-board-with-knife-fork-around_114579-78311.jpg",
        },
        {
          title: "Blitzschnelle Lieferung",
          description: "Heiß und lecker bei Ihnen an der Tür.",
          imageSrc: "http://img.b2bpic.net/free-photo/experienced-chef-is-cutting-freshly-prepared-pizza-with-special-knife_613910-3418.jpg",
        },
        {
          title: "Familiäre Atmosphäre",
          description: "Ein Stück Italien mitten in Lüdenscheid.",
          imageSrc: "http://img.b2bpic.net/free-photo/confident-businessman-posing-thoughtfully-cafe_23-2147689187.jpg",
        },
      ]}
      title="Warum unsere Gäste uns lieben"
      description="Unser Geheimnis? Liebe zum Detail und echtes italienisches Handwerk."
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          brand: "Klassiker",
          name: "Margherita",
          price: "9,50 €",
          rating: 5,
          reviewCount: "120",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-delicious-italian-pizza-table_23-2148305641.jpg",
        },
        {
          id: "2",
          brand: "Scharf",
          name: "Diavola",
          price: "12,90 €",
          rating: 5,
          reviewCount: "85",
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-strawberry-pie_23-2148858421.jpg",
        },
        {
          id: "3",
          brand: "Traditionell",
          name: "Prosciutto",
          price: "11,50 €",
          rating: 4,
          reviewCount: "95",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-two-italian-pizza-with-different-toppings-cherry-tomato_23-2148076193.jpg",
        },
        {
          id: "4",
          brand: "Käseliebhaber",
          name: "Quattro Formaggi",
          price: "13,50 €",
          rating: 5,
          reviewCount: "110",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-pizza-caesar_140725-12438.jpg",
        },
        {
          id: "5",
          brand: "Spezial",
          name: "Calzone",
          price: "12,00 €",
          rating: 5,
          reviewCount: "70",
          imageSrc: "http://img.b2bpic.net/free-photo/yummy-qutabs-famous-eastern-meal-with-pumpkin-meat-inside-white-plate-poured-up-grey-floor_140725-14221.jpg",
        },
        {
          id: "6",
          brand: "Vegan",
          name: "Vegetariana",
          price: "11,90 €",
          rating: 4,
          reviewCount: "60",
          imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-pizza-stucco-background_23-2148601610.jpg",
        },
      ]}
      title="Unsere Signature-Pizzen"
      description="Handgefertigt und im Steinofen gebacken."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah M.",
          role: "Stammkundin",
          testimonial: "Die beste Pizza in ganz Lüdenscheid. Immer frisch und super schnell geliefert!",
          imageSrc: "http://img.b2bpic.net/free-photo/he-is-satisfied-from-his-life_329181-2789.jpg",
        },
        {
          id: "2",
          name: "Markus K.",
          role: "Feinschmecker",
          testimonial: "Authentischer Geschmack, tolle Portionen und ein Team, das einen wie Familie behandelt.",
          imageSrc: "http://img.b2bpic.net/free-photo/crazy-man-funny-expression_1194-3203.jpg",
        },
        {
          id: "3",
          name: "Elena R.",
          role: "Pizza-Fan",
          testimonial: "Man schmeckt die hochwertigen Zutaten. Sehr gemütliches Ambiente vor Ort.",
          imageSrc: "http://img.b2bpic.net/free-photo/enjoying-success-my-company_329181-15199.jpg",
        },
        {
          id: "4",
          name: "David W.",
          role: "Pizza-Fan",
          testimonial: "Immer wieder ein Genuss. Egal ob Lieferung oder Restaurant, top Qualität.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-cafe-dines-traditional-shakshuka-ayran_169016-16512.jpg",
        },
        {
          id: "5",
          name: "Julia P.",
          role: "Liebhaberin",
          testimonial: "Große Portionen und sehr faire Preise. Sehr empfehlenswert!",
          imageSrc: "http://img.b2bpic.net/free-photo/beauty-vlogger-adjusting-camera_23-2148916349.jpg",
        },
      ]}
      title="Was unsere Gäste sagen"
      description="Erfahren Sie, warum Pizzeria Venezia die erste Wahl in Lüdenscheid ist."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",
          title: "Wie sind die Öffnungszeiten?",
          content: "Wir sind täglich von 11:00 bis 22:00 Uhr für Sie da.",
        },
        {
          id: "2",
          title: "Liefern Sie auch nach Hause?",
          content: "Ja, wir liefern im gesamten Umkreis von Lüdenscheid schnell und heiß.",
        },
        {
          id: "3",
          title: "Kann ich online reservieren?",
          content: "Gerne können Sie uns unter 02351 6701444 anrufen, um einen Tisch zu reservieren.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/high-angle-pizza-restaurant-table_23-2148305651.jpg"
      title="Häufige Fragen"
      description="Alle Informationen zu Lieferung und Abholung."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Kontakt"
      title="Hunger auf Italien?"
      description="Besuchen Sie uns am Brockhauser Weg 41 in Lüdenscheid oder rufen Sie an unter 02351 6701444."
      buttons={[
        {
          text: "Jetzt anrufen",
          href: "tel:023516701444",
        },
        {
          text: "Route planen",
          href: "https://maps.google.com",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/wicker-gray-table-with-glass-gray-chairs_140725-3025.jpg"
      logoText="Pizzeria Venezia"
      columns={[
        {
          title: "Kontakt",
          items: [
            {
              label: "Brockhauser Weg 41, 58507 Lüdenscheid",
              href: "#",
            },
            {
              label: "02351 6701444",
              href: "tel:023516701444",
            },
          ],
        },
        {
          title: "Quicklinks",
          items: [
            {
              label: "Menü",
              href: "#menu",
            },
            {
              label: "Über uns",
              href: "#about",
            },
            {
              label: "Kontakt",
              href: "#contact",
            },
          ],
        },
      ]}
      copyrightText="© 2025 Pizzeria Venezia. Alle Rechte vorbehalten."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
