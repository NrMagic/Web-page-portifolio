import CardCss from './components/Card.module.css'
import AppCss from './components/App.module.css'
import ImgCss from './components/conteinerAction.module.css'
import professor from './assets/professor-Photoroom.png';
import professorExplic from './assets/professor-explic-Photoroom.png';


export default function App() {

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

        <main className={AppCss.main}>

          <h1 className={CardCss.h1}>Suporte de Domingo</h1>
        <p className={CardCss.p}>A Suporte de Domingo é uma empresa especializada em oferecer soluções práticas e eficientes para quem precisa de atendimento técnico e suporte em momentos críticos, inclusive fora do horário comercial tradicional. Nosso diferencial está na disponibilidade: estamos prontos para atender aos domingos, garantindo que nossos clientes nunca fiquem sem assistência quando mais precisam.

          Com uma equipe qualificada e comprometida, oferecemos suporte em tecnologia, manutenção de sistemas, consultoria e atendimento personalizado. Nosso objetivo é proporcionar tranquilidade e confiança, assegurando que cada demanda seja resolvida com agilidade e excelência.

          Na Suporte de Domingo, acreditamos que o cuidado com o cliente não tem dia nem hora marcada. Por isso, trabalhamos para ser referência em atendimento humanizado e soluções rápidas, sempre priorizando a satisfação e a continuidade dos negócios de nossos parceiros.</p>

          <div className={CardCss.cardBox}>
            <div className={CardCss.cardInner}>
              <div className={CardCss.wapper}>
              <button className={CardCss.btnCard}>
                <img src="/Captura de tela de 2026-03-31 08-34-37.png" id='bgI-santafe' alt="Santa fé" className={CardCss.imgCard}/>
              </button>
              </div>

              <div className={CardCss.wapper}>
              <button className={CardCss.btnCard}>
                <img src="/Captura de tela de 2026-03-31 08-34-50.png" id='bgI-codeTrouble' alt="Code trouble" className={CardCss.imgCard} />
              </button>
              </div>

              <div className={CardCss.wapper}>
              <button className={CardCss.btnCard}>
                <img src="/Captura de tela de 2026-03-31 08-35-03.png" id='bgI-joysGourmet' alt="joy's gourmet" className={CardCss.imgCard} />
              </button>
              </div>

              <div className={CardCss.wapper}>
              <button className={CardCss.btnCard}>
                <img src="/Captura de tela de 2026-03-31 08-35-13.png" id='bgI-cjrSolucoes' alt="CJR Soluções" className={CardCss.imgCard} />
              </button>              
              </div>


            </div>
          </div>

        </main>

    

    </>
  )
}