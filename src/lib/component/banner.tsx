import styled from 'styled-components';
import { Link } from 'react-router-dom';
import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from "swiper";
import 'swiper/css';
import 'swiper/css/pagination';

const Divver = styled.div`
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
`

const BannerImg = styled.img`
    width: 100%;
    max-width: 600px;
    max-height: 90px;
    border-radius: 8px;
`

interface BannerItem {
    img: string;
    to: string;
}

interface BannerIf {
    banners: BannerItem[];
}

export function Banner(props:BannerIf) {
    return (
        <Divver>
            <Swiper
                slidesPerView={1}
                spaceBetween={8}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                modules={[Pagination, Autoplay]}
                autoplay={{ delay: 5000 }}
            >
                {
                    props.banners.map((e:BannerItem, i:number) => {
                        if (e.to.includes('http')) {
                            return (
                                <SwiperSlide key={i}>
                                    <a href={e.to || "/"} target={'_blank'} rel="noreferrer">
                                        <BannerImg src={e.img} alt="" />
                                    </a>
                                </SwiperSlide>
                            )
                        } else {
                            return (
                                <SwiperSlide key={i}>
                                    <Link to={e.to || "/"}>
                                        <BannerImg src={e.img} alt="" />
                                    </Link>
                                </SwiperSlide>
                            )
                        }
                    }
                    )
                }
            </Swiper>
        </Divver>
    )
}

Banner.defaultProps = {
    
}