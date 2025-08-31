import { NextResponse } from "next/server";
import puppeteer from "puppeteer";

async function GET(request: Request) {
  let browser;

  try {
    const { searchParams } = new URL(request.url);
    const url = searchParams.get("url") || "https://www.baidu.com";

    // 启动浏览器
    browser = await puppeteer.launch({
      headless: "new", // 使用新的 headless 模式
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-dev-shm-usage",
        "--disable-accelerated-2d-canvas",
        "--no-first-run",
        "--no-zygote",
        "--disable-gpu",
      ],
    });

    const page = await browser.newPage();

    // 设置用户代理
    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
    );

    // 设置视口
    await page.setViewport({ width: 1920, height: 1080 });

    // 导航到页面
    await page.goto(url, {
      waitUntil: "networkidle2",
      timeout: 30000,
    });

    // 等待页面加载完成
    await page.waitForTimeout(2000);

    // 使用 Puppeteer 的 evaluate 方法在浏览器中执行 JavaScript
    const result = await page.evaluate(() => {
      return {
        // 基本信息
        title: document.title,
        url: window.location.href,

        // 元数据
        meta: {
          description: document
            .querySelector('meta[name="description"]')
            ?.getAttribute("content"),
          keywords: document
            .querySelector('meta[name="keywords"]')
            ?.getAttribute("content"),
          author: document
            .querySelector('meta[name="author"]')
            ?.getAttribute("content"),
          viewport: document
            .querySelector('meta[name="viewport"]')
            ?.getAttribute("content"),
        },

        // 链接
        links: Array.from(document.querySelectorAll("a"))
          .slice(0, 10)
          .map((link) => ({
            text: link.textContent?.trim(),
            href: link.href,
            title: link.title,
          })),

        // 图片
        images: Array.from(document.querySelectorAll("img"))
          .slice(0, 10)
          .map((img) => ({
            src: img.src,
            alt: img.alt,
            title: img.title,
            width: img.width,
            height: img.height,
          })),

        // 标题
        headings: {
          h1: Array.from(document.querySelectorAll("h1"))
            .map((h) => h.textContent?.trim())
            .filter(Boolean),
          h2: Array.from(document.querySelectorAll("h2"))
            .map((h) => h.textContent?.trim())
            .filter(Boolean),
          h3: Array.from(document.querySelectorAll("h3"))
            .map((h) => h.textContent?.trim())
            .filter(Boolean),
        },

        // 主要内容
        mainContent: document
          .querySelector("main, .content, .main, #content, #main")
          ?.textContent?.trim()
          .substring(0, 500),

        // 结构化数据
        jsonLd: Array.from(
          document.querySelectorAll('script[type="application/ld+json"]')
        )
          .map((script) => {
            try {
              return JSON.parse(script.textContent || "{}");
            } catch {
              return null;
            }
          })
          .filter(Boolean),

        // Open Graph
        openGraph: {
          title: document
            .querySelector('meta[property="og:title"]')
            ?.getAttribute("content"),
          description: document
            .querySelector('meta[property="og:description"]')
            ?.getAttribute("content"),
          image: document
            .querySelector('meta[property="og:image"]')
            ?.getAttribute("content"),
          url: document
            .querySelector('meta[property="og:url"]')
            ?.getAttribute("content"),
          type: document
            .querySelector('meta[property="og:type"]')
            ?.getAttribute("content"),
        },

        // 页面统计
        stats: {
          totalLinks: document.querySelectorAll("a").length,
          totalImages: document.querySelectorAll("img").length,
          totalHeadings: document.querySelectorAll("h1, h2, h3, h4, h5, h6")
            .length,
          totalScripts: document.querySelectorAll("script").length,
          totalStyles: document.querySelectorAll(
            'style, link[rel="stylesheet"]'
          ).length,
        },
      };
    });

    // 截图（可选）
    const screenshot = await page.screenshot({
      type: "jpeg",
      quality: 80,
      fullPage: false,
    });

    return NextResponse.json({
      success: true,
      data: {
        ...result,
        screenshot: `data:image/jpeg;base64,${screenshot.toString("base64")}`,
      },
    });
  } catch (error) {
    console.error("Puppeteer 抓取失败:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "未知错误",
      },
      { status: 500 }
    );
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

export { GET };
