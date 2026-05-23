# 蚕宝宝成长记 | Silkworm's Adventure Quiz

一个专为幼儿园小朋友设计的双语趣味科普问答互动网页。
An interactive and fun bilingual educational quiz game about silkworms designed for kindergarten kids.

## 特色 / Features

- 🌿 **寓教于乐**：精选 8 个关于蚕宝宝生命周期的科普小问题。
- 🐛 **动态成长进度条**：答题过程中，可爱的蚕宝宝会根据进度向前爬行，并随着生命周期发生变化（卵 -> 蚁蚕 -> 大蚕 -> 结茧 -> 蚕蛾）。
- 🎨 **精美童趣设计**：采用柔和的配色方案、圆润的字体和生动的 CSS/SVG 动画。
- 🔊 **合成音效**：利用 **Web Audio API** 实时合成点击、答对、答错及过关的欢快音效，无需下载外部音频文件，加载速度极快！
- 🇨🇳/🇬🇧 **双语支持**：一键切换中文/英文内容。
- ⌨️ **键盘支持**：除触屏与鼠标点击外，还可以按键盘 `1`, `2`, `3`（或 `A`, `B`, `C`）快速选择答案。

## 运行方式 / How to Run

这是一个纯前端的静态网页项目，无需安装任何复杂的后端依赖。

### 方法一：直接双击打开 (Direct Open)
可以直接在浏览器中双击打开 `index.html` 进行体验！

### 方法二：本地服务器启动 (Local Server)
如果您想通过本地服务器运行它，可以在终端中运行：
```bash
# 使用 python 启动
python3 -m http.server 8000

# 或使用 node.js npx 启动
npx http-server -p 8000
```
然后在浏览器中访问：`http://localhost:8000`

---

## 部署到 GitHub Pages / Deploy to GitHub Pages

因为本项目是 100% 静态网页，您可以极其简单地将其部署到 GitHub Pages 上：

1. **新建 GitHub 仓库**：在 GitHub 上创建一个新的公开仓库（例如 `CaterpillarQuiz`）。
2. **初始化 Git 并提交代码**：
   ```bash
   git init
   git add .
   git commit -m "feat: init caterpillar quiz app"
   ```
3. **关联并推送**：
   ```bash
   git remote add origin https://github.com/<your-username>/CaterpillarQuiz.git
   git branch -M main
   git push -u origin main
   ```
4. **开启 GitHub Pages**：
   - 打开 GitHub 仓库页面，点击右上角的 **Settings** (设置)。
   - 在左侧菜单栏中找到并点击 **Pages**。
   - 在 **Build and deployment** 下的 **Source** 选择 `Deploy from a branch`。
   - 在 **Branch** 栏下拉选择 `main` 分支和 `/ (root)` 文件夹，然后点击 **Save**。
   - 等待 1-2 分钟，GitHub 就会提供一个绿色的链接（例如 `https://<your-username>.github.io/CaterpillarQuiz/`），可以直接在手机或平板上打开玩！
