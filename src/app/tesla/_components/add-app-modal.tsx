"use client";

import { X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

type Draft = { name: string; url: string; domain: string };

type AddAppModalProps = {
  open: boolean;
  onClose: () => void;
  onAdd: (draft: Draft) => void;
};

function deriveDomain(input: string): string {
  if (!input) return "";
  let candidate = input.trim();
  if (!/^https?:\/\//i.test(candidate)) candidate = "https://" + candidate;
  try {
    return new URL(candidate).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

function deriveName(domain: string): string {
  if (!domain) return "";
  const root = domain.split(".")[0] || "";
  return root.charAt(0).toUpperCase() + root.slice(1);
}

const AddAppModal: React.FC<AddAppModalProps> = ({ open, onClose, onAdd }) => {
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
  const [nameTouched, setNameTouched] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setUrl("");
      setName("");
      setNameTouched(false);
      // Focus after the modal mounts
      const t = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (nameTouched) return;
    const domain = deriveDomain(url);
    setName(deriveName(domain));
  }, [url, nameTouched]);

  if (!open) return null;

  const domain = deriveDomain(url);
  const canSubmit = !!url.trim() && !!name.trim() && !!domain;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    let normalized = url.trim();
    if (!/^https?:\/\//i.test(normalized)) normalized = "https://" + normalized;
    onAdd({ name: name.trim(), url: normalized, domain });
  };

  return (
    <div
      className="tesla-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="tesla-modal-title"
    >
      <form
        className="tesla-modal"
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit}
      >
        <div className="tesla-modal__header">
          <h2 id="tesla-modal-title" className="tesla-modal__title">
            Add app
          </h2>
          <button
            type="button"
            className="tesla-modal__close"
            onClick={onClose}
            aria-label="Close"
          >
            <X size={18} strokeWidth={2.2} />
          </button>
        </div>
        <label className="tesla-modal__field">
          <span className="tesla-modal__label">Website</span>
          <input
            ref={inputRef}
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="spotify.com"
            inputMode="url"
            autoComplete="off"
            autoCapitalize="off"
            spellCheck={false}
            className="tesla-modal__input"
          />
        </label>
        <label className="tesla-modal__field">
          <span className="tesla-modal__label">Name</span>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setNameTouched(true);
            }}
            placeholder="Spotify"
            autoComplete="off"
            className="tesla-modal__input"
          />
        </label>
        <div className="tesla-modal__actions">
          <button
            type="button"
            className="tesla-pill"
            data-interactive="true"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="tesla-pill tesla-pill--primary"
            data-interactive="true"
            disabled={!canSubmit}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddAppModal;
