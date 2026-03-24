"use client";

import React from "react";
import { Great_Vibes } from "next/font/google";
import { Cormorant_Garamond } from "next/font/google";


const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["600", "800"],
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
  couple: "Pablo y Alejandra",
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
    "Tu presencia es nuestro mejor regalo, pero si deseas hacernos un obsequio, puedes enviarlo aca .",
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

      <main className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <VerseSection wedding={WEDDING} />
        <SummarySection wedding={WEDDING} />
        <EventSection />
        <LocationSection wedding={WEDDING} />
<InfoCards />
<RSVPSection wedding={WEDDING} />
      </main>
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
            'linear-gradient(rgba(255,255,255,0.74), rgba(255,255,255,0.74)), url("https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1600&q=80")',
        }}
      />

      <div className="relative mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-28">
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.5em] text-amber-700 sm:text-base">
          Nuestra boda
        </p>

        <h1
          className={`mx-auto text-6xl leading-[0.95] text-stone-900 sm:text-7xl lg:text-8xl ${greatVibes.className}`}
        >
          Pablo
          <br />
          <span className="text-4xl sm:text-5xl">&</span>
          <br />
          Alejandra
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-stone-600 sm:text-[1.2rem]">
          Con alegría y gratitud en nuestros corazones queremos invitarte a ser parte de los momentos más importantes de nuestra vida.
        </p>

        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-3 rounded-[2rem] bg-white/85 p-4 shadow-xl backdrop-blur sm:grid-cols-4">
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
    <div className="rounded-2xl border border-stone-200/80 bg-stone-50 p-4 text-center shadow-sm">
      <div className="text-3xl font-semibold tracking-[-0.03em] text-stone-900 sm:text-4xl">
        {String(value).padStart(2, "0")}
      </div>
      <div className="mt-2 text-[11px] font-medium uppercase tracking-[0.28em] text-stone-500">
        {label}
      </div>
    </div>
  );
}

function VerseSection({ wedding }: { wedding: WeddingData }) {
  return (
    <section className="pt-12">
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-stone-200 bg-white px-8 py-10 text-center shadow-lg shadow-stone-200/40 sm:px-12">
        <p className="text-[11px] font-medium uppercase tracking-[0.42em] text-amber-700 sm:text-xs">
        
        </p>
        <p className={`${cormorant.className} italic text-[20px] text-stone-700 leading-relaxed max-w-2xl mx-auto`}>
  {wedding.verseText}
</p>
        <p className="mt-6 text-[11px] uppercase tracking-[0.38em] text-stone-500 sm:text-xs">
          {wedding.verseReference}
        </p>
      </div>
    </section>
  );
}

function SummarySection({ wedding }: { wedding: WeddingData }) {
  const items = [
    { title: "Fecha", value: wedding.date },
    { title: "Ceremonia", value: wedding.ceremonyTime },
    { title: "Recepción", value: wedding.receptionTime },
  ];

  return (
    <section className="py-12">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.4em] text-amber-700 sm:text-xs">
            Nuestro día
          </p>
          <h2 className="mb-5 max-w-xl text-4xl font-semibold leading-tight tracking-[-0.03em] text-stone-900 sm:text-5xl">
            Tu presencia hará que este día sea aún más significativo e inolvidable para nosotros.
          </h2>
          <p className="max-w-2xl text-base leading-8 text-stone-600 sm:text-lg sm:leading-9">
           
          </p>
        </div>

        <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-lg shadow-stone-200/40">
          <div className="grid gap-4 sm:grid-cols-3">
            {items.map((item) => (
              <div key={item.title} className="rounded-2xl bg-stone-50 p-4">
                <div className="text-[11px] font-medium uppercase tracking-[0.24em] text-stone-500">
                  {item.title}
                </div>
                <div className="mt-3 text-lg font-semibold tracking-[-0.02em] text-stone-900">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function EventSection() {
  return (
    <section className="py-12">
      <div className="mb-8 text-center">
        <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.4em] text-amber-700 sm:text-xs">
          Detalles del evento
        </p>
        <h2 className="text-4xl font-semibold tracking-[-0.03em] text-stone-900 sm:text-5xl">
          Agenda de la celebración
        </h2>
      </div>

      <div className="mx-auto max-w-4xl rounded-[2rem] border border-stone-200 bg-white p-8 shadow-lg shadow-stone-200/40">
        <div className="space-y-5">
          <TimelineItem
            title="Recepción de invitados"
            time="12:30 hrs"
            text="Recepción y bienvenida de los invitados."
          />
          <TimelineItem
            title="Comienzo de la ceremonia"
            time="13:00 hrs"
            text="Inicio de la ceremonia principal."
          />
          <TimelineItem
            title="Comida especial"
            time="14:30 hrs"
            text="Comida especial para compartir junto a los invitados."
          />
        </div>
      </div>
    </section>
  );
}

function TimelineItem({
  title,
  time,
  text,
}: {
  title: string;
  time: string;
  text: string;
}) {
  const badge = time.split(":")[0];

  return (
    <div className="flex gap-4 rounded-2xl bg-stone-50 p-5">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-sm font-semibold tracking-[-0.02em] text-amber-800">
        {badge}
      </div>
      <div>
        <div className="text-lg font-semibold tracking-[-0.02em] text-stone-900">
          {title}
        </div>
        <div className="mt-1 text-sm font-medium text-amber-700">{time}</div>
        <p className="mt-2 text-[15px] leading-7 text-stone-600">{text}</p>
      </div>
    </div>
  );
}

function LocationSection({ wedding }: { wedding: WeddingData }) {
  return (
    <section className="py-12">
      <div className="mb-8 text-center">
        <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.4em] text-amber-700 sm:text-xs">
          Ubicación
        </p>
        <h2 className="text-4xl font-semibold tracking-[-0.03em] text-stone-900 sm:text-5xl">
          Lugares del evento
        </h2>
      </div>

      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
        <LocationCard
          label="Ceremonia"
          title={wedding.ceremonyVenue}
          address={wedding.ceremonyAddress}
          href={wedding.ceremonyMaps}
        />
        <LocationCard
          label="Recepción"
          title={wedding.receptionVenue}
          address={wedding.receptionAddress}
          href={wedding.receptionMaps}
        />
      </div>
    </section>
  );
}

function LocationCard({
  label,
  title,
  address,
  href,
}: {
  label: string;
  title: string;
  address: string;
  href: string;
}) {
  return (
    <div className="flex h-full flex-col rounded-[2rem] border border-stone-200 bg-white p-8 shadow-lg shadow-stone-200/40">
      <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-amber-700">
        {label}
      </p>
      <h3 className="mt-5 text-2xl font-semibold leading-tight tracking-[-0.025em] text-stone-900 sm:text-3xl">
        {title}
      </h3>
      <p className="mt-5 text-[15px] leading-8 text-stone-600">{address}</p>

      <div className="mt-8 pt-2">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex rounded-2xl border border-amber-300 bg-amber-50 px-5 py-3 text-sm font-medium text-amber-900 transition hover:bg-amber-100"
        >
          Abrir en Google Maps
        </a>
      </div>
    </div>
  );
}

function InfoCards() {
  const datos = `Titular: Pablo Esteban Contreras Poblete
RUT: 19.064.057-4
Banco: Itaú
Tipo de cuenta: Cuenta corriente
Número: 0226600161
Email: pblconpo@gmail.com`;

  const copiar = () => {
    navigator.clipboard.writeText(datos);
    alert("Datos copiados ✔");
  };

  return (
    <section className="py-16">
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-stone-200 bg-white p-10 shadow-lg shadow-stone-200/40">
        <div className="text-center">
          <p className="mb-3 text-[11px] uppercase tracking-[0.4em] text-amber-700">
            Regalos
          </p>

          <h3 className="text-4xl font-semibold tracking-[-0.02em] text-stone-900">
            Un gesto para nuestra nueva vida
          </h3>

          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-8 text-stone-600">
            Tu presencia en este día tan especial es nuestro mayor regalo.
            Pero si deseas acompañarnos también en el inicio de nuestra nueva vida,
            puedes hacerlo a través de los siguientes datos.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-2xl rounded-[1.5rem] bg-gradient-to-b from-stone-50 to-white p-7 shadow-sm ring-1 ring-stone-200">
          <div className="mb-5 text-center text-xl text-amber-700">✦</div>

          <div className="grid gap-3 text-[15px] sm:grid-cols-[180px_1fr]">
            <div className="font-medium text-stone-900">Titular</div>
            <div className="text-stone-600">
              Pablo Esteban Contreras Poblete
            </div>

            <div className="font-medium text-stone-900">RUT</div>
            <div className="text-stone-600">19.064.057-4</div>

            <div className="font-medium text-stone-900">Banco</div>
            <div className="text-stone-600">Itaú</div>

            <div className="font-medium text-stone-900">Tipo de cuenta</div>
            <div className="text-stone-600">Cuenta corriente</div>

            <div className="font-medium text-stone-900">Número</div>
            <div className="text-stone-600 tracking-wide">0226600161</div>

            <div className="font-medium text-stone-900">Email</div>
            <div className="break-all text-stone-600">pblconpo@gmail.com</div>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={copiar}
              className="inline-flex items-center gap-2 rounded-xl border border-amber-300 bg-amber-50 px-5 py-2 text-sm font-medium text-amber-900 transition hover:scale-[1.03] hover:bg-amber-100"
            >
              ✦ Copiar datos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


function RSVPSection({ wedding }: { wedding: WeddingData }) {
  return (
    <section id="rsvp" className="py-12">
      <div className="rounded-[2rem] bg-gradient-to-r from-stone-200 via-white to-neutral-100 p-8 shadow-xl sm:p-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.4em] text-amber-700 sm:text-xs">
            RSVP
          </p>
          <h2 className="text-4xl font-semibold tracking-[-0.03em] text-stone-900 sm:text-5xl">
            Esperamos contar contigo
          </h2>
          <p className="mt-4 text-base leading-8 text-stone-600 sm:text-lg sm:leading-9">
            Haz clic en el botón para confirmar tu asistencia directamente por
            WhatsApp con un mensaje automático.
          </p>
          <a
            href={`${wedding.whatsappRSVP}?text=${encodeURIComponent(
              wedding.whatsappMessage,
            )}`}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-stone-900 px-6 py-3 text-sm font-medium text-white shadow-lg transition hover:scale-[1.03]"
          >
            <span className="text-base">✦</span>
            Confirmar por WhatsApp
          </a>
        </div>
      </div>
    </section>
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