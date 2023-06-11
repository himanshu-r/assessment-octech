import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";


// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";

function HeroSlider() {
  return (
    <Swiper
    spaceBetween={30}
    effect={"fade"}
    navigation={true}
    pagination={{
      clickable: true,
    }}
    modules={[EffectFade, Navigation, Pagination]}
    className="mySwiper"
  >
    <SwiperSlide>
      <img src="https://s3-alpha-sig.figma.com/img/1e63/aab7/d8f4abe1ef2998121cdfac5482539245?Expires=1687132800&Signature=Jyklv08hmVwn-dpiNu1MCtXMKBw7rt05w~kSNg0YYpGdsWY9mmJ-z088CaFJNtRm9tQ0-eu~SDAHIYshUUcjeyqlpEWhy~hXCaNx5eJErvmIbncsd02fxxSbB4tOdF-Jw-qjyK1edSFUUac8ELHtvBYftgUZWmueM8HLTU3yeyAT9igL3P1v~FaiN43qr3sLdAHH~hHabc3FYKgBicDRoQpxOvBFIBBUTQmN3hVnobt-1DdLb7SbDdgd1aF2RHt98yvJk90Vb--rySrcxhjk4wBzRAZQMaHbdcyf4WhnvmWM1likC4fUfiAf1uFBYDb9wON-KsvLh3iOXTgoynYS3g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" 
      alt="SliderImage1"/>
    </SwiperSlide>
    <SwiperSlide>
      <img src="https://s3-alpha-sig.figma.com/img/2d26/d171/ff918600add3254d8ca908af0cf90980?Expires=1687132800&Signature=CuuXgEOh-IbreUltxFgRHw5x6UnzB7eEKbT3MzEc5omHtaLts30lG4R1t~zFQrN1XRp2A5L7e~cTiTviwd~zoxpaohhf1BBINczK7ajyA0eNIT93GT9mR85IT922YSNhhdcPFqyNthjwRFobqiFpVI~NevJqoboPoIc8TyC9Jt4SQCELxI6qR231wSg-dqXf0e251lP-7jRscNsDOQYixgbvttmfDzN5TPpQWqHK1q-wr4v5Tr3m8U5h2O7daw6bCY-gYaRMZKqpzXLLaa9I0cvnEU7zPge32f07hCewMoasleP2Ywygwvg0cwybPNIDXNHsHFr-kcxH5Yy0sFWiyw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" 
      alt="SliderImage2"/>
    </SwiperSlide>
    <SwiperSlide>
      <img src="https://s3-alpha-sig.figma.com/img/ef6e/8cb5/da00a5fe7c8bc8fb27c0cc6695716afb?Expires=1687132800&Signature=et96EhZbwBuQQACAxK0y6wAximxOx18Dn2SvKzycz9ssp-eFrsN5-IEPal8LD47z8BObruEJF0G331YizbRIRRB1ya9FM-WG94arVotHWbqkaoia6UNqx-u593iMrlKMHZ7lbdRv2LXys3P5gLLmx48Z48Po4RtTs0MsAU948mQXhGK~qQasafkUK3egT8V1dCj0NMKRATVCmgdu3YOCEzpFoPOa8IkpTKqUCLJYTNdXurxEvc0bB1sJ6M2Y-5lmD5AQ~jbkEe2xllE8ZP79g7ueKWFMgCaTwim0dnJxDGGA47wbyJdoCeIj4OUZaWqcew469m~P6NOdkXKOXMWxVw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
      alt="SliderImage3" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="https://s3-alpha-sig.figma.com/img/3e97/5dbb/b277819dcfc2249ea62f4f1126ee7463?Expires=1687132800&Signature=mNbY8pUmstq4f2-MR83M-NjwSpKgCJdDE2d79L97f-I9ufP9hMS1OUOC5lHFo87Ztqd5vrjAD6IpiGKUBDvjc4oBn7mhXshjinT5D4Y7-uuVycdw0XOPfh~qjfOhQk4cP-2ngVGyqTN3o92I19kmOBgE5F-Zynb8HU~-HY-B2a81s9yYf0yraIZ~xlu4iUPc8TM4lZPgPJofWodJxAjeNU7BG-lV8niopY3tk3hv3oTzNml0hApXTa86WyddXI~3ygKgfyg55~y9FwmYC6VVh4KeR3m94rqHq036D6wFkop~lwUGkkDeV54lJeYRnYPUPEiQ9oJjGyOnO1RwRDConA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
      alt="SliderImage4" />
    </SwiperSlide>
  </Swiper>
  )
}

export default HeroSlider