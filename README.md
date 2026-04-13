## 周报网站说明

这是一个基于静态 `HTML + CSS + JavaScript` 搭建的周报网站，用来整理你 2026 年 4 月的工作记录、历史事项和 H1 指标。

### 已包含内容

- **周报概览**：按周查看重点事项
- **项目筛选**：支持切换 `未来美术坊`、`成长守护`
- **历史时间线**：按日期回看本月推进
- **H1 指标区**：沉淀上半年目标、关键动作和 AI 方向
- **月度任务池**：保留本月 To-do 归档
- **快速复制**：一键复制当前周摘要，方便发群或写邮件
- **每日更新区**：可每天记录 `今天推进 / 风险卡点 / 明日计划`
- **持续记录**：每日更新内容会保存在当前浏览器，适合持续迭代

### 如何打开

你可以直接双击 `index.html` 在浏览器中查看。

如果你想通过本地服务打开，也可以在当前目录执行：

```powershell
python -m http.server 8080
```

然后访问 `http://localhost:8080`。

### 每日更新怎么用

网站顶部新增了一个 `每日提醒` 区域：

- **保存今日进度**：把今天的推进、卡点和明日计划保存下来
- **复制今日记录**：快速复制成文本，发给领导或同步到群里
- **最近 7 天记录**：会显示近期保存过的内容

> 注意：这部分数据目前保存在当前浏览器里，适合你自己持续维护；如果换电脑或换浏览器，记录不会自动同步。

### 后续如何补充周报

主要修改 `app.js` 里的 `reportData`：

- **新增一周**：在 `weeks` 数组里增加一个对象
- **补充某周记录**：给对应周的 `updates` 追加事项
- **新增历史事项链接**：在某个事项里补 `links`
- **维护 H1 指标**：更新 `kpis` 中的 `progress`、`actions`、`aiMoves`
- **维护下步动作**：更新 `nextSteps`
- **调整提醒配置**：更新 `dailyReminder` 中的描述和默认提醒时间

### GitHub Pages 部署说明

项目已经补好了 `.github/workflows/deploy-pages.yml`，适合部署到你自己的 GitHub 仓库。

#### 第一步：初始化本地仓库

```powershell
git init
git branch -M main
git add .
git commit -m "init weekly report site"
```

#### 第二步：在 GitHub 新建一个仓库

例如仓库名可以叫：`weekly-report-site`

#### 第三步：把本地项目推上去

把下面的 `你的用户名` 换成你自己的 GitHub 用户名：

```powershell
git remote add origin https://github.com/你的用户名/weekly-report-site.git
git push -u origin main
```

#### 第四步：启用 GitHub Pages

在 GitHub 仓库页面进入：

- `Settings`
- `Pages`
- `Build and deployment`
- `Source` 选择 `GitHub Actions`

之后每次你把新版本 `push` 到 `main`，页面就会自动重新部署。

### 持续迭代建议

- **每天**：在网页里补一次今日进度
- **每周**：把日更内容整理成一条周报事项，补进 `weeks`
- **每月**：更新 `monthlyTodo` 和 `kpis`
- **每次改动后**：执行 `./publish.ps1 -Message "update report"`，快速完成提交和推送


### 数据结构建议

每条周报记录建议包含：

- `date`：如 `4/15 周三`
- `project`：如 `未来美术坊`
- `priority`：如 `P0 / 持续推进`
- `status`：`done` / `ongoing` / `brainstorm`
- `title`：本条事项标题
- `detail`：一句话说明这条事项的背景或意义
- `bullets`：分点补充动作与结果
- `links`：相关文档或网页链接（可选）
