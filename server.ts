import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import Parser from 'rss-parser';

async function startServer() {
  const app = express();
  const PORT = 3000;
  const parser = new Parser();

  // API Route for RSS
  app.get("/api/rss", async (req, res) => {
    try {
      const feeds = [
        { url: 'https://feeds.bbci.co.uk/news/business/rss.xml', category: 'Business' },
        { url: 'https://feeds.bbci.co.uk/news/technology/rss.xml', category: 'Technology' },
        { url: 'https://oilprice.com/rss/main', category: 'Energy' },
        { url: 'https://feeds.feedburner.com/TheHackersNews', category: 'Cybersecurity' }
      ];

      const feedPromises = feeds.map(async (f) => {
        try {
          const fetched = await parser.parseURL(f.url);
          return fetched.items.map(item => ({
            title: item.title,
            link: item.link,
            pubDate: item.pubDate,
            contentSnippet: item.contentSnippet,
            category: f.category
          }));
        } catch (e) {
          console.error(`Failed to fetch ${f.category} feed:`, e);
          return [];
        }
      });

      const results = await Promise.all(feedPromises);
      const allItems = results.flat();
      
      // Sort by date (newest first)
      allItems.sort((a, b) => {
        const dateA = a.pubDate ? new Date(a.pubDate).getTime() : 0;
        const dateB = b.pubDate ? new Date(b.pubDate).getTime() : 0;
        return dateB - dateA;
      });

      // Return top 6 items for a balanced layout
      res.json({ items: allItems.slice(0, 6) });
    } catch (error) {
      console.error('Error fetching RSS:', error);
      res.status(500).json({ error: 'Failed to fetch RSS feeds' });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
