"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const DotGlide = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeDotRef = useRef(null);

  // Farklı renkler için bir palet
  const colors = ["#ff6347", "#3b82f6", "#10b981", "#f59e0b", "#9333ea"];
  const positions = [260, 330, 400, 470, 540];
  const y = 300;
  const r = 12; // Nokta yarıçapı

  // İçeriklerin listesi
  const content = [
    "Slide 1 Content: This is the first slide.",
    "Slide 2 Content: This is the second slide.",
    "Slide 3 Content: This is the third slide.",
    "Slide 4 Content: This is the fourth slide.",
    "Slide 5 Content: This is the fifth slide.",
  ];

  const handleClick = (index) => {
    if (index === activeIndex) return;
    setActiveIndex(index);

    // GSAP animasyonu sadece aktif nokta değiştiğinde başlatılıyor
    gsap.to(activeDotRef.current, {
      duration: 0.4,
      cx: positions[index],
      fill: colors[index], // Aktif nokta rengini değiştirme
      ease: "power2.out",
    });
  };

  useEffect(() => {
    // İlk nokta doğru konumda olacak şekilde DOM manipülasyonu
    if (activeDotRef.current) {
      // İlk render'da GSAP animasyonu ile aktif nokta pozisyonunu ayarla
      gsap.set(activeDotRef.current, {
        cx: positions[activeIndex], // İlk nokta doğru pozisyonda
        cy: y,
        fill: colors[activeIndex], // İlk nokta rengini belirliyoruz
      });
    }
  }, []); // Boş array ile sadece ilk renderda çalışmasını sağlarız

  useEffect(() => {
    // Bu useEffect her activeIndex değiştiğinde çalışacak, böylece ilk tıklamada animasyonu başlatabiliriz.
    if (activeIndex > 0) {
      gsap.to(activeDotRef.current, {
        duration: 0.4,
        cx: positions[activeIndex], // Yeni aktif nokta pozisyonu
        fill: colors[activeIndex], // Yeni renk
        ease: "power2.out",
      });
    }
  }, [activeIndex]); // activeIndex her değiştiğinde çalışacak

  return (
    <div className="h-[100vh] bg-black flex items-center justify-center flex-col">
      {/* İçerik bölümü */}
      <div className="mt-8 text-white text-center">
        <h2 className="text-2xl font-bold">{`Slide ${activeIndex + 1}`}</h2>
        <p className="mt-4">{content[activeIndex]}</p>
      </div>

      <svg
        className="w-[800px] h-[200px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Pasif noktalar */}
        {positions.map((pos, index) => (
          <g key={index}>
            {/* Pasif nokta: içi siyah olacak, stroke ile tıklanabilir alan */}
            <circle
              cx={pos}
              cy={y}
              r={r}
              fill="black" // İçini siyah yapıyoruz
              stroke={colors[index]} // Nokta renkleri
              strokeWidth="3"
              className="cursor-pointer transition-all duration-200"
              style={{
                transformBox: "fill-box",
                transformOrigin: "center",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.setAttribute("r", r * 1.25); // Hover durumunda büyütüyoruz
                e.currentTarget.setAttribute("stroke", colors[index]); // Hover rengini değiştiriyoruz
              }}
              onMouseLeave={(e) => {
                e.currentTarget.setAttribute("r", r); // Hover sonrası eski boyutuna dönüyor
                e.currentTarget.setAttribute("stroke", colors[index]); // Hover sonrası eski rengine dönüyor
              }}
              onClick={() => handleClick(index)} // Tıklama pasif noktalarda çalışacak
            />
          </g>
        ))}

        {/* Aktif nokta: İçini dolduruyoruz */}
        <circle
          ref={activeDotRef}
          cx={positions[activeIndex]} // 💡 Bu satır eklendi!
          cy={y}
          r={r}
          fill={colors[activeIndex]} // Aktif nokta rengi aktif index'e göre değişiyor
          pointerEvents="none" // Aktif nokta tıklanabilir olmamalı
        />
      </svg>
    </div>
  );
};

export default DotGlide;
