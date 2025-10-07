
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

export function Banner(){
    const bannerRef = useRef(null)
    const textRef = useRef(null)
    const imageRef = useRef(null)
    const buttonsRef = useRef(null)

    useEffect(() => {
        // Set initial states
        gsap.set([imageRef.current], {
            opacity: 0,
            y: 50,
            scale: 0.8
        })  
        gsap.set([textRef.current], {
            opacity: 0,
            y: -100,
            
        })

        // Create timeline for staggered animations
        const tl = gsap.timeline({ delay: 0.3 })

        tl.to(textRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "back.out(1)"
        }, "-=0.3")

        // Animate image with slight delay
        tl.to(imageRef.current, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "back.out(1.7)"
        }, "-=0.4")

        // Scroll-triggered animation for the sticker
        gsap.to(imageRef.current, {
            y: "+=200", // Move down 200px (reduced for mobile)
            scale: 1.2, // Scale up (reduced for mobile)
            rotation: 15, // Add rotation (reduced for mobile)
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: bannerRef.current,
                start: "top top", // Start when top of banner hits top of viewport
                end: "bottom center", // End when bottom of banner hits center of viewport
                scrub: 1.5, // Smooth scrubbing tied to scroll position
                pin: false, // Don't pin the element
                anticipatePin: 1,
                markers: false, // Disable markers for production
                onUpdate: (self) => {
                    // Responsive animation adjustments based on screen size
                    const progress = self.progress
                    const isMobile = window.innerWidth < 768
                    
                    if (isMobile) {
                        // Reduced animation values for mobile
                        gsap.set(imageRef.current, {
                            y: `+=${200 * progress}`,
                            scale: 1 + (0.2 * progress),
                            rotation: 15 * progress
                        })
                    }
                }
            }
        })

        // Cleanup function
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }

    }, [])

    return(
        <div 
            ref={bannerRef}
            className="grid grid-cols-1 md:grid-cols-12 grid-rows-1 md:grid-rows-2 ml-4 md:ml-[36px] gap-4 md:gap-x-2 lg:gap-x-4 h-[90vh] md:h-[75vh] bg-[#0fasds] overflow-y-hidden overflow-x-hidden"
        >
            {/* Text Content - Mobile: Full width, Desktop: Left side */}
            <div 
                ref={textRef}
                className="col-span-1 md:col-start-1 md:col-span-5 lg:col-start-2 lg:col-span-5 flex flex-col justify-center  row-start-1 row-span-2 px-4 md:px-2 lg:px-0 order-1 md:order-1 z-10"
            >
                <h1 className="font-poppins-light leading-tight text text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center md:text-left mb-4 md:mb-6">
                    Express Yourself With Custom Stickers
                </h1>
                <p className="font-poppins-light text-sm sm:text-base md:text-sm lg:text-base text-center md:text-left mb-6 md:mb-4 leading-relaxed">
                    Transform your ideas into stunning stickers with our AI-powered design tool. Choose from our premium collection or create something uniquely yours.
                </p>
                
                {/* Buttons - Mobile: Below text, Desktop: Separate row */}
                <div 
                    ref={buttonsRef}
                    className="cta-buttons flex flex-col sm:flex-row gap-3 sm:gap-x-4 justify-center md:justify-start order-2 md:order-3"
                >
                    <button className="font-poppins-light text-sm sm:text-base px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-lg transition-colors">
                        Get Started
                    </button>
                    <button className="font-poppins-light text-sm sm:text-base px-6 py-3 border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white rounded-lg transition-colors">
                        Learn More
                    </button>
                </div>
            </div>

            {/* Image - Mobile: Below text, Desktop: Right side */}
            <div className="col-span-1 md:col-start-6 md:col-span-7 lg:col-start-7 lg:col-span-5 row-start-2 md:row-start-1 md:row-span-2 relative h-64 sm:h-80 md:h-full order-2 md:order-2 overflow-visible lg: col-start-5">
                <img 
                    ref={imageRef}
                    src="/images/banner-img.png" 
                    srcSet="/images/banner-img-sm.png 640w, /images/banner-img-md.png 768w, /images/banner-img.png 1024w"
                    sizes="(max-width: 640px) 640px, (max-width: 768px) 768px, 1024px"
                    alt="robot smiley face sticker" 
                    className="w-auto h-full max-w-none object-contain absolute bottom-[-5%] sm:bottom-[-10%] md:bottom-[-25%] md:right-[-50%] lg:bottom-[-20%] lg:right-[-50%] xl:bottom-[-25%] right-[-5%] sm:right-[-10%] lg:right-[-20%] xl:right-[-50%] 2xl:right-[-35%]"
                />
            </div>
        </div>
    )
}

export default Banner
