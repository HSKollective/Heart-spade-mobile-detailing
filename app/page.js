"use client";

import { useState, useEffect } from "react";

export default function HeartSpadeMobileDetailingWebsite() {
  const [location, setLocation] = useState(null);
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    document.title = "Heart & Spade Mobile Detailing | Toronto";
  }, []);

  const getLocation = () => {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition((pos) => {
      setLocation({
        lat: pos.coords.latitude.toFixed(4),
        lng: pos.coords.longitude.toFixed(4),
      });
    });
  };

  const handleUpload = (e) => {
    const files = Array.from(e.target.files);
    const urls = files.map((file) => URL.createObjectURL(file));
    setGallery((prev) => [...prev, ...urls]);
  };
const packagePrices = {
  Jack: 120,
  Queen: 180,
  King: 260,
  Ace: 0, // coming soon
};

const vehicleFees = {
  Coupe: 0,
  Sedan: 0,
  SUV: 30,
  Truck: 50,
};

const zoneFees = {
  Toronto: 0,
  GTA: 15,
  Extended: 30,
};

const [selectedPackage, setSelectedPackage] = useState("Jack");
const [vehicleType, setVehicleType] = useState("Sedan");
const [serviceZone, setServiceZone] = useState("Toronto");

const totalPrice =
  packagePrices[selectedPackage] +
  vehicleFees[vehicleType] +
  zoneFees[serviceZone];
  return (
    <div className="min-h-screen bg-black text-white font-sans">

      {/* HERO */}
      <section className="relative overflow-hidden min-h-screen flex items-center justify-center text-center">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-blue-200/5 to-transparent animate-pulse" />
        </div>

        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=2070&auto=format&fit=crop')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-red-900/30 via-black/70 to-black" />

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            Heart & Spade
            <span className="block text-red-500">Mobile Detailing</span>
          </h1>

          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-6">
            We bring showroom-level detailing directly to your driveway.
          </p>

          {/* LOCATION */}
          <div className="mb-6 text-gray-400">
            {location ? (
              <p>Detected Location: {location.lat}, {location.lng}</p>
            ) : (
              <button onClick={getLocation} className="underline text-red-400">
                Detect My Location
              </button>
            )}
          </div>

          {/* CTA */}
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => document.getElementById("pricing").scrollIntoView({ behavior: "smooth" })}
              className="px-14 py-6 rounded-2xl bg-red-600 hover:bg-red-500 text-xl font-bold shadow-2xl shadow-red-600/30"
            >
              Start Your Quote
            </button>

            <button
              onClick={() => document.getElementById("booking").scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-5 rounded-2xl border border-white/20 hover:border-red-500 hover:text-red-400"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-center mb-12">Pricing Packages</h2>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            { name: "Jack Package", price: "$120", items: ["Wash", "Clay", "Seal"] },
            { name: "Queen Package", price: "$180", items: ["Wash", "Clay", "Seal", "Interior clean"] },
            { name: "King Package", price: "$260", items: ["Deep wash", "Interior detail", "Trim restore"] },
            { name: "Ace Package", price: "coming soon", items: ["coming soon"] }
          ].map((pkg, i) => (
            <div key={i} className="bg-zinc-900 p-8 rounded-3xl border border-white/10">
              <h3 className="text-2xl font-bold text-center mb-2">{pkg.name}</h3>
              <p className="text-red-500 text-3xl font-bold text-center mb-4">{pkg.price}</p>
              <ul className="text-gray-400 space-y-2">
                {pkg.items.map((item, j) => (
                  <li key={j}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
{/* QUOTE CALCULATOR */}
<section className="max-w-6xl mx-auto px-6 py-24">
  <h2 className="text-4xl font-bold text-center mb-12">
    Instant Quote Calculator
  </h2>

  <div className="bg-zinc-900 rounded-3xl border border-white/10 p-8 max-w-3xl mx-auto">

    <div className="mb-6">
      <label className="block mb-2 font-semibold">
        Package
      </label>

      <select
        value={selectedPackage}
        onChange={(e) => setSelectedPackage(e.target.value)}
        className="w-full bg-black border border-white/10 rounded-xl p-3"
      >
        <option>Jack</option>
        <option>Queen</option>
        <option>King</option>
        <option>Ace</option>
      </select>
    </div>

    <div className="mb-6">
      <label className="block mb-2 font-semibold">
        Vehicle Type
      </label>

      <select
        value={vehicleType}
        onChange={(e) => setVehicleType(e.target.value)}
        className="w-full bg-black border border-white/10 rounded-xl p-3"
      >
        <option>Coupe</option>
        <option>Sedan</option>
        <option>SUV</option>
        <option>Truck</option>
      </select>
    </div>

    <div className="mb-6">
      <label className="block mb-2 font-semibold">
        Service Area
      </label>

      <select
        value={serviceZone}
        onChange={(e) => setServiceZone(e.target.value)}
        className="w-full bg-black border border-white/10 rounded-xl p-3"
      >
        <option>Toronto</option>
        <option>GTA</option>
        <option>Extended</option>
      </select>
    </div>

    <div className="text-center mt-10">
      <p className="text-gray-400 mb-2">
        Estimated Price
      </p>

      <p className="text-5xl font-bold text-red-500">
        ${totalPrice}
      </p>

      <button
        onClick={() =>
          document.getElementById("booking").scrollIntoView({
            behavior: "smooth",
          })
        }
        className="mt-6 px-8 py-4 bg-red-600 rounded-2xl hover:bg-red-500 font-bold"
      >
        Book This Package
      </button>
    </div>
  </div>
</section>
      {/* GALLERY */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-6">Before & After Gallery</h2>

        <div className="text-center mb-6">
          <input type="file" multiple accept="image/*" onChange={handleUpload} />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {gallery.length > 0 ? gallery.map((img, i) => (
            <img key={i} src={img} className="rounded-2xl h-64 w-full object-cover border border-white/10" />
          )) : (
            Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-64 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center text-gray-500">
                Upload Image {i + 1}
              </div>
            ))
          )}
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-zinc-950 py-24">
        <h2 className="text-4xl font-bold text-center mb-12">Customer Reviews</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-6">
          {[
            "Absolutely spotless — my car looks brand new!",
            "Convenient mobile service and amazing results.",
            "Best detailing I've ever had, highly recommend."
          ].map((review, i) => (
            <div key={i} className="bg-black border border-white/10 p-6 rounded-2xl">
              <p className="text-gray-300">"{review}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-8">Service Area</h2>
        <div className="rounded-3xl overflow-hidden border border-white/10">
          <iframe
            className="w-full h-96"
            src="https://www.google.com/maps/embed/v1/view?key=YOUR_API_KEY&center=43.65107,-79.347015&zoom=10"
          />
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-center mb-10">Book Your Appointment</h2>
        <div className="bg-zinc-900 rounded-3xl p-6 border border-white/10">
          <iframe
            src="https://calendly.com/heart-spadeco
            "
            className="w-full h-[700px] rounded-2xl"
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 text-gray-500 border-t border-white/10">
        © 2026 Heart & Spade Mobile Detailing • Luxury Delivered To Your Door
      </footer>

    </div>
  );
}
