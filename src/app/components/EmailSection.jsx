"use client";
import React, { useState } from "react";
import "boxicons/css/boxicons.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setEmailSubmitted(true);
        toast.success("✅ Sua mensagem foi enviada com sucesso!");
        form.reset();
      } else {
        toast.error("❌ Houve um erro ao enviar a mensagem. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro no envio:", error);
      toast.error("❌ Houve um erro ao enviar a mensagem. Tente novamente.");
    }
  };

  return (
    <section className="grid md:grid-cols-2 my-12 py-70 gap-4" id="contato">
      <div>
        <h5 className="text-xl font-bold text-white my-2" data-aos="fade-right">
          Vamos nos conectar
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md" data-aos="fade-right">
          Atualmente, estou em busca de novas oportunidades profissionais e
          aberto a conexões estratégicas. Caso deseje discutir oportunidades,
          esclarecer dúvidas ou explorar possíveis parcerias, sinta-se à vontade
          para entrar em contato.
        </p>
        <div className="socials flex flex-row gap-2">
          <div className="flex items-center gap-4" data-aos="fade-right">
            {[
              { href: "https://github.com/fagundes321", icon: "github" },
              {
                href: "https://www.linkedin.com/in/victor-fagundes-324070259/",
                icon: "linkedin",
              },
              {
                href: "mailto:victorfagundes123@gmail.com?subject=Contato%20via%20Portfólio&body=Olá%20Victor,%20gostaria%20de%20falar%20com%20você!",
                icon: "gmail",
              },
            ].map(({ href, icon }) => (
              <a
                key={icon}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 border-2 border-[#7CF03D] text-[#7CF03D] rounded-full text-2xl transition-all duration-300 hover:bg-[#7CF03D] hover:text-[#1f242d] hover:shadow-[0_0_10px_#7CF03D]"
              >
                <i className={`bx bxl-${icon}`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-400 text-center text-lg" data-aos="zoom-in">
            ✅ Sua mensagem foi enviada com sucesso!
          </p>
        ) : (
          <form
            className="flex flex-col"
            action="https://formsubmit.co/victorfagundes123@gmail.com"
            method="POST"
            onSubmit={handleSubmit}
          >
            {/* Campos ocultos do FormSubmit */}
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_subject"
              value="Nova mensagem do portfólio"
            />

            <div className="mb-6">
              <label
                htmlFor="name"
                className="text-white block mb-2 text-sm font-medium"
              >
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Seu nome"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Seu E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="nome@gmail.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block mb-2 text-sm font-medium"
              >
                Assunto
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Apenas dizendo oi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Mensagem
              </label>
              <textarea
                name="message"
                id="message"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Vamos falar sobre..."
              />
            </div>
            <button
              type="submit"
              className="bg-[#7CF03D] text-[#1f242d] border-2 border-[#7CF03D] shadow-[0_0_8px_#7CF03D] transition-all duration-300 hover:bg-transparent hover:text-[#7CF03D] hover:shadow-[0_0_10px_#7CF03D] font-semibold py-3 px-6 rounded-xl w-full cursor-pointer"
            >
              Enviar Mensagem
            </button>
          </form>
        )}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </section>
  );
};

export default EmailSection;
