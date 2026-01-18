import { memo, useCallback, useState } from "react";
import { type ComponentProcessProps } from "components/system/Apps/RenderComponent";
import { useSession } from "contexts/session";
import themes, { type ThemeName } from "styles/themes";
import StyledSettings from "components/apps/Settings/StyledSettings";
import BackgroundSection from "components/apps/Settings/BackgroundSection";

type SettingsSection = "themes" | "background";

const Settings: FC<ComponentProcessProps> = ({ id: _id }) => {
  const { themeName, setThemeName } = useSession();
  const [currentSection, setCurrentSection] =
    useState<SettingsSection>("themes");

  const handleThemeChange = useCallback(
    (newTheme: ThemeName) => {
      setThemeName(newTheme);
    },
    [setThemeName]
  );

  return (
    <StyledSettings>
      <nav className="sidebar">
        <button
          className={currentSection === "themes" ? "active" : ""}
          onClick={() => setCurrentSection("themes")}
          type="button"
        >
          Themes
        </button>
        <button
          className={currentSection === "background" ? "active" : ""}
          onClick={() => setCurrentSection("background")}
          type="button"
        >
          Background
        </button>
      </nav>
      <div className="content">
        {currentSection === "themes" && (
          <section>
            <h1>Themes</h1>
            <p>Choose a theme to customize the appearance of your system.</p>
            <div className="theme-grid">
              {Object.keys(themes).map((themeKey) => {
                const theme = themes[themeKey as ThemeName];
                const isSelected = themeName === themeKey;

                return (
                  <button
                    key={themeKey}
                    className={`theme-option ${isSelected ? "selected" : ""}`}
                    onClick={() => handleThemeChange(themeKey as ThemeName)}
                    title={theme.name}
                    type="button"
                  >
                    <div
                      className="theme-preview"
                      style={{
                        backgroundColor: theme.colors.background,
                        borderColor: theme.colors.window.outline,
                      }}
                    >
                      <div
                        className="theme-window"
                        style={{
                          backgroundColor: theme.colors.window.background,
                          borderColor: theme.colors.window.outline,
                        }}
                      >
                        <div
                          className="theme-titlebar"
                          style={{
                            backgroundColor: theme.colors.titleBar.background,
                            color: theme.colors.titleBar.text,
                          }}
                        />
                        <div
                          className="theme-content"
                          style={{
                            backgroundColor: theme.colors.window.background,
                            color: theme.colors.text,
                          }}
                        />
                      </div>
                    </div>
                    <span className="theme-name">{theme.name}</span>
                  </button>
                );
              })}
            </div>
          </section>
        )}
        {currentSection === "background" && <BackgroundSection />}
      </div>
    </StyledSettings>
  );
};

export default memo(Settings);
