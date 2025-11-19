export interface Testimonial {
  id: number;
  name: string;
  image: string; 
  images: string[]; 
  results: string;
  comment: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Alexis Rodriguez, 20 años",
    image: "/Perfil.png",
    images: ["/C1.jpg", "/C2.jpg"],
    results: "?",
    comment: "Es la primera experiencia que tengo en un gym y la verdad me siento muy acompañado tanto de Luca como de mis compañeros. Me levanto todos los dias a las 7:00 am con ganas de venir y darlo todo. Estoy completamente agradecido."
  },
  {
    id: 2,
    name: "Lautaro POSON?, 21 años",
    image: "/Perfil.png",
    images: ["/Perfil.png"],
    results: "?",
    comment: "Desde mi pespectiva, el tiempo no a ??? y mogni constantemente me recuerda que soy yo mismo el unico responsable de que ??? tiempo. "
  },
  {
    id: 3,
    name: "Patricio, 22 años",
    image: "/Perfil.png",
    images: ["/Perfil.png"],
    results: "?",
    comment: "La verdad que es la primera experiencia que tengo en el gym y me esta encantado, noto como mi cuerpo y energia aumento positivamente por la forma de hacer ejercicio y del coaching que se mantiene. Tambien me agrada el ambiente familiar que se maneja y el compañerismo."
  },
  {
    id: 4,
    name: "Ariel Bonugli, 29 años",
    image: "/Perfil.png",
    images: ["/Perfil.png"],
    results: "?",
    comment: "Estuve buscando gimnasios que se adapten a mis comodidades y lo encontré. Mejoró mi autoestima y mi mentalidad. Grandes cambios y asesoramiento continuo en rutinas y alimentación para cumplir los objetivos que cada uno se plantea, con profesionalismo y un grupo humano muy cómodo y saludable, con mucho respeto y mucho amor. Mogni es un gimnasio que no sabía que existía, pero sí sabía que lo necesitaba."
  },
  {
    id: 5,
    name: "Florencia Oviedo, 34 años",
    image: "/Perfil.png",
    images: ["/Perfil.png"],
    results: "?",
    comment: "Hace un año comencé con el cumplimiento de una meta postergada por años: ocuparme de mi salud física. Previo a Mogni Gym, pasé por otras experiencias de las que obtuve resultados, pero sin tener la motivación de sostenerlo en el tiempo. Hace un año que siento que tengo el acompañamiento de un equipo, la atención y el profesionalismo que nunca había tenido, todo esto con el moño del capital humano de nuestros profes. Su amor y pasión trasciende lo meramente profesional, acompañando codo a codo para continuar renovando las expectativas y los objetivos. Estoy logrando resultados que jamás tuve, y es notorio lo reconfortante que es psicofísicamente."
  },
  {
    id: 6,
    name: "Pablo Martinez, 37 años",
    image: "/Perfil.png",
    images: ["/Perfil.png"],
    results: "?",
    comment: "Casi un año de esta aventura, con altos y bajos pero siempre presentes. Encontramos un espacio no solo de entrenamiento, sino también un lugar más para disfrutar en pareja, ya que el ambiente que compartimos lo construimos nosotros, y es algo para envidiar, amigos, bromas, entrenamiento y disciplina."
  }
]; 