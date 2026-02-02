import React, { useState, useEffect } from "react";
import { TrophyIcon, LogIn, type LucideIcon } from "lucide-react";

/* =======================
   TYPES & CONFIG
======================= */
type GameState = {
  cookies: number;
  cookiesPerClick: number;
  autoClickers: number;
  hasPressedEnter: boolean;
};

type Achievement = {
  id: string;
  title: string;
  description: string;
  color: string;
  icon: LucideIcon;
  condition: (state: GameState) => boolean;
};

const ACHIEVEMENTS: Achievement[] = [
  {
    id: "millionaire",
    title: "The Jordan Award",
    description: "You have made 1,000,000 cookies.",
    color: "#fbbf24",
    icon: TrophyIcon,
    condition: (state) => state.cookies >= 1_000_000,
  },
  {
    id: "richer",
    title: "The Spencer Award",
    description: "Almost to a million.",
    color: "#C0C0C0",
    icon: TrophyIcon,
    condition: (state) => state.cookies >= 100_000,
  },
  {
    id:"automation",
    title:"The Automation Award",
    description:"You have a lot of auto clickers.",
    condition: (state) => state.autoClickers >= 70,
    color: "#CD7F32",
    icon: TrophyIcon,
  },
  {
    id: "enterkey",
    title:"The Ian Award",
    description: "Good job finding the enter key",
    condition: (state) => state.hasPressedEnter === true,
    color: "#6366f1",
    icon: LogIn,
  }
 
];

/* =======================
   STYLES
======================= */
const embeddedStyles = `
html, body, #root {
  margin: 0;
  padding: 0;
}

.secret-cookie-page {
  min-height: calc(100vh - 5rem);
  padding-top: 5rem;
  background: radial-gradient(circle at top, #fef3c7, #0f172a);
  display: flex;
  justify-content: center;
  align-items: center;
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
}

.big-cookie {
  font-size: 3rem;
  border-radius: 999px;
  border: none;
  padding: 1.2rem 1.5rem;
  cursor: pointer;
  background: radial-gradient(circle, #f97316, #b45309);
  box-shadow: 0 10px 25px rgba(248, 150, 30, 0.7);
}

.shop {
  margin-top: 1.5rem;
  display: grid;
  gap: 0.75rem;
}

.shop-button {
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 184, 0.6);
  padding: 0.6rem 1rem;
  background: rgba(15, 23, 42, 0.9);
  color: #e5e7eb;
}

.shop-button:disabled {
  opacity: 0.4;
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
  border: 2px solid;
  text-align: center;
  position: relative;
  max-width: 400px;
  box-shadow: 0 0 50px rgba(251, 191, 36, 0.3);
}

.award-trophy {
  margin-bottom: 1.5rem;
  filter: drop-shadow(0 0 10px rgba(251, 191, 36, 0.6));
  animation: pulse 2s infinite;
}

.award-title {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.claim-button {
  margin-top: 2rem;
  padding: 0.8rem 2rem;
  border-radius: 999px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: transform 0.2s;
}

.claim-button:hover {
  transform: scale(1.05);
}

@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

.view-achievements {
  margin-top: 1.25rem;
  border-radius: 999px;
  border: 1px solid rgba(251, 191, 36, 0.4);
  background: none;
  color: #fbbf24;
  padding: 0.6rem 1.2rem;
  cursor: pointer;
}

.achievements-panel {
  margin-top: 1rem;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.35);
  border-radius: 1rem;
  max-height: 220px;
  overflow-y: auto;
  text-align: left;
}

.achievement-row {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.achievement-row.locked {
  opacity: 0.3;
  filter: grayscale(1);
}

.reset-button {
  margin-top: 1rem;
  width: 100%;
  border-radius: 8px;
  border: 1px solid #ef4444;
  background: none;
  color: #ef4444;
  padding: 0.5rem;
  cursor: pointer;
  font-size: 0.75rem;
}

.big-cookie:active {
  transform: scale(0.92);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.7);
}

.shop-button {
  transition: transform 0.08s ease, box-shadow 0.08s ease, opacity 0.15s ease;
}

.shop-button:active:not(:disabled) {
  transform: translateY(1px) scale(0.98);
}

.view-achievements {
  transition: transform 0.08s ease, opacity 0.15s ease;
}

.view-achievements:active {
  transform: translateY(1px) scale(0.97);
}

.reset-button:active {
  transform: scale(0.96);
}
`;

/* =======================
   COMPONENT
======================= */
const CookieClicker: React.FC = () => {
  /* --- Game State --- */
  const [cookies, setCookies] = useState<number>(() => Number(localStorage.getItem("cookies")) || 0);
  const [cookiesPerClick, setCookiesPerClick] = useState<number>(() => Number(localStorage.getItem("cookiesPerClick")) || 1);
  const [autoClickers, setAutoClickers] = useState<number>(() => Number(localStorage.getItem("autoClickers")) || 0);

  const [hasPressedEnter, sethasPressedEnter ] = useState(false);

  /* --- Achievements --- */
  const [unlockedAchievements, setUnlockedAchievements] = useState<string[]>(() => {
    const saved = localStorage.getItem("unlocked_achievements");
    return saved ? JSON.parse(saved) : [];
  });

  const [activeAchievement, setActiveAchievement] = useState<Achievement | null>(null);

  const [showAchievements, setShowAchievements] = useState(false);

  /* --- Persistence --- */
  useEffect(() => {
    localStorage.setItem("cookies", cookies.toString());
    localStorage.setItem("cookiesPerClick", cookiesPerClick.toString());
    localStorage.setItem("autoClickers", autoClickers.toString());
    localStorage.setItem("unlocked_achievements", JSON.stringify(unlockedAchievements));
  }, [cookies, cookiesPerClick, autoClickers, unlockedAchievements]);

  /* --- Achievement Engine --- */
  useEffect(() => {
    const state: GameState = { cookies, cookiesPerClick, autoClickers, hasPressedEnter };

    const achievement = ACHIEVEMENTS.find(
      (a) => a.condition(state) && !unlockedAchievements.includes(a.id)
    );

    if (achievement) {
      setActiveAchievement(achievement);
      setUnlockedAchievements((prev) => [...prev, achievement.id]);
    }
  }, [cookies, cookiesPerClick, autoClickers, unlockedAchievements, hasPressedEnter]);

  // --- Debug Console Command ---
  useEffect(() => {
    (window as any).setCookies = (amount: number) => {
      if (typeof amount !== "number" || Number.isNaN(amount)) {
        console.warn("setCookies(amount) expects a number");
        return;
      }

      setCookies(Math.max(0, Math.floor(amount)));
      console.log(`🍪 Cookies set to ${amount.toLocaleString()}`);
    };

    return () => {
      delete (window as any).setCookies;
    };
  }, []);

  /* --- Auto Clickers --- */
  useEffect(() => {
    if (autoClickers <= 0) return;
    const interval = setInterval(() => {
      setCookies((c) => c + autoClickers);
    }, 1000);
    return () => clearInterval(interval);
  }, [autoClickers]);

  /* --- Costs --- */
  const upgradeClickCost = 25 * cookiesPerClick;
  const autoClickerCost = 50 * (autoClickers + 1);

  const handleReset = () => {
    if (!window.confirm("This will reset all cookies, upgrades, and achievements. Continue?")) return;

    localStorage.clear();
    setCookies(0);
    setCookiesPerClick(1);
    setAutoClickers(0);
    setUnlockedAchievements([]);
    setActiveAchievement(null);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key ===  "Enter") {
        sethasPressedEnter(true)
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);
  

    
  return (
    <>
      <style>{embeddedStyles}</style>

      {activeAchievement && (
        <div className="award-overlay">
          <div
            className="award-modal"
            style={{ borderColor: activeAchievement.color }}
          >
            <activeAchievement.icon
              className="award-trophy"
              size={64}
              strokeWidth={2.2}
              style={{ color: activeAchievement.color }}
            />

            <h2
              className="award-title"
              style={{ color: activeAchievement.color }}
            >
              {activeAchievement.title}
            </h2>

            <p>{activeAchievement.description}</p>

            <button
              className="claim-button"
              style={{ background: activeAchievement.color, color: "#0f172a" }}
              onClick={() => setActiveAchievement(null)}
            >
              Keep Going
            </button>
          </div>
        </div>
      )}

      <div className="secret-cookie-page">
        <div className="cookie-card">
          <h1>Cookie Clicker</h1>
          <p>Cookies: <strong>{cookies.toLocaleString()}</strong></p>
          <p>Per Click: {cookiesPerClick} • Auto Clickers: {autoClickers}</p>

          <button
            className="big-cookie"
            onClick={() => setCookies((c) => c + cookiesPerClick)}
          >
            🍪
          </button>

          <div className="shop">
            <button
              className="shop-button"
              disabled={cookies < upgradeClickCost}
              onClick={() => {
                setCookies((c) => c - upgradeClickCost);
                setCookiesPerClick((p) => p + 1);
              }}
            >
              Upgrade Click — Cost: {upgradeClickCost}
            </button>

            <button
              className="shop-button"
              disabled={cookies < autoClickerCost}
              onClick={() => {
                setCookies((c) => c - autoClickerCost);
                setAutoClickers((a) => a + 1);
              }}
            >
              Buy Auto-Clicker — Cost: {autoClickerCost}
            </button>
          </div>

          <button
            className="view-achievements"
            onClick={() => setShowAchievements((v) => !v)}
          >
            {showAchievements ? "Hide Achievements ▲" : "View Achievements ▼"}
          </button>

          {showAchievements && (
            <div className="achievements-panel">
              {ACHIEVEMENTS.map((a) => {
                const unlocked = unlockedAchievements.includes(a.id);
                return (
                  <div
                    key={a.id}
                    className={`achievement-row ${unlocked ? "" : "locked"}`}
                  >
                    <div
                      style={{
                        color: unlocked ? a.color : "#666",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {unlocked ? <a.icon size={32} strokeWidth={2.2} /> : "🔒"}
                    </div>
                    <div>
                      <strong>{a.title}</strong>
                      <p style={{ fontSize: "0.75rem", opacity: 0.8 }}>
                        {unlocked ? a.description : "Locked achievement"}
                      </p>
                    </div>
                  </div>
                );
              })}

              <button className="reset-button" onClick={handleReset}>
                Reset Game
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CookieClicker;