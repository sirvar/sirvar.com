"use client";

import {
  DndContext,
  PointerSensor,
  TouchSensor,
  closestCenter,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  rectSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Plus } from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";
import AddAppModal from "./add-app-modal";
import AppCard from "./app-card";
import Footer from "./footer";
import Header from "./header";
import IdleClock from "./idle-clock";
import type { AppIconKey } from "./icons";
import { useLocationWeather } from "../_hooks/use-location-weather";
import type { TempUnit } from "../_lib/format";

const THEME_KEY = "tesla-theme";
const MODE_KEY = "tesla-theme-mode";
const APPS_KEY = "tesla-apps";
const CAR_NAME_KEY = "tesla-car-name";
const TEMP_UNIT_KEY = "tesla-temp-unit";
const THEME_ATTR = "data-tesla-theme";
const IDLE_TIMEOUT_MS = 30_000;
const DEFAULT_CAR_NAME = "sircar";

export type DashboardApp = {
  id: string;
  name: string;
  url: string;
  domain: string;
  iconKey?: AppIconKey;
  iconUrl?: string;
};

type Theme = "light" | "dark";
type ThemeMode = "auto" | "manual";

function readSavedMode(): ThemeMode {
  if (typeof window === "undefined") return "auto";
  try {
    return localStorage.getItem(MODE_KEY) === "manual" ? "manual" : "auto";
  } catch {
    return "auto";
  }
}

function readSavedTheme(): Theme | null {
  if (typeof window === "undefined") return null;
  try {
    const v = localStorage.getItem(THEME_KEY);
    if (v === "light" || v === "dark") return v;
  } catch {
    // ignore
  }
  return null;
}

function readPrefersTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  try {
    return window.matchMedia?.("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  } catch {
    return "dark";
  }
}

function autoThemeFromSun(
  sunrise: string | null,
  sunset: string | null,
  fallback: Theme,
): Theme {
  if (!sunrise || !sunset) return fallback;
  const now = Date.now();
  const sr = new Date(sunrise).getTime();
  const ss = new Date(sunset).getTime();
  if (Number.isNaN(sr) || Number.isNaN(ss)) return fallback;
  return now >= sr && now < ss ? "light" : "dark";
}

function isValidApp(value: unknown): value is DashboardApp {
  if (!value || typeof value !== "object") return false;
  const v = value as Record<string, unknown>;
  return (
    typeof v.id === "string" &&
    typeof v.name === "string" &&
    typeof v.url === "string" &&
    typeof v.domain === "string"
  );
}

function readSavedApps(): DashboardApp[] | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(APPS_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return null;
    const valid = parsed.filter(isValidApp);
    return valid;
  } catch {
    return null;
  }
}

function writeSavedApps(apps: DashboardApp[]) {
  try {
    localStorage.setItem(APPS_KEY, JSON.stringify(apps));
  } catch {
    // ignore
  }
}

function makeId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `app_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
}

const SortableItem: React.FC<{
  app: DashboardApp;
  editing: boolean;
  onRemove: (id: string) => void;
}> = ({ app, editing, onRemove }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: app.id, disabled: !editing });

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    zIndex: isDragging ? 5 : undefined,
    cursor: editing ? (isDragging ? "grabbing" : "grab") : undefined,
    touchAction: editing ? "none" : undefined,
  };

  // dnd-kit's `attributes` sets role="button" for keyboard a11y on the drag
  // handle; drop it so we can keep our list semantics intact.
  const { role: _ignoredRole, ...dragAttributes } = attributes;
  void _ignoredRole;

  return (
    <div
      ref={setNodeRef}
      style={style}
      role="listitem"
      {...(editing ? dragAttributes : {})}
      {...(editing ? listeners : {})}
    >
      <AppCard app={app} editing={editing} onRemove={onRemove} />
    </div>
  );
};

const Dashboard: React.FC<{ defaults: DashboardApp[] }> = ({ defaults }) => {
  const { data: locWeather } = useLocationWeather();
  const [mode, setMode] = useState<ThemeMode>("auto");
  const [theme, setTheme] = useState<Theme>("dark");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isIdle, setIsIdle] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [apps, setApps] = useState<DashboardApp[]>(defaults);
  const [isEditing, setIsEditing] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [carName, setCarName] = useState<string>(DEFAULT_CAR_NAME);
  const [tempUnit, setTempUnit] = useState<TempUnit>("celsius");
  const [fullscreenHint, setFullscreenHint] = useState<string | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } }),
    useSensor(TouchSensor, {
      activationConstraint: { delay: 200, tolerance: 8 },
    }),
  );

  // Initial mount: read mode + theme + apps from storage
  useEffect(() => {
    const savedMode = readSavedMode();
    setMode(savedMode);
    if (savedMode === "manual") {
      setTheme(readSavedTheme() ?? readPrefersTheme());
    } else {
      setTheme(readPrefersTheme());
    }
    const savedApps = readSavedApps();
    if (savedApps) setApps(savedApps);
    try {
      const savedName = localStorage.getItem(CAR_NAME_KEY);
      if (savedName && savedName.trim()) setCarName(savedName.trim());
      const savedUnit = localStorage.getItem(TEMP_UNIT_KEY);
      if (savedUnit === "celsius" || savedUnit === "fahrenheit") {
        setTempUnit(savedUnit);
      }
    } catch {
      // ignore
    }
    setMounted(true);
  }, []);

  // Auto mode: recompute theme from sunrise/sunset, every minute
  useEffect(() => {
    if (mode !== "auto") return;
    const update = () =>
      setTheme(
        autoThemeFromSun(
          locWeather.sunrise,
          locWeather.sunset,
          readPrefersTheme(),
        ),
      );
    update();
    const interval = setInterval(update, 60_000);
    return () => clearInterval(interval);
  }, [mode, locWeather.sunrise, locWeather.sunset]);

  // Sync theme to <html> attribute (drives CSS tokens). Skip until mounted
  // so we don't clobber what the no-flash script set during initial paint.
  useEffect(() => {
    if (!mounted) return;
    document.documentElement.setAttribute(THEME_ATTR, theme);
  }, [theme, mounted]);

  // Reflect car name in the browser tab title.
  useEffect(() => {
    if (!mounted) return;
    document.title = `${carName} | Tesla`;
  }, [carName, mounted]);

  // Fullscreen
  useEffect(() => {
    const onChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onChange);
    onChange();
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  // Idle detection — disabled while editing or while the modal is open
  useEffect(() => {
    if (isEditing || showAddModal) {
      setIsIdle(false);
      return;
    }
    let timer: ReturnType<typeof setTimeout> | null = null;
    const reset = () => {
      setIsIdle(false);
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => setIsIdle(true), IDLE_TIMEOUT_MS);
    };
    const events: (keyof WindowEventMap)[] = [
      "mousemove",
      "mousedown",
      "keydown",
      "touchstart",
      "wheel",
    ];
    events.forEach((e) =>
      window.addEventListener(e, reset, {
        passive: true,
      } as AddEventListenerOptions),
    );
    reset();
    return () => {
      events.forEach((e) => window.removeEventListener(e, reset));
      if (timer) clearTimeout(timer);
    };
  }, [isEditing, showAddModal]);

  const toggleTheme = useCallback(() => {
    setMode("manual");
    setTheme((prev) => {
      const next: Theme = prev === "light" ? "dark" : "light";
      try {
        localStorage.setItem(MODE_KEY, "manual");
        localStorage.setItem(THEME_KEY, next);
      } catch {
        // ignore
      }
      return next;
    });
  }, []);

  const toggleFullscreen = useCallback(async () => {
    type LegacyDoc = Document & {
      webkitFullscreenElement?: Element;
      webkitExitFullscreen?: () => Promise<void> | void;
    };
    type LegacyEl = HTMLElement & {
      webkitRequestFullscreen?: () => Promise<void> | void;
    };
    const doc = document as LegacyDoc;
    const root = document.documentElement as LegacyEl;
    const inFullscreen = !!doc.fullscreenElement || !!doc.webkitFullscreenElement;

    try {
      if (inFullscreen) {
        if (doc.exitFullscreen) {
          await doc.exitFullscreen();
        } else if (doc.webkitExitFullscreen) {
          await doc.webkitExitFullscreen();
        }
        return;
      }
      if (root.requestFullscreen) {
        await root.requestFullscreen();
        return;
      }
      if (root.webkitRequestFullscreen) {
        await root.webkitRequestFullscreen();
        return;
      }
      throw new Error("Fullscreen API unavailable");
    } catch {
      // Tesla's in-car browser blocks the Fullscreen API. Surface a hint so the
      // tap doesn't look broken; user can use Tesla Theater mode for true FS.
      setFullscreenHint(
        "Fullscreen blocked by browser. On Tesla, use Theater mode.",
      );
      window.setTimeout(() => setFullscreenHint(null), 4000);
    }
  }, []);

  const toggleEditing = useCallback(() => {
    setIsEditing((v) => !v);
  }, []);

  const handleRemove = useCallback((id: string) => {
    setApps((prev) => {
      const next = prev.filter((a) => a.id !== id);
      writeSavedApps(next);
      return next;
    });
  }, []);

  const handleCarNameChange = useCallback((name: string) => {
    const trimmed = name.trim();
    if (!trimmed) return;
    setCarName(trimmed);
    try {
      localStorage.setItem(CAR_NAME_KEY, trimmed);
    } catch {
      // ignore
    }
  }, []);

  const handleCycleUnit = useCallback(() => {
    setTempUnit((prev) => {
      const next: TempUnit = prev === "celsius" ? "fahrenheit" : "celsius";
      try {
        localStorage.setItem(TEMP_UNIT_KEY, next);
      } catch {
        // ignore
      }
      return next;
    });
  }, []);

  const handleDragEnd = useCallback((event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    setApps((items) => {
      const oldIndex = items.findIndex((i) => i.id === active.id);
      const newIndex = items.findIndex((i) => i.id === over.id);
      if (oldIndex === -1 || newIndex === -1) return items;
      const reordered = arrayMove(items, oldIndex, newIndex);
      writeSavedApps(reordered);
      return reordered;
    });
  }, []);

  const handleAdd = useCallback(
    (draft: { name: string; url: string; domain: string }) => {
      setApps((prev) => {
        const next = [
          ...prev,
          {
            id: makeId(),
            name: draft.name,
            url: draft.url,
            domain: draft.domain,
          },
        ];
        writeSavedApps(next);
        return next;
      });
      setShowAddModal(false);
    },
    [],
  );

  return (
    <div
      data-tesla-root
      data-idle={isIdle ? "true" : "false"}
      className="tesla-root"
    >
      <Header
        data={locWeather}
        carName={carName}
        tempUnit={tempUnit}
        isEditing={isEditing}
        onCarNameChange={handleCarNameChange}
        onCycleUnit={handleCycleUnit}
      />
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={apps.map((a) => a.id)}
          strategy={rectSortingStrategy}
        >
          <div className="tesla-grid" role="list">
            {apps.map((app) => (
              <SortableItem
                key={app.id}
                app={app}
                editing={isEditing}
                onRemove={handleRemove}
              />
            ))}
            {isEditing && (
              <div role="listitem">
                <button
                  type="button"
                  className="tesla-card tesla-card--add"
                  onClick={() => setShowAddModal(true)}
                  aria-label="Add a new app"
                >
                  <span
                    className="tesla-icon-tile tesla-icon-tile--add"
                    aria-hidden
                  >
                    <Plus size={28} strokeWidth={1.8} />
                  </span>
                  <span className="tesla-card--add__text">
                    <h3 className="tesla-card__name">Add app</h3>
                    <p className="tesla-card__domain">Tap to add a shortcut</p>
                  </span>
                </button>
              </div>
            )}
          </div>
        </SortableContext>
      </DndContext>
      <Footer
        theme={theme}
        onToggleTheme={toggleTheme}
        isFullscreen={isFullscreen}
        onToggleFullscreen={toggleFullscreen}
        isEditing={isEditing}
        onToggleEditing={toggleEditing}
      />
      <IdleClock active={isIdle} data={locWeather} tempUnit={tempUnit} />
      <AddAppModal
        open={showAddModal}
        onClose={() => setShowAddModal(false)}
        onAdd={handleAdd}
      />
      {fullscreenHint && (
        <div className="tesla-toast" role="status" aria-live="polite">
          {fullscreenHint}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
