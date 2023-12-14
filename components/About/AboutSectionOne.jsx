import Image from "next/image";
import { useState } from "react";

const AboutSectionOne = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section
      id="tentang-kami"
      className="dark:bg-bg-color-dark bg-white relative z-10 py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <div
          className={"wow fadeInUp w-full mx-auto text-center"}
          data-wow-delay=".1s"
          style={{ maxWidth: "570px", marginBottom: "100px" }}
        >
          <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
            Tentang kami
          </h2>
          <p className="text-base !leading-relaxed text-body-color md:text-lg">
            CV. Cipta Mandiri Perkasa adalah perusahaan yang berkompeten dan
            berpengalaman puluhan tahun dalam bidang Kubah GRC, Kaligrafi
            Masjid, GRC Krawangan, GRC Ornamen, GRC Menara Masjid, Washing Motif
            Awan, dsb.
          </p>
        </div>

        {/* <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp mx-auto max-w-[770px] overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
              <div className="relative aspect-[77/40] items-center justify-center">
                <Image src="/images/video/video.jpg" alt="video image" fill />
                <div className="absolute right-0 top-0 flex h-full w-full items-center justify-center">
                  <button
                    aria-label="video play button"
                    onClick={() => setOpen(true)}
                    className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white bg-opacity-75 text-primary transition hover:bg-opacity-100"
                  >
                    <svg
                      width="16"
                      height="18"
                      viewBox="0 0 16 18"
                      className="fill-current"
                    >
                      <path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      {/* 
      <ModalVideo
        channel="youtube"
        autoplay={true}
        start={true}
        isOpen={isOpen}
        videoId="L61p2uyiMSo"
        onClose={() => setOpen(false)}
      /> */}

      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default AboutSectionOne;
