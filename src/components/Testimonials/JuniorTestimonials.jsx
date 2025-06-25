import React from "react";
import { motion } from "framer-motion";
import ModalImage from "react-modal-image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./JuniorTestimonials.css";

import t1 from "../../assets/testimonial1.png";
import t2 from "../../assets/testimonial2.png";
import t3 from "../../assets/testimonial3.png";
import t4 from "../../assets/testimonial4.png";

const testimonials = [t1, t2, t3, t4];

const JuniorTestimonials = () => (
  <section className="junior-testimonials-section">
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3500, disableOnInteraction: false }}
      loop
      spaceBetween={24}
      slidesPerView={1}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      }}
      className="junior-testimonials-swiper"
    >
      {testimonials.map((img, i) => (
        <SwiperSlide key={i}>
          <motion.div
            className="junior-testimonial-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <ModalImage
              small={img}
              large={img}
              alt={`Testimonial ${i + 1}`}
              hideDownload
              hideZoom
              className="junior-testimonial-img"
            />
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

export default JuniorTestimonials;
