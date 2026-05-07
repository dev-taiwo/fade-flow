"use client";

import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Select from "./Select";

export default function BookingForm({ services = [], barbers = [], onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceId: "",
    barberId: "",
    date: "",
    time: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Basic validation
    if (
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.serviceId ||
      !formData.barberId ||
      !formData.date ||
      !formData.time
    ) {
      setError("Please fill in all fields");
      setLoading(false);
      return;
    }

    try {
      await onSubmit(formData);
      setSuccess(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        serviceId: "",
        barberId: "",
        date: "",
        time: "",
      });
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError(err.message || "Failed to book appointment");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-green-900 border border-green-600 rounded-lg p-6 text-center">
        <h3 className="text-2xl font-bold text-green-300 mb-2">
          Appointment Booked!
        </h3>
        <p className="text-green-200">
          Your haircut appointment has been successfully booked. See you soon!
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-900 border border-red-600 rounded-lg p-4 text-red-200">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="John Doe"
          required
        />
        <Input
          label="Phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="(555) 123-4567"
          required
        />
      </div>

      <Input
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="john@example.com"
        required
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Select
          label="Service"
          name="serviceId"
          value={formData.serviceId}
          onChange={handleChange}
          options={services}
          placeholder="Choose a service"
          required
        />
        <Select
          label="Barber"
          name="barberId"
          value={formData.barberId}
          onChange={handleChange}
          options={barbers}
          placeholder="Choose a barber"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Date"
          name="date"
          type="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <Input
          label="Time"
          name="time"
          type="time"
          value={formData.time}
          onChange={handleChange}
          required
        />
      </div>

      <Button type="submit" variant="primary" className="w-full" disabled={loading}>
        {loading ? "Booking..." : "Book Appointment"}
      </Button>
    </form>
  );
}
