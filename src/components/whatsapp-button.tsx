"use client";

const WHATSAPP_NUMBER = "233244739386";
const WHATSAPP_MESSAGE = "Hello DASAAH, I'd like to enquire about your services.";

export default function WhatsAppButton() {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg hover:bg-[#1ebe57] transition-colors hover:scale-110 transform duration-200"
    >
      <svg
        viewBox="0 0 32 32"
        fill="white"
        className="h-7 w-7"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16.004 2.667A13.26 13.26 0 0 0 2.667 15.89a13.16 13.16 0 0 0 1.795 6.66L2.667 29.333l7.013-1.84a13.28 13.28 0 0 0 6.324 1.614h.005A13.27 13.27 0 0 0 16.004 2.667Zm0 24.266a11 11 0 0 1-5.615-1.54l-.403-.239-4.175 1.095 1.115-4.073-.263-.418a10.96 10.96 0 0 1-1.686-5.868A11.01 11.01 0 0 1 16.004 4.88 11.01 11.01 0 0 1 27.02 15.89a11.02 11.02 0 0 1-11.016 11.043Zm6.04-8.265c-.332-.166-1.962-.968-2.266-1.079-.305-.11-.527-.166-.749.167-.221.332-.86 1.079-1.054 1.3-.194.222-.388.25-.72.083-.332-.166-1.4-.516-2.668-1.645-.986-.878-1.652-1.963-1.846-2.295-.194-.332-.021-.512.146-.677.15-.149.332-.388.498-.582.166-.194.221-.333.332-.555.111-.222.056-.416-.028-.582-.083-.167-.749-1.806-1.027-2.473-.27-.649-.545-.561-.749-.572l-.638-.011a1.224 1.224 0 0 0-.887.416c-.305.333-1.165 1.14-1.165 2.778s1.193 3.222 1.359 3.444c.166.222 2.347 3.584 5.688 5.026.795.343 1.415.548 1.899.702.798.253 1.524.218 2.098.132.64-.095 1.962-.802 2.24-1.577.277-.775.277-1.439.194-1.577-.083-.139-.305-.222-.638-.388Z" />
      </svg>
    </a>
  );
}
