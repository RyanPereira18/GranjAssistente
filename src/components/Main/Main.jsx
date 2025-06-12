import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Main = () => {
  const {
    onSent,
    onSentApi,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  const handleCardClick = (text) => {
    setInput(text);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSentApi();
    }
  };

  return (
    <div className="main">
      <div className="nav">
        <p>Assistente da Granja</p>
        <img src={assets.user_icon} alt="" />
      </div>

      <div className="main-container">
        <div className="greet">
          <p>
            <span>Olá produtor!</span>
          </p>
          <p>Como posso ajudar sua granja hoje?</p>
        </div>

        {!showResult ? (
          <>
            <div className="cards">
              <div className="card" onClick={() => handleCardClick("Como melhorar a produção de ovos?")}>
                <p>Produção de ovos</p>
                <img src={assets.egg_icon} alt="Produção de ovos" />
              </div>
              <div className="card" onClick={() => handleCardClick("Melhores práticas para criação de frangos")}>
                <p>Criação de frangos</p>
                <img src={assets.chicken_icon} alt="Criação de frangos" />
              </div>
              <div className="card" onClick={() => handleCardClick("Cuidados com a produção de leite")}>
                <p>Produção de leite</p>
                <img src={assets.cow_icon} alt="Produção de leite" />
              </div>
              <div className="card" onClick={() => handleCardClick("Quais hortaliças posso cultivar na granja?")}>
                <p>Hortaliças na granja</p>
                <img src={assets.vegetables_icon} alt="Hortaliças" />
              </div>
              <div className="card" onClick={() => handleCardClick("Como utilizar o esterco como adubo?")}>
                <p>Uso do esterco</p>
                <img src={assets.fertilizer_icon} alt="Adubo" />
              </div>
              <div className="card" onClick={() => handleCardClick("Como vender os produtos da granja?")}>
                <p>Comercialização</p>
                <img src={assets.cart_icon} alt="Comercialização" />
              </div>
              <div className="card" onClick={() => handleCardClick("Como armazenar grãos e rações?")}>
                <p>Armazenamento</p>
                <img src={assets.storage_icon} alt="Armazenamento" />
              </div>
              <div className="card" onClick={() => handleCardClick("Cuidados com a sanidade animal")}>
                <p>Sanidade animal</p>
                <img src={assets.syringe_icon} alt="Sanidade animal" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.dummy_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.user_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              value={input}
              type="text"
              placeholder="Digite sua dúvida sobre a granja aqui"
            />
            <div>
              <img onClick={() => onSentApi()} src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">
            Este assistente utiliza dados técnicos e orientações agrícolas. Verifique sempre com profissionais da área antes de aplicar qualquer mudança na granja.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
