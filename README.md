# nbamax.com

[![GitHub Pages](https://github.com/NBAUP/nbaup.github.io/workflows/GitHub%20Pages/badge.svg)](https://github.com/NBAUP/nbaup.github.io/actions)

## Install

```sh
git clone https://github.com/NBAUP/nbaup.github.io
git clone https://github.com/YunYouJun/hexo-theme-yun themes/yun
yarn
```

## 常用命令

### 新建文章

```sh
hexo new post 文章名称
```

```yaml
---
url: 跳转的链接
---
```

### 备份

```sh
git add -A
git commit -m "backup"
git push
```

sh update.sh

### 还原备份

```sh
git reset --hard
git reset --hard HEAD^
```

### 生成站点地图

```sh
hexo clean
hexo g
```

站点地图为 `public` 文件夹下的 `sitemap.xml`。
