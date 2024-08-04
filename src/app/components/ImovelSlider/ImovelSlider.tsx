"use client"


import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination} from "swiper/modules";
import styles from "./ImovelSlider.module.scss";

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import ImovelCard from "../ImovelCard/ImovelCard";


const images = [
    "/images/tangarasimagem.jpeg",
    "/images/tangarasimagem.jpeg",
    "/images/tangarasimagem.jpeg"
];

export default function ImovelSlider(){

    return <Swiper 
        
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        spaceBetween={0}
        pagination
        navigation
        loop
        className={styles.imovelSlider}
        >
        {
        images.map((image) => 
                <SwiperSlide key={images.indexOf(image)}>
                    <ImovelCard  imagePath={image} /> 
            </SwiperSlide>)
        }
    </Swiper>
}

