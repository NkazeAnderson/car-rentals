import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import ImageGallery from "./ui/ImageGallery";

function PageHeader({
  backgroundImg,
  text,
}: {
  backgroundImg: any;
  text: string;
}) {
  return (
    <div className="pb-10 h-[40vh]">
      <ImageGallery images={[backgroundImg]}>
        <div className="bg-black/70 w-full h-full text-white flex flex-col justify-center items-center px-12">
          <h2 className="text-[22px] lg:text-[35px]">{text}</h2>
          <div className="flex space-x-3 text-[50px]">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaPinterest />
            <FaYoutube />
          </div>
        </div>
      </ImageGallery>
    </div>
  );
}

export default PageHeader;
