# TodoApp

## 项目介绍

本项目是一个基于React+Next.js+TailwindCSS+TypeScript+Shadcn/UI的移动电商APP，后端使用Python+FastAPI。其主要功能是：

- 添加、编辑、删除、查看产品
- 添加、编辑、删除、查看产品分类
- 添加、编辑、删除、查看产品标签
- 购买和出售产品
- 买卖家的交流

![原型图]()


## 小组成员及分工

| 姓名                                | 学号         | 分工                     |
| ----------------------------------- | ------------ | ------------------------ |
| [郭欣凯]() | 2212190226 | 全部    |

## 项目结构

```mermaid
mindmap
  root((电商平台))
    技术栈
      前端
        React
        Next.js
        TailwindCSS
        TypeScript
        Shadcn/UI
        状态管理(Zustand)
        表单验证(React Hook Form)
      后端
        Python
        FastAPI
        PostgreSQL
        SQLAlchemy
        asyncpg
        JWT认证
        Alembic(数据库迁移)
    功能模块
      商品管理
        添加商品
        编辑商品
        删除商品
        查看商品
        价格切换
        优先级管理
      分类管理
        创建分类
        编辑分类
        删除分类
        分类筛选
      标签管理
        添加标签
        编辑标签
        删除标签
        标签关联
      提醒管理
        发货提醒
        到货提醒
        降价提醒
        提醒通知
      聊天界面
        文本编辑
        附件上传
        打赏功能
        分享功能
    测试方案
      单元测试
        Jest(前端)
        pytest(后端)
        React Testing Library
      集成测试
        Postman
        FastAPI TestClient
        Mock Service Worker
      E2E测试
        Cypress
        Playwright
      性能测试
        Locust
        Lighthouse
    维护方案
      CI/CD
        GitHub Actions
        Docker容器化
        Kubernetes编排
      监控告警
        Sentry
        Prometheus+Grafana
        ELK日志系统
      文档维护
        Swagger API文档
        Storybook组件文档
        MkDocs项目文档
    第三方服务
      云存储(AWS S3/MinIO)
      邮件服务(SendGrid)
      推送服务(Firebase Cloud Messaging)
      OAuth集成(Google/GitHub)
```

## 项目计划

```mermaid
gantt
    title TodoApp 项目开发计划 (2025/02/26 - 2025/06/11)
    dateFormat  YYYY-MM-DD
    axisFormat %m/%d
    
    section 需求与设计
    需求分析           :a1, 2025-02-26, 7d
    技术方案评审       :a2, after a1, 5d
    UI/UX原型设计      :a3, after a2, 10d
    
    section 基础架构
    前端脚手架搭建(郭欣凯)  :b1, 2025-03-10, 10d
    后端基础设施(郭欣凯)   :b2, 2025-03-10, 14d
    数据库设计(郭欣凯)    :b3, 2025-03-17, 7d
    
    section 核心功能开发
    商品模块(郭欣凯)     :c1, 2025-03-24, 14d
    分类/标签模块(郭欣凯) :c2, 2025-03-24, 21d
    提醒模块(郭欣凯)     :c3, 2025-04-07, 14d
    
    section 扩展功能
    聊天模块(郭欣凯)   :d1, 2025-04-14, 14d
    文件存储集成(郭欣凯) :d2, 2025-04-21, 7d
    第三方服务对接(郭欣凯) :d3, 2025-04-28, 14d
    
    section 测试验证
    单元测试           :e1, 2025-05-12, 14d
    集成测试           :e2, 2025-05-19, 7d
    E2E测试           :e3, 2025-05-26, 7d
    
    section 部署维护
    文档编写           :f1, 2025-05-26, 7d
    生产环境部署       :f2, 2025-06-02, 5d
    监控系统搭建       :f3, 2025-06-02, 7d
```

