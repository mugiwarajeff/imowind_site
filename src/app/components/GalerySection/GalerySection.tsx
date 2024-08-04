"use client"

import styles from "./GalerySection.module.scss";
import SectionSpliter from "../SectionSpliter/SectionSpliter";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function GalerySection() {

    const images = [
        "/images/tangarasimagem.jpeg",
        "/images/tangarasimagem.jpeg",
        "/images/tangarasimagem.jpeg",
        "/images/tangarasimagem.jpeg",
        "/images/tangarasimagem.jpeg",
        "/images/tangarasimagem.jpeg",
        "/images/tangarasimagem.jpeg",
        "/images/tangarasimagem.jpeg",
    ];

    return <div>
        <SectionSpliter 
            title="Galeria"

            titleAlignRight={true} />
        <Swiper
        modules={[Autoplay]}
        loop={true}
        speed={1000}
        autoplay={{
            delay: 3000,
            waitForTransition: false,
            stopOnLastSlide: false,
            pauseOnMouseEnter: true,
        
        }}
        slidesPerView={5}
        >

        {
        images.map((image) => 
                <SwiperSlide key={images.indexOf(image)}>
                    <div className={styles.galerySectionImage}>
                        <Image 
                            alt="" 
                            src={image} 
                            height={500} 
                            width={500}
                            className={styles.galeryImage}
                            />
                    </div>
                   
            </SwiperSlide>)
        }
        </Swiper>
        
    </div>
}