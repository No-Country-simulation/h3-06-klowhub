import { useLocale, useMessages, useTranslations } from 'next-intl';

/**
 * `get` functions don't work in Storybook, so we mock them.
 * @see https://github.com/amannn/next-intl/discussions/771#discussioncomment-9587798
 */

export const getLocale = async () => useLocale();
export const getTranslations = async (
  ...args: Parameters<typeof useTranslations>
) => useTranslations(args);
export const getMessages = async () => useMessages();
