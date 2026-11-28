# Changelog

## Unreleased

- 新增 `.github/workflows/pages.yml`：推送到 main 即自动构建并部署到 GitHub Pages（构建时设置 `PAGES_BASE_PATH=/geo-website-template` 适配子路径）。
- 新增 `examples/`：教育培训与本地生活服务两套示例配置，复制任意一个为 `config/site.json` 即可换行业。
- README：三个项目之间加了“相关项目”交叉推荐。

## 1.0.0 — 2026-11-26

- 首个可用版本（V1）
- Next.js 14 App Router + TypeScript，静态导出（`out/` 可直接部署）
- 页面：首页、产品页、文章列表、2 篇示例长文、FAQ、关于我们、404
- 单一配置源：`config/site.json`，改一个文件即可换品牌
- GEO：Organization / Product / FAQPage / Article JSON-LD，`/llms.txt`、`/sitemap.xml`、`/robots.txt` 由构建脚本自动生成
- SEO meta + Open Graph，语义化 HTML，移动端自适应，纯 CSS
- 文档：中文 README、CONTRIBUTING、MIT 许可证
