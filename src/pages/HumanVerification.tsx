import { Link } from 'wouter';

export default function HumanVerificationLanding() {
  return (
    <div className="max-w-5xl mx-auto p-20 space-y-16 bg-gradient-to-r from-black via-green-700 to-black text-white">

      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl font-extrabold mb-4 text-yellow-400">
          Human Verification Service
        </h1>
        <p className="text-lg mb-6">
          Stop fraud before it happens. BIDUA verifies your maids, drivers, tenants, or employees physically across India.
        </p>
        <Link href="/services/human-verification/book">
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition transform hover:scale-105">
            Book Now – ₹999 per Person
          </button>
        </Link>
      </section>

      {/* Why This Matters */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Why Human Verification is Critical Today</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Thousands of fraud and theft cases by unknown domestic workers and tenants reported each year.</li>
          <li>Fake IDs and unverifiable references are common in big cities and small towns alike.</li>
          <li>Hiring blindly puts your family, property, and business at risk.</li>
        </ul>
      </section>

      {/* How It Works */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
        <ol className="list-decimal ml-6 space-y-2">
          <li>Submit the person's name, address, phone, and photo (if available).</li>
          <li>Make secure online payment (₹999).</li>
          <li>Our field executive visits the address physically.</li>
          <li>We record a video, click photos, and validate their identity.</li>
          <li>You'll receive a link to access their full verification report.</li>
        </ol>
      </section>

      {/* Use Cases */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Who Should Use This Service?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white text-black border p-6 rounded-lg shadow-md">
            Families hiring maids, nannies, cooks
          </div>
          <div className="bg-white text-black border p-6 rounded-lg shadow-md">
            Employers recruiting drivers, helpers
          </div>
          <div className="bg-white text-black border p-6 rounded-lg shadow-md">
            Landlords renting properties
          </div>
          <div className="bg-white text-black border p-6 rounded-lg shadow-md">
            Offices hiring contract or field staff
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">What’s Included in Verification?</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>On-site address visit across any city or village (PAN India)</li>
          <li>Live photos & 1-minute video proof from verified agent</li>
          <li>Optional ID verification (if provided)</li>
          <li>Secure digital report sent to your email</li>
        </ul>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <strong>Q: Is this service available in my area?</strong><br />
            Yes! We cover all major cities, towns, and even remote locations across India.
          </div>
          <div>
            <strong>Q: How long does it take?</strong><br />
            Reports are typically ready within 24–48 hours.
          </div>
          <div>
            <strong>Q: Will I get photo or video?</strong><br />
            Yes. We share photos and a short video of the person at the address.
          </div>
          <div>
            <strong>Q: Can I verify multiple people?</strong><br />
            Yes, you can submit separate bookings for each individual.
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="text-center bg-green-800 py-8 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Start Verifying with BIDUA Today</h2>
        <Link href="/services/human-verification/book">
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg hover:bg-yellow-500 transition transform hover:scale-105">
            Book Verification Now
          </button>
        </Link>
      </section>
    </div>
  );
}
