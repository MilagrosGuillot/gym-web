'use client';

import ImageCarousel from '../components/ImageCarousel';
import TestimonialCardSlider from '../components/TestimonialCardSlider';
import Form from '../components/Form';
import FloatingMenu from '../components/FloatingMenu';
import Asesorias from '@/components/Asesorias';

export default function Home() {


  return (
    <div className="min-h-screen">

      {/* Video con controles clasicos */}
      <section
        id="inicio"
        className="flex flex-col items-center justify-center min-h-[60vh] py-12 px-4 md:px-8 lg:px-12 text-center relative bg-black"
      >
        {/* Contenedor para el video responsive */}
        <div className="w-full max-w-5xl mx-auto">
          <video
            className="w-full h-[54vh] rounded-none md:rounded-xl shadow-2xl"
            src="/videoluca.mp4"
            controls
            preload="metadata"
          >
            Tu navegador no soporta el elemento video.
          </video>
        </div>
      </section>



      <section className="bg-black py-12 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-2xl md:text-3xl lg:text-[50px] font-extrabold text-white mb-6">
            En lugar de vivir por causa y efecto, vamos a <br />
            <span className="text-red-600">causar un efecto</span>
          </h1>
        </div>
      </section>


      {/* Botón debajo de la imagen */}
      {/*
      <section className="py-12 px-4 md:px-8 lg:px-12 bg-black">
        <div className="max-w-7xl mx-auto text-center">
          <a href="#contacto">
            <button
              type="button"
              className="inline-block bg-red-700 hover:bg-red-600 active:bg-red-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg transition-all duration-200 cursor-pointer text-xl md:text-2xl hover:scale-105"
            >
              ¡Inicia tus cambios!
            </button>
          </a>
        </div>
      </section>
*/}

      {/* Sección Asesorias */}
      <section id="asesorias" className="py-12 px-4 md:px-8 lg:px-12 bg-">
        <Asesorias />
      </section>


      {/* Sección Carrusel de Imágenes */}
      <section id="carrusel" className="py-12 px-4 md:px-8 lg:px-12 bg-black">
        <div className="w-full max-w-7xl mx-auto">
          <ImageCarousel
            images={[
              '/1.jpeg',
              '/2.jpeg',
              '/3.jpeg',
              '/4.jpeg',
              '/C1.jpg',
            ]}
          />
          {/* Texto debajo del carrusel */}
          <div className="mt-8 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">¡Inspírate con estos resultados!</h3>
            <p className="text-white text-lg md:text-xl">Tú también puedes lograr tu mejor versión. ¡Comienza hoy!</p>
          </div>
        </div>
      </section>

      {/* Sección Testimonios */}
      <section id="testimonios" className="py-12 px-4 md:px-8 lg:px-12 bg-">
        <TestimonialCardSlider />
      </section>

      {/* Sección Contacto */}
      <section id="contacto">
        <Form />
      </section>

      {/* Menú flotante */}
      <FloatingMenu />


    </div>
  );
}