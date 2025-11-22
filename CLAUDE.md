# CLAUDE.md

本文档为 Claude Code (claude.ai/code) 在此代码库中工作时提供指导。

## 命令

### 开发命令
```bash
pnpm dev                    # 启动开发服务器（支持热重载）
pnpm install-deps          # 使用 pnpm 安装依赖
pnpm clean                 # 清理 node_modules、锁文件和 pnpm 存储
```

### 构建命令
```bash
pnpm build                 # 构建开发版本
pnpm build:prod           # 构建生产版本（设置 BUILD_MODE=prod）
pnpm preview              # 本地预览生产构建
```

### 代码检查
```bash
pnpm lint                 # 对整个代码库运行 ESLint
```

## 项目概述

这是一个**AI 会议纪要中文着陆页**，基于 React 18、TypeScript 和 Vite 构建。这是一个静态营销网站，用于展示 AI 驱动的会议转录服务。

### 技术栈
- **框架**: React 18.3.1 + TypeScript
- **构建工具**: Vite 6.0.1
- **样式**: Tailwind CSS v3.4.16
- **UI 组件库**: Radix UI（完整的组件库）
- **包管理器**: pnpm
- **动画**: tailwindcss-animate
- **图标**: lucide-react

## 代码架构

### 入口文件
- `src/main.tsx` - 应用程序入口点，React 18 根节点挂载
- `src/App.tsx` - 主组件，协调所有着陆页部分
- `index.html` - HTML 模板，包含 Vite 的 `<div id="root"></div>`

### 组件结构 (src/components/)
着陆页由以下模块化部分组成，按此顺序渲染：
1. **Header** - 导航栏，包含 Logo（Brain + Mic 图标）和 CTA 按钮
2. **Hero** - 主标题和主要行动号召
3. **Features** - 功能亮点
4. **HowItWorks** - AI 会议工具工作原理
5. **Testimonials** - 用户评价/反馈
6. **CTA** - 行动号召区域
7. **Footer** - 网站页脚
8. **ShaderBackground** - 自定义视觉背景效果

### 工具函数
- `src/lib/utils.ts` - 工具函数（可能包含 `cn()` 类名合并辅助函数）
- `src/hooks/use-mobile.tsx` - React Hook，用于移动端断点检测（768px）
- `src/components/ErrorBoundary.tsx` - React 错误边界组件

### 路由
项目已安装 React Router DOM，但在当前实现中未使用路由（纯着陆页）。

## 构建配置

### Vite 配置 (vite.config.ts)
- **别名**: `@` 映射到 `./src`
- **插件**:
  - `@vitejs/plugin-react` - React 支持
  - `vite-plugin-source-identifier` - 开发工具，为 DOM 元素添加 `data-matrix` 属性（生产模式禁用）

### Tailwind 配置 (tailwind.config.js)
- **自定义颜色**:
  - Primary: `#2B5D3A`（深绿色）
  - Secondary: `#4A90E2`（蓝色）
  - Accent: `#F5A623`（橙色）
- **内容路径**: 扫描 `./src/**/*.{ts,tsx}` 和标准 React 路径
- **深色模式**: 基于类名（已支持深色主题）
- **动画**: 包含手风琴动画

### TypeScript 配置
- `tsconfig.json` - 基础 TypeScript 配置
- `tsconfig.app.json` - 应用专用 TypeScript 设置
- `tsconfig.node.json` - Vite 专用的 Node.js 设置

## 核心依赖

### Radix UI 组件
项目包含完整的 Radix UI 组件集：
- Dialog、Dropdown Menu、Popover、Tooltip
- Navigation Menu、Tabs、Accordion
- 表单组件（Select、Checkbox、Radio Group）
- Progress、Slider、Switch、Toggle
- 更多组件 - 详见 package.json 第 18-44 行

### 表单处理
- `react-hook-form` - 表单状态管理
- `@hookform/resolvers` - 表单验证解析器
- `zod` - 模式验证

### UI 工具
- `class-variance-authority` - 组件变体管理
- `clsx` + `tailwind-merge` - 类名合并工具
- `cmdk` - 命令面板组件

## 开发注意事项

- 应用使用渐变背景（slate-900 → gray-800 → slate-700）并带有自定义着色器背景效果
- 所有文本内容均为中文
- 未在 package.json 中找到测试配置（无 Vitest、Jest 或测试库设置）
- ESLint 配置了 React hooks 和 refresh 插件
- 移动端响应式使用自定义 `use-mobile` Hook，断点为 768px

## 路径别名
导入时使用 `@/` 作为 `src/` 目录的别名：
```typescript
import { something } from '@/lib/utils'
import MyComponent from '@/components/MyComponent'
```
