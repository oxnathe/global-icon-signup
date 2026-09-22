import { SocialIcon } from "react-social-icons";

function WhatsAppButton() {
  const phoneNumber = "2347065114147";

  const message = encodeURIComponent(
    "Hello Global Icon Realtors, I would like to make a property enquiry."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Global Icon Realtors on WhatsApp"
      title="Chat with us on WhatsApp"
      className="fixed bottom-6 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-2xl transition duration-300 hover:scale-110 hover:bg-[#1ebe5d] md:bottom-7 md:right-7"
    >
      <SocialIcon
        network="whatsapp"
        url={whatsappUrl}
        bgColor="transparent"
        fgColor="#ffffff"
        style={{
          width: 32,
          height: 32,
        }}
      />

      <span className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-20" />
    </a>
  );
}

export default WhatsAppButton;