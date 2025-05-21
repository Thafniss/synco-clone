import "../styles/Features.css";

export default function Features() {
  return (
    <section className="features">
      <div className="features-container">
        <h2>O que oferecemos</h2>
        <div className="features-list">
          <div className="feature-item">
            <h3>Inovação</h3>
            <p>
              Soluções criativas e modernas para destacar seu negócio no mercado.
            </p>
          </div>
          <div className="feature-item">
            <h3>Qualidade</h3>
            <p>
              Entregamos produtos com alto padrão para garantir a melhor experiência.
            </p>
          </div>
          <div className="feature-item">
            <h3>Suporte</h3>
            <p>
              Atendimento dedicado para auxiliar você em todas as etapas do projeto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
