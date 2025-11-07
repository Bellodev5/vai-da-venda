import React from "react";

export default function QuestionButton() {
  const phone = "554789231650";
  const message = `Olá! Ainda tenho dúvidas sobre a VAI. Gostaria de saber mais informações.`;
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <div className="flex justify-center mt-0">
      <div className="text-center p-8 bg-gradient-to-r from-brand to-brand-dark rounded-2xl max-w-xl w-full shadow-lg">
        <h3 className="text-2xl font-bold text-white mb-4">Ainda tem dúvidas?</h3>
        <p className="text-white/90 mb-6">
          Fale diretamente com nosso time de especialistas
        </p>
        <a
          href={whatsappUrl}
          className="inline-block bg-white text-brand font-semibold px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          Falar com Especialista
        </a>
      </div>
    </div>
  );
}
