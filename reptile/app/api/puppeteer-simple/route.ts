import { NextResponse } from "next/server";
import puppeteer from "puppeteer";

const PREFIX = "/t/vehicles/toyota";
const BASE_URL = `https://spareto.com`;
const TOYOTA_URL = `${BASE_URL}${PREFIX}`;

interface ModelItem {
  modelName: string;
  yearRange: string;
  data: {
    body: string;
    carCode: string;
    produced: string;
    kw: string;
    hp: string;
    ccm: string;
  }[];
}

interface BrandItem {
  brand: string;
  count: string;
  models: ModelItem[];
}

async function GET(request: Request) {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const data = [];

  // Navigate the page to a URL
  await page.goto(TOYOTA_URL);

  // Set screen size
  await page.setViewport({ width: 1080, height: 1024 });

  // const contents = await page.evaluate(() => {
  //   return Array.from(
  //     document.querySelectorAll("#car_types_filter tbody tr td:nth-child(2) a")
  //   ).map((el) => el.getAttribute("href"));
  // });

  const modalCotent =
    "/t/vehicles/toyota/toyot-corolla-liftback-e9-1-dot-8-d-ce90-1";

  const modalId = modalCotent.replace(PREFIX, "");
  const categoryUrl = `${TOYOTA_URL}${modalId}/wheel-drive/joint-set`;
  await page.goto(categoryUrl);

  const hrefs = await page.evaluate(() =>
    Array.from(
      document.querySelectorAll(
        ".products-list .card-col:nth-child(-n + 3) .card-product-image a"
      )
    ).map((el) => el.getAttribute("href"))
  );

  for (let href of hrefs) {
    // detail page
    const detailUrl = `${BASE_URL}${href}`;
    await page.goto(detailUrl);
    const title = await page.waitForSelector("#content h1");
    // 标题
    const titText = (await title.evaluate((el) => el.textContent))
      ?.replace(/\s+/g, "")
      .trim();

    const refNums = await page.evaluate(() => {
      const h3Elements = document.querySelectorAll(
        "#nav-oe .container-fluid h3"
      );

      return Array.from(h3Elements).map((h3) => {
        const key = h3.textContent.replace(/\s+/g, "");

        const item = {
          key,
          brands: [],
        };

        // 获取 h3 后面的所有元素，直到遇到下一个 h3
        let nextEl = h3.nextElementSibling;
        while (nextEl && nextEl.tagName !== "H3") {
          const brand = nextEl
            .querySelector(".col-md-2.col-4.ps-4")
            ?.textContent?.trim();
          const dataElements = nextEl.querySelectorAll(".me-3");

          if (brand) {
            item.brands.push({
              brand,
              data: Array.from(dataElements)
                .map((el) => el.textContent?.trim())
                .filter(Boolean),
            });
          }

          nextEl = nextEl.nextElementSibling;
        }

        return item;
      });
    });

    // [{brand: 'TOYOTA', count: 11, models: [{ model: 'corolla', yearRange: '2020 - 2025', data: [{"body": "", carCode: '	COROLLA (_E9_) 1.8 D (CE90_)', produced: '2020-11 - 2025-03', kw: 49, hp: 67, ccm: 1839 }] }]}]
    const fitVehicles = await page.evaluate(() => {
      // -> id: nav-vehicles -> data-controller="collapse"
      const collapseEls = document
        .querySelector("#nav-vehicles")
        .querySelectorAll('div[data-controller="collapse"]');

      return Array.from(collapseEls).map((collapseEl) => {
        const brandItem: Partial<BrandItem> = {};

        const firstMenuEl = collapseEl.querySelector(
          'div[data-action="click->collapse#toggleChild"]'
        );

        brandItem.brand = firstMenuEl.children[0].textContent.trim();
        brandItem.count = firstMenuEl.children[1].textContent.match(/\d+/)[0];

        const secondMenuEls = collapseEl.querySelectorAll(
          'div[data-action="click->collapse#toggleChildSibling"]'
        );

        brandItem.models = Array.from(secondMenuEls).map((secondMenuEl) => {
          // @ts-ignore
          const modelItem: ModelItem = {};

          modelItem.modelName = secondMenuEl.children[0].textContent;
          modelItem.yearRange = secondMenuEl.children[1].textContent;
          modelItem.data = Array.from(
            secondMenuEl.nextElementSibling.querySelectorAll(
              "tr:not(:first-child)"
            )
          ).map((tr) => {
            return {
              body: tr.children[0].textContent.trim(),
              carCode: tr.children[1].textContent.trim(),
              produced: tr.children[2].textContent.trim(),
              kw: tr.children[3].textContent,
              hp: tr.children[4].textContent,
              ccm: tr.children[5].textContent,
            };
          });

          return modelItem;
        });

        return brandItem;
      });
    });

    data.push({
      detailUrl,
      title: titText,
      ref_nums: refNums,
      fit_vehicles: fitVehicles,
    });
  }

  await browser.close();

  return NextResponse.json({
    success: true,
    data,
  });
}

export { GET };
