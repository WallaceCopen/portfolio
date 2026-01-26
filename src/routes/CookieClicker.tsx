import React, { useState, useEffect } from "react";

const embeddedStyles = `
html, body, #root {
  min-height: auto !important;
  height: auto !important;
  padding: 0 !important;
  margin: 0 !important;
}
.secret-cookie-page {
  min-height: calc(100vh - 5rem);  /* fill screen minus navbar height */
  padding-top: 5rem;               /* space for navbar */
  padding-bottom: 0;
  background: radial-gradient(circle at top, #fef3c7, #0f172a);
  display: flex;
  justify-content: center;
  align-items: center;             /* vertically center the card in remaining space */
}

.cookie-card {
  max-width: 500px;
  width: 100%;
  padding: 2rem;
  border-radius: 1.5rem;
  background: rgba(15, 23, 42, 0.9);
  backdrop-filter: blur(16px);
  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.6);
  text-align: center;
  color: #e5e7eb;
  margin: 0 auto; /* center the card without flex */
}

.cookie-card h1 {
  margin-bottom: 1rem;
  font-size: 1.75rem;
}

.cookie-count span {
  font-size: 1.8rem;
  font-weight: 700;
}

.cookie-stats {
  margin-bottom: 1.5rem;
  opacity: 0.8;
}

.big-cookie {
  font-size: 3rem;
  border-radius: 999px;
  border: none;
  padding: 1.2rem 1.5rem;
  cursor: pointer;
  background: radial-gradient(circle, #f97316, #b45309);
  box-shadow: 0 10px 25px rgba(248, 150, 30, 0.7);
  transition: transform 0.1s ease, box-shadow 0.1s ease, transform 0.1s ease;
}

.big-cookie:active {
  transform: scale(0.92);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.7);
}

.shop {
  margin-top: 1.8rem;
  display: grid;
  gap: 0.75rem;
}

.shop-button {
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 184, 0.6);
  padding: 0.6rem 1rem;
  background: rgba(15, 23, 42, 0.9);
  color: #e5e7eb;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background 0.15s ease, transform 0.1s ease, opacity 0.15s ease;
}

.shop-button:hover:not(:disabled) {
  background: rgba(30, 64, 175, 0.9);
  transform: translateY(-1px);
}

.shop-button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.hint {
  margin-top: 1.5rem;
  font-size: 0.75rem;
  opacity: 0.7;
}

.external-link {
  margin-top: 1rem;
  font-size: 0.8rem;
  opacity: 0.8;
  text-decoration: underline;
  cursor: pointer;
}
`;

const SecretCookie: React.FC = () => {
  const [cookies, setCookies] = useState<number>(0);
  const [cookiesPerClick, setCookiesPerClick] = useState<number>(1);
  const [autoClickers, setAutoClickers] = useState<number>(0);

  const upgradeClickCost = 25 * cookiesPerClick;
  const autoClickerCost = 50 * (autoClickers + 1);

  // Auto-clicker logic
  useEffect(() => {
    if (autoClickers <= 0) return;

    const interval = setInterval(() => {
      setCookies((prev) => prev + autoClickers);
    }, 1000);

    return () => clearInterval(interval);
  }, [autoClickers]);

  const handleCookieClick = () => {
    setCookies((prev) => prev + cookiesPerClick);
  };

  const buyClickUpgrade = () => {
    if (cookies >= upgradeClickCost) {
      setCookies((prev) => prev - upgradeClickCost);
      setCookiesPerClick((prev) => prev + 1);
    }
  };

  const buyAutoClicker = () => {
    if (cookies >= autoClickerCost) {
      setCookies((prev) => prev - autoClickerCost);
      setAutoClickers((prev) => prev + 1);
    }
  };

  const openOfficial = () => {
    window.open("https://orteil.dashnet.org/cookieclicker/", "_blank");
  };

  return (
    <>
      <style>{embeddedStyles}</style>
      <div className="secret-cookie-page">
        <div className="cookie-card">
        <h1>🍪 Secret Cookie Lab</h1>

        <p className="cookie-count">
          Cookies: <span>{cookies}</span>
        </p>

        <p className="cookie-stats">
          <span>Per Click: {cookiesPerClick}</span> •{" "}
          <span>Auto Clickers: {autoClickers}</span>
        </p>

        <button
          className="big-cookie"
          onClick={handleCookieClick}
          aria-label="Click the cookie"
        >
          🍪
        </button>

        <div className="shop">
          <button
            className="shop-button"
            disabled={cookies < upgradeClickCost}
            onClick={buyClickUpgrade}
          >
            Upgrade Click (+1 / click) — Cost: {upgradeClickCost}
          </button>

          <button
            className="shop-button"
            disabled={cookies < autoClickerCost}
            onClick={buyAutoClicker}
          >
            Buy Auto-Clicker (+1 / sec) — Cost: {autoClickerCost}
          </button>

    
        </div>

        <p className="hint">For Sawyer and other Cookie People</p>

        <p className="external-link" onClick={openOfficial}>
          Or open the official Cookie Clicker in a new tab →
        </p>
        </div>
      </div>
    </>
  );
};

export default SecretCookie;