"use client";

import React from "react";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
});

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

type WeddingData = {
  verseReference: string;
  verseText: string;
  couple: string;
  date: string;
  ceremonyTime: string;
  receptionTime: string;
  ceremonyVenue: string;
  ceremonyAddress: string;
  receptionVenue: string;
  receptionAddress: string;
  ceremonyMaps: string;
  receptionMaps: string;
  whatsappRSVP: string;
  whatsappMessage: string;
  giftText: string;
  countdownTarget: string;
};

const WEDDING: WeddingData = {
  verseReference: "Eclesiastés 4:12 · RV1960",
  verseText:
    "Y si alguno prevaleciere contra uno, dos le resistirán; y cordón de tres dobleces no se rompe pronto.",
  couple: "Pablo & Alejandra",
  date: "30 de mayo de 2026",
  ceremonyTime: "13:00 hrs",
  receptionTime: "14:30 hrs",
  ceremonyVenue: "Iglesia Fuente de Agua de Vida Eterna",
  ceremonyAddress: "Blanco Encalada 279, Quilicura",
  receptionVenue: "Valerio Parrilladas",
  receptionAddress: "Av Manuel Antonio Matta 712",
  ceremonyMaps:
    "https://www.google.com/maps/search/?api=1&query=Blanco+Encalada+279,+Quilicura",
  receptionMaps:
    "https://www.google.com/maps/search/?api=1&query=Valerio+Parrilladas,+Av+Manuel+Antonio+Matta+712",
  whatsappRSVP: "https://wa.me/56940683959",
  whatsappMessage:
    "Hola, confirmo mi asistencia a la boda de Pablo y Alejandra.",
  giftText:
    "Tu presencia es nuestro mejor regalo, pero si deseas hacernos un obsequio, pronto agregaremos los datos aquí.",
  countdownTarget: "2026-05-30T13:00:00-04:00",
};

export default function WeddingInvitation() {
  const [timeLeft, setTimeLeft] = React.useState(() =>
    getTimeLeft(WEDDING.countdownTarget),
  );

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(WEDDING.countdownTarget));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-100 via-white to-neutral-100 text-stone-800">
      <HeroSection wedding={WEDDING} timeLeft={timeLeft} />
    </div>
  );
}

function HeroSection({
  wedding,
  timeLeft,
}: {
  wedding: WeddingData;
  timeLeft: TimeLeft;
}) {
  return (
    <section className="relative overflow-hidden rounded-b-[2.5rem]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.75), rgba(255,255,255,0.75)), url("https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1600&q=80")',
        }}
      />

      <div className="relative mx-auto max-w-5xl px-4 py-20 text-center lg:py-28">
        
        {/* NUESTRA BODA MÁS GRANDE */}
        <p className="mb-6 text-base font-medium uppercase tracking-[0.5em] text-amber-700">
          Nuestra boda
        </p>

        {/* NOMBRE ESTILO FIRMA */}
        <h1
          className={`mx-auto text-6xl leading-tight text-stone-900 sm:text-7xl lg:text-8xl ${greatVibes.className}`}
        >
          Pablo <br />
          <span className="text-4xl">&</span>
          <br />
          Alejandra
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-stone-600">
          Con alegría y gratitud queremos invitarte a acompañarnos en una
          celebración especial, preparada con amor, fe y esperanza.
        </p>

        {/* CONTADOR */}
        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-3 rounded-[2rem] bg-white/85 p-4 shadow-xl sm:grid-cols-4">
          <CountdownItem label="Días" value={timeLeft.days} />
          <CountdownItem label="Horas" value={timeLeft.hours} />
          <CountdownItem label="Minutos" value={timeLeft.minutes} />
          <CountdownItem label="Segundos" value={timeLeft.seconds} />
        </div>
      </div>
    </section>
  );
}

function CountdownItem({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div className="rounded-2xl border bg-stone-50 p-4 text-center">
      <div className="text-3xl font-semibold text-stone-900">
        {String(value).padStart(2, "0")}
      </div>
      <div className="text-xs uppercase text-stone-500 mt-1">{label}</div>
    </div>
  );
}

function getTimeLeft(targetDate: string): TimeLeft {
  const difference = new Date(targetDate).getTime() - Date.now();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}