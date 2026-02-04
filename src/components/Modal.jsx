import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { FaCheckCircle } from 'react-icons/fa';
import { IoCloseOutline } from 'react-icons/io5';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
// Imports do Swiper
import { Swiper, SwiperSlide } from 'swiper/react';

import { getWhatsAppLink } from '../utils/whatsapp';
import Button from './Button';

const Modal = ({ project, closeModal }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm transition-opacity duration-300">
      <div className="absolute inset-0" onClick={closeModal}></div>

      <div className="relative z-10 flex max-h-[90vh] w-full max-w-6xl animate-[fadeIn_0.3s_ease-out] flex-col gap-8 overflow-hidden overflow-y-auto rounded-3xl border border-hkn-gold/30 bg-hkn-surface p-6 shadow-2xl md:max-h-none md:flex-row md:overflow-visible md:p-8">
        <button
          onClick={closeModal}
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-hkn-gold hover:text-black md:right-6 md:top-6"
        >
          <IoCloseOutline className="text-2xl" />
        </button>

        {/* Lado Esquerdo: Slider */}
        <div className="h-64 w-full shrink-0 overflow-hidden rounded-2xl bg-black md:h-[500px] md:w-1/2">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: true }}
            loop={true}
            // --- Gestures colors ---
            className="h-full w-full [&_.swiper-button-next]:text-hkn-gold [&_.swiper-button-prev]:text-hkn-gold [&_.swiper-pagination-bullet]:bg-hkn-gold"
          >
            {(project.gallery || [project.image]).map((imgSrc, index) => (
              <SwiperSlide key={index}>
                <img
                  className="h-full w-full object-cover"
                  src={imgSrc}
                  alt={`${project.title} - Foto ${index + 1}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Lado Direito: Informações (Mantém igual) */}
        <div className="flex flex-col justify-center space-y-6 md:w-1/2 md:space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-white md:text-4xl">
              {project.title}
            </h2>
            <h4 className="mt-2 text-lg font-medium text-hkn-gold md:text-xl">
              {project.area}
            </h4>
          </div>

          <div className="space-y-4 text-sm text-gray-300 md:text-lg">
            <p>{project.desc}</p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">
              Escopo do Projeto:
            </h4>
            <div className="flex flex-wrap gap-3 md:gap-4">
              {project.tags?.map((tag) => (
                <div
                  key={tag}
                  className="flex items-center gap-2 text-sm text-gray-300 md:text-base"
                >
                  <FaCheckCircle className="text-hkn-gold" /> {tag}
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2 md:pt-4">
            <a
              href={getWhatsAppLink(
                'Olá Hyagor, acessei seu site e tenho interesse nos serviços de engenharia. Poderia me passar uma estimativa para o meu caso?'
              )}
              target="_blank"
              rel="noreferrer"
            >
              <Button className="w-full md:w-auto">
                Quero um projeto assim
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
