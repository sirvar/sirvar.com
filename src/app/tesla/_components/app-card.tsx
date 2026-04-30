"use client";

import { X } from "lucide-react";
import React from "react";
import { AppIcon, FaviconIcon } from "./icons";
import type { DashboardApp } from "./dashboard";

type AppCardProps = {
  app: DashboardApp;
  editing: boolean;
  onRemove?: (id: string) => void;
};

const Tile: React.FC<{ app: DashboardApp }> = ({ app }) => (
  <span
    className={`tesla-icon-tile${app.iconKey ? "" : " tesla-icon-tile--favicon"}`}
    aria-hidden
  >
    {app.iconKey ? (
      <AppIcon iconKey={app.iconKey} />
    ) : (
      <FaviconIcon domain={app.domain} iconUrl={app.iconUrl} />
    )}
  </span>
);

const AppCard: React.FC<AppCardProps> = ({ app, editing, onRemove }) => {
  const body = (
    <>
      <Tile app={app} />
      <span>
        <h3 className="tesla-card__name">{app.name}</h3>
        <p className="tesla-card__domain">{app.domain}</p>
      </span>
    </>
  );

  if (editing) {
    return (
      <div className="tesla-card tesla-card--editing">
        {body}
        <button
          type="button"
          className="tesla-card__remove"
          onClick={() => onRemove?.(app.id)}
          aria-label={`Remove ${app.name}`}
        >
          <X size={16} strokeWidth={2.4} />
        </button>
      </div>
    );
  }

  return (
    <a href={app.url} className="tesla-card" aria-label={`Open ${app.name}`}>
      {body}
    </a>
  );
};

export default AppCard;
