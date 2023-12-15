import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Maps = () => {
  const Point = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[50px] w-[50px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        <FaLocationDot />
      </span>
      {text}
    </p>
  );
  const Email = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[40px] w-[40px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        <IoMdMail />
      </span>
      {text}
    </p>
  );
  return (
    <section className="dark:bg-bg-color-dark bg-white relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="wow fadeInUp mb-8" data-wow-delay=".1s">
          <h2 className="mb-4 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl md:text-5xl">
            Lokasi
          </h2>
        </div>
        <div
          className="wow fadeInUp mt-10 mb-12 max-w-[570px] lg:mb-0"
          data-wow-delay=".15s"
        >
          <div className="mx-[-12px] flex flex-wrap">
            <div className="w-full ">
              <Point text="Jl. Raya Tambelang Kp. Pisang Batu Desa Kertamukti Kec. Cibitung Kab.Bekasi 17520" />
              <Email text="midun_sep73@yahoo.com" />
            </div>

            {/* <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <Point text="Next.js" />
                    <Point text="Rich documentation" />
                    <Point text="Developer friendly" />
                  </div> */}
          </div>
        </div>
        <div className="wow fadeInUp mx-auto text-center" data-wow-delay=".1s">
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "8px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <iframe
              style={{ border: "0", width: "100%", height: "470px" }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.5731211353292!2d107.11554842919057!3d-6.225112899718353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69854f9b8a9187%3A0x639e660cbd4dacdf!2sCv.%20Cipta%20Mandiri%20Perkasa!5e0!3m2!1sid!2sid!4v1649492938078!5m2!1sid!2sid"
              frameBorder="0"
              allowFullScreen
              title="Google Maps"
            ></iframe>
            <div
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                pointerEvents: "none",
              }}
            >
              <div
                style={{
                  backgroundImage: "url('path/to/overlay-image.png')", // Add an overlay image if desired
                  opacity: "0.5", // Adjust overlay opacity
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Maps;
