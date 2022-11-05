import locale6c5af57f from '../..\\locales\\de.json'
import locale9ec66352 from '../..\\locales\\en.json'
import locale6c3fbcfd from '../..\\locales\\ru.json'

export const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"},
  REDIRECT_ON_OPTIONS: {"ALL":"all","ROOT":"root","NO_PREFIX":"no prefix"},
}
export const nuxtOptions = {
  isUniversalMode: true,
  trailingSlash: undefined,
}
export const options = {
  vueI18n: {"fallbackLocale":"de","messages":{"en":{"welcome":"Welcome"},"de":{"welcome":"Bienvenue"},"ru":{"welcome":"Bienvenido"}}},
  vueI18nLoader: true,
  locales: [{"code":"de","iso":"de-DE","file":"de.json"},{"code":"en","iso":"en-US","file":"en.json"},{"code":"ru","iso":"ru-RU","file":"ru.json"}],
  defaultLocale: "de",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  sortRoutes: true,
  strategy: "prefix_except_default",
  lazy: false,
  langDir: "C:\\src\\austrian_school_project\\austrian_language_school\\locales\\",
  rootRedirect: null,
  detectBrowserLanguage: {"alwaysRedirect":false,"cookieAge":365,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","redirectOn":"root","useCookie":true},
  differentDomains: false,
  baseUrl: "",
  vuex: {"moduleName":"i18n","syncRouteParams":true},
  parsePages: true,
  pages: {},
  skipSettingLocaleOnNavigate: false,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  normalizedLocales: [{"code":"de","iso":"de-DE","file":"de.json"},{"code":"en","iso":"en-US","file":"en.json"},{"code":"ru","iso":"ru-RU","file":"ru.json"}],
  localeCodes: ["de","en","ru"],
  additionalMessages: [],
}

export const localeMessages = {
  'de.json': () => Promise.resolve(locale6c5af57f),
  'en.json': () => Promise.resolve(locale9ec66352),
  'ru.json': () => Promise.resolve(locale6c3fbcfd),
}
