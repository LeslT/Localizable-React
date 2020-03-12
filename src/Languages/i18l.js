import i18n from "i18next";
import initReactI18next  from "i18next-browser-languagedetector";

i18n.init({

    resources: {
        en: {
            translation: {
                Edit: "Edit",
                Save: "and save to reload."
            }

        },
        es: {
            translation: {
                Edit: "Editar",
                Save: "y guarde para recargar la página"
            }

        }
    },
    interpolation: { escapeValue: false },  // React already does escaping
    lng: 'en',     
})

export default i18n;