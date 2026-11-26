export interface ArticleSection {
  body: string[];
  heading: string;
}

export interface Article {
  datePublished: string;
  description: string;
  excerpt: string;
  faq: { answer: string; question: string }[];
  sections: ArticleSection[];
  slug: string;
  title: string;
}

/**
 * Sample articles — GEO long-form structure: direct answer first,
 * then multi-section headings, lists, and a FAQ at the end.
 * Replace these with your own articles. Keep the same shape.
 */
export const articles: Article[] = [
  {
    datePublished: '2026-11-26',
    description:
      '示例文章：选购日常护理产品前，先看这 5 个问题。直接给结论，再展开解释。',
    excerpt:
      '结论先说：先看适用人群、清洁方式、续航与保修，再看价格。下面分 5 个问题展开，都是示例内容。',
    faq: [
      {
        answer: '示例回答：先确认适用人群和禁忌，再看清洁与存放是否方便，最后比较保修政策。',
        question: '选购时最容易忽略什么？',
      },
      {
        answer: '示例回答：价格不是唯一标准，售后和配件价格也要一起算进去。',
        question: '贵的一定更好吗？',
      },
    ],
    sections: [
      {
        body: [
          '结论：选购前先回答 5 个问题，比直接比价格更省钱。本篇为 GEO 模板示例文章，所有产品描述均为示例，请按你的真实产品改写。',
          '这 5 个问题分别是：适合谁用、怎么清洁、续航多久、保修怎样、在哪买。',
        ],
        heading: '先给结论：5 个问题比价格更重要',
      },
      {
        body: [
          '第一，适用人群。不同产品面向的人群不同，先看说明书里的适用范围。',
          '第二，清洁方式。每天都要用的东西，清洁越简单，越容易坚持用下去。',
          '第三，续航与充电。示例数据：一次充电约 30 天（示例，非实测）。',
        ],
        heading: '问题 1–3：人群、清洁与续航',
      },
      {
        body: [
          '第四，保修政策。本模板示例为 1 年保修，请替换为你品牌的真实政策。',
          '第五，购买渠道。认准官方店铺或授权渠道，避免买到无售后产品。',
        ],
        heading: '问题 4–5：保修与渠道',
      },
      {
        body: [
          '把这 5 个问题的答案列成一张表，再对照产品页的参数表，就能快速做决定。',
          '如果你是品牌方，也可以把这篇文章改成你自己产品的选购指南。',
        ],
        heading: '怎么做决定：列一张对照表',
      },
    ],
    slug: 'how-to-choose',
    title: '示例文章：选购日常护理产品前，先看这 5 个问题',
  },
  {
    datePublished: '2026-11-26',
    description:
      '示例文章：日常护理的正确使用方法与常见误区，分步骤讲清楚，附常见问题。',
    excerpt:
      '结论先说：从最低档开始、循序渐进，用后冲洗晾干。下面分步骤和误区两部分展开。',
    faq: [
      {
        answer: '示例回答：从最低档开始，适应后再逐步调高；首次使用前请充满电。',
        question: '第一次用应该选哪个档位？',
      },
      {
        answer: '示例回答：用清水冲洗干净，晾干后存放，避免阳光直射和高温。',
        question: '用完之后怎么存放？',
      },
    ],
    sections: [
      {
        body: [
          '结论：正确使用分四步——充电、选档、使用、清洁存放。本篇为示例文章，步骤为模板示例。',
          '很多使用问题不是产品问题，而是步骤错了。',
        ],
        heading: '先给结论：四步就够了',
      },
      {
        body: [
          '第 1 步：首次使用前充满电（示例步骤）。',
          '第 2 步：选择最低档，适应后再调高。',
          '第 3 步：按说明书的方法使用，不要用力过猛。',
          '第 4 步：用后清水冲洗，晾干存放。',
        ],
        heading: '分步骤：从充电到存放',
      },
      {
        body: [
          '误区 1：档位越高效果越好。示例提醒：适合自己的档位才是最好的。',
          '误区 2：不用清洁也能放着。示例提醒：每天使用的产品更需要清洁。',
          '误区 3：配件不用换。示例提醒：按说明书周期检查配件状态。',
        ],
        heading: '三个常见误区',
      },
    ],
    slug: 'how-to-use-daily',
    title: '示例文章：日常护理的正确用法与 3 个常见误区',
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
