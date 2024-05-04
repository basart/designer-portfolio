import Image, { ImageProps } from "next/image";

function ScrollerItem({
  src,
  quality = 100,
  alt = "",
}: {
  src: ImageProps["src"];
  width?: number,
  height?: number,
  quality?: number,
  alt?: string,
} ) {
  return (
    <div className="scroller__inner-item">
      <div className="relative w-[352px] h-[217px]">
        <Image
          src={src}
          alt={alt}
          fill
          quality={quality}
        />
      </div>
    </div>
  );
}

function Home() {
  return (
    <>
      <section className="hero">
        <div className="container flex justify-between">
          <div className="words-wrapper">
            <p>Designing</p>
            <div>
              <div className="words">
                <span>Experiences</span>
                <span>Websites</span>
                <span>Applications</span>
                <span>Brands</span>
                <span>Experiences</span>
              </div>
            </div>
          </div>

          <div className="social-wrapper self-end">
            <a
              href={process.env.NEXT_PUBLIC_LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="outline-btn-container social-btn-container">
                <div className="outline-btn social-btn">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" d="M0.328335 6.64101H4.47433V20H0.328335V6.64101ZM2.40308 4.81456C3.72687 4.81456 4.80615 3.73688 4.80615 2.40728C4.80615 2.09115 4.744 1.77812 4.62323 1.48605C4.50247 1.19399 4.32546 0.928611 4.10231 0.705075C3.87916 0.481539 3.61425 0.30422 3.3227 0.183243C3.03114 0.0622656 2.71866 0 2.40308 0C2.08751 0 1.77502 0.0622656 1.48347 0.183243C1.19191 0.30422 0.926998 0.481539 0.703852 0.705075C0.480707 0.928611 0.303697 1.19399 0.182932 1.48605C0.062166 1.77812 8.47461e-06 2.09115 8.48126e-06 2.40728C-0.00348436 3.73688 1.07231 4.81456 2.40308 4.81456ZM11.2155 13.3905C11.2155 11.648 11.5473 9.96151 13.7024 9.96151C15.8261 9.96151 15.8575 11.9524 15.8575 13.5024V20H20V12.6732C20 9.07628 19.2246 6.30861 15.0297 6.30861C13.0143 6.30861 11.6626 7.41777 11.1072 8.46746H11.0513V6.64101H7.07301V20H11.2155V13.3905Z"/>
                  </svg>
                </div>
              </div>
            </a>
            
            <a
              href={process.env.NEXT_PUBLIC_TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="outline-btn-container social-btn-container">
                <div className="outline-btn social-btn">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" d="M20.8968 3.54128L2.67443 10.5234C1.43083 11.0198 1.43802 11.7091 2.44626 12.0165L7.12466 13.4666L17.9491 6.68055C18.4609 6.37111 18.9286 6.53757 18.5442 6.87662L9.77425 14.7411H9.77219L9.77425 14.7422L9.45153 19.5338C9.9243 19.5338 10.1329 19.3183 10.3981 19.064L12.6705 16.8684L17.3972 20.3375C18.2688 20.8144 18.8947 20.5693 19.1115 19.5358L22.2144 5.00572C22.5319 3.74042 21.7282 3.16751 20.8968 3.54128Z" />
                  </svg>  
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="scroller">
        <div className="scroller__inner">
          <ScrollerItem src="/assets/images/scroller-1.jpg" />
          <ScrollerItem src="/assets/images/scroller-2.jpg" />
          <ScrollerItem src="/assets/images/scroller-3.jpg" />
          <ScrollerItem src="/assets/images/scroller-4.jpg" />
        </div>
        <div data-direction="right" className="scroller__inner">
          <ScrollerItem src="/assets/images/scroller-5.jpg" />
          <ScrollerItem src="/assets/images/scroller-6.jpg" />
          <ScrollerItem src="/assets/images/scroller-7.jpg" />
          <ScrollerItem src="/assets/images/scroller-8.jpg" />
        </div>
      </section>

      <section className="stack-cards relative">
        <div className="card__content sticky flex justify-center items-center top-0">
          <h2 className="text-12xl text-neutral-700 font-medium uppercase">Cases</h2>
        </div>
        
        <div id="card_1" className="card sticky">
          <div className="card__content bg-neutral-850 pt-12">
            <div className="mb-20">
              <h3 className="text-5xl text-white font-semibold text-center mb-3">WaveNeuroscience</h3>
              <p className="text-3xl text-white font-regular text-center">UX/UI Design</p>
            </div>
            <div className="card__content-preview m-auto">
              <img className="w-full" src="/assets/images/wave-neuroscience.jpg" alt="WaveNeuroscience" />
            </div>
          </div>
        </div>  
        <div id="card_2" className="card sticky">
          <div className="card__content bg-neutral-600 pt-12">
            <div className="mb-20">
              <h3 className="text-5xl text-white font-semibold text-center mb-3">Sonal / Sonal Teams</h3>
              <p className="text-3xl text-white font-regular text-center">UX/UI Design</p>
            </div>
            <div className="card__content-preview m-auto">
              <img className="w-full" src="/assets/images/sonal.jpg" alt="Sonal / Sonal Teams" />
            </div>
          </div>
        </div>
        <div id="card_3" className="card sticky">
          <div className="card__content bg-neutral-400 pt-12">
            <div className="mb-20">
              <h3 className="text-5xl text-black font-semibold text-center mb-3">Blitz</h3>
              <p className="text-3xl text-black font-regular text-center">UX/UI Design • Redesign</p>
            </div>
            <div className="card__content-preview m-auto">
              <img className="w-full" src="/assets/images/blitz.jpg" alt="Blitz" />
            </div>
          </div>
        </div>
        <div id="card_4" className="card sticky">
          <div className="card__content bg-neutral-300 pt-12">
            <div className="mb-20">
              <h3 className="text-5xl text-black font-semibold text-center mb-3">5v5 hockey</h3>
              <p className="text-3xl text-black font-regular text-center">UX/UI Design • Redesign • Logo design</p>
            </div>
            <div className="card__content-preview m-auto">
              <img className="w-full" src="/assets/images/5v5-hockey.jpg" alt="5v5 hockey" />
            </div>
          </div>
        </div>
      </section>

      <section className="all-projects">
        <div className="container flex place-content-center">
          <a href="#all-projects">
            <div className="button-container outline-btn-container">
              <div className="button outline-btn text-2xl">
                All projects
              </div>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}

export default Home;
