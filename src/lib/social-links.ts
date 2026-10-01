const allowedHosts = {
  facebook: new Set(["facebook.com", "www.facebook.com", "m.facebook.com"]),
  instagram: new Set(["instagram.com", "www.instagram.com"]),
  linkedin: new Set(["linkedin.com", "www.linkedin.com"]),
  youtube: new Set(["youtube.com", "www.youtube.com", "youtu.be"]),
};

function profileUrl(value: string | undefined, hosts: ReadonlySet<string>): string | undefined {
  if (!value?.trim()) return undefined;
  try {
    const url = new URL(value);
    if (url.protocol !== "https:" || !hosts.has(url.hostname) || url.pathname === "/") return undefined;
    return url.toString();
  } catch {
    return undefined;
  }
}

export const socialProfileUrls = {
  facebook: profileUrl(import.meta.env.VITE_SOCIAL_FACEBOOK_URL, allowedHosts.facebook),
  instagram: profileUrl(
    import.meta.env.VITE_SOCIAL_INSTAGRAM_URL || 'https://www.instagram.com/aptechlearningwhitefield/',
    allowedHosts.instagram,
  ),
  linkedin: profileUrl(import.meta.env.VITE_SOCIAL_LINKEDIN_URL, allowedHosts.linkedin),
  youtube: profileUrl(import.meta.env.VITE_SOCIAL_YOUTUBE_URL, allowedHosts.youtube),
};

export const socialProfileList = Object.values(socialProfileUrls).filter(
  (url): url is string => Boolean(url),
);
