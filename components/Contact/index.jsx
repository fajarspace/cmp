import NewsLetterBox from "./NewsLetterBox";
import {
  FaFacebook,
  FaInstagram,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-full xl:w-full">
            <div
              className="wow fadeInUp shadow-three dark:bg-gray-dark mb-12 rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Kontak kami
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Kami siap membantu Anda dalam mewujudkan proyek seni arsitektur
                dan konstruksi yang berkualitas tinggi.
              </p>

              {/* Informasi Kontak */}
              <ul className="list-none pl-0 text-lg">
                <li className="mb-2 flex items-center">
                  <span className="mr-2">
                    <FaWhatsapp size={24} />{" "}
                  </span>
                  <span>+62 813 8622 5702</span>
                </li>
                <li className="mb-2 flex items-center">
                  <span className="mr-2">
                    <FaEnvelope size={24} />
                  </span>
                  <span>midun_sep73@yahoo.com</span>
                </li>
                <li className="mb-2 flex items-center">
                  <span className="mr-2">
                    <FaFacebook size={24} />{" "}
                  </span>
                  <span>ahmad.nursaid.7731</span>
                </li>
                <li className="mb-2 flex items-center">
                  <span className="mr-2">
                    <FaInstagram size={24} />{" "}
                  </span>
                  <span>@ahmad.nursaid</span>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLetterBox />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
