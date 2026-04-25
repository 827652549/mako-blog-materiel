# web-player-lab

一个配套 Web 播放器系列文章的演示仓库。每一期文章对应一个独立目录，可直接在浏览器中打开运行，无需构建工具。

## 目录

| 目录 | 主题 | 配套文章 |
|------|------|----------|
| [01-mp4-moov-detection](web-player-lab/01-mp4-moov-detection/) | MP4 box 结构解析 + Chrome 请求行为模拟 | MP4 与 `<video>`：浏览器的播放行为，已经悄悄发生了变化 |

## 使用方式

克隆仓库后，直接用浏览器打开对应目录下的 `index.html` 即可。所有文件处理均在本地完成，无需网络请求。

```bash
git clone https://github.com/your-username/web-player-lab.git
open web-player-lab/01-mp4-moov-detection/index.html
```

## 系列规划

- `02-fmp4-mse-basic` — fmp4 结构 + MediaSource API 最小 demo
- `03-flv-tag-parser` — FLV tag 格式解析与流式读取
- `04-hls-m3u8-player` — M3U8 分片请求流程
- `05-webcodecs-decode` — VideoDecoder → Canvas 解码管线
