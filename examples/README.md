# 行业示例配置 / Example configs

`config/site.json` 默认是一家示例产品品牌的配置。这里另外提供两套**同结构、换行业**的示例，证明模板改一个文件就能换行业：

| 文件 | 行业 | 品牌示例 |
| --- | --- | --- |
| `education-site.json` | 教育培训 | 示例编程学院（前端开发小班课） |
| `local-service-site.json` | 本地生活服务 | 示例到家保洁（深度保洁 3 小时） |

## 怎么用

```bash
# 例如换成教育培训行业：
cp examples/education-site.json config/site.json
npm run build
```

构建后整站（首页、产品/课程页、FAQ、结构化数据、llms.txt、sitemap）都会按新配置重新生成。所有文字均为示例，正式使用前请替换为真实品牌信息。

想加自己的行业：复制 `config/site.json`，按同样的字段改品牌名、产品、卖点、FAQ 即可，不用改任何页面代码。
