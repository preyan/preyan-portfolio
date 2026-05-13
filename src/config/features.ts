/**
 * Section-level feature flags.
 *
 * Each flag can be overridden at build time via environment variable:
 *   FEATURE_SHOW_PROJECTS=false pnpm build
 *
 * In production builds, all env vars are unset and defaults apply.
 */

const parseFlag = (envValue: string | undefined, defaultValue: boolean): boolean => {
  if (envValue === undefined || envValue === '') return defaultValue;
  return envValue.toLowerCase() === 'true' || envValue === '1';
};

export const features = {
  /** PROJECTS nav tile + /projects routes. Override: FEATURE_SHOW_PROJECTS */
  showProjects: parseFlag(import.meta.env.FEATURE_SHOW_PROJECTS as string | undefined, true),

  /** BLOG nav tile + /blog routes + /feed.xml. Override: FEATURE_SHOW_BLOG */
  showBlog: parseFlag(import.meta.env.FEATURE_SHOW_BLOG as string | undefined, true),

  /** DOWNLOAD RESUME button in hub hero. Override: FEATURE_SHOW_RESUME_DOWNLOAD */
  showResumeDownload: parseFlag(
    import.meta.env.FEATURE_SHOW_RESUME_DOWNLOAD as string | undefined,
    true,
  ),

  /** AVAILABLE stamp on hero. Toggle off when not actively looking. Override: FEATURE_SHOW_AVAILABLE_STAMP */
  showAvailableStamp: parseFlag(
    import.meta.env.FEATURE_SHOW_AVAILABLE_STAMP as string | undefined,
    true,
  ),

  /** CONTACT nav tile + /contact route. Override: FEATURE_SHOW_CONTACT */
  showContact: parseFlag(import.meta.env.FEATURE_SHOW_CONTACT as string | undefined, true),
} as const;

export type FeatureFlag = keyof typeof features;
