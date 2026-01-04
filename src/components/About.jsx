import CountUp from "./CountUp";
import meArt from "/me-art.jpg";

export default function About() {
  const statsData = [
    { label: "Anos de experiência em TI", target: 4, plus: false },
    { label: "Projetos de estudo e prática", target: 10, plus: true },
    { label: "Horas de aprendizado contínuo", target: 10000, plus: true }
  ];

  return (
    <section id="about">
      <div className="container">
        {/* Cabeçalho da seção */}
        <div className="section-header reveal">
          <div className="section-number">01 | ABOUT</div>
          <h2 className="section-title">Transformando ideias em interfaces reais</h2>
        </div>

        {/* Grid com texto à esquerda e imagem à direita */}
        <div className="about-grid reveal">
          <div className="about-content">
            <p className="about-text">
              Olá! Sou João Vitor, desenvolvedor em formação com foco em Front-End e
              construção de aplicações Web modernas. Estou constantemente evoluindo minhas
              habilidades e aplicando tecnologias atuais para criar interfaces intuitivas
              e experiências digitais significativas.
            </p>

            <p className="about-text">
              Tenho experiência prática no manejo de dados, desenvolvimento web e
              ferramentas de análise, sempre buscando entregar projetos organizados,
              escaláveis e com atenção à performance e usabilidade. Meu objetivo é crescer
              como Full Stack Developer, aprendendo e contribuindo em projetos reais.
            </p>
          </div>

          <div className="about-image-wrapper">
            <img 
              src={meArt} 
              alt="João Galimberti" 
              className="about-image"
            />
          </div>
        </div>

        {/* Stats em linha no final da seção */}
        <div className="about-stats-inline reveal">
          {statsData.map((stat, index) => (
            <div className="stat-item-inline" key={index}>
              <CountUp
                to={stat.target}
                from={0}
                duration={2}
                className="count-up-text"
              />
              {stat.plus && <span className="plus">+</span>}
              <span className="stat-label-inline">{stat.label}</span>
              {index < statsData.length - 1 && <span className="stat-separator">|</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}