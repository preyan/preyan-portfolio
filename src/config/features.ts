/**
 * Section-level feature flags.
 *
 * Use these to hide entire sections or routes during WIP work.
 * Item-level visibility (individual blog posts, projects) is handled via
 * frontmatter fields in the content collections — not here.
 *
 * Changes here are build-time and require a redeploy.
 */
export const features = {
  /** PROJECTS nav tile + /projects routes. */
  showProjects: true,

  /** BLOG nav tile + /blog routes + /feed.xml. */
  showBlog: true,

  /** DOWNLOAD RESUME button in hub hero. */
  showResumeDownload: true,

  /** AVAILABLE stamp on hero. Toggle off when not actively looking. */
  showAvailableStamp: true,
} as const;

export type FeatureFlag = keyof typeof features;
