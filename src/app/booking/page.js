"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import BookingForm from "@/components/BookingForm";
import { getBarbers, getServices, createAppointment } from "@/lib/db";
import { supabase } from "@/lib/supabase";

export default function BookingPage() {
  const [services, setServices] = useState([]);
  const [barbers, setBarbers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    loadData();
    checkAuth();
  }, []);

  async function loadData() {
    try {
      const [servicesData, barbersData] = await Promise.all([
        getServices(),
        getBarbers(),
      ]);
      setServices(servicesData);
      setBarbers(barbersData);
    } catch (error) {
      console.error("Error loading data:", error);
    } finally {
      setLoading(false);
    }
  }

  async function checkAuth() {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    setUser(user);
  }

  async function handleBooking(formData) {
    if (!user) {
      throw new Error("Please sign in to book an appointment");
    }

    const scheduledTime = `${formData.date}T${formData.time}:00`;

    const appointment = await createAppointment(
      user.id,
      formData.barberId,
      formData.serviceId,
      scheduledTime
    );

    if (!appointment) {
      throw new Error("Failed to create appointment");
    }

    return appointment;
  }

  if (loading) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-barber-black flex items-center justify-center">
          <p className="text-barber-gold text-xl">Loading...</p>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-barber-black py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-barber-gold mb-12 text-center">
            Book Your Appointment
          </h1>

          {!user && (
            <div className="bg-yellow-900 border border-yellow-600 rounded-lg p-4 mb-8 text-yellow-200">
              <p>
                Please{" "}
                <a href="/auth" className="font-bold underline">
                  sign in
                </a>{" "}
                to book an appointment.
              </p>
            </div>
          )}

          <div className="bg-barber-black-lighter border border-barber-gold rounded-lg p-8">
            <BookingForm
              services={services}
              barbers={barbers}
              onSubmit={handleBooking}
            />
          </div>
        </div>
      </main>
    </>
  );
}
