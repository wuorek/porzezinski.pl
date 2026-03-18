"use client";

import React, { useState } from "react";

const variants = [
  {
    id: 1,
    name: "Ciepły Industrialny",
    desc: "Beż + ciemny brąz + terrakota",
    colors: {
      "--v-bg": "#F5EDE0",
      "--v-bg-dark": "#2E1A0E",
      "--v-text": "#2E1A0E",
      "--v-text-inv": "#F5EDE0",
      "--v-accent": "#C8442A",
      "--v-accent-text": "#F5EDE0",
      "--v-muted": "#9C7B65",
      "--v-border": "#2E1A0E",
      "--v-surface": "#EAD9C4",
    },
  },
  {
    id: 2,
    name: "Luksusowy Nocny",
    desc: "Głęboka czerń + złoto",
    colors: {
      "--v-bg": "#111111",
      "--v-bg-dark": "#1C1C1C",
      "--v-text": "#E8E2D4",
      "--v-text-inv": "#111111",
      "--v-accent": "#C9A84C",
      "--v-accent-text": "#111111",
      "--v-muted": "#888888",
      "--v-border": "#C9A84C",
      "--v-surface": "#1C1C1C",
    },
  },
  {
    id: 3,
    name: "Morski Profesjonalny",
    desc: "Granat + biel + bursztyn",
    colors: {
      "--v-bg": "#F8FAFC",
      "--v-bg-dark": "#0F2952",
      "--v-text": "#0F2952",
      "--v-text-inv": "#F8FAFC",
      "--v-accent": "#E07B00",
      "--v-accent-text": "#F8FAFC",
      "--v-muted": "#5A7A9E",
      "--v-border": "#0F2952",
      "--v-surface": "#EDF2F7",
    },
  },
  {
    id: 4,
    name: "Leśny",
    desc: "Ciemna zieleń + krem + miedź",
    colors: {
      "--v-bg": "#F1F5EF",
      "--v-bg-dark": "#1A3325",
      "--v-text": "#1A3325",
      "--v-text-inv": "#F1F5EF",
      "--v-accent": "#B5622A",
      "--v-accent-text": "#F1F5EF",
      "--v-muted": "#6B8C78",
      "--v-border": "#1A3325",
      "--v-surface": "#E3EDE0",
    },
  },
];

export default function Propozycje() {
  const [active, setActive] = useState(0);
  const v = variants[active];

  const cssVars = Object.entries(v.colors).reduce(
    (acc, [k, val]) => ({ ...acc, [k]: val }),
    {}
  ) as React.CSSProperties;

  return (
    <div style={cssVars}>
      {/* VARIANT SWITCHER */}
      <div
        style={{
          position: "fixed",
          bottom: "1.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 9999,
          display: "flex",
          gap: "0.5rem",
          background: "rgba(0,0,0,0.85)",
          padding: "0.75rem 1rem",
          borderRadius: "999px",
          backdropFilter: "blur(8px)",
        }}
      >
        {variants.map((variant, idx) => (
          <button
            key={variant.id}
            onClick={() => setActive(idx)}
            style={{
              padding: "0.5rem 1rem",
              borderRadius: "999px",
              border: "none",
              cursor: "pointer",
              fontSize: "0.8rem",
              fontWeight: "bold",
              fontFamily: "monospace",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              background: active === idx ? "#fff" : "rgba(255,255,255,0.15)",
              color: active === idx ? "#000" : "#fff",
              transition: "all 0.2s",
              whiteSpace: "nowrap",
            }}
          >
            {variant.id}. {variant.name}
          </button>
        ))}
      </div>

      <main
        style={{
          minHeight: "100vh",
          fontFamily: "sans-serif",
          backgroundColor: "var(--v-bg)",
          color: "var(--v-text)",
          transition: "all 0.4s ease",
        }}
      >
        {/* HEADER */}
        <header
          style={{
            position: "fixed",
            top: 0,
            width: "100%",
            zIndex: 40,
            borderBottom: "3px solid var(--v-border)",
            backgroundColor: "var(--v-bg)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1rem 2rem",
          }}
        >
          <div
            style={{
              fontFamily: "monospace",
              fontWeight: "bold",
              fontSize: "1.25rem",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "var(--v-text)",
            }}
          >
            NIKOS DAWID
            <br />
            PORZEZIŃSKI
          </div>
          <a
            href="#kontakt"
            style={{
              fontFamily: "monospace",
              fontWeight: "bold",
              fontSize: "0.9rem",
              backgroundColor: "var(--v-bg-dark)",
              color: "var(--v-text-inv)",
              padding: "0.75rem 1.5rem",
              border: "3px solid var(--v-border)",
              boxShadow: "4px 4px 0 var(--v-border)",
              textDecoration: "none",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              transition: "all 0.2s",
            }}
          >
            Wyceń projekt
          </a>
        </header>

        {/* HERO */}
        <section
          style={{
            paddingTop: "10rem",
            paddingBottom: "5rem",
            paddingLeft: "2rem",
            paddingRight: "2rem",
            borderBottom: "3px solid var(--v-border)",
            minHeight: "85vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            position: "relative",
            overflow: "hidden",
            background: `linear-gradient(to bottom, var(--v-bg) 0%, var(--v-surface) 100%)`,
          }}
        >
          {/* Decorative large number */}
          <div
            style={{
              position: "absolute",
              top: "5rem",
              right: "-2rem",
              fontSize: "clamp(8rem, 25vw, 20rem)",
              fontWeight: "900",
              fontFamily: "monospace",
              color: "var(--v-border)",
              opacity: 0.05,
              lineHeight: 1,
              pointerEvents: "none",
              userSelect: "none",
            }}
          >
            #1
          </div>

          <div style={{ maxWidth: "90vw", position: "relative", zIndex: 10 }}>
            <h1
              style={{
                fontSize: "clamp(3rem, 10vw, 8rem)",
                fontFamily: "monospace",
                fontWeight: "900",
                textTransform: "uppercase",
                lineHeight: 0.9,
                marginBottom: "2rem",
                letterSpacing: "-0.03em",
                color: "var(--v-text)",
              }}
            >
              Budujemy
              <br />
              <span
                style={{
                  color: "var(--v-accent)",
                  textShadow: `3px 3px 0 var(--v-border)`,
                }}
              >
                Twardo.
              </span>
              <br />
              Remontujemy
              <br />
              Solidnie.
            </h1>

            <div
              style={{
                display: "flex",
                gap: "3rem",
                alignItems: "flex-end",
                borderTop: "3px solid var(--v-border)",
                paddingTop: "1.5rem",
                marginTop: "2rem",
                flexWrap: "wrap",
              }}
            >
              <p
                style={{
                  fontSize: "1.2rem",
                  maxWidth: "28rem",
                  fontWeight: 500,
                  color: "var(--v-text)",
                  lineHeight: 1.5,
                }}
              >
                Surowe podejście do jakości. Prace remontowo-budowlane na
                terenie Siemiatycz i okolic. Żadnych kompromisów, tylko trwałe
                rozwiązania.
              </p>
              <div
                style={{
                  fontSize: "0.8rem",
                  fontFamily: "monospace",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  fontWeight: "bold",
                  borderLeft: `3px solid var(--v-accent)`,
                  paddingLeft: "1rem",
                  paddingBlock: "0.5rem",
                  color: "var(--v-text)",
                }}
              >
                Licencja / 2024
                <br />
                Woj. Podlaskie
              </div>
            </div>
          </div>
        </section>

        {/* TICKER */}
        <div
          style={{
            borderBottom: "3px solid var(--v-border)",
            overflow: "hidden",
            backgroundColor: "var(--v-accent)",
            padding: "1rem 0",
            whiteSpace: "nowrap",
            display: "flex",
          }}
        >
          {[0, 1].map((n) => (
            <div
              key={n}
              aria-hidden={n === 1}
              style={{
                display: "inline-flex",
                whiteSpace: "nowrap",
                flexShrink: 0,
                animation: "marquee 20s linear infinite",
                fontFamily: "monospace",
                fontWeight: "bold",
                fontSize: "clamp(1.2rem, 3vw, 2rem)",
                textTransform: "uppercase",
                color: "var(--v-accent-text)",
                gap: "1rem",
              }}
            >
              {[
                "ELEWACJE",
                "WYKOŃCZENIA",
                "ZABUDOWA KG",
                "STANY SUROWE",
                "DOCIEPLENIA",
                "REMONTY KAPITALNE",
              ].map((item) => (
                <span key={item} style={{ marginInline: "1rem" }}>
                  {item} ·
                </span>
              ))}
            </div>
          ))}
        </div>

        {/* SERVICES */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            borderBottom: "3px solid var(--v-border)",
          }}
        >
          <div
            style={{
              backgroundColor: "var(--v-bg-dark)",
              color: "var(--v-text-inv)",
              padding: "3rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              borderRight: "3px solid var(--v-border)",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontFamily: "monospace",
                fontWeight: "900",
                textTransform: "uppercase",
                letterSpacing: "-0.02em",
                marginBottom: "2rem",
                lineHeight: 1,
              }}
            >
              KOMPETENCJE
            </h2>
            <p style={{ fontSize: "1.1rem", opacity: 0.8, lineHeight: 1.6 }}>
              Specjalizujemy się w ciężkich pracach budowlanych i precyzyjnych
              wykończeniach. Realizujemy zlecenia od fundamentów aż po klucz.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "var(--v-bg)",
            }}
          >
            {[
              {
                id: "01",
                title: "Elewacje i Docieplenia",
                desc: "Kompleksowe systemy ociepleń. Trwałe fasady odporne na warunki atmosferyczne.",
              },
              {
                id: "02",
                title: "Wykończenia Wnętrz",
                desc: "Szpachlowanie, malowanie, układanie glazury i terakoty.",
              },
              {
                id: "03",
                title: "Zabudowa K-G",
                desc: "Sufity podwieszane, ścianki działowe, konstrukcje z płyt gipsowo-kartonowych.",
              },
              {
                id: "04",
                title: "Prace Ogólnobudowlane",
                desc: "Murowanie, wylewki, drobne wyburzenia i przygotowanie pod inwestycje.",
              },
            ].map((service, idx) => (
              <article
                key={service.id}
                style={{
                  padding: "2rem 2.5rem",
                  display: "flex",
                  gap: "2rem",
                  alignItems: "flex-start",
                  borderBottom:
                    idx < 3 ? "3px solid var(--v-border)" : "none",
                  cursor: "default",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "var(--v-accent)";
                  (e.currentTarget as HTMLElement).style.color =
                    "var(--v-accent-text)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "transparent";
                  (e.currentTarget as HTMLElement).style.color =
                    "var(--v-text)";
                }}
              >
                <span
                  style={{
                    fontFamily: "monospace",
                    fontWeight: "bold",
                    fontSize: "2rem",
                    color: "var(--v-muted)",
                    flexShrink: 0,
                  }}
                >
                  {service.id}
                </span>
                <div>
                  <h3
                    style={{
                      fontFamily: "monospace",
                      fontSize: "1.4rem",
                      fontWeight: "bold",
                      marginBottom: "0.5rem",
                      textTransform: "uppercase",
                    }}
                  >
                    {service.title}
                  </h3>
                  <p style={{ fontSize: "1rem", lineHeight: 1.5 }}>
                    {service.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section
          style={{
            padding: "clamp(3rem, 8vw, 7rem) 2rem",
            borderBottom: "3px solid var(--v-border)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "4rem",
            backgroundColor: "var(--v-surface)",
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontFamily: "monospace",
                fontWeight: "900",
                textTransform: "uppercase",
                letterSpacing: "-0.02em",
                marginBottom: "3rem",
                lineHeight: 1,
                color: "var(--v-text)",
              }}
            >
              PROCES
              <br />
              BAZOWY
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              {[
                {
                  step: "Wycena",
                  text: "Przyjeżdżamy, oceniamy, liczymy. Bez owijania w bawełnę. Zawsze darmowo.",
                },
                {
                  step: "Harmonogram",
                  text: "Ustalamy termin i się go trzymamy. Czas to fundament w branży.",
                },
                {
                  step: "Realizacja",
                  text: "Wchodzimy i robimy swoje. Porządek na budowie i jakość w wykonaniu.",
                },
              ].map((p, i) => (
                <div
                  key={i}
                  style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start" }}
                >
                  <div
                    style={{
                      width: "3rem",
                      height: "3rem",
                      backgroundColor: "var(--v-bg-dark)",
                      color: "var(--v-text-inv)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "monospace",
                      fontWeight: "bold",
                      fontSize: "1.2rem",
                      border: "3px solid var(--v-border)",
                      flexShrink: 0,
                    }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <h4
                      style={{
                        fontFamily: "monospace",
                        fontWeight: "bold",
                        fontSize: "1.1rem",
                        marginBottom: "0.4rem",
                        textTransform: "uppercase",
                        color: "var(--v-text)",
                      }}
                    >
                      {p.step}
                    </h4>
                    <p style={{ fontSize: "1rem", lineHeight: 1.5, color: "var(--v-text)" }}>
                      {p.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div
              style={{
                backgroundColor: "var(--v-bg-dark)",
                padding: "3rem",
                color: "var(--v-text-inv)",
                border: "3px solid var(--v-border)",
                boxShadow: "8px 8px 0 var(--v-border)",
                transform: "rotate(-1deg)",
              }}
            >
              <h3
                style={{
                  fontFamily: "monospace",
                  fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                  fontWeight: "900",
                  textTransform: "uppercase",
                  marginBottom: "1.5rem",
                  color: "var(--v-accent)",
                }}
              >
                Dlaczego my?
              </h3>
              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: 1.6,
                  marginBottom: "1rem",
                }}
              >
                W Siemiatyczach i okolicach wyrobiliśmy sobie markę ciężką
                pracą, a nie marketingiem. Dla nas słowo jest droższe od umowy.
              </p>
              <p style={{ fontSize: "1.1rem", lineHeight: 1.6 }}>
                Nie boimy się trudnych projektów. Gdzie inni mówią „się nie
                da", my wjeżdżamy ze sprzętem.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="kontakt"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            borderBottom: "3px solid var(--v-border)",
            minHeight: "60vh",
          }}
        >
          <div
            style={{
              backgroundColor: "var(--v-bg-dark)",
              color: "var(--v-text-inv)",
              padding: "4rem 2rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                fontSize: "clamp(5rem, 20vw, 15rem)",
                fontFamily: "monospace",
                fontWeight: "900",
                opacity: 0.05,
                lineHeight: 1,
                pointerEvents: "none",
                userSelect: "none",
                color: "var(--v-text-inv)",
              }}
            >
              KON
              <br />
              TAK
              <br />T
            </div>

            <div style={{ position: "relative", zIndex: 10 }}>
              <h2
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  fontFamily: "monospace",
                  fontWeight: "900",
                  textTransform: "uppercase",
                  color: "var(--v-accent)",
                  marginBottom: "1.5rem",
                  lineHeight: 1,
                }}
              >
                SKONTAKTUJ
                <br />
                SIĘ
              </h2>
              <p style={{ fontSize: "1.1rem", marginBottom: "3rem", maxWidth: "24rem", lineHeight: 1.5 }}>
                Gotowy na remont bez stresu? Zadzwoń lub napisz.
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "2rem",
                  fontFamily: "monospace",
                }}
              >
                <a
                  href="tel:+48500000000"
                  style={{
                    textDecoration: "none",
                    color: "var(--v-text-inv)",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.75rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: "var(--v-muted)",
                      display: "block",
                      marginBottom: "0.25rem",
                    }}
                  >
                    TELEFON
                  </span>
                  <span style={{ fontSize: "clamp(1.2rem, 3vw, 2rem)", fontWeight: "bold" }}>
                    +48 500 000 000
                  </span>
                </a>
                <div>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: "var(--v-muted)",
                      display: "block",
                      marginBottom: "0.25rem",
                    }}
                  >
                    OBSZAR DZIAŁANIA
                  </span>
                  <span style={{ fontSize: "clamp(1.2rem, 3vw, 2rem)", fontWeight: "bold" }}>
                    SIEMIATYCZE I OKOLICE
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "var(--v-bg)",
              color: "var(--v-text)",
              padding: "4rem 2rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              borderLeft: "3px solid var(--v-border)",
            }}
          >
            <form
              style={{
                width: "100%",
                maxWidth: "32rem",
                margin: "0 auto",
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <h3
                style={{
                  fontFamily: "monospace",
                  fontWeight: "bold",
                  fontSize: "1.75rem",
                  textTransform: "uppercase",
                  borderBottom: "3px solid var(--v-border)",
                  paddingBottom: "1rem",
                  marginBottom: "0.5rem",
                }}
              >
                Szybka wiadomość
              </h3>

              {[
                { id: "name", label: "Imię i nazwisko / Firma", type: "text", placeholder: "Jan Kowalski" },
                { id: "phone", label: "Telefon", type: "tel", placeholder: "+48 ..." },
              ].map((field) => (
                <div key={field.id} style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <label
                    htmlFor={field.id}
                    style={{
                      fontFamily: "monospace",
                      fontWeight: "bold",
                      fontSize: "0.75rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    id={field.id}
                    placeholder={field.placeholder}
                    style={{
                      background: "transparent",
                      border: "3px solid var(--v-border)",
                      padding: "1rem",
                      fontFamily: "sans-serif",
                      outline: "none",
                      color: "var(--v-text)",
                      fontSize: "1rem",
                    }}
                  />
                </div>
              ))}

              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <label
                  htmlFor="msg"
                  style={{
                    fontFamily: "monospace",
                    fontWeight: "bold",
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  Zakres prac
                </label>
                <textarea
                  id="msg"
                  rows={4}
                  placeholder="Opisz krótko, co jest do zrobienia..."
                  style={{
                    background: "transparent",
                    border: "3px solid var(--v-border)",
                    padding: "1rem",
                    fontFamily: "sans-serif",
                    outline: "none",
                    color: "var(--v-text)",
                    resize: "none",
                    fontSize: "1rem",
                  }}
                />
              </div>

              <button
                type="button"
                style={{
                  backgroundColor: "var(--v-bg-dark)",
                  color: "var(--v-text-inv)",
                  fontFamily: "monospace",
                  fontWeight: "bold",
                  fontSize: "1.1rem",
                  padding: "1.25rem",
                  border: "3px solid var(--v-border)",
                  boxShadow: "6px 6px 0 var(--v-border)",
                  cursor: "pointer",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  transition: "all 0.2s",
                }}
              >
                Wyślij Zapytanie
              </button>
            </form>
          </div>
        </section>

        {/* FOOTER */}
        <footer
          style={{
            backgroundColor: "var(--v-surface)",
            padding: "2rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
            fontFamily: "monospace",
            fontWeight: "bold",
            fontSize: "0.8rem",
            textTransform: "uppercase",
            color: "var(--v-text)",
            borderTop: "3px solid var(--v-border)",
          }}
        >
          <div>
            © {new Date().getFullYear()} USŁUGI REMONTOWO-BUDOWLANE NIKOS DAWID PORZEZIŃSKI
          </div>
          <div style={{ color: "var(--v-muted)" }}>
            NIP: XX-XXX-XX-XXX | REGON: XXXXXXXX
          </div>
        </footer>

        {/* Variant label badge */}
        <div
          style={{
            position: "fixed",
            top: "5rem",
            right: "1rem",
            backgroundColor: "var(--v-accent)",
            color: "var(--v-accent-text)",
            padding: "0.5rem 1rem",
            fontFamily: "monospace",
            fontWeight: "bold",
            fontSize: "0.75rem",
            textTransform: "uppercase",
            border: "3px solid var(--v-border)",
            boxShadow: "4px 4px 0 var(--v-border)",
            zIndex: 50,
            letterSpacing: "0.05em",
          }}
        >
          Wariant {v.id}: {v.name}
          <br />
          <span style={{ opacity: 0.8, fontWeight: "normal" }}>{v.desc}</span>
        </div>
      </main>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
}
