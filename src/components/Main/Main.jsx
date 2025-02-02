import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    Input,
  } = useContext(Context);
  return (
    <div className="main">
      <div className="nav">
        <p>Luna</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Fellas.</span>
              </p>
              <p>How Can I Help You Today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest a nice spot to hangout</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Summarize urban design concept</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>Explain me what is cloud?</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>Tell me about ReactJS</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
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
              value={Input}
              type="text"
              placeholder="Enter a prompt here"
            />
            <img src={assets.gallery_icon} alt="" />
            <img src={assets.mic_icon} alt="" />
            <img onClick={() => onSent()} src={assets.send_icon} alt="" />
          </div>
          <p className="bottom-info">
            Luna can make mistakes. Check important info.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
