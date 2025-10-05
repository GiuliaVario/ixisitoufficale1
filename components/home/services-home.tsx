"use client";

import ServicesSection from "@/components/shared/ServicesSection";
import { homeServices } from "@/content/services-data";


export default function ServicesHome() {
  return <ServicesSection items={homeServices} id="servizi-home" />;
}
