import { useNavigate } from "react-router";
import TypeCards from "../../components/Registration/TypeCards";
import LuxuryBackground from "../../components/UI/LuxuryBackground";

export default function TypeSelection() {
  const navigate = useNavigate();

  const handleTypeSelect = (type) => {
    navigate(`/register/${type}`);
  };

  return (
    <>
      <LuxuryBackground />
      <div className="flex min-h-screen flex-col items-center justify-center p-4">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold text-white">
              Join <span className="text-[#825c17]">Vincitore's</span> Elite
              Network
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-white/80">
              Register as a broker or agent to access our exclusive portfolio of
              luxury properties worldwide
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-gradient-to-b from-black/40 to-black/60 p-10 shadow-2xl backdrop-blur-lg">
            <div className="mb-8 text-center">
              <h2 className="mb-2 text-2xl font-semibold text-white">
                Select Your Registration Type
              </h2>
              <p className="text-white/60">
                Choose the category that best describes your professional status
              </p>
            </div>
            <TypeCards onSelect={handleTypeSelect} />

            <div className="mt-10 border-t border-white/10 pt-6 text-center">
              <p className="text-sm text-white/60">
                Need help selecting?{" "}
                <a href="#" className="text-[#825c17] hover:underline">
                  Contact our support team
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
