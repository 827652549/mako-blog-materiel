# mako blog materiel

博客配套素材仓库，包含演示 HTML、示例视频等资源。

## Git LFS

本仓库使用 [Git LFS](https://git-lfs.com) 管理 MP4 等大文件。拉取前需先安装并初始化：

```bash
# macOS
brew install git-lfs

# Ubuntu / Debian
apt install git-lfs

# Windows：去 https://git-lfs.com 下载安装包

# 安装后执行一次（全局生效）
git lfs install
```

安装完成后正常 `git clone` 即可，LFS 文件会自动下载。若未安装 LFS 直接克隆，MP4 文件将只是一个指针文件（几十字节），无法正常播放。

## 目录结构

| 目录 | 说明 |
|------|------|
| [web-player-lab](web-player-lab/) | Web 播放器系列文章配套演示 |