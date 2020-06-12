import React, { useRef, useState, useEffect } from "react";
import styles from "./HeroFade.module.css";

const images = [
  " https://images.unsplash.com/photo-1470165451736-166cb1cc909d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2552&q=80",
  "https://images.unsplash.com/photo-1537367075546-0529d021d198?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1590064589331-f19edc8bed34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
];

function HeroFade(props) {
  const slidePresentationTime = 3000; // 3s
  const [currentSlide, setCurrentSlide] = useState(0); // set currrent slide index
  const sliderInterval = useRef(); // interval ref

  useEffect(() => {
    let sliderInterval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % images.length); // change current slide to next after 3s
    }, slidePresentationTime);

    return () => {
      clearInterval(sliderInterval);
    };
  });

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <h1 className={styles.title}>Title</h1>
        <div>
          {images.map((image, index) => (
            <img
              id={index}
              key={index}
              className={index === currentSlide ? styles.activeImage : styles.image}
              src={image}
              style={{
                zIndex: `-${index + 1}`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeroFade;
