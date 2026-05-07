import { supabase } from "./supabase";

// Fetch all barbers
export async function getBarbers() {
  return [
    {
      id: 1,
      name: "Mosey",
    },
    {
      id: 2,
      name: "Jay",
    },
    {
      id: 3,
      name: "Chris",
    },
  ];
}

// Fetch all services
export async function getServices() {
  return [
    {
      id: 1,
      name: "Haircut",
      duration_minutes: 45,
    },
    {
      id: 2,
      name: "Lineup",
      duration_minutes: 20,
    },
    {
      id: 3,
      name: "Beard Trim",
      duration_minutes: 30,
    },
    {
      id: 4,
      name: "Kids Cut",
      duration_minutes: 30,
    },
  ];
}

// Fetch user's appointments
export async function getUserAppointments(userId) {
  return [
    {
      id: 1,
      scheduled_time: new Date().toISOString(),
      services: {
        name: "Haircut",
      },
      barbers: {
        name: "Mosey",
      },
    },
  ];
}

// Create appointment
export async function createAppointment(
  customerId,
  barberId,
  serviceId,
  scheduledTime
) {
  return {
    id: 1,
    customer_id: customerId,
    barber_id: barberId,
    service_id: serviceId,
    scheduled_time: scheduledTime,
  };
}

// Calculate wait time
export async function calculateWaitTime() {
  return 15;
}

// Available slots
export async function getAvailableSlots(date) {
  return [
    {
      time: "10:00 AM",
      available: true,
      display: "10:00 AM",
    },
    {
      time: "11:00 AM",
      available: true,
      display: "11:00 AM",
    },
    {
      time: "12:00 PM",
      available: false,
      display: "12:00 PM",
    },
    {
      time: "1:00 PM",
      available: true,
      display: "1:00 PM",
    },
  ];
}