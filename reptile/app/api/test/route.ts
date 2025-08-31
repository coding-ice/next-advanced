import { NextResponse } from "next/server";

async function GET() {
  try {
    // 抓取百度首页
    const response = await fetch("https://www.baidu.com", {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const html = await response.text();

    // 提取页面标题
    const titleMatch = html.match(/<title>(.*?)<\/title>/i);
    const title = titleMatch ? titleMatch[1] : "未找到标题";

    // 提取页面描述
    const descMatch = html.match(
      /<meta[^>]*name="description"[^>]*content="([^"]*)"[^>]*>/i
    );
    const description = descMatch ? descMatch[1] : "未找到描述";

    // 提取所有链接
    const linkMatches = html.match(/<a[^>]*href="([^"]*)"[^>]*>/gi);
    const links = linkMatches
      ? linkMatches
          .slice(0, 10)
          .map((link) => {
            const hrefMatch = link.match(/href="([^"]*)"/);
            return hrefMatch ? hrefMatch[1] : "";
          })
          .filter((link) => link && !link.startsWith("#"))
      : [];

    return NextResponse.json({
      success: true,
      data: {
        title,
        description,
        links: links.slice(0, 5), // 只返回前5个链接
        htmlLength: html.length,
        status: response.status,
      },
    });
  } catch (error) {
    console.error("抓取失败:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "未知错误",
      },
      { status: 500 }
    );
  }
}

export { GET };
