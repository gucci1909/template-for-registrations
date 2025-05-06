import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      brand: "Vincitore's Elite Network",
      subtitle:
        "Sign up to gain exclusive access to our worldwide luxury property portfolio.",
      selectRegistrationType: "Select Your Registration Type",
      chooseCategory:
        "Choose the category that best describes your professional status",
      needHelp: "Need help selecting?",
      contactSupport: "Contact our support team",
      selectThisType: "Select this type",
      uaeBrokerage: "UAE Brokerage Company",
      internationalBrokerage: "International Brokerage Company",
      uaeIndividual: "UAE Individual Agent",
      internationalIndividual: "International Individual Agent",
      requirements: {
        tradeLicense: "Trade License",
        companyProfile: "Company Profile",
        reraCertificate: "RERA Certificate",
        managerId: "Manager ID",
        businessLicense: "Business License",
        companyWebsite: "Company Website",
        proofOperations: "Proof of Operations",
        repId: "Representative ID/Passport",
        emiratesId: "Emirates ID",
        reraId: "RERA ID",
        profile: "Personal CV/Profile",
        activeListings: "Active Listing References",
        passport: "Passport Copy",
        agentProfile: "Agent Profile/CV",
        proofActivity: "Proof of Real Estate Activity",
      },
      types: {
        "uae-brokerage": {
          title: "UAE Brokerage Company",
          requirements: [
            "Trade License",
            "Company Profile",
            "RERA Certificate",
            "Manager ID",
          ],
        },
        "international-brokerage": {
          title: "International Brokerage Company",
          requirements: [
            "Business License",
            "Company Website",
            "Proof of Operations",
            "Representative ID/Passport",
          ],
        },
        "uae-individual": {
          title: "UAE Individual Agent",
          requirements: [
            "Emirates ID",
            "RERA ID",
            "Personal CV/Profile",
            "Active Listing References",
          ],
        },
        "international-individual": {
          title: "International Individual Agent",
          requirements: [
            "Passport Copy",
            "Agent Profile/CV",
            "Proof of Real Estate Activity",
          ],
        },
        select: "Select this type",
      },
      register: {
        title: "UAE Brokerage Registration",
        steps: {
          companyInfo: {
            title: "Company Information",
            description: "Provide your brokerage company's basic details",
          },
          uploadDocuments: {
            title: "Document Upload",
            description:
              "Upload required documents: Trade License, Company Profile, RERA Certificate",
          },
          managerVerification: {
            title: "Manager Verification",
            description:
              "Verify the identity of the company's authorized manager",
          },
          reviewSubmit: {
            title: "Review & Submit",
            description: "Check your information and submit the application",
          },
        },
        next: "Next",
        previous: "Previous",
        submit: "Submit",
      },
    },
  },
  ar: {
    translation: {
      brand: "شبكة فينتشيتور النخبوية",
      subtitle:
        "سجّل الآن للوصول الحصري إلى مجموعتنا العالمية من العقارات الفاخرة.",
      selectRegistrationType: "اختر نوع التسجيل",
      chooseCategory: "اختر الفئة التي تصف حالتك المهنية بأفضل شكل",
      needHelp: "هل تحتاج إلى مساعدة في الاختيار؟",
      contactSupport: "اتصل بفريق الدعم",
      selectThisType: "اختر هذا النوع",
      uaeBrokerage: "شركة وساطة إماراتية",
      internationalBrokerage: "شركة وساطة دولية",
      uaeIndividual: "وكيل فردي في الإمارات",
      internationalIndividual: "وكيل فردي دولي",
      requirements: {
        tradeLicense: "رخصة تجارية",
        companyProfile: "ملف الشركة",
        reraCertificate: "شهادة ريرا",
        managerId: "هوية المدير",
        businessLicense: "رخصة أعمال",
        companyWebsite: "موقع الشركة",
        proofOperations: "إثبات التشغيل",
        repId: "هوية/جواز سفر الممثل",
        emiratesId: "هوية إماراتية",
        reraId: "معرف ريرا",
        profile: "السيرة الذاتية الشخصية",
        activeListings: "مراجع القوائم النشطة",
        passport: "نسخة جواز السفر",
        agentProfile: "ملف الوكيل/السيرة الذاتية",
        proofActivity: "إثبات نشاط العقارات",
      },
      types: {
        "uae-brokerage": {
          title: "شركة وساطة في الإمارات",
          requirements: [
            "رخصة تجارية",
            "ملف الشركة",
            "شهادة ريرا",
            "هوية المدير",
          ],
        },
        "international-brokerage": {
          title: "شركة وساطة دولية",
          requirements: [
            "رخصة تجارية",
            "موقع الشركة الإلكتروني",
            "إثبات العمليات",
            "هوية/جواز سفر الممثل",
          ],
        },
        "uae-individual": {
          title: "وكيل فردي في الإمارات",
          requirements: [
            "هوية إماراتية",
            "رقم ريرا",
            "السيرة الذاتية/الملف الشخصي",
            "مراجع قوائم نشطة",
          ],
        },
        "international-individual": {
          title: "وكيل فردي دولي",
          requirements: [
            "نسخة جواز السفر",
            "السيرة الذاتية/الملف الشخصي للوكيل",
            "إثبات نشاط عقاري",
          ],
        },
        select: "اختر هذا النوع",
      },
      register: {
        title: "تسجيل وسيط عقاري في الإمارات",
        steps: {
          companyInfo: {
            title: "معلومات الشركة",
            description: "أدخل معلومات أساسية عن شركتك العقارية",
          },
          uploadDocuments: {
            title: "تحميل المستندات",
            description:
              "قم بتحميل المستندات المطلوبة: الرخصة التجارية، ملف الشركة، شهادة ريرا",
          },
          managerVerification: {
            title: "التحقق من المدير",
            description: "قم بالتحقق من هوية المدير المعتمد في الشركة",
          },
          reviewSubmit: {
            title: "مراجعة وإرسال",
            description: "راجع المعلومات وأرسل طلب التسجيل",
          },
        },
        next: "التالي",
        previous: "السابق",
        submit: "إرسال",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
