import "../styles/Contact.css";

export default function Contact() {
  return (
    <section className="contact">
      <div className="contact-container">
        <h2>Fale conosco</h2>
        <form className="contact-form">
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" name="name" placeholder="Seu nome" />

          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" name="email" placeholder="Seu e-mail" />

          <label htmlFor="message">Mensagem</label>
          <textarea id="message" name="message" placeholder="Sua mensagem"></textarea>

          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
}
