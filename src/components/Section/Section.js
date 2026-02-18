import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import styles from "./Section.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Tabs, Tab, Box } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";

function Section({ title, data, type, filterSource }) {
  const [carouselToggle, setCarouselToggle] = useState(true);
  const [selectedTab, setSelectedTab] = useState(0);
  const [filteredData, setFilteredData] = useState(data);

  // Filter Logic: Snap ke tabs ke hisaab se
  const genres = ["All", "Rock", "Pop", "Jazz", "Blues"];

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
  }, [selectedTab, data]);

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

      {/* Tabs implementation for Songs */}
      {type === "song" && (
        <Box sx={{ borderBottom: 1, borderColor: 'divider', marginBottom: '20px' }}>
          <Tabs 
            value={selectedTab} 
            onChange={handleChange} 
            className={styles.tabs}
            TabIndicatorProps={{ style: { backgroundColor: "#34c94b" } }}
          >
            {genres.map((genre) => (
              <Tab label={genre} key={genre} className={styles.tab} />
            ))}
          </Tabs>
        </Box>
      )}
      
      <div className={styles.contentWrapper}>
        {carouselToggle ? (
          <Swiper
            modules={[Navigation]}
            slidesPerView={"auto"}
            spaceBetween={40}
            navigation
          >
            {filteredData.map((item) => (
              <SwiperSlide key={item.id} className={styles.swiperSlide}>
                <Card data={item} type={type} />
              </SwiperSlide>
            ))}
          </Swiper>
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