"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import AppointmentCard from "@/components/AppointmentCard";
import { getUserAppointments } from "@/lib/db";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import Button from "@/components/Button";

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkAuth();
  }, []);

  async function checkAuth() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      // Redirect to auth page (in a real app, use router.push)
      window.location.href = "/auth";
      return;
    }

    setUser(user);
    await loadAppointments(user.id);
  }

  async function loadAppointments(userId) {
    try {
      const data = await getUserAppointments(userId);
      setAppointments(data);
    } catch (error) {
      console.error("Error loading appointments:", error);
    } finally {
      setLoading(false);
    }
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12">
            <h1 className="text-5xl font-bold text-barber-gold">
              My Appointments
            </h1>
            <Link href="/booking">
              <Button variant="primary">Book New</Button>
            </Link>
          </div>

          {appointments.length === 0 ? (
            <div className="bg-barber-black-lighter border border-barber-gold rounded-lg p-12 text-center">
              <h2 className="text-2xl font-bold text-barber-gray-light mb-4">
                No Appointments Yet
              </h2>
              <p className="text-barber-gray mb-8">
                You don't have any upcoming appointments. Book one now!
              </p>
              <Link href="/booking">
                <Button variant="primary">Book Appointment</Button>
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {appointments.map((appointment) => (
                <AppointmentCard
                  key={appointment.id}
                  appointment={appointment}
                />
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
}
