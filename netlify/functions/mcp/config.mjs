// ─────────────────────────────────────────────────────────────
// Gazette MCP — configuration
// Edit this file to add feeds, change coverage areas, or pull stories.
// ─────────────────────────────────────────────────────────────

// RSS feeds. Paste each masthead's beehiiv RSS URL (Settings → RSS feed in beehiiv,
// or copy them from GARI's gari-scan-background.mjs). Empty feeds are skipped.
// Only rss.beehiiv.com URLs are accepted — anything else is ignored.
export const MASTHEADS = [
  {
    id: "eastern-melburnian",
    name: "The Eastern Melburnian",
    site: "https://www.easternmelburnian.com.au",
    feeds: [{ edition: null, url: "https://rss.beehiiv.com/feeds/v4KqR6IYHV.xml" }],
    areas: ["manningham", "maroondah", "whitehorse", "monash", "knox", "box hill", "doncaster",
      "templestowe", "warrandyte", "wonga park", "donvale", "park orchards", "ringwood", "croydon",
      "heathmont", "glen waverley", "mount waverley", "clayton", "oakleigh", "wantirna",
      "ferntree gully", "boronia", "bayswater", "rowville", "scoresby", "blackburn", "mitcham",
      "nunawading", "vermont", "burwood", "surrey hills", "mont albert", "forest hill", "eastern suburbs"],
  },
  {
    id: "north-shore-lorikeet",
    name: "The North Shore Lorikeet",
    site: "https://www.northshorelorikeet.com.au",
    feeds: [{ edition: null, url: "https://rss.beehiiv.com/feeds/o4BOumGiEp.xml" }],
    areas: ["north shore", "hornsby", "ku-ring-gai", "kuring-gai", "lane cove", "hunters hill",
      "willoughby", "north sydney", "artarmon", "berowra", "chatswood", "crows nest", "gordon",
      "greenwich", "killara", "lindfield", "longueville", "pymble", "roseville", "st ives",
      "st leonards", "turramurra", "wahroonga", "warrawee", "wollstonecraft", "neutral bay",
      "cammeray", "kirribilli", "cremorne", "waverton", "woolwich", "asquith", "waitara"],
  },
  {
    id: "west-vic-brolga",
    name: "The West Vic Brolga",
    site: "",
    // One feed found. If Ballarat and Wannon are separate beehiiv publications, add the second.
    feeds: [{ edition: null, url: "https://rss.beehiiv.com/feeds/rWU61eTKgk.xml" }],
    // CHECK: coverage list drafted, not confirmed.
    areas: ["ballarat", "sebastopol", "wendouree", "buninyong", "creswick", "wannon", "warrnambool",
      "hamilton", "portland", "port fairy", "camperdown", "terang", "mortlake", "glenelg",
      "moyne", "southern grampians", "corangamite", "western victoria", "west vic"],
  },
  {
    id: "gippsland-monitor",
    name: "The Gippsland Monitor",
    site: "https://www.gippslandmonitor.com.au",
    feeds: [{ edition: null, url: "https://rss.beehiiv.com/feeds/GfknAGg8bz.xml" }],
    areas: ["gippsland", "south gippsland", "east gippsland", "latrobe", "traralgon", "morwell", "moe", "churchill", "warragul", "drouin",
      "baw baw", "sale", "wellington", "bairnsdale", "lakes entrance", "leongatha", "wonthaggi",
      "bass coast", "phillip island", "inverloch", "korumburra"],
  },
  {
    id: "mid-north-coaster",
    name: "The Mid North Coaster",
    site: "https://www.themidnorthcoaster.com.au",
    feeds: [{ edition: null, url: "https://rss.beehiiv.com/feeds/yTW1DMWzXw.xml" }],
    areas: ["mid north coast", "coffs harbour", "bellingen", "nambucca", "kempsey", "port macquarie",
      "hastings", "mid coast", "taree", "forster", "tuncurry", "gloucester", "wauchope", "laurieton",
      "sawtell", "woolgoolga", "dorrigo", "macksville", "south west rocks"],
  },
  {
    id: "moreton-bay-bugle",
    name: "The Moreton Bay Bugle",
    site: "",
    feeds: [{ edition: null, url: "https://rss.beehiiv.com/feeds/PDwlmFJa8j.xml" }],
    areas: ["moreton bay", "redcliffe", "caboolture", "strathpine", "north lakes", "petrie",
      "kallangur", "albany creek", "bribie island", "deception bay", "burpengary", "narangba",
      "morayfield", "mango hill", "scarborough"],
  },
  {
    id: "national-account",
    name: "National Account",
    site: "",
    feeds: [{ edition: null, url: "" }],
    areas: [], // national — not matched by area
  },
];

// ── Takedowns ────────────────────────────────────────────────
// Add the full story URL (or the /p/slug part) here and redeploy.
// The story stops being served immediately, everywhere, even if it's still in RSS.
export const BLOCKED = [
  // "https://www.northshorelorikeet.com.au/p/example-story",
];

// How long feeds are cached in memory before re-fetching (minutes).
export const CACHE_MINUTES = 10;

// Max excerpt length served to AI assistants (characters).
export const EXCERPT_CHARS = 320;

// Official URLs — shown in server info so assistants and readers can verify.
export const OFFICIAL = {
  server: "https://gazette-mcp.netlify.app/mcp",
  info: "https://gazette-mcp.netlify.app",
  publisher: "Gazette (gazettenews.au)",
};
