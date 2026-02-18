import React, { useState, useEffect, useMemo } from "react";
import Card from "../Card/Card";
import styles from "./Section.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Tabs, Tab, Box } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";

function Section({ title, data, type }) {
  const [carouselToggle, setCarouselToggle] = useState(true);
  const [selectedTab, setSelectedTab] = useState(0);
  const [filteredData, setFilteredData] = useState(data);

  // Genres ko ek constant ki tarah use karein
  const genres = useMemo(() => ["All", "Rock", "Pop", "Jazz", "Blues"], []);

  useEffect(() => {
    if (type === "song") {
      if (selectedTab === 0) {
        setFilteredData(data);
      } else {
        const genreLabel = genres[selectedTab].toLowerCase();
        const filtered = data.filter(item => item.genre.key === genreLabel);
        setFilteredData(filtered);
      }
    } else {
      setFilteredData(data);
    }
  }, [selectedTab, data, type, genres]); // Saari dependencies add kar di hain

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

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

      {type === "song" && (
        <Box sx={{ marginBottom: '20px' }}>
          <Tabs 
            value={selectedTab} 
            onChange={handleChange} 
            TabIndicatorProps={{ style: { backgroundColor: "#34c94b" } }}
          >
            {genres.map((genre) => (
              <Tab 
                label={genre} 
                key={genre} 
                sx={{ color: 'white', '&.Mui-selected': { color: '#34c94b' } }} 
              />
            ))}
          </Tabs>
        </Box>
      )}
      
      <div className={styles.contentWrapper}>
        {carouselToggle ? (
          <div className={styles.swiperWrapper}>
            <Swiper
              modules={[Navigation]}
              slidesPerView={"auto"}
              spaceBetween={40}
              navigation={true}
            >
              {filteredData.map((item) => (
                <SwiperSlide key={item.id} className={styles.swiperSlide}>
                  <Card data={item} type={type} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          <div className={styles.gridWrapper}>
            {filteredData.map((item) => (
              <Card data={item} type={type} key={item.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Section;