const Maps = () => {
  return (
    <section className="dark:bg-bg-color-dark bg-white relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center">
          <div
            className="wow fadeInUp w-full md:w-1/2 mx-auto md:mr-8"
            data-wow-delay=".1s"
            style={{ marginBottom: "20px" }}
          >
            <h2 className="mb-4 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl md:text-5xl">
              Lokasi
            </h2>
            <p className="text-base leading-relaxed text-body-color md:text-lg">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form.
            </p>
            {/* Add your detailed address here */}
            <address className="text-sm text-gray-500 mt-4">
              Jalan Raya No. 123, Kota Anda, Negara
            </address>
          </div>
          <div
            className="wow fadeInUp w-full md:w-1/2 mx-auto text-center"
            data-wow-delay=".1s"
            style={{ marginBottom: "20px" }}
          >
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
      </div>
    </section>
  );
};

export default Maps;
