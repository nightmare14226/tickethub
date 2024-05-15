'use client';

import React, { useState } from 'react'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Arrow from './arrow';
import "@/styles/sliderstyle.css"
const ContactCarousel: React.FC = () => {
    const [currentSlide, setCurrentSlide] = React.useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
        {
          loop: true,
          initial: 0
        },
        [
          (slider) => {
            let timeout: ReturnType<typeof setTimeout>
            let mouseOver = false
            function clearNextTimeout() {
              clearTimeout(timeout)
            }
            function nextFunction() {
                slider.next()
            }
            function nextTimeout() {
              clearTimeout(timeout)
              if (mouseOver) return
              timeout = setTimeout(() => {
                nextFunction()
              }, 2000)
            }
            slider.on("created", () => {
              setLoaded(true)
              slider.container.addEventListener("mouseover", () => {
                mouseOver = true
                clearNextTimeout()
              })
              slider.container.addEventListener("mouseout", () => {
                mouseOver = false
                nextTimeout()
              })
              nextTimeout()
            })
            slider.on("dragStarted", clearNextTimeout)
            slider.on("animationEnded", nextTimeout)
            slider.on("updated", nextTimeout)
          },
        ]
      )
  return (
      <div className='col-span-7 md:col-span-5 h-full'>
        <div className="slider-wrapper h-full">
          <div ref={sliderRef} className="keen-slider rounded-md">
            <div className="keen-slider__slide number-slide1">1</div>
            <div className="keen-slider__slide number-slide2">2</div>
            <div className="keen-slider__slide number-slide3">3</div>
            {/* {loaded && instanceRef.current && (
                <div className='grid absolute w-full h-full grid-cols-2'>
                    <div className="grid grid-cols-1 place-items-center">
                        <div className='w-full'>
                            <Arrow
                                left
                                onClick={(e: any) =>
                                e.stopPropagation() || instanceRef.current?.prev()
                                }
                                disabled={currentSlide === 0}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 place-items-center">
                        <div className='grid w-full place-items-end'>
                            <Arrow
                                onClick={(e: any) =>
                                e.stopPropagation() || instanceRef.current?.next()
                                }
                                disabled={
                                currentSlide ===
                                instanceRef.current.track.details.slides.length - 1
                                }
                            />
                        </div>
                    </div>
                </div>
            )} 
            {loaded && instanceRef.current && (
                <div className='grid absolute w-full h-full grid-cols-2'>
                    <div className="relative mb-4 mt-auto ml-6 mr-auto">
                        <div className="dots mb-4">
                            {[
                            ...Array(instanceRef.current.track.details.slides.length).keys(),
                            ].map((idx) => {
                            return (
                                <button
                                key={idx}
                                onClick={() => {
                                    instanceRef.current?.moveToIdx(idx)
                                }}
                                className={"dot" + instanceRef.cu(currentSlide === idx ? " active" : "")}
                                ></button>
                            )
                            })}
                        </div>
                    </div>
                </div>
            )}*/}
          </div>
        </div>
      </div>
  );
};

export default ContactCarousel;