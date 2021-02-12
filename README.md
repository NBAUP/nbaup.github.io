# nbamax.com

[![GitHub Pages](https://github.com/NBAUP/nbaup.github.io/workflows/GitHub%20Pages/badge.svg)](https://github.com/NBAUP/nbaup.github.io/actions)

## 常用命令

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
