import { useNavigate } from "react-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import TypeCards from "../../components/registration/TypeCard";

export default function TypeSelection() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [lang, setLang] = useState(i18n.language || "en");

  const handleTypeSelect = (type) => {
    navigate(`/register/${type}`);
  };

  const handleLanguageToggle = () => {
    const newLang = lang === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    setLang(newLang);
    document.body.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  return (
    <>
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src="/111239-690770604.mp4"
        ></video>
        {/* Adjusted overlay: lighter black and more blur */}
        <div className="absolute inset-0 z-10 bg-black/40"></div>
      </div>

      <div className="relative z-20 flex min-h-screen flex-col items-center justify-center p-4">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mb-4 flex items-center justify-between">
            <img
              src="/logo-3-removebg-preview.png"
              alt="Logo"
              className="h-12"
            />
            <div className="mb-6 flex items-center justify-end gap-2">
              <label className="relative inline-flex cursor-pointer items-center">
                <input
                  type="checkbox"
                  className="peer sr-only"
                  checked={lang === "ar"}
                  onChange={handleLanguageToggle}
                />
                <div className="peer h-6 w-11 rounded-full bg-gray-300 transition-all peer-checked:bg-blue-600">
                  <div
                    className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-md transition-all duration-300 ${
                      lang === "ar" ? "right-0.5" : "left-0.5"
                    }`}
                  ></div>
                </div>
              </label>
              <span className="text-sm font-medium text-white">
                {lang === "ar" ? "العربية" : "English"}
              </span>
            </div>
          </div>

          <div className="mb-10 text-center">
            <h1 className="text-3xl font-extrabold text-white">
              {t("brand", "Join ")}
              <span className="text-[#825c17]"></span>
            </h1>
            <p className="mt-2 text-lg text-white/80">
              {t(
                "subtitle",
                "Register as a broker or agent to access our exclusive portfolio of luxury properties worldwide",
              )}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
            <div className="mb-6 text-center">
              <h2 className="text-2xl font-bold text-white">
                {t("selectTitle", "Select Your Registration Type")}
              </h2>
              <p className="text-white/60">
                {t(
                  "selectSubtitle",
                  "Choose the category that best describes your professional status",
                )}
              </p>
            </div>

            <TypeCards onSelect={handleTypeSelect} />

            <div className="mt-10 border-t border-white/10 pt-4 text-center">
              <p className="text-sm text-white/60">
                {t("helpText", "Need help selecting?")}{" "}
                <a href="#" className="text-[#825c17] hover:underline">
                  {t("contactSupport", "Contact our support team")}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
