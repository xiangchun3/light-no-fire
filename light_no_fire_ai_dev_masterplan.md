# Light No Fire 游戏站 AI 开发总文档（Wiki → Map → Tools）

## 项目定位

项目名称（暂定）：

- Light No Fire Wiki
- Light No Fire Map
- Light No Fire Tools

项目目标：

围绕《Light No Fire》构建一个：

- SEO 游戏内容站
- 游戏 Wiki 数据库
- 互动地图（Interactive Map）
- 玩家工具站
- AI 自动生成内容平台
- 长期游戏流量资产

核心路线：

```txt
Phase 1：Wiki SEO站
Phase 2：Interactive Map
Phase 3：游戏工具平台
Phase 4：AI + 玩家UGC生态
```

---

# 一、项目整体规划

## 阶段路线图

| 阶段 | 目标 | 核心任务 |
|---|---|---|
| Phase 1 | 抢占SEO | Wiki + Blog |
| Phase 2 | 提升流量 | Interactive Map |
| Phase 3 | 提高用户停留 | Game Tools |
| Phase 4 | 提升壁垒 | AI + UGC |

---

# 二、网站整体架构

## 网站结构

```txt
/
/blog
/news
/wiki
/items
/resources
/creatures
/biomes
/map
/tools
/guides
/builds
```

---

# 三、Phase 1：Wiki SEO站（最优先）

## 第一阶段目标

目标：

- 快速上线
- 抢占Google收录
- 提前布局游戏关键词
- 获取自然搜索流量
- 为后续地图站建立域名权重

---

# 四、Wiki 功能设计

## 1. Wiki 页面

页面结构：

```txt
/wiki/dragons
/wiki/boats
/wiki/building
/wiki/crafting
/wiki/biomes
/wiki/multiplayer
/wiki/races
```

每个页面包含：

- 标题
- 简介
- 游戏机制
- 获取方式
- 用途
- 相关页面
- FAQ
- 图片
- 视频
- Reddit讨论

---

## 2. Database 页面

```txt
/resources/iron
/resources/crystal
/items/fire-sword
/creatures/ancient-dragon
```

字段：

```json
{
  "name": "Iron",
  "rarity": "Common",
  "biomes": ["Mountain"],
  "uses": ["Weapon Crafting"],
  "coordinates": [],
  "drops": [],
  "related": []
}
```

---

## 3. Blog 页面

SEO文章：

```txt
/blog/light-no-fire-release-date
/blog/light-no-fire-map-size
/blog/light-no-fire-vs-no-mans-sky
/blog/everything-we-know-about-light-no-fire
```

---

# 五、Phase 1 SEO策略

## SEO核心目标

### 游戏未发布前：

抢占：

- 信息搜索
- 猜测搜索
- 新闻搜索
- 对比搜索

---

## 核心关键词

```txt
light no fire wiki
light no fire map
light no fire release date
light no fire dragons
light no fire biomes
light no fire crafting
light no fire mounts
light no fire races
```

---

## 长尾关键词

```txt
light no fire map size
light no fire procedural world
light no fire multiplayer
light no fire survival mechanics
light no fire ocean exploration
light no fire building system
light no fire gameplay
```

---

## 内容生产策略

### 每周更新：

- 3篇SEO文章
- 5个Wiki页面
- 2个数据库页面

---

## SEO页面模板

### Title

```txt
{Keyword} - Light No Fire Wiki & Guide
```

### Description

```txt
Learn everything about {Keyword} in Light No Fire including locations, crafting, gameplay tips and more.
```

---

# 六、Phase 2：Interactive Map

## 第二阶段目标

核心目标：

- 提升用户停留
- 获取高质量外链
- 提升品牌认知
- 建立竞争壁垒

---

# 七、地图系统功能设计

## 核心地图功能

### 图层系统

```txt
Biomes
Resources
Creatures
Dungeons
Mountains
Rivers
Oceans
Villages
Player Discoveries
```

---

## Marker 功能

功能：

- 点击显示详情
- 坐标系统
- 评论
- 收藏
- 分享
- 上传截图

---

## 玩家提交功能

用户可以：

- 上传坐标
- 上传资源点
- 上传怪物刷新点
- 上传隐藏地点

---

## 后期高级功能

### 路线规划

```txt
Best Iron Farming Route
Best Ocean Route
Dragon Spawn Route
```

### 热力图

- 玩家热门区域
- 资源密集区域
- 危险区域

---

# 八、Phase 3：游戏工具站

## 工具系统规划

### 第一批工具

```txt
Crafting Calculator
Build Planner
Resource Tracker
Skill Calculator
Coordinate Converter
Biome Finder
```

---

## 第二批工具

```txt
AI Location Recognition
Screenshot Analyzer
Route Optimizer
Guild Planner
Trade Calculator
```

---

# 九、AI功能规划（核心差异化）

## AI自动生成Wiki

AI自动生成：

- Item描述
- Biome说明
- 攻略内容
- FAQ
- Related Content

人工审核后发布。

---

## AI自动SEO

AI自动生成：

```txt
Top 10 Mountains in Light No Fire
Best Dragons in Light No Fire
How Big Is Light No Fire Map?
```

---

## AI图片识别

后期：

用户上传截图：

AI识别：

- 地点
- 生物
- 资源
- Biome
- 坐标

---

# 十、推荐技术栈

## 前端

| 模块 | 技术 |
|---|---|
| Framework | Next.js 15 |
| Styling | TailwindCSS |
| UI | shadcn/ui |
| Animation | Framer Motion |
| State | Zustand |

---

## SEO

| 模块 | 技术 |
|---|---|
| Rendering | SSG + ISR |
| Metadata | Next Metadata API |
| Sitemap | next-sitemap |
| RSS | RSS Generator |
| Structured Data | JSON-LD |

---

## 数据库

| 模块 | 技术 |
|---|---|
| DB | PostgreSQL |
| ORM | Prisma |
| Cache | Redis |
| Search | Algolia |

---

## 地图系统

| 模块 | 技术 |
|---|---|
| Map Engine | Mapbox GL |
| Tiles | Mapbox |
| Marker Storage | PostgreSQL |
| Overlay | GeoJSON |

---

## 内容系统

| 模块 | 技术 |
|---|---|
| CMS | MDX |
| Markdown | Contentlayer |
| Images | Cloudflare R2 |
| CDN | Cloudflare |

---

## 部署

| 模块 | 技术 |
|---|---|
| Hosting | Vercel |
| CDN | Cloudflare |
| Monitoring | Sentry |
| Analytics | Plausible |

---

# 十一、数据库结构建议

## Wiki表

```sql
CREATE TABLE wiki_articles (
  id SERIAL PRIMARY KEY,
  slug TEXT UNIQUE,
  title TEXT,
  content TEXT,
  category TEXT,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);
```

---

## Resource表

```sql
CREATE TABLE resources (
  id SERIAL PRIMARY KEY,
  name TEXT,
  rarity TEXT,
  biome TEXT,
  description TEXT
);
```

---

## Map Marker表

```sql
CREATE TABLE map_markers (
  id SERIAL PRIMARY KEY,
  type TEXT,
  title TEXT,
  latitude FLOAT,
  longitude FLOAT,
  description TEXT
);
```

---

# 十二、目录结构建议

```txt
/apps/web
/apps/admin
/packages/ui
/packages/db
/packages/map
/packages/seo
/content/blog
/content/wiki
/content/resources
```

---

# 十三、前端页面规划

## 首页

包含：

- Hero Banner
- 最新新闻
- 热门Wiki
- 热门地图地点
- 热门工具
- 最新发现

---

## Wiki详情页

包含：

- 目录
- 图片
- 相关资源
- FAQ
- 评论
- 分享按钮

---

## 地图页面

包含：

- 图层切换
- 搜索
- Marker筛选
- 坐标系统
- 玩家上传

---

# 十四、AI开发流程（重要）

## 推荐AI开发模式

### Step 1

让AI生成：

- 项目初始化
- Next.js脚手架
- Tailwind配置
- Prisma配置

---

### Step 2

让AI生成：

- 首页
- Wiki模板
- Blog模板
- SEO结构

---

### Step 3

让AI生成：

- Database页面
- 搜索系统
- Sitemap
- RSS

---

### Step 4

让AI生成：

- 地图系统
- Marker系统
- 玩家提交系统

---

### Step 5

让AI生成：

- 工具系统
- AI功能
- 自动化SEO

---

# 十五、推荐AI提示词（非常重要）

## 页面开发Prompt

```txt
使用 Next.js 15 + Tailwind + TypeScript + App Router 开发一个SEO友好的游戏Wiki网站。

要求：
- 使用SSG
- 自动生成metadata
- 响应式布局
- 暗黑模式
- shadcn/ui
- 页面速度优化
- 图片懒加载
- 支持MDX
```

---

## 地图开发Prompt

```txt
使用Mapbox GL开发一个游戏Interactive Map。

要求：
- 图层切换
- Marker系统
- Marker详情弹窗
- 搜索
- Marker聚合
- 坐标系统
- GeoJSON支持
```

---

# 十六、域名建议

## 强SEO型

```txt
lightnofiremap.com
lightnofirewiki.com
lightnofiretools.com
lnfmap.com
lnfwiki.com
```

---

## 品牌型（推荐）

```txt
fireatlas.gg
emberatlas.com
mythicmap.gg
worldforge.gg
atlasofember.com
```

---

# 十七、域名购买建议

## 推荐平台

- Namecheap
- Porkbun
- Cloudflare Domains

---

## 域名选择原则

### 推荐：

```txt
游戏名 + 功能
```

例如：

```txt
lightnofiremap.com
```

---

## 避免：

```txt
official-light-no-fire-map.com
```

避免侵权风险。

---

# 十八、商业变现规划

## 第一阶段

### Google AdSense

适合：

- Wiki页面
- Blog页面

---

## 第二阶段

### Affiliate

例如：

- Gaming Mouse
- Keyboard
- Hosting
- VPN
- Steam Deck

---

## 第三阶段

### Premium功能

例如：

- 地图同步
- 私人Marker
- AI分析
- 路线规划
- 公会系统

---

# 十九、核心竞争策略

## 不做纯Wiki

而是：

```txt
Wiki + Map + Tools + AI
```

---

## 不和Fandom竞争内容量

而是竞争：

- 工具化
- 交互
- 玩家体验
- AI功能
- 地图能力

---

# 二十、最终发展目标

最终目标：

```txt
Light No Fire 最大的第三方社区工具平台
```

长期发展：

- 玩家UGC
- AI自动化内容
- 社区地图
- 工具生态
- Discord联动
- 多游戏扩展

未来可复制：

```txt
Subnautica
Elder Scrolls VI
Ark 2
GTA 6
Witcher 4
```

形成：

```txt
游戏地图 + Wiki SaaS矩阵
```

