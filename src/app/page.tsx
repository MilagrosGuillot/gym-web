'use client';

import ImageCarousel from '../components/ImageCarousel';
import TestimonialCardSlider from '../components/TestimonialCardSlider';
import Form from '../components/Form';
import FloatingMenu from '../components/FloatingMenu';
import Asesorias from '@/components/Asesorias';

export default function Home() {


  return (
    <div className="min-h-screen">
      {/* Título Personal Trainer */}
     

      {/* Video de YouTube con controles clasicos */}
      <section
        id="inicio"
        className="flex flex-col items-center justify-center min-h-[60vh] py-12 px-4 md:px-8 lg:px-12 text-center relative overflow-hidden bg-black"
      >
        {/* Video responsivo y más grande en móvil */}
        <div className="absolute inset-0 w-full h-full z-0 flex items-center justify-center">
          <div className="w-full h-full aspect-video max-w-full md:max-w-5xl mx-0 md:mx-auto">
            <iframe
              className="w-full h-full rounded-none md:rounded-xl shadow-2xl"
              src="https://www.youtube.com/embed/nvCrar6IvBk?controls=1&rel=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </section>


      <section className="py-12 px-4 md:px-8 lg:px-12 bg-black">
  <div className="max-w-7xl mx-auto text-center">
    <h1
      className="text-3xl md:text-5xl font-extrabold text-white mb-6 lg:text-[var(--text-h1)]"
    >
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