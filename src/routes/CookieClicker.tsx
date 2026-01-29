import React, { useState, useEffect } from "react";
import { TrophyIcon } from "lucide-react";

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
  .award-overlay {
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.85);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.4s ease-out;
}

.award-modal {
  background: #1e293b;
  padding: 3rem;
  border-radius: 2rem;
  border: 2px solid #fbbf24;
  text-align: center;
  position: relative;
  max-width: 400px;
  box-shadow: 0 0 50px rgba(251, 191, 36, 0.3);
}

.award-trophy {
  color: #fbbf24;
  margin-bottom: 1.5rem;
  filter: drop-shadow(0 0 10px rgba(251, 191, 36, 0.6));
  animation: pulse 2s infinite;
}

.award-title {
  color: #fbbf24;
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.claim-button {
  margin-top: 2rem;
  padding: 0.8rem 2rem;
  border-radius: 999px;
  background: #fbbf24;
  color: #0f172a;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: transform 0.2s;
}

.claim-button:hover { transform: scale(1.05); }

@keyframes fadeIn { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
@keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.1); } }

`;

const SecretCookie: React.FC = () => {
 // 1. Initialize state from localStorage (or defaults)
const [cookies, setCookies] = useState<number>(() => {
  const saved = localStorage.getItem("cookie_count");
  return saved ? JSON.parse(saved) : 0;
});

const [cookiesPerClick, setCookiesPerClick] = useState<number>(() => {
  const saved = localStorage.getItem("cookies_per_click");
  return saved ? JSON.parse(saved) : 1;
});

const [autoClickers, setAutoClickers] = useState<number>(() => {
  const saved = localStorage.getItem("auto_clickers");
  return saved ? JSON.parse(saved) : 0;
});

// 2. Save to localStorage whenever values change
useEffect(() => {
  localStorage.setItem("cookie_count", JSON.stringify(cookies));
  localStorage.setItem("cookies_per_click", JSON.stringify(cookiesPerClick));
  localStorage.setItem("auto_clickers", JSON.stringify(autoClickers));
}, [cookies, cookiesPerClick, autoClickers]);


  const upgradeClickCost = 25 * cookiesPerClick;
  const autoClickerCost = 50 * (autoClickers + 1);

  useEffect(() => {
    // Expose a global "cheat" function
    (window as any).setCookies = (amount: number) => {
      setCookies(amount);
      console.log(`✅ Cookies set to ${amount.toLocaleString()}`);
    };
  
    console.log("🛠 Debug: Use 'setCookies(number)' in the console to test.");
  }, []);

  const [hasShownAward, setHasShownAward] = useState(false);
  const [showAward, setShowAward] = useState(false);

  useEffect(() => {
    if (cookies >= 1000000 && !hasShownAward) {
      setShowAward(true);
      setHasShownAward(true);
    }
  }, [cookies, hasShownAward]);


  const achievement = () => {
    return (
      <div className="award">
        <TrophyIcon />
        <h1>You Have Surpassed 1,000,000</h1>
      </div>
    )
  }

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
    if (cookies >= 1000000) {
      achievement();
    }
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
      {showAward && (
        <div className="award-overlay">
          <div className="award-modal">
            <div className="award-glow"></div>
            <TrophyIcon className="award-trophy" size={64} />
            <h2 className="award-title">The Jordan Award</h2>
            <p className="award-text">
             You have made 1,000,000 cookies great job
            </p>
            <button className="claim-button" onClick={() => setShowAward(false)}>
              Keep Going
            </button>
          </div>
        </div>
      )}

        <div className="cookie-card">
        <h1>Cookie Clicker</h1>

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