"use client"
import React from "react";
import "boxicons/css/boxicons.min.css";

const EmailSection = () => {

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    }
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";


    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  }
  return (
    <section className="grid md:grid-cols-2 my-12 py-24 gap-4">
      
      <div>
        <h5 className="text-xl font-bold text-white my-2">
          vamos nos conectar
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {""}
          Atualmente, estou em busca de novas oportunidades profissionais e
          aberto a conexões estratégicas. Caso deseje discutir oportunidades,
          esclarecer dúvidas ou explorar possíveis parcerias, sinta-se à vontade
          para entrar em contato.
        </p>
        <div className="socials flex flex-row gap-2">
          <div className="flex items-center gap-4">
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
        <form className="flex flex-col" onSubmit={handleSubmit}>
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
              id="assunto"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="apenas dizendo oi"
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
              name="mensagem"
              id="mensagem"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Vamos falar sobre..."
            />
          </div>
          <button
            type="submit"
            className="bg-[#57db0f] hover:bg-[#2E6B1A] text-white font-medium py-2.5 px-5 rounded-lg w-full">
              Enviar Mensagem
            </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
