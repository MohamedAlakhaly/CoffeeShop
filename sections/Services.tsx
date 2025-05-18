import ServicesCard from "@/components/cards/ServicesCard";
import { Coffee, CupSoda, Utensils } from "lucide-react";
import React from "react";

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-orange-400 uppercase tracking-wider mb-2">
            FEATURES
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">OUR SERVICES</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Service 1 */}
          <ServicesCard
            cardIcon={Coffee}
            cardSubTitle={`I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or double click me.`}
            cardTitle={`I'm a Service`}
          />

          {/* Service 2 */}

          <ServicesCard
            cardIcon={CupSoda}
            cardSubTitle={`I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or double click me.`}
            cardTitle={`I'm a Service`}
          />

          {/* Service 3 */}

          <ServicesCard
            cardIcon={Utensils}
            cardSubTitle={`I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or double click me.`}
            cardTitle={`I'm a Service`}
          />

          {/* Service 4 */}
          <ServicesCard
            cardIcon={Coffee}
            cardSubTitle={`I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or double click me.`}
            cardTitle={`I'm a Service`}
          />
        </div>
      </div>
    </section>
  );
}
