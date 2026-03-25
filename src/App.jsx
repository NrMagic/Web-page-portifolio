import CardCss from './components/Card.module.css'
import AppCss from './components/App.module.css'
import ImgCss from './components/Img.module.css'
export default function App() {
  return (
    <>
      <body>

        <div className={ImgCss.conteinerAction}>
          <img src="" alt="" />
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
              <div className={CardCss.card}>
                <h1 className={CardCss.h1Card}>Projeto Java</h1>
                <p className={CardCss.pCard}>
                  Aplicação desenvolvida em Java, demonstrando conceitos de orientação a objetos,
                  integração com banco de dados e boas práticas de backend.
                </p>
              </div>

              <div className={CardCss.card}>
                <h1 className={CardCss.h1Card}>Projeto C#</h1>
                <p className={CardCss.pCard}>
                  Sistema criado em C# com .NET, explorando APIs REST, Entity Framework e
                  arquitetura limpa para aplicações robustas.
                </p>
              </div>

              <div className={CardCss.card}>
                <h1 className={CardCss.h1Card}>Projeto JavaScript</h1>
                <p className={CardCss.pCard}>
                  Projeto frontend em JavaScript puro, focado em manipulação do DOM,
                  interatividade e boas práticas de programação funcional.
                </p>
              </div>

              <div className={CardCss.card}>
                <h1 className={CardCss.h1Card}>Projeto React</h1>
                <p className={CardCss.pCard}>
                  Aplicação SPA construída com React, utilizando hooks, componentes reutilizáveis
                  e integração com APIs externas.
                </p>
              </div>

              <div className={CardCss.card}>
                <h1 className={CardCss.h1Card}>Projeto Vite</h1>
                <p className={CardCss.pCard}>
                  Projeto moderno com Vite, aproveitando build rápido, hot module replacement
                  e integração com frameworks como React e Vue.
                </p>
              </div>

              
            </div>
          </div>

        </main>

      </body>

    </>
  )
}