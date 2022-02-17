import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from "swiper";
import 'swiper/css';
import 'swiper/css/pagination';

const Divver = styled.div`
    width: 600px;
    margin: 0 auto;
`

const BannerImg = styled.img`
    width: 600px;
    height: 90px;
    border-radius: 8px;
`

export const Banner = (props) => {
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
                    props.banners.map((e, i) => {
                            if (e.to.includes('http')) {
                                return (
                                    <SwiperSlide key={i}>
                                        <a href={e.to || "/"} target={'_blank'} rel="noreferrer">
                                            <BannerImg src={e.bannerUrl} alt=""/>
                                        </a>
                                    </SwiperSlide>
                                )
                            } else {
                                return (
                                    <SwiperSlide key={i}>
                                        <Link to={e.to || "/"}>
                                            <BannerImg src={e.bannerUrl} alt=""/>
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
    banners: [{
        to: 'https://opize.me',
        bannerUrl: 'https://static.opize.me/opize/1645075445187/opize 테스트 배너.png'
    }]
}