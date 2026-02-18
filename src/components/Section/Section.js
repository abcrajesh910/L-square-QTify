import React, { useState } from "react";
import Card from "../Card/Card";
import styles from "./Section.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Swiper Styles
import "swiper/css";
import "swiper/css/navigation";

function Section({ title, data, type }) {
  const [carouselToggle, setCarouselToggle] = useState(true);

  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.header}>
        <h3>{title}</h3>
        {type !== "song" && (
          <h4 className={styles.toggleText} onClick={() => setCarouselToggle(!carouselToggle)}>
            {carouselToggle ? "Show All" : "Collapse"}
          </h4>
        )}
      </div>
      
      {data.length === 0 ? (
        <div style={{color: 'white'}}>Loading...</div>
      ) : (
        <div className={styles.contentWrapper}>
          {carouselToggle ? (
            <div className={styles.swiperWrapper}>
              <Swiper
                modules={[Navigation]}
                initialSlide={0}
                slidesPerView={"auto"}
                spaceBetween={40}
                allowTouchMove
                navigation={true}
              >
                {data.map((item) => (
                  <SwiperSlide key={item.id} className={styles.swiperSlide}>
                    <Card data={item} type={type} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          ) : (
            <div className={styles.gridWrapper}>
              {data.map((item) => (
                <Card data={item} type={type} key={item.id} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Section;