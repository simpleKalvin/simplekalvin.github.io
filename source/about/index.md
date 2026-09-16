---
title: 关于我
date: 2024-11-19 23:25:47
---

**擅长：** AI 工具研发 / LLM 工程落地、PHP 后端开发（9 年）/ Golang 架构

# 简介

9 年后端经验起步（运维 → PHP → Golang 架构），近两年全面转向 AI 工程落地，具备从底层基础设施 → 后端架构 → AI 能力矩阵的完整技术演进视角。

独立从 0 到 1 交付 8+ 个生产级 AI 项目，横跨 LLM 工程、AI Agent、CV 多模态、RAG、AIGC 五大方向。擅长把论文 / 开源模型快速跑通并落地为稳定的生产服务。

核心能力是**模型-任务路由（Model-Task Routing）**：熟悉各主流模型在成本、效果、延迟、上下文、合规等维度的能力区间，为每个任务匹配最优模型组合——例如用 DeepSeek 替换 Gemini（成本降约 10 倍、效果相当）、本地 GPU + 云端 API 混合架构兜底等，以 AI 管线将设计侧素材产能提升约 10 倍。

# 专业技能

### AI / LLM 工程

- 熟练基于 LangChain 构建通用 LLM 对接基座与 RAG 问答系统，调研过 LangGraph 升级方案；熟悉 Dify LLM 流水线优化（精简输入与提示词降低 Token 消耗）
- 具备提示词工程（Prompt Engineering）与思考链（CoT）实践经验，落地过 DeepSeek V3.2 thinking / V4、Gemini、Hunyuan、Qwen 等模型（投放分析、翻译术语提取、智能招聘撮合等场景）
- 具备模型选型与成本优化经验（DeepSeek 替 Gemini 成本降约 10 倍、效果相当）
- 熟练 Python + FastAPI + Swagger（代码即文档）+ uvicorn 构建 AI 后端；设计过处理前 / 成功 / 失败 / 释放锁四套钩子架构

### AI Agent

- 基于 openclaw / opencode 落地智能招聘 Agent，独立完成 Agent / SOUL / Tools / Memory 等定义文件设计，并将 skill 封装为可迁移至任意 Agent 的模块
- 实践 Agentic Design Patterns：规划（SOP 编排）、工具使用（MCP 多粒度 function 拆分）、提示链（多步骤 + 批次串联）、路由（按场景分发）、反思（批次迭代降低幻觉）

### CV / 多模态

- ProPainter、PaddleOCR、SAM2、Real-ESRGAN、VideoLLaMA3、InternVideo、PaddleNLP UIE 在视频去水印 / 文字擦除 / 画质增强 / 自动打标签 / 术语抽取场景的应用（OCR 阶段耗时优化至原来的 1/5）

### AIGC 生图

- 接入火山引擎（即梦 seedream / seedance）、Gemini、ComfyUI、OpenAI 协议兼容层；基于本地 4090 跑通文生图 / 图生图 / 文生视频 / 图生视频链路
- 具备 AIGC 模型选型经验（特定场景国产生图模型无法理解需求 → 选定 Gemini 并以 Mask 机制控制重绘范围、降低抽卡次数）

### RAG / 向量库

- 掌握 MCP（Model Context Protocol）服务搭建，落地基于 Chroma 向量库的 MCP 服务并接入聊天基座作为 RAG
- 基于 pymysqlreplication（CDC，类似阿里 Canal）实现 MySQL → 向量库实时同步与断点续传

### 编程语言

- **Python**（AI 服务主力）、**PHP**（9 年后端主力）、**Golang**（架构与重构）
- 理解 Golang GPM 调度模型、三色标记 GC 等运行时机制；具备 Golang TDD（单元 + 集成测试）与 pprof 内存泄露排查经验
- 熟练运用设计模式（IoC/DI、策略、观察者、适配器、装饰器）与 DDD / 事件风暴方法论

### PHP 基础

- 熟练使用 ThinkPHP 与 Laravel，深入理解 Laravel 框架原理与设计思想，开发维护过 Laravel 私有库扩展包
- 掌握 PHP 的 OOP / AOP 思想，熟练运用设计模式进行业务开发
- 掌握 PHP 内存管理与 GC 垃圾回收机制、Linux 常用命令、LNMP 环境部署、NFS 配置
- 熟悉 HTML / CSS / JS / jQuery，使用过 Bootstrap、LayUI 等前端框架

### PHP 高级

- 熟悉 PHP 底层实现（数组、内存分配、GC、FPM 原理）
- 熟悉 Swoole 扩展，熟练使用 Hyperf 并了解其源码实现
- 熟悉 MySQL，可独立编写与优化 SQL，了解 MySQL / Redis 读写分离
- 了解 Kafka、RabbitMQ 队列系统（日志收集、下单等场景）；多服务器协同、负载均衡与微服务化
- 了解 Elasticsearch 分布式搜索、Kong 网关、MongoDB
- 了解基于 Linux 的底层网络 IO 模型

### Golang

- 熟悉 Gin、Viper、Wire、Protobuf、Websocket 等常用包
- 了解 Beego 的 ORM / 路由 / 中间件源码与 Gin 基础实现
- 熟悉组合模式、泛型并在业务中落地；使用 pprof 排查并处理过内存泄露问题

### 数据与基础设施

- 数据库：MySQL（SQL 优化、读写分离）、Redis、ClickHouse（后台查询 15s → 3s）、MongoDB
- 云原生：Docker（手写 docker-compose / Dockerfile）、K8s Helm、Prometheus、Jaeger
- 具备从编译、测试、发布、部署到监控的 DevOps 全流程经验

### 数据采集与自动化

- 爬虫：Playwright 自动化 + 对象池机制，处理过短视频平台关键词采集与热力值计算
- 反爬对抗：熟悉浏览器指纹、拟人仿真、事件驱动登录态保持等策略

# 经历时间线

- 2025.07 – 至今　AI 工具研发（某游戏出海公司，AI 方向技术骨干）
- 2024.11 – 2025.06　中台开发（出海短剧，PHP / Golang）
- 2023.04 – 2024.10　后端主开发（跨境电商，生产资料链路）
- 2021.08 – 2022.10　Golang 架构组（监控 / IM 方向）
- 2018.08 – 2021.06　PHP 组长 / 技术负责人（电商 SAAS、心理咨询平台）
- 2016.05 – 2018.02　运维

# 代表项目

- **智能招聘 Agent**：抓取 → LLM 撮合打分 → 阈值筛选 → 自动触达全链路；反爬对抗（拟人仿真、浏览器指纹、事件驱动登录态）；Agentic Design Patterns 全面落地；批次化撮合降低幻觉
- **AI 投放分析系统**：LangChain + FastAPI + WebSocket 流式输出，覆盖自有 + 三大海外广告渠道；模型选型切换（DeepSeek reasoning 替 Gemini，成本降约 10 倍）
- **视频处理管线**：去水印（ProPainter + SAM2）、文字擦除（PaddleOCR 提速 5 倍）、画质增强（Real-ESRGAN）、分镜切割 + 视频理解双层自动打标签；服务架构重构为「人工主导、AI 辅助」+ 四套钩子
- **关键词采集 + 向量库 CDC**：Playwright 对象池；pymysqlreplication 实时同步 Chroma（断点续传、全量 + 增量）；MCP 服务接入聊天基座作 RAG
- **AIGC 素材中心**：火山即梦 + ComfyUI + 本地 GPU 四条链路；OpenAI 协议兼容模型接入层；API vs 本地部署选型论证
- **AIGC 表盘 / 壁纸 App**：Gemini 生图 + Mask 控制重绘范围；LLM 自动化风控审批；400M 级后台导出优化（规避 OOM）
- **翻译助手与术语提取**：AE / PS 工程文件文本翻译；PaddleNLP UIE + few-shot 术语抽取；DeepSeek thinking 多批次并发方案
- **短剧后端 Golang 重构**：go-zero BFF + gRPC 下沉；Canal + Kafka 热点数据近实时同步 Redis；Jaeger 全链路追踪 + Prometheus 监控
- **广告归因与回传**：渠道抽象层（新增渠道配置即接入）；自研自归因落地页，摆脱第三方归因依赖
- **电商 SAAS（0-1 技术负责人）**：计价重构 bug 率 20% → 1%；QPS 峰值 90 → 230；微服务化拆分 + 灰度发布体系
- **监控服务 Golang 重构**：Gin + WebSocket 从 0 重构；pprof 定位 Map 内存泄露；Docker 多环境部署，曾 20 分钟完成全量恢复；优惠券触达带动付费率 +10%
