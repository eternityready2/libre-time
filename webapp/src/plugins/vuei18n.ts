import { createI18n } from "vue-i18n";

import csCZ from "../locale/cs_CZ.json";
import deAT from "../locale/de_AT.json";
import deDE from "../locale/de_DE.json";
import elGR from "../locale/el_GR.json";
import enCA from "../locale/en_CA.json";
import enGB from "../locale/en_GB.json";
import enUS from "../locale/en_US.json";
import esES from "../locale/es_ES.json";
import frFR from "../locale/fr_FR.json";
import hrHR from "../locale/hr_HR.json";
import huHU from "../locale/hu_HU.json";
import itIT from "../locale/it_IT.json";
import jaJP from "../locale/ja_JP.json";
import koKR from "../locale/ko_KR.json";
import nlNL from "../locale/nl_NL.json";
import plPL from "../locale/nl_NL.json";
import ptBR from "../locale/pt_BR.json";
import ruRU from "../locale/ru_RU.json";
import srRS from "../locale/sr_RS.json";
import trTR from "../locale/tr_TR.json";
import ukUA from "../locale/uk_UA.json";
import zhCN from "../locale/zh_CN.json";

const i18n = createI18n({
    legacy: false,
    locale: "en_US",
    fallbackLocale: "en_US",
    messages: {
        csCZ,
        deAT,
        deDE,
        elGR,
        enCA,
        enGB,
        enUS,
        esES,
        frFR,
        hrHR,
        huHU,
        itIT,
        jaJP,
        koKR,
        nlNL,
        plPL,
        ptBR,
        ruRU,
        srRS,
        trTR,
        ukUA,
        zhCN,
    },
});

export default i18n;
