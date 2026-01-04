export default function Projects() {
  const projects = [
    {
      title: "Formulário de Pesquisa – SUS",
      desc: "Formulário de pesquisa responsivo desenvolvido com HTML semântico, CSS moderno e JavaScript, com foco em acessibilidade, organização visual e interação fluida com o usuário.",
      img: "sus-survey.png",
      tech: ["HTML5", "CSS3", "JavaScript", "DOM", "Regex"],
      demo: "https://joaogalimberti.github.io/survey-form-sus/",
      code: "https://github.com/joaogalimberti/survey-form-sus"
    },
    {
      title: "Shopping List System",
      desc: "CRUD completo em HTML, CSS e JS, persistência via LocalStorage e integração com MockAPI.",
      img: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      tech: ["JavaScript", "HTML5", "CSS3"],
      demo: "#",
      code: "https://github.com/joaogalimberti/shopping-list-system"
    },
    {
      title: "E-commerce XHR Demo",
      desc: "Demo de e-commerce simples com carregamento assíncrono de produtos, busca e UI responsiva.",
      img: "ecommerce.png",
      tech: ["JavaScript", "HTML5", "CSS3", "AJAX"],
      demo: "https://joaogalimberti.github.io/ecommerce-xhr-demo/",
      code: "https://github.com/joaogalimberti/ecommerce-xhr-demo"
    }
  ];

  return (
    <section id="projects">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-number">04 | PROJETOS</div>
          <h2 className="section-title">Projetos em Destaque</h2>
        </div>

        <div className="projects-grid reveal">
          {projects.map((project, i) => (
            <div className="project-card" key={i}>
              <div className="project-image-wrapper">
                <img src={project.img} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <div className="overlay-content">
                    <h3 className="project-title">{project.title}</h3>
                    <div className="project-tags">
                      {project.tech.map((t, idx) => (
                        <span className="project-tag" key={idx}>{t}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      <a href={project.demo} target="_blank" className="project-link">Demo</a>
                      <a href={project.code} target="_blank" className="project-link">Código</a>
                    </div>
                  </div>
                </div>
              </div>
              <p className="project-description">{project.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
