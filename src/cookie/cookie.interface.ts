import { LanguageEnum } from '../language'

/**
 * Defines the structure of a cookie object.
 *
 * @interface
 */
export interface ICookie {
  /**
   * The value of the "ltoken" cookie.
   */
  ltoken: string

  /**
   * The value of the "ltuid" cookie.
   */
  ltuid: number

  /**
   * The value of the "cookieTokenV2" cookie.
   * CookieTokenV2 has a short expiration time and, so far, cannot be refreshed, so it is best to avoid using methods that rely on CookieTokenV2.
   */
  cookieTokenV2?: string | null

  /**
   * The value of the "accountId" cookie, if it exists.
   */
  accountId?: number

  /**
   * The value of the "mi18nLang" cookie, if it exists.
   * This can be either a string or a LanguageEnum value.
   */
  mi18nLang?: LanguageEnum | string | null
}
