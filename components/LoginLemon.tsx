"use client";

import { FormEvent, useState } from "react";

function SoliMark() {
  return (
    <div className="grid size-11 place-items-center rounded-2xl bg-[#171914] text-[#dfff4f] shadow-[0_10px_25px_rgba(0,0,0,.14)]">
      <svg
        viewBox="0 0 24 24"
        className="size-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          d="M5 5.8 12 3l7 2.8v5.6c0 4.4-2.8 7.4-7 9.6-4.2-2.2-7-5.2-7-9.6V5.8Z"
          strokeLinejoin="round"
        />
        <path
          d="M9 8H7v2M15 8h2v2M9 16H7v-2M15 16h2v-2"
          strokeLinecap="round"
        />
        <rect
          x="10"
          y="10"
          width="4"
          height="4"
          rx="1"
          fill="currentColor"
          stroke="none"
        />
      </svg>
    </div>
  );
}

function InputIcon({ type }: { type: "school" | "user" | "password" }) {
  const paths = {
    school: (
      <>
        <path d="m3 10 9-5 9 5-9 5-9-5Z" />
        <path d="M6 12.2V18h12v-5.8M9 14v4m6-4v4" />
      </>
    ),
    user: (
      <>
        <circle cx="12" cy="8" r="3.5" />
        <path d="M5 20c.7-4 3-6 7-6s6.3 2 7 6" />
      </>
    ),
    password: (
      <>
        <rect x="5" y="10" width="14" height="10" rx="3" />
        <path d="M8.5 10V7.5a3.5 3.5 0 0 1 7 0V10M12 14v2" />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      className="size-[19px]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      {paths[type]}
    </svg>
  );
}

function DynamicSchool({ code }: { code: string }) {
  const initials =
    code
      .replace(/[^a-zA-Z0-9]/g, "")
      .slice(0, 2)
      .toUpperCase() || "SE";

  return (
    <div className="animate-[crest-in_0.3s_ease-out] flex items-center gap-3 rounded-2xl bg-[#f2f5ec] p-3">
      <div className="relative grid size-11 shrink-0 place-items-center overflow-hidden rounded-[14px] bg-[#171914] text-sm font-black text-[#dfff4f]">
        <span className="absolute inset-x-0 top-0 h-1 bg-[#dfff4f]" />
        {initials}
      </div>
      <div className="min-w-0">
        <p className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#77851f]">
          Colegio encontrado
        </p>
        <p className="mt-0.5 truncate text-sm font-extrabold">
          Institución {initials}
        </p>
      </div>
      <span className="ml-auto grid size-6 shrink-0 place-items-center rounded-full bg-[#dfff4f] text-xs font-black">
        ✓
      </span>
    </div>
  );
}

export default function AlternativeLogin() {
  const [schoolCode, setSchoolCode] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#dfff4f] px-4 py-5 text-[#171914] sm:px-7 sm:py-7 lg:p-9">
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:radial-gradient(#000_1.2px,transparent_1.2px)] [background-size:24px_24px]" />
      <div className="pointer-events-none absolute -left-32 top-1/3 size-[420px] rounded-full border-[85px] border-black/[0.035]" />
      <div className="pointer-events-none absolute -right-28 -top-28 size-[380px] rounded-full bg-white/25 blur-3xl" />

      <div className="relative mx-auto flex min-h-[calc(100vh-40px)] max-w-[1400px] flex-col lg:min-h-[calc(100vh-72px)]">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <SoliMark />
            <span className="text-xl font-black tracking-[-0.055em]">
              SoliEdu.
            </span>
          </div>
          <a
            href="/"
            className="rounded-full border border-black/10 bg-white/30 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.1em] backdrop-blur transition hover:bg-white/55"
          >
            Ver diseño anterior
          </a>
        </header>

        <div className="grid flex-1 items-center gap-8 py-8 lg:grid-cols-[1fr_520px] lg:gap-16 lg:py-10 xl:grid-cols-[1fr_560px]">
          <section className="hidden max-w-3xl lg:block">
            <p className="mb-7 flex w-fit items-center gap-2 rounded-full border border-black/10 bg-white/30 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.13em] backdrop-blur">
              <span className="size-2 rounded-full bg-[#171914]" />
              Educación conectada
            </p>
            <h1 className="text-[clamp(4.8rem,7.3vw,8.2rem)] font-black leading-[0.82] tracking-[-0.085em]">
              Llegar.
              <br />
              Escanear.
              <br />
              Aprender.
            </h1>
            <div className="mt-10 flex items-center gap-5">
              <div className="flex -space-x-3">
                {["LM", "AR", "SC"].map((name, index) => (
                  <span
                    key={name}
                    className={`grid size-11 place-items-center rounded-full border-[3px] border-[#dfff4f] text-[10px] font-black text-white ${
                      ["bg-[#171914]", "bg-[#6870aa]", "bg-[#ce694e]"][index]
                    }`}
                  >
                    {name}
                  </span>
                ))}
              </div>
              <p className="text-sm font-bold leading-5">
                Una experiencia simple
                <br />
                <span className="font-medium text-black/50">
                  para toda la comunidad
                </span>
              </p>
            </div>
          </section>

          <section className="relative mx-auto w-full max-w-[540px] lg:max-w-none">
            <div className="absolute -left-8 top-20 hidden -rotate-6 rounded-2xl bg-[#171914] px-4 py-3 text-xs font-bold text-white shadow-2xl xl:block">
              <span className="mr-2 text-[#dfff4f]">●</span>
              Registro en tiempo real
            </div>
            <div className="absolute -right-6 bottom-24 hidden rotate-6 rounded-2xl bg-white px-4 py-3 text-xs font-extrabold shadow-2xl xl:block">
              98% más ágil
            </div>

            <div className="rounded-[30px] border border-white/70 bg-white/95 p-5 shadow-[0_28px_80px_rgba(35,42,12,0.18)] backdrop-blur-xl sm:rounded-[36px] sm:p-8 lg:p-10">
              <div className="mb-7">
                <div className="mb-5 flex items-center justify-between">
                  <div className="grid size-12 place-items-center rounded-2xl bg-[#efffc4]">
                    <svg
                      viewBox="0 0 24 24"
                      className="size-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path d="M4 7V5a1 1 0 0 1 1-1h2M17 4h2a1 1 0 0 1 1 1v2M20 17v2a1 1 0 0 1-1 1h-2M7 20H5a1 1 0 0 1-1-1v-2" />
                      <path d="M8 9h2v2H8zM14 9h2v2h-2zM8 14h2v2H8zM13 14h3v2h-3z" />
                    </svg>
                  </div>
                  <span className="rounded-full bg-[#f1f3ed] px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-[#73776e]">
                    Acceso seguro
                  </span>
                </div>
                <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#748319]">
                  Portal institucional
                </p>
                <h2 className="mt-2 text-3xl font-black tracking-[-0.055em] sm:text-[2.5rem]">
                  Hola, te estábamos esperando.
                </h2>
                <p className="mt-3 text-sm leading-6 text-[#777b72]">
                  Ingresá con los datos asignados por tu colegio.
                </p>
              </div>

              {schoolCode.trim() && (
                <div className="mb-4">
                  <DynamicSchool code={schoolCode} />
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <label className="block">
                  <span className="mb-1.5 block text-xs font-extrabold">
                    Código de colegio
                  </span>
                  <span className="relative block">
                    <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#8d9188]">
                      <InputIcon type="school" />
                    </span>
                    <input
                      type="text"
                      name="schoolCode"
                      required
                      value={schoolCode}
                      onChange={(event) => {
                        setSchoolCode(event.target.value);
                        setSubmitted(false);
                      }}
                      placeholder="Ej. SOLI-2025"
                      className="h-[54px] w-full rounded-2xl border border-[#e0e3db] bg-[#f8f9f5] pl-12 pr-4 text-sm font-bold uppercase outline-none transition placeholder:font-medium placeholder:normal-case placeholder:text-[#aaada6] focus:border-[#96aa29] focus:bg-white focus:ring-4 focus:ring-[#dfff4f]/30"
                    />
                  </span>
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-xs font-extrabold">
                    Nombre de usuario
                  </span>
                  <span className="relative block">
                    <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#8d9188]">
                      <InputIcon type="user" />
                    </span>
                    <input
                      type="text"
                      name="username"
                      autoComplete="username"
                      required
                      placeholder="Ingresá tu usuario"
                      className="h-[54px] w-full rounded-2xl border border-[#e0e3db] bg-[#f8f9f5] pl-12 pr-4 text-sm font-semibold outline-none transition placeholder:font-medium placeholder:text-[#aaada6] focus:border-[#96aa29] focus:bg-white focus:ring-4 focus:ring-[#dfff4f]/30"
                    />
                  </span>
                </label>

                <label className="block">
                  <span className="mb-1.5 flex items-center justify-between text-xs font-extrabold">
                    Contraseña
                    <a
                      href="#recuperar"
                      className="text-[#76851e] hover:underline"
                    >
                      ¿La olvidaste?
                    </a>
                  </span>
                  <span className="relative block">
                    <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#8d9188]">
                      <InputIcon type="password" />
                    </span>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      autoComplete="current-password"
                      required
                      minLength={6}
                      placeholder="Ingresá tu contraseña"
                      className="h-[54px] w-full rounded-2xl border border-[#e0e3db] bg-[#f8f9f5] pl-12 pr-12 text-sm font-semibold outline-none transition placeholder:font-medium placeholder:text-[#aaada6] focus:border-[#96aa29] focus:bg-white focus:ring-4 focus:ring-[#dfff4f]/30"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((value) => !value)}
                      className="absolute right-3 top-1/2 grid size-9 -translate-y-1/2 place-items-center rounded-xl text-[#7b8076] hover:bg-black/5"
                      aria-label={
                        showPassword
                          ? "Ocultar contraseña"
                          : "Mostrar contraseña"
                      }
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="size-[18px]"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      >
                        <path d="M3 12s3.6-7 9-7 9 7 9 7-3.6 7-9 7-9-7-9-7Z" />
                        <circle cx="12" cy="12" r="2.5" />
                        {showPassword && <path d="m4 4 16 16" />}
                      </svg>
                    </button>
                  </span>
                </label>

                <button
                  type="submit"
                  className="group flex h-14 w-full items-center justify-between rounded-2xl bg-[#171914] pl-6 pr-3 text-sm font-extrabold text-white shadow-[0_12px_28px_rgba(23,25,20,.2)] transition hover:-translate-y-0.5 hover:bg-[#282b25]"
                >
                  Ingresar a mi cuenta
                  <span className="grid size-9 place-items-center rounded-xl bg-[#dfff4f] text-lg text-[#171914] transition group-hover:translate-x-0.5">
                    →
                  </span>
                </button>

                {submitted && (
                  <p className="animate-[crest-in_0.3s_ease-out] rounded-xl bg-[#efffc6] px-4 py-3 text-center text-xs font-bold text-[#445200]">
                    Acceso validado. Preparando tu panel.
                  </p>
                )}
              </form>
            </div>

            <p className="mt-5 text-center text-xs font-semibold text-black/55">
              ¿Necesitás ayuda?{" "}
              <a
                href="#soporte"
                className="font-extrabold text-black underline decoration-white decoration-4 underline-offset-4"
              >
                Contactar soporte
              </a>
            </p>
          </section>
        </div>

        <footer className="flex items-center justify-between border-t border-black/10 py-4 text-[10px] font-extrabold uppercase tracking-wider text-black/45">
          <span>© 2025 SoliEdu</span>
          <span>Asistencia simple, educación presente.</span>
        </footer>
      </div>
    </main>
  );
}
