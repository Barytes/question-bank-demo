# 高考物理智能题库 Demo

这是一个纯静态的电子题库 MVP，用于展示“教辅 PDF -> 结构化题库 -> 在线做题 -> 解析反馈 -> 学情诊断”的完整闭环。

项目当前收录 20 道高考物理样题。题目来自扫描版教辅 PDF 的题目截图，并配套结构化答案、解析、知识点、认知能力、错因标签和推荐关系。

## 在线访问

如果 GitHub Pages 已启用，可以访问：

https://barytes.github.io/question-bank-demo/

GitHub Pages 设置方式：

1. 打开仓库 Settings
2. 进入 Pages
3. Source 选择 `Deploy from a branch`
4. Branch 选择 `main`
5. Folder 选择 `/root`
6. 保存后等待部署完成

## 本地使用

这是纯 HTML/CSS/JS 项目，不需要安装依赖。

直接打开：

```text
index.html
```

也可以用本地静态服务器预览：

```bash
python3 -m http.server 8765
```

然后访问：

```text
http://127.0.0.1:8765/
```

## 功能

- 题库首页：展示 20 道题、完成状态、搜索和进入做题。
- 做题页：支持单选、多选和解答题自评。
- 解析页：提交后显示答案、分步解析和题目反馈。
- 学情诊断：根据本地作答记录生成知识点掌握、认知能力证据、主要错因和推荐补练。
- 架构文档：在页面中提供文档目录，完整文档放在 `docs/` 目录。

## 目录结构

```text
.
├── index.html                 # 题库入口页面
├── css/styles.css             # 主页面样式
├── js/app.js                  # 题库、做题、诊断和文档目录逻辑
├── data/questions.js          # 20 道题的结构化数据
├── assets/
│   ├── pages/                 # PDF 页面渲染图
│   └── questions/             # 题目截图
├── docs/                      # 架构、pipeline、算法和 schema 文档
├── scripts/                   # 生成和验证脚本
└── skills/                    # 项目内 workflow skill 说明
```

## 数据与诊断模型

题目数据位于 `data/questions.js`。每道题包含：

- 题目 ID、标题、题型、难度
- 来源页与题目截图
- 选项、答案、解析步骤
- 知识点、解题方法、认知能力、易错点
- Q-matrix、能力载荷、错因证据
- 相似题、补救题、进阶题推荐关系
- 质量标记

学情诊断是 MVP 级可解释模型，不是正式心理测量校准结果。当前逻辑为：

- 知识点：基于 Q-matrix 权重更新掌握概率
- 认知能力：基于能力载荷累积证据
- 错因：错题触发 mistakeEvidence
- 推荐：优先同错因补练，其次同知识点题，再次进阶迁移题

更完整的设计见：

- `docs/architecture.html`
- `docs/pipeline.html`
- `docs/algorithm.html`
- `docs/data-schema.html`

## 项目内 skills

`skills/` 目录包含三个项目内工作流说明：

- `pdf-extraction`：从扫描 PDF 渲染并裁切题目截图
- `solution-generation`：生成答案、解析、标签和质量标记
- `learning-diagnosis`：根据作答记录生成诊断和推荐

这些不是全局 Codex skill，而是本项目的可读 workflow 文档。

## 验证

运行数据和文档验证：

```bash
node scripts/validate-data.js
node scripts/validate-docs.js
node --check js/app.js
node --check data/questions.js
```

## 重要限制

- 当前题目来自扫描版 PDF，截图是主要题面载体。
- 部分答案解析为 demo 生成内容，正式教学使用前需要老师核验。
- 当前诊断模型是简版原型，不应作为正式学业评价。
- 作答记录保存在浏览器 `localStorage`，没有账号系统和服务端数据库。

