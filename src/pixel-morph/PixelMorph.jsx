import React, { useEffect, useRef, useState } from "react";
import imagesLoaded from "imagesloaded";
import * as THREE from "three";
import gsap from "gsap";
import "./assets/css/style.css";

import image1 from "./assets/images/1.webp";
import image2 from "./assets/images/2.webp";
import image3 from "./assets/images/3.webp";
import image4 from "./assets/images/4.webp";

const PixelMorph = () => {
  const sliderRef = useRef(null); // DOM referansı
  const [isLoaded, setIsLoaded] = useState(false); // Yükleme durumu

  useEffect(() => {
    imagesLoaded(sliderRef.current.querySelectorAll("img"), () => {
      setIsLoaded(true); // Yükleme tamamlandığında state güncelleniyor
    });
  }, []);

  useEffect(() => {
    const displacementSlider = function (opts) {
      const vertex = `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }
      `;

      const fragment = `
        varying vec2 vUv;
        uniform sampler2D currentImage;
        uniform sampler2D nextImage;
        uniform float dispFactor;
        void main() {
          vec2 uv = vUv;
          vec4 _currentImage;
          vec4 _nextImage;
          float intensity = 0.3;
          vec4 orig1 = texture2D(currentImage, uv);
          vec4 orig2 = texture2D(nextImage, uv);
          _currentImage = texture2D(currentImage, vec2(uv.x, uv.y + dispFactor * (orig2 * intensity)));
          _nextImage = texture2D(nextImage, vec2(uv.x, uv.y + (1.0 - dispFactor) * (orig1 * intensity)));
          vec4 finalTexture = mix(_currentImage, _nextImage, dispFactor);
          gl_FragColor = finalTexture;
        }
      `;

      let images = opts.images,
        sliderImages = [];
      let canvasWidth = images[0].clientWidth;
      let canvasHeight = images[0].clientHeight;
      let parent = opts.parent;
      let renderWidth = Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0
      );
      let renderHeight = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight || 0
      );

      let renderer = new THREE.WebGLRenderer({ antialias: false });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setClearColor(0x23272a, 1.0);
      renderer.setSize(renderWidth, renderHeight);
      parent.appendChild(renderer.domElement);

      let loader = new THREE.TextureLoader();
      loader.crossOrigin = "anonymous";

      images.forEach((img) => {
        const image = loader.load(img.getAttribute("src") + "?v=" + Date.now());
        image.magFilter = image.minFilter = THREE.LinearFilter;
        image.anisotropy = renderer.capabilities.getMaxAnisotropy();
        sliderImages.push(image);
      });

      let scene = new THREE.Scene();
      scene.background = new THREE.Color(0x000000);

      let camera = new THREE.PerspectiveCamera(
        75,
        renderWidth / renderHeight,
        0.1,
        1000
      );
      camera.position.z = 500;

      let mat = new THREE.ShaderMaterial({
        uniforms: {
          dispFactor: { type: "f", value: 0.0 },
          currentImage: { type: "t", value: sliderImages[0] },
          nextImage: { type: "t", value: sliderImages[1] },
        },
        vertexShader: vertex,
        fragmentShader: fragment,
        transparent: true,
        opacity: 1.0,
      });

      let geometry = new THREE.PlaneGeometry(
        parent.offsetWidth,
        parent.offsetHeight,
        1
      );
      let object = new THREE.Mesh(geometry, mat);
      object.position.set(0, 0, 0);
      scene.add(object);

      let addEvents = function () {
        let pagButtons = Array.from(
          document.getElementById("pagination").querySelectorAll("button")
        );
        let isAnimating = false;

        pagButtons.forEach((el) => {
          el.addEventListener("click", function () {
            if (!isAnimating) {
              isAnimating = true;
              document
                .getElementById("pagination")
                .querySelectorAll(".active")[0].className = "";
              this.className = "active";
              let slideId = parseInt(this.dataset.slide, 10);
              mat.uniforms.nextImage.value = sliderImages[slideId];
              mat.uniforms.nextImage.needsUpdate = true;

              gsap.to(mat.uniforms.dispFactor, {
                duration: 1,
                value: 1,
                ease: "expo.inOut",
                onComplete: function () {
                  mat.uniforms.currentImage.value = sliderImages[slideId];
                  mat.uniforms.currentImage.needsUpdate = true;
                  mat.uniforms.dispFactor.value = 0.0;
                  isAnimating = false;
                },
              });
            }
          });
        });
      };

      addEvents();

      window.addEventListener("resize", function () {
        const renderW = Math.max(
          document.documentElement.clientWidth,
          window.innerWidth || 0
        );
        const renderH = Math.max(
          document.documentElement.clientHeight,
          window.innerHeight || 0
        );
        renderer.setSize(renderW, renderH);
      });

      let animate = function () {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      };

      animate();
    };

    imagesLoaded(document.querySelectorAll("img"), () => {
      document.body.classList.remove("loading");
      const el = document.getElementById("slider");
      const imgs = Array.from(el.querySelectorAll("img"));
      if (imgs.length > 0) {
        new displacementSlider({
          parent: el,
          images: imgs,
        });
      }
    });
  }, []);

  return (
    <div ref={sliderRef} className="overflow-hidden mt-2">
      <main className="relative w-full h-[33rem] md:h-[36rem] overflow-hidden ">
        <div
          id="slider"
          className="w-full h-[38rem] md:h-[40rem] max-w-[950px] relative mx-auto overflow-hidden border border-gray-800  shadow-2xl  "
        >
          <div className="slider-inner relative flex items-center max-w-[1200px] h-full z-10 overflow-hidden">
            <div id="slider-content" className="px-4 md:px-10">
              <div className="meta relative text-[#88888a] uppercase text-md font-semibold tracking-wider">
                Technology
              </div>
              <p
                id="slide-title"
                className="slider-t text-white font-light text-3xl md:text-8xl mt-10 mb-20 tracking-tight"
              >
                GPT-3
              </p>
              <div
                id="slide-status"
                className="text-white text-lg mt-2 font-medium"
              >
                Active
              </div>
            </div>
          </div>

          <img className="relative" src={image1} alt="slider image 1" />
          <img className="relative" src={image2} alt="slider image 2" />
          <img className="relative" src={image3} alt="slider image 3" />
          <img className="relative" src={image4} alt="slider image 4" />

          <div id="pagination">
            <button className="active rounded-full" data-slide="0"></button>
            <button data-slide="1" className="rounded-full"></button>
            <button data-slide="2" className="rounded-full"></button>
            <button data-slide="3" className="rounded-full"></button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PixelMorph;
