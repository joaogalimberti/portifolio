export default function Timeline() {
  return (
    <section id="timeline">
      <div className="container">
        {/* Cabeçalho da seção */}
        <div className="section-header reveal">
          <div className="section-number">04 | EXPERIENCE</div>
          <h2 className="section-title">Trajetória Profissional & Aprendizado</h2>
        </div>

        <div className="timeline-container reveal">
          <div className="timeline-line"></div>

          {[
            {
              year: "02/2026 - Atual",
              role: "Agente de Suporte Educacional",
              company: "Secretaria de Educação - SEDU/ES",
              desc:
                "Cargo efetivo para apoio de secretaria escolar, com atuação em processos administrativos e organização de informações críticas. Desenvolvimento de habilidades em gestão de dados, organização e comunicação profissional."
            },
            {
              year: "02/2024 - 02/2026",
              role: "Assistente Administrativo | Processamento de Dados",
              company: "Núcleo Especial de Sistemas de Informação em Saúde - SESA/ES",
              desc:
                "Experiência com inserção e manipulação de dados de saúde, uso do software R e DataSUS, garantindo a precisão e integridade das informações. Desenvolvimento de competências analíticas e responsabilidade profissional."
            },
            {
              year: "09/2023 - 02/2024",
              role: "Jovem Aprendiz | Auxiliar Administrativo",
              company: "Corpus Saneamento e Obras Ltda",
              desc:
                "Atuação em processos administrativos e logísticos, lançamento de notas fiscais no TOTVS Protheus, controle de frotas e organização de planilhas Excel. Experiência prática em sistemas corporativos e rotina administrativa."
            }
          ].map((item, i) => (
            <div className="timeline-item" key={i}>
              <div className="timeline-content">
                <div
                  className="timeline-card"
                  onClick={(e) =>
                    window.toggleTimeline && window.toggleTimeline(e.currentTarget)
                  }
                >
                  <div className="timeline-year">{item.year}</div>
                  <div className="timeline-role">{item.role}</div>
                  <div className="timeline-company">{item.company}</div>
                  <div className="timeline-description">{item.desc}</div>
                </div>
                <div className="timeline-dot"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
