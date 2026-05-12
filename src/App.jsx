import CardCss from './components/Card.module.css'
import AppCss from './components/App.module.css'
import ImgCss from './components/conteinerAction.module.css'
import professor from './assets/professor-Photoroom.png';
import professorExplic from './assets/professor-explic-Photoroom.png';
import { useEffect, useRef, useState } from 'react';

export default function App() {
  const headerRef = useRef(null);

  const [showIntro, setShowIntro] = useState(() => {
    return sessionStorage.getItem('introFinalizada') !== 'true';
  });

  const [bg, setBg] = useState(AppCss.defaultBg);
  const [title, setTitle] = useState("Suporte de Domingo");
  const [info, setInfo] = useState("Selecione um projeto para ver detalhes.");
  const [font, setFont] = useState("fontDefault");
  const [fontp, setFontp] = useState("fontPDefault");
  const [selectedCard, setSelectedCard] = useState(null);
  const [link, setLink] = useState("https://suportededomingo.com.br/");

  const resetHome = () => {
    setBg(AppCss.defaultBg);
    setTitle("Suporte de Domingo");
    setInfo("Selecione um projeto para ver detalhes.");
    setFont("fontDefault");
    setFontp("fontPDefault");
    setSelectedCard(null);
    setLink("https://suportededomingo.com.br/");
  };

  useEffect(() => {
    if (!showIntro) return;

    const tempoTotalDaIntro = 13000;

    const timer = setTimeout(() => {
      sessionStorage.setItem('introFinalizada', 'true');
      setShowIntro(false);

      setTimeout(() => {
        headerRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }, 300);
    }, tempoTotalDaIntro);

    return () => {
      clearTimeout(timer);
    };
  }, [showIntro]);

  const projects = {
    santé: {
      bg: AppCss.bgSanté,
      title: "Projeto Santé",
      info: "Desenvolvimento de soluções para logística e transporte.",
      font: "fontSanté",
      fontp: "fontPSanté",
      link: "https://www.clinicasantesp.com.br/"
    },

    codeTrouble: {
      bg: AppCss.bgCodeTrouble,
      title: "Code Trouble",
      info: "Suporte técnico especializado em depuração de sistemas.",
      font: "fontCodeTrouble",
      fontp: "fontPCodeTrouble",
      link: "https://codetrouble.com.br/"
    },

    joysGourmet: {
      bg: AppCss.bgJoysGourmet,
      title: "Joy's Gourmet",
      info: "Consultoria em tecnologia para restaurantes e delivery.",
      font: "fontJoysGourmet",
      fontp: "fontPJoysGourmet",
      link: "https://www.instagram.com/joysgourmet/"
    },

    cjrSolucoes: {
      bg: AppCss.bgCjrSolucoes,
      title: "CJR Soluções",
      info: "Manutenção e suporte em infraestrutura corporativa.",
      font: "fontCjrSolucoes",
      fontp: "fontPCjrSolucoes",
      link: "https://www.instagram.com/crj.solucoes/"
    }
  };

  const handleClick = (projectKey) => {
    const project = projects[projectKey];

    setBg(project.bg);
    setTitle(project.title);
    setInfo(project.info);
    setFont(project.font);
    setFontp(project.fontp);
    setLink(project.link);
    setSelectedCard(projectKey);
  };

  return (
    <>
      {showIntro && (
        <section className={AppCss.intro}>
          <h1 className={AppCss.introTitle}>
            Bem-vindo ao Suporte de Domingo
          </h1>

          <p className={AppCss.introText}>
            Explorando projetos de tecnologia, suporte e soluções digitais.
          </p>

          <div className={ImgCss.conteinerAction}>
            <img
              src="/laboratorio.jpeg"
              alt="Laboratory"
              className={ImgCss.imgAction}
            />

            <div className={ImgCss.charactersLayer}>
              <div className={ImgCss.character}>
                <img src={professor} alt="LC" />
                <div className={ImgCss.speechBubble}>
                  Bem vindo ao suporte de domingo
                </div>
              </div>

              <div className={ImgCss.character2}>
                <img src={professorExplic} alt="Personagem 2" />
                <div className={ImgCss.speechBubble}>
                  Aqui você encontra tudo o que precisa.
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <header ref={headerRef} className={AppCss.header}>
        <nav className={AppCss.navBar}>
          <button type="button" onClick={resetHome}>
            Home
          </button>

          <a href="#projects">Projetos</a>
        </nav>
      </header>

      <main id="projects" className={`${AppCss.main} ${bg}`}>
        <div className={AppCss.boxTitle}>
          <h1 className={AppCss[font]}>{title}</h1>
        </div>

        <div className={AppCss.boxP}>
          <p className={AppCss[fontp]}>
            {info}

            {selectedCard && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={AppCss.saibaMais}
              >
                Saiba mais...
              </a>
            )}
          </p>
        </div>

        <div className={CardCss.cardBox}>
          <div className={CardCss.cardInner}>
            <div className={CardCss.wapper}>
              <button
                className={`${CardCss.btnCard} ${
                  selectedCard === "santé" ? CardCss.selected : ""
                }`}
                onClick={() => handleClick("santé")}
              >
                <img
                  src="/Captura de tela de 2026-03-31 08-34-37.png"
                  alt="Santé"
                  className={CardCss.imgCard}
                />
              </button>
            </div>

            <div className={CardCss.wapper}>
              <button
                className={`${CardCss.btnCard} ${
                  selectedCard === "codeTrouble" ? CardCss.selected : ""
                }`}
                onClick={() => handleClick("codeTrouble")}
              >
                <img
                  src="/Captura de tela de 2026-03-31 08-34-50.png"
                  alt="Code trouble"
                  className={CardCss.imgCard}
                />
              </button>
            </div>

            <div className={CardCss.wapper}>
              <button
                className={`${CardCss.btnCard} ${
                  selectedCard === "joysGourmet" ? CardCss.selected : ""
                }`}
                onClick={() => handleClick("joysGourmet")}
              >
                <img
                  src="/Captura de tela de 2026-03-31 08-35-03.png"
                  alt="Joy's Gourmet"
                  className={CardCss.imgCard}
                />
              </button>
            </div>

            <div className={CardCss.wapper}>
              <button
                className={`${CardCss.btnCard} ${
                  selectedCard === "cjrSolucoes" ? CardCss.selected : ""
                }`}
                onClick={() => handleClick("cjrSolucoes")}
              >
                <img
                  src="/Captura de tela de 2026-03-31 08-35-13.png"
                  alt="CJR Soluções"
                  className={CardCss.imgCard}
                />
              </button>
            </div>
          </div>
        </div>
      </main>

      <footer id="contact" className={AppCss.footer}>
        <div>
          <h2>Suporte de Domingo</h2>
          <p>
            Portfólio de projetos desenvolvidos com foco em tecnologia,
            suporte e soluções digitais.
          </p>
        </div>

        <div className={AppCss.footerLinks}>
          <a href="#home" onClick={resetHome}>Home</a>
          <a href="#projects">Projetos</a>
          <a href="#contact">Contato</a>
        </div>
      </footer>
    </>
  );
}