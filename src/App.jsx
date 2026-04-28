import CardCss from './components/Card.module.css'
import AppCss from './components/App.module.css'
import ImgCss from './components/conteinerAction.module.css'
import professor from './assets/professor-Photoroom.png';
import professorExplic from './assets/professor-explic-Photoroom.png';
import { useState } from 'react';


export default function App() {
 const [bg, setBg] = useState(AppCss.defaultBg);
  const [title, setTitle] = useState("Suporte de Domingo");
  const [info, setInfo] = useState("Selecione um projeto para ver detalhes.");
  const [font, setFont] = useState("fontDefault");
  const [fontp, setFontp] = useState("fontPDefault");

  const projects = {
    santé: {
      bg: AppCss.bgSanté,
      title: "Projeto Santé",
      info: "Desenvolvimento de soluções para logística e transporte.",
      font: "fontSanté",
      fontp: "fontPSanté"
      
    },
    codeTrouble: {
      bg: AppCss.bgCodeTrouble,
      title: "Code Trouble",
      info: "Suporte técnico especializado em depuração de sistemas.",
      font: "fontCodeTrouble",
      fontp: "fontPCodeTrouble"
    },
    joysGourmet: {
      bg: AppCss.bgJoysGourmet,
      title: "Joy's Gourmet",
      info: "Consultoria em tecnologia para restaurantes e delivery.",
      font: "fontJoysGourmet",
      fontp: "fontPJoysGourmet"
    },
    cjrSolucoes: {
      bg: AppCss.bgCjrSolucoes,
      title: "CJR Soluções",
      info: "Manutenção e suporte em infraestrutura corporativa.",
      font: "fontCjrSolucoes",
      fontp: "fontPCjrSolucoes"
    }
  };
   
    const handleClick = (projectKey) => {
    const project = projects[projectKey];
    setBg(project.bg);
    setTitle(project.title);
    setInfo(project.info);
    setFont(project.font);
    setFontp(project.fontp);
  };


  return (
    <>


      <div className={ImgCss.conteinerAction}>
        <img src="/laboratorio.jpeg" alt="Laboratory" className={ImgCss.imgAction} />

        <div className={ImgCss.charactersLayer}>
          <div className={ImgCss.character}>
            <img src={professor} alt="LC" />
            <div className={ImgCss.speechBubble}>Bem vindo ao suporte de domingo</div>
          </div>
          <div className={ImgCss.character2}>
            <img src={professorExplic} alt="Personagem 2" />
            <div className={ImgCss.speechBubble}>Aqui você encontra tudo o que precisa.</div>
          </div>
        </div>
      </div>

        <header className={AppCss.header}>
          <nav className={AppCss.navBar}>
            <a href="#home">Home</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
          </nav>
        </header>

         <main className={`${AppCss.main} ${bg}`}>
     <div className={ AppCss.boxTitle}>
      <h1 className={AppCss[font]}>{title}</h1>
      </div>
      <div className={AppCss.boxP}>
      <p className={AppCss[fontp]}>{info}</p>
      </div>

      <div className={CardCss.cardBox}>
        <div className={CardCss.cardInner}>
          <div className={CardCss.wapper}>
            <button className={CardCss.btnCard} onClick={() => handleClick("santé")}>
              <img src="/Captura de tela de 2026-03-31 08-34-37.png" alt="Santé" className={CardCss.imgCard}/>
            </button>
          </div>

          <div className={CardCss.wapper}>
            <button className={CardCss.btnCard} onClick={() => handleClick("codeTrouble")}>
              <img src="/Captura de tela de 2026-03-31 08-34-50.png" alt="Code trouble" className={CardCss.imgCard}/>
            </button>
          </div>

          <div className={CardCss.wapper}>
            <button className={CardCss.btnCard} onClick={() => handleClick("joysGourmet")}>
              <img src="/Captura de tela de 2026-03-31 08-35-03.png" alt="Joy's Gourmet" className={CardCss.imgCard}/>
            </button>
          </div>

          <div className={CardCss.wapper}>
            <button className={CardCss.btnCard} onClick={() => handleClick("cjrSolucoes")}>
              <img src="/Captura de tela de 2026-03-31 08-35-13.png" alt="CJR Soluções" className={CardCss.imgCard}/>
            </button>
          </div>
        </div>
      </div>
    </main>
    

    </>
  )
}