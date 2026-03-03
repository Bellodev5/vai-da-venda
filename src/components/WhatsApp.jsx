import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phone = "5521988109215";
  const message = "Olá! Visitei o site da VAI e gostaria de saber mais sobre a empresa!";
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="
        fixed bottom-6 right-6 z-50
        flex items-center justify-center
        w-14 h-14
        bg-[#25D366] text-white
        rounded-full shadow-lg
        hover:scale-110 active:scale-95
        transition-transform duration-300
        animate-bounce-slow
      "
    >
      <FaWhatsapp className="text-[30px]" />
    </a>
  );
}