import React from "react";
import Helmet from "react-helmet";
import { Button } from "@/components/ui/button";
import { FaUserShield, FaCogs, FaShoppingCart, FaHospital, FaLeaf, FaGraduationCap, FaBuilding, FaCarBattery, FaLightbulb } from "react-icons/fa";

export default function HomePage() {
  return (
    <main className="bg-gradient-to-br from-black to-green-900 text-white font-sans">
      <Helmet>
        <title>BIDUA Ventures - Empowering Indian Innovation</title>
        <meta name="description" content="BIDUA is building the future of India across 100+ innovation models." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 overflow-hidden">
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover opacity-40 z-0"
  >
    <source src="/assets/bidua.mp4" type="video/mp4" />
  </video>

  <div className="relative z-10">
    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">Welcome to BIDUA Ventures</h1>
    <p className="text-lg md:text-2xl max-w-2xl mb-6 text-white">
      From Human Verification to Futuristic Energy – One Platform, One Mission: Empower India.
    </p>
    <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 text-lg rounded-xl">
      Explore All Ideas
    </Button>
  </div>
</section>

      {/* Vision Section */}
      <section className="py-16 text-center bg-green-950 text-white">
        <h2 className="text-4xl font-bold mb-4">Our Vision</h2>
        <p className="max-w-3xl mx-auto text-lg">
          To empower India through a unified platform that revolutionizes sectors via sustainable innovation.
        </p>
      </section>

      {/* Why BIDUA */}
      <section className="px-4 py-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Why BIDUA?</h2>
        <p className="max-w-4xl mx-auto text-lg md:text-xl">
          “We don’t just build businesses, we build ecosystems.”<br />
          BIDUA is more than a company — it’s a visionary force spanning 100+ business models in innovation, inclusion, infrastructure, and impact.
        </p>
      </section>

      {/* Master Categories */}
      <section className="px-4 py-16">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Master Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-black bg-opacity-40 p-6 rounded-xl shadow-md hover:shadow-lg border border-green-800">
              <div className="text-green-400 text-3xl mb-3">{icons[idx]}</div>
              <h3 className="text-2xl font-bold text-green-400 mb-4">{cat.title}</h3>
              <ul className="list-disc list-inside space-y-2">
                {cat.items.map((item, i) => (
                  <li key={i} className="text-sm md:text-base opacity-90">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-4 py-20 text-center bg-gradient-to-t from-black to-green-900">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Join the Journey</h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Want to invest, collaborate, or join our mission?<br />
          Let’s build a future together.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl">Contact Us</Button>
          <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl">Pitch Your Startup</Button>
          <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl">Partner with BIDUA</Button>
        </div>
      </section>
    </main>
  );
}

const categories = [
  { title: "Safety & Verification", items: ["Human Verification (maids, tenants, employees)", "DNA-based Family Tracing", "Maid/Cook/Driver Services", "Mobile Anti-Theft App", "OBIDUA Authentication Code"] },
  { title: "Blockchain & Tech", items: ["Peer-to-Peer Fundraising over Blockchain", "Crypto-based Lottery", "Tokenized Points & Crypto Exchange", "Hosting & Server Services", "Secure Gadget & File App"] },
  { title: "Retail & E-Commerce", items: ["B2B/B2C Portal", "Amazon/Flipkart Listings Support", "Grocery at Door", "Buy-Sell Portal (Saree, Cars, Gifts)", "Used Car Dealership"] },
  { title: "Hospitality & Lifestyle", items: ["Sleeping Pod Chain Hotels", "Bed & Breakfast Pods", "Hotels on Lease", "Oxygen Bar", "Video Business Cards", "Transparent LED Visiting Card"] },
  { title: "Health & Wellness", items: ["Old Age Homes", "Alzheimer Patient Care", "Bio Diesel", "Health, Obesity, Nutrition Services", "Elixir Crystal Water Bottles"] },
  { title: "Agri & Plantation", items: ["Vanilla, Mahogany, Neem, Sandalwood", "Aeroponic Farming", "Pyramid Energy Farms", "Kantola, Kalimirch Farming", "Veg Direct from Farm App"] },
  { title: "Education & Social", items: ["Rural Kids Parks", "Play School Chain", "NGO for Organ Donation", "Educational Access to Remote India"] },
  { title: "Engineering & Infrastructure", items: ["Vertical Farming, Eco-Friendly AC", "Silicon Bricks, Pyramid Structures", "Automatic Lehenga Folder", "Wall-Mounted Bicycle Stand", "Concrete Cressers, Tyre-Based Bricks"] },
  { title: "Mobility & Energy", items: ["Train-Based Electricity Systems", "Self-Rotating Magnetic Motor", "Wireless 5G Powerbank Dongles", "Chassis Number Engravers", "Recharge Portal, Smart Travel Devices"] },
  { title: "Miscellaneous & Future Planning", items: ["Haunted Video App", "Cats Park Project", "Live QR Code Newspaper", "Wedding Planning App", "Digital Dermatology + Salon Tech"] }
];

const icons = [
  <FaUserShield />,
  <FaCogs />,
  <FaShoppingCart />,
  <FaHospital />,
  <FaLeaf />,
  <FaGraduationCap />,
  <FaBuilding />,
  <FaCarBattery />,
  <FaLightbulb />,
  <FaCogs />
];
