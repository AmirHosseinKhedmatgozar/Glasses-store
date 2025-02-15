import { FaGithub, FaInstagramSquare, FaTelegram } from "react-icons/fa";

function Footer() {
  return (
    <div className="mt-4 flex h-16 items-center justify-center gap-8">
      <p className="font-serif text-xs min-[500px]:text-xl">
        Eyesome made with ❤️ by Amir
      </p>
      <div className="flex gap-2 text-xl">
        <a
          href="https://github.com/AmirHosseinKhedmatgozar  "
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/amir_kh_______?igsh=dG01dTd1a2V6d2Rp&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl"
        >
          <FaInstagramSquare />
        </a>
        <a
          href="https://t.me/amirkh21"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl"
        >
          <FaTelegram />
        </a>
      </div>
    </div>
  );
}

export default Footer;
