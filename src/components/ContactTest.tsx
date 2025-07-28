import React from 'react';
import { LinkedinLogo, GithubLogo, EnvelopeSimple, Lightbulb } from 'phosphor-react';

const ContactTest = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8">
          Seus dados estão uma bagunça?
        </h2>
        <p className="text-lg text-center max-w-2xl mx-auto mb-8">
          Você passa horas retrabalhando planilhas, perdendo oportunidades e tomando decisões no escuro.
        </p>
        <div className="text-center">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg">
            Quero resolver meus problemas de dados
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactTest;
