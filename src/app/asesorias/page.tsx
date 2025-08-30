"use client";
import Link from "next/link";

export default function AsesoriasPage() {

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black p-6 gap-10">
      <h1
        className="text-xl md:text-3xl font-bold italic mb-4"
        style={{ paddingTop: '5%' }}
      >
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


      {/* ASESORÍA COMPLETA */}
      <div className="max-w-3xl w-full border border-red-500 shadow-[0_0_0_1px_red] text-white p-8 space-y-6">
        <h2 className="text-center text-2xl md:text-3xl font-bold italic mb-6">
          ASESORÍA COMPLETA<br />con seguimiento
        </h2>
        <p className="text-center text-sm md:text-base text-red-400 mb-4">
          Plan de Nutrición + Plan de Entrenamiento<br />

        </p>
        <ul className="list-none space-y-3 text-left text-sm md:text-base grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-10">
          <li><span className="text-red-400 font-bold">01.</span> Plan nutricional personalizado + plan de entrenamiento personalizado.</li>
          <li><span className="text-red-400 font-bold">02.</span> Plan de suplementación personalizado acorde al objetivo en caso de ser necesario.</li>
          <li><span className="text-red-400 font-bold">03.</span> Información extra de ambos planes.</li>
          <li><span className="text-red-400 font-bold">04.</span> Chequeos cada 7-14 días (2 semanas).</li>
          <li><span className="text-red-400 font-bold">05.</span> Actualizaciones limitadas en caso de ser necesario (imprevistos, preferencias, etc.)</li>
          <li><span className="text-red-400 font-bold">06.</span> Soporte vía WhatsApp.</li>
          <li><span className="text-red-400 font-bold">07.</span> Revisión de ejecución de ejercicios mediante videos en caso de ser necesario.</li>
        </ul>

        <div className="flex justify-center mt-6">
          <Link
            href="/asesorias/product?tipo=completa"
            className="bg-red-500 px-6 py-3 rounded-md italic font-semibold text-white hover:bg-black transition hover:border-red-500 hover:border-2 text-center"
          >
            MÁS INFORMACIÓN
          </Link>
        </div>
      </div>


      {/* ASESORÍA MEDIA */}
      <div className="max-w-3xl w-full border border-red-500 shadow-[0_0_0_1px_red] text-white p-8 space-y-6">
        <h2 className="text-center text-2xl md:text-3xl font-bold italic mb-6">
          ASESORÍA MEDIA<br />con seguimiento
        </h2>
        <p className="text-center text-sm md:text-base text-red-400 mb-4">
          Plan de Nutrición <span className="italic">o</span> Plan de Entrenamiento<br />

        </p>
        <ul className="list-none space-y-3 text-left text-sm md:text-base grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-10">
          <li><span className="text-red-400 font-bold">01.</span> Plan nutricional personalizado <span className="italic">o</span> plan de entrenamiento personalizado.</li>
          <li><span className="text-red-400 font-bold">02.</span> Plan de suplementación personalizado acorde al objetivo en caso de ser necesario.</li>
          <li><span className="text-red-400 font-bold">03.</span> Información extra del plan elegido.</li>
          <li><span className="text-red-400 font-bold">04.</span> Chequeos cada 7-14 días (2 semanas).</li>
          <li><span className="text-red-400 font-bold">05.</span> Actualizaciones ilimitadas en caso de ser necesario (imprevistos, preferencias, etc.)</li>
          <li><span className="text-red-400 font-bold">06.</span> Soporte vía WhatsApp.</li>
          <li><span className="text-red-400 font-bold">07.</span> Revisión de ejecución de ejercicios mediante videos (si se elige entrenamiento).</li>

        </ul>

        <div className="flex justify-center mt-6">
          <button className="bg-red-500 px-6 py-3 rounded-md italic font-semibold text-white hover:bg-black transition hover:border-red-500 hover:border-2">
            MÁS INFORMACIÓN
          </button>
        </div>
      </div>

      {/* RUTINA PERSONALIZADA */}
      <div className="max-w-3xl w-full border border-red-500 shadow-[0_0_0_1px_red] text-white p-8 space-y-6">
        <h2 className="text-center text-2xl md:text-3xl font-bold italic mb-6">
          RUTINA PERSONALIZADA<br />sin seguimiento
        </h2>

        <ul className="list-none space-y-3 text-left text-sm md:text-base grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-10">
          <li><span className="text-red-400 font-bold">01.</span> Plan de entrenamiento personalizado.</li>
          <li><span className="text-red-400 font-bold">02.</span> Plan de suplementación personalizado acorde al objetivo (si aplica).</li>
          <li><span className="text-red-400 font-bold">03.</span> Información extra del plan elegido.</li>
        </ul>

        <div className="border-t border-red-500 pt-4">
          <h3 className="text-center text-lg font-semibold italic text-red-400 mb-2">No incluye:</h3>
          <ul className="list-disc list-inside text-left text-sm md:text-base space-y-2 text-red-300">
            <li>Chequeos.</li>
            <li>Actualizaciones del plan.</li>
            <li>Soporte vía WhatsApp.</li>
            <li>Revisión de ejercicios mediante videos.</li>
          </ul>
        </div>

        <div className="flex justify-center mt-6">
          <button className="bg-red-500 px-6 py-3 rounded-md italic font-semibold text-white hover:bg-black transition hover:border-red-500 hover:border-2">
            MÁS INFORMACIÓN
          </button>
        </div>
      </div>

      {/* DIETA PERSONALIZADA */}
      <div className="max-w-3xl w-full border border-red-500 shadow-[0_0_0_1px_red] text-white p-8 space-y-6">
        <h2 className="text-center text-2xl md:text-3xl font-bold italic mb-6">
          DIETA PERSONALIZADA<br />sin seguimiento
        </h2>

        <ul className="list-none space-y-3 text-left text-sm md:text-base grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-10">
          <li><span className="text-red-400 font-bold">01.</span> Plan de nutrición personalizado.</li>
          <li><span className="text-red-400 font-bold">02.</span> Plan de suplementación personalizado acorde al objetivo (si aplica).</li>
          <li><span className="text-red-400 font-bold">03.</span> Información extra del plan elegido.</li>
        </ul>

        <div className="border-t border-red-500 pt-4">
          <h3 className="text-center text-lg font-semibold italic text-red-400 mb-2">No incluye:</h3>
          <ul className="list-disc list-inside text-left text-sm md:text-base space-y-2 text-red-300">
            <li>Chequeos.</li>
            <li>Actualizaciones del plan.</li>
            <li>Soporte vía WhatsApp.</li>

          </ul>
        </div>

        <div className="flex justify-center mt-6">
          <button className="bg-red-500 px-6 py-3 rounded-md italic font-semibold text-white hover:bg-black transition hover:border-red-500 hover:border-2">
            MÁS INFORMACIÓN
          </button>
        </div>
      </div>

    </div>
  );
}
