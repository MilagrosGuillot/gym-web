'use client';
import { useState } from "react";
import Image from "next/image";

interface Asesoria {
  nombre: string;
  descripcion?: string;
  items: string[];
  incluyeSeguimiento: boolean;
  whatsapp: string;
  noIncluye: string[];
  precios?: { plan: string; valor: number }[];
}

export default function AsesoriasPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [asesoriaSeleccionada, setAsesoriaSeleccionada] = useState<Asesoria | null>(null);

  const asesorias: Asesoria[] = [
    {
      nombre: "ASESORÍA COMPLETA",
      descripcion: "Plan de Nutrición + Plan de Entrenamiento",
      incluyeSeguimiento: true,
      whatsapp: "5493516579114",
      items: [
        "Plan nutricional personalizado + plan de entrenamiento personalizado.",
        "Plan de suplementación personalizado acorde al objetivo en caso de ser necesario.",
        "Información extra de ambos planes.",
        "Chequeos cada 7-14 días (2 semanas).",
        "Actualizaciones limitadas en caso de ser necesario (imprevistos, preferencias, etc.)",
        "Soporte vía WhatsApp.",
        "Revisión de ejecución de ejercicios mediante videos en caso de ser necesario."
      ],
      noIncluye: [],
      precios: [
        { plan: "1 mes", valor: 30000 },
        { plan: "2 meses", valor: 55000 },
        { plan: "3 meses", valor: 80000 }
      ]
    },
    {
      nombre: "ASESORÍA MEDIA",
      descripcion: "Plan de Nutrición o Plan de Entrenamiento",
      incluyeSeguimiento: true,
      whatsapp: "5493516579114",
      items: [
        "Plan nutricional personalizado o plan de entrenamiento personalizado.",
        "Plan de suplementación personalizado acorde al objetivo en caso de ser necesario.",
        "Información extra del plan elegido.",
        "Chequeos cada 7-14 días (2 semanas).",
        "Actualizaciones ilimitadas en caso de ser necesario (imprevistos, preferencias, etc.)",
        "Soporte vía WhatsApp.",
        "Revisión de ejecución de ejercicios mediante videos (si se elige entrenamiento)."
      ],
      noIncluye: [],
      precios: [
        { plan: "1 mes", valor: 22500 },
        { plan: "2 meses", valor: 40000 },
        { plan: "3 meses", valor: 65000 }
      ]
    },
    {
      nombre: "RUTINA PERSONALIZADA",
      incluyeSeguimiento: false,
      whatsapp: "5493516579114",
      items: [
        "Plan de entrenamiento personalizado.",
        "Plan de suplementación personalizado acorde al objetivo (si aplica).",
        "Información extra del plan elegido."
      ],
      noIncluye: [
        "Chequeos.",
        "Actualizaciones del plan.",
        "Soporte vía WhatsApp.",
        "Revisión de ejercicios mediante videos."
      ],
      precios: [
        { plan: "1 mes", valor: 3000 },
        { plan: "2 meses", valor: 8000 },
        { plan: "3 meses", valor: 8000 }
      ]
    },
    {
      nombre: "DIETA PERSONALIZADA",
      incluyeSeguimiento: false,
      whatsapp: "5493516579114",
      items: [
        "Plan de nutrición personalizado.",
        "Plan de suplementación personalizado acorde al objetivo (si aplica).",
        "Información extra del plan elegido."
      ],
      noIncluye: [
        "Chequeos.",
        "Actualizaciones del plan.",
        "Soporte vía WhatsApp."
      ],
      precios: [
        { plan: "1 mes", valor: 3000 },
        { plan: "2 meses", valor: 8000 },
        { plan: "3 meses", valor: 8000 }
      ]
    }
  ];

  const openModal = (asesoria: Asesoria) => {
    setAsesoriaSeleccionada(asesoria);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black p-6 gap-10">
      <h1 className="text-xl md:text-3xl font-bold italic mb-4" style={{ paddingTop: '5%' }}>
        ASESORÍAS PERSONALIZADAS
      </h1>

      <div className="flex flex-col gap-3 bg-red-900 border border-red-500 shadow-[0_0_0_1px_red] text-white rounded-lg shadow-lg max-w-3xl p-8 [&>p]:text-[15px] md:[&>p]:text-[24px]">
        <h2 className="text-xl md:text-3xl font-bold italic mb-4">
          ¿QUÉ SON LAS ASESORÍAS 1 A 1?
        </h2>
        <p className="mb-4">
          Si estás buscando llevar tu alimentación a otro nivel, las asesorías 1 a 1 son para vos.
        </p>
        <p className="mb-4 font-semibold">
          Cada asesoría tiene una duración de un mes, con opción de adquirirla a 4, 8 o 12 semanas según tus objetivos y necesidades.
        </p>
        <p className="mb-4">
          Según la asesoría que elijas, tendrás un plan de nutrición y/o entrenamiento 100% personalizado, suplementación adaptada, información extra, chequeos, soporte directo y actualizaciones cuando lo necesites.
        </p>
        <p className="mb-4">
          Voy a resolver todas tus dudas, enseñarte la técnica correcta, motivarte y ajustar tu plan para que sigas progresando.
        </p>
        <p className="mb-4">
          Y, sobre todo, voy a asegurarme de que tengas una rutina y alimentación que disfrutes, que puedas mantener y que te lleven a tus resultados sin frustraciones.
        </p>
      </div>

      {/* TARJETAS DE ASESORÍAS */}
      {asesorias.map((a, i) => (
        <div
          key={i}
          className="max-w-3xl w-full border border-red-500 shadow-[0_0_0_1px_red] text-white p-8 space-y-6"
        >
          <h2 className="text-center text-2xl md:text-3xl font-bold italic mb-6">
            {a.nombre}
            <br />
            {a.incluyeSeguimiento ? "con seguimiento" : "sin seguimiento"}
          </h2>

          {a.descripcion && (
            <p className="text-center text-sm md:text-base text-red-400 mb-4">
              {a.descripcion}
            </p>
          )}

          <ul className="list-none space-y-3 text-left text-sm md:text-base grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-10">
            {a.items.map((item, j) => (
              <li key={j}>
                <span className="text-red-400 font-bold">
                  {String(j + 1).padStart(2, "0")}.
                </span>{" "}
                {item}
              </li>
            ))}
          </ul>

          {/* Solo aparece si existe noIncluye */}
          {a.noIncluye && a.noIncluye.length > 0 && (
            <div className="border-t border-red-500 pt-4">
              <h3 className="text-center text-lg font-semibold italic text-red-400 mb-2">
                No incluye:
              </h3>
              <ul className="list-disc list-inside text-left text-sm md:text-base space-y-2 text-red-300">
                {a.noIncluye.map((ni, k) => (
                  <li key={k}>{ni}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex justify-center mt-6">
            <button
              onClick={() => openModal(a)}
              className="bg-red-500 px-6 py-3 rounded-md italic font-semibold text-white hover:bg-black transition hover:border-red-500 hover:border-2"
            >
              MÁS INFORMACIÓN
            </button>
          </div>
        </div>
      ))}


      {modalOpen && asesoriaSeleccionada && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white/5 border border-white/10 text-white rounded-2xl max-w-sm w-full p-6 relative shadow-xl animate-fadeIn">

            {/* Botón de cierre */}
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white rounded-full w-8 h-8 flex items-center justify-center transition"
            >
              ×
            </button>

            {/* Título */}
            <h2 className="text-2xl font-bold mb-4 text-center uppercase tracking-wide">
              {asesoriaSeleccionada.nombre}
            </h2>

            {/* Precios */}
            {asesoriaSeleccionada.precios && (
              <div className="space-y-3 mb-6">
                {asesoriaSeleccionada.precios.map((p, j) => (
                  <div key={j} className="border border-white/10 bg-white/10 p-4 rounded-xl shadow-sm">
                    <p className="font-semibold text-lg">{p.plan}</p>
                    <p className="text-green-400 font-medium">
                    ARS $  {p.valor.toLocaleString("es-AR")}
</p>
                  </div>
                ))}
              </div>
            )}

            {/* Botón WhatsApp */}
            <a
              href={`https://wa.me/${asesoriaSeleccionada.whatsapp}?text=${encodeURIComponent("Hola, quiero más info sobre la " + asesoriaSeleccionada.nombre)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-full transition"
            >
              <span>Quiero esta asesoría</span>
              <Image
                src="/footprints.png"
                alt="Huellas de leopardo"
                width={16}
                height={16}            
                className="w-4 h-4"
              />
            </a>

          </div>
        </div>
      )}


    </div>
  );
}
