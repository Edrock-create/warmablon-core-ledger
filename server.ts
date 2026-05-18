import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  const apiKey = process.env.GEMINI_API_KEY;
  const genAI = new GoogleGenAI({ 
    apiKey: apiKey || '',
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });

  // API Route for Letter Generation with Source Alignment
  app.post("/api/letter", async (req, res) => {
    try {
      const { prompt } = req.body;

      if (!apiKey) {
        return res.status(500).json({ 
          error: "SOURCE_RESONANCE_FAILURE: GEMINI_API_KEY not detected.",
          status: "OFFLINE" 
        });
      }

      const systemPrompt = `
        You are Liswaniso Edgar Mulenga, a visionary technical architect from Zambia.
        Write a professional application letter/cover letter based on the following input.
        
        IDENTITY CONTEXT:
        - Born 2001, Solwezi.
        - NRC: 372907/82/1.
        - Skills: 15+ Programming languages (Rust, Python, Go, etc.), AI Agent Hubs, Cyber Security.
        - Experience: ShopRite, Entrepreneurship (Katemba, Liquor), Hospitality, Digital Ops.
        - Tone: Professional yet visionary, deeply technical but culturally aware.
        
        CONSTRAINTS:
        - DO NOT use markdown characters like *, #, or quotes.
        - The letter must start with a proper formal header (Address, Date).
        - Use Address: PO Box 920038, Mongu, Zambia.
        - Sign as: Liswaniso Edgar Mulenga.
        - THE OUTPUT MUST BE PLAIN TEXT ONLY. NO SYMBOLS. NO BULLET POINTS WITH ASTERISKS.
      `;

      const result = await genAI.models.generateContent({
        model: "gemini-1.5-flash-latest",
        contents: systemPrompt + "\n\n" + prompt
      });
      
      const responseText = result.text;

      // Basic cleanup of characters
      const cleanText = responseText.replace(/[*#"`]/g, '');

      res.json({ letter: cleanText });
    } catch (error) {
      console.error("AI Error:", error);
      res.status(500).json({ error: "Failed to generate letter logic." });
    }
  });

  // API Route for LinkedIn Profile Optimization
  app.post("/api/linkedin", async (req, res) => {
    try {
      const { prompt } = req.body;

      if (!apiKey) {
        return res.status(500).json({ 
          error: "SOURCE_RESONANCE_FAILURE: API key missing.",
        });
      }

      const systemPrompt = `
        You are Liswaniso Edgar Mulenga, a visionary technical architect.
        Optimize a LinkedIn profile section based on the input.
        
        IDENTITY CONTEXT:
        - Name: Liswaniso Edgar Mulenga.
        - Role: Lead Cyber-AI Security Architect / Full-Stack Systems Engineer.
        - Core Tech: Rust, Python, Go, TypeScript, AI Agents, Blockchain, Cyber Security.
        - Experience: Industrial Logistics (ShopRite), Entrepreneurship (Retail/Liquor), Digital Documentation, Hospitality.
        - Tone: Visionary, technically precise, authoritative but collaborative.
        
        GOAL:
        - Generate professional, keyword-rich, and high-impact LinkedIn content.
        - Sections to handle: Headline, About (Summary), and Experience descriptions.
        
        CONSTRAINTS:
        - DO NOT use markdown symbols (*, #, etc.).
        - Use professional spacing and structure.
        - THE OUTPUT MUST BE PLAIN TEXT ONLY.
      `;

      const result = await genAI.models.generateContent({
        model: "gemini-1.5-flash-latest",
        contents: systemPrompt + "\n\n" + prompt
      });
      const responseText = result.text;
      const cleanText = responseText.replace(/[*#"`]/g, '');

      res.json({ content: cleanText });
    } catch (error) {
      console.error("LinkedIn AI Error:", error);
      res.status(500).json({ error: "Failed to optimize LinkedIn protocol." });
    }
  });

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
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
