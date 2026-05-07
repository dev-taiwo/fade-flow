"use client";

import { useEffect, useState } from "react";

export default function WaitTimeDisplay() {
  const [waitTime, setWaitTime] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWaitTime();
    // Refresh every 5 minutes
    const interval = setInterval(fetchWaitTime, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  async function fetchWaitTime() {
    try {
      const waitTime = 15;
      setWaitTime(waitTime);
    } catch (error) {
      console.error("Error fetching wait time:", error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="bg-barber-black-lighter border border-barber-gold rounded-lg p-6 text-center">
        <p className="text-barber-gray text-sm">Current Wait Time</p>
        <p className="text-2xl font-bold text-barber-gold mt-2">Loading...</p>
      </div>
    );
  }

  return (
    <div className="bg-barber-black-lighter border border-barber-gold rounded-lg p-6 text-center">
      <p className="text-barber-gray text-sm">Current Wait Time</p>
      <p className="text-4xl font-bold text-barber-gold mt-2">
        {waitTime || 0}
      </p>
      <p className="text-barber-gray text-sm mt-1">minutes</p>
    </div>
  );
}
