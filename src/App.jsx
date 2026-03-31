import CardCss from './components/Card.module.css'
import AppCss from './components/App.module.css'
import ImgCss from './components/conteinerAction.module.css'
import { useEffect } from 'react';
import { setupBackgroundChange } from './components/BackGorud.js';

export default function App() {
  useEffect(() => {
    setupBackgroundChange();
  }, []);

  return (
    <>


        <div className={ImgCss.conteinerAction}>
          <div className={ImgCss.gif}></div>
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
          <div className={CardCss.cardBox}>
            <div className={CardCss.cardInner}>
              <div className={CardCss.wapper}>
              <button className={CardCss.btnCard}>
                <img src="/public/Captura de tela de 2026-03-31 08-34-37.png" alt="Santa fé" className={CardCss.imgCard}/>
              </button>
              </div>

              <div className={CardCss.wapper}>
              <button className={CardCss.btnCard}>
                <img src="/public/Captura de tela de 2026-03-31 08-34-50.png" alt="Code trouble" className={CardCss.imgCard} />
              </button>
              </div>

              <div className={CardCss.wapper}>
              <button className={CardCss.btnCard}>
                <img src="/public/Captura de tela de 2026-03-31 08-35-03.png" alt="joy's gourmet" className={CardCss.imgCard} />
              </button>
              </div>

              <div className={CardCss.wapper}>
              <button className={CardCss.btnCard}>
                <img src="/public/Captura de tela de 2026-03-31 08-35-13.png" alt="CJR Soluções" className={CardCss.imgCard} />
              </button>

              
              </div>


            </div>
          </div>

        </main>

    

    </>
  )
}