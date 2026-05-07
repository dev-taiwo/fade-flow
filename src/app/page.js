import Link from "next/link";
import Navbar from "@/components/Navbar";
import WaitTimeDisplay from "@/components/WaitTimeDisplay";
import Button from "@/components/Button";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-barber-black text-white">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            <div>
              <h1 className="text-5xl sm:text-6xl font-bold text-barber-gold mb-6 leading-tight">
                Premium Barbershop Cuts
              </h1>

              <p className="text-xl text-barber-gray mb-8 leading-relaxed">
                Book your next haircut in seconds. No waiting, no hassle.
                Fast, professional, and easy.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/booking">
                  <Button
                    variant="primary"
                    className="w-full sm:w-auto text-lg"
                  >
                    Book Now
                  </Button>
                </Link>

                <Link href="/appointments">
                  <Button
                    variant="secondary"
                    className="w-full sm:w-auto text-lg"
                  >
                    View Appointments
                  </Button>
                </Link>
              </div>
            </div>

            {/* Wait Time Widget */}
            <div>
              <WaitTimeDisplay />

              <div className="mt-8 bg-zinc-900 border border-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-bold text-barber-gold mb-4">
                  Why Fade Flow?
                </h3>

                <ul className="space-y-3 text-barber-gray">
                  <li className="flex items-start gap-3">
                    <span className="text-barber-gold font-bold">✓</span>
                    <span>Quick online booking</span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="text-barber-gold font-bold">✓</span>
                    <span>Real-time wait times</span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="text-barber-gold font-bold">✓</span>
                    <span>Choose your barber</span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="text-barber-gold font-bold">✓</span>
                    <span>Professional appointments</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-zinc-950 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <h2 className="text-4xl font-bold text-barber-gold text-center mb-12">
              Our Services
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Haircut", desc: "Classic or modern styles" },
                { name: "Lineup", desc: "Sharp clean lines" },
                { name: "Beard Trim", desc: "Shape and grooming" },
                { name: "Kids Cut", desc: "Friendly and fun" },
              ].map((service, i) => (
                <div
                  key={i}
                  className="bg-black border border-yellow-600 rounded-lg p-6 text-center"
                >
                  <h3 className="text-xl font-bold text-barber-gold mb-2">
                    {service.name}
                  </h3>

                  <p className="text-barber-gray text-sm">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="bg-zinc-900 border-2 border-yellow-600 rounded-lg p-12 text-center">
            
            <h2 className="text-4xl font-bold text-barber-gold mb-4">
              Ready for Your Next Cut?
            </h2>

            <p className="text-xl text-barber-gray mb-8">
              Book with one of our expert barbers today.
            </p>

            <Link href="/booking">
              <Button variant="primary" className="text-lg px-8 py-3">
                Schedule Now
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}