import { gameItems, creatures, resources } from "@/lib/data";

export const dynamic = "force-static";

const baseUrl = "https://lightnofirewiki.com";

const blogPosts = [
  { slug: "everything-we-know", title: "Everything We Know About Light No Fire", date: "2025-05-20" },
  { slug: "light-no-fire-vs-no-mans-sky", title: "Light No Fire vs No Man's Sky", date: "2025-05-18" },
  { slug: "light-no-fire-map-size", title: "How Big Is Light No Fire Map?", date: "2025-05-15" },
  { slug: "light-no-fire-release-date", title: "Light No Fire Release Date & Speculation", date: "2025-05-10" },
  { slug: "top-5-dragons", title: "Top 5 Dragons We Want to See", date: "2025-05-05" },
];

export async function GET() {
  const itemsXml = gameItems
    .map(
      (item) => `
    <item>
      <title>${escapeXml(item.name)}</title>
      <link>${baseUrl}/items/${item.slug}</link>
      <guid>${baseUrl}/items/${item.slug}</guid>
      <description>${escapeXml(item.description)}</description>
    </item>`
    )
    .join("");

  const creatureXml = creatures
    .map(
      (c) => `
    <item>
      <title>${escapeXml(c.name)}</title>
      <link>${baseUrl}/creatures/${c.slug}</link>
      <guid>${baseUrl}/creatures/${c.slug}</guid>
      <description>${escapeXml(c.description)}</description>
    </item>`
    )
    .join("");

  const resourceXml = resources
    .map(
      (r) => `
    <item>
      <title>${escapeXml(r.name)}</title>
      <link>${baseUrl}/resources/${r.slug}</link>
      <guid>${baseUrl}/resources/${r.slug}</guid>
      <description>${escapeXml(r.description)}</description>
    </item>`
    )
    .join("");

  const blogXml = blogPosts
    .map(
      (post) => `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${baseUrl}/blog/${post.slug}</link>
      <guid>${baseUrl}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    </item>`
    )
    .join("");

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>Light No Fire Wiki</title>
    <link>${baseUrl}</link>
    <description>Latest updates from the Light No Fire wiki, database, and blog.</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${blogXml}
    ${itemsXml}
    ${creatureXml}
    ${resourceXml}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
