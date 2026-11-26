# 贡献指南

欢迎贡献！本模板的目标是：Fork 回去改一个文件就能用。所以请优先保证“开箱即用”，不要加需要 API Key、付费服务或后端的功能。

## 怎么贡献

1. Fork 本仓库，创建一个分支：`git checkout -b feat/你的改动`
2. 本地验证：`npm install && npm run build` 必须通过
3. 提交 PR，说明改了什么、为什么、怎么验证

## 规范

- 产品、品牌、FAQ 等内容只放在 `config/site.json`，不要把具体品牌信息硬编码到页面里
- 示例内容必须标明“示例”，不要写成像真实产品参数
- 新增页面请同时补：SEO meta、JSON-LD（如适用）、`scripts/generate-seo.mjs` 里的 sitemap 条目
- 保持零后端、零付费 API：不要引入需要密钥的服务

## 报告问题

提 Issue 时请写清：复现步骤、期望结果、实际结果、Node / npm 版本。
