"use client";

import { Check, Maximize, Minimize, Moon, Pencil, Sun } from "lucide-react";
import React from "react";
import Pill from "./pill";

type FooterProps = {
  theme: "light" | "dark";
  onToggleTheme: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  isEditing: boolean;
  onToggleEditing: () => void;
};

const Footer: React.FC<FooterProps> = ({
  theme,
  onToggleTheme,
  isFullscreen,
  onToggleFullscreen,
  isEditing,
  onToggleEditing,
}) => {
  const ThemeIcon = theme === "light" ? Moon : Sun;
  const themeLabel = theme === "light" ? "Dark" : "Light";
  const FsIcon = isFullscreen ? Minimize : Maximize;
  const fsLabel = isFullscreen ? "Exit" : "Fullscreen";
  const EditIcon = isEditing ? Check : Pencil;
  const editLabel = isEditing ? "Done" : "Edit";

  return (
    <footer className="tesla-row" role="contentinfo">
      <span aria-hidden />
      <div className="tesla-row__group">
        <Pill
          icon={<EditIcon size={16} strokeWidth={2} />}
          onClick={onToggleEditing}
          ariaLabel={isEditing ? "Finish editing" : "Edit apps"}
        >
          {editLabel}
        </Pill>
        <Pill
          icon={<ThemeIcon size={16} strokeWidth={2} />}
          onClick={onToggleTheme}
          ariaLabel={`Switch to ${themeLabel.toLowerCase()} theme`}
        >
          {themeLabel}
        </Pill>
        <Pill
          icon={<FsIcon size={16} strokeWidth={2} />}
          onClick={onToggleFullscreen}
          ariaLabel={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
        >
          {fsLabel}
        </Pill>
      </div>
    </footer>
  );
};

export default Footer;
