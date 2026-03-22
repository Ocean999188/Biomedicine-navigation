# 生物医学研究导航平台项目

## 项目概述
基于原有的药物设计导航平台，重新创建了一个更全面的生物医学研究导航平台，整合了六大领域的核心资源。

## 网站结构
1. **首页 (index.html)** - 展示6大分类总结卡片
2. **详细浏览页 (details.html)** - 左侧导航+右侧网站详情的两栏布局

## 六大分类领域
1. **🧬 蛋白质结构与功能** (4个网站)
   - UniProt, PDB, ChEMBL, BindingDB

2. **💊 药物信息与靶点** (4个网站)  
   - DrugBank, PubChem, IUPHAR/BPS, Open Targets

3. **📚 文献与综合检索** (2个网站)
   - PubMed, Cochrane Library

4. **⚖️ 药物安全与监管** (4个网站)
   - DailyMed, Drugs@FDA, SIDER, LiverTox

5. **🧪 特殊领域与前沿** (3个网站)
   - PharmGKB, GLASS2, ZINC

6. **🔬 药物设计工具** (3个网站)
   - Xundrug MolGpKa, Xenosite, VenomPred2

## 功能特性
- 保持原有风格：蓝色渐变主题，卡片式设计
- 新增双页面导航：首页分类总结 + 详情页具体网站
- 左侧固定导航栏：快速跳转到不同分类
- 响应式设计：适配桌面和移动设备
- 深色/浅色主题切换
- 搜索功能：按网站名称、描述、标签搜索
- 一键访问：直接跳转到目标网站

## 技术实现
- HTML5 + CSS3 + JavaScript
- Font Awesome 图标库
- Google Fonts (Inter + Poppins)
- 本地HTTP服务器测试 (Python http.server)

## 文件结构
```
260322-net/
├── index.html      # 首页
├── details.html    # 详细浏览页
├── style.css       # 样式文件
└── script.js       # JavaScript功能
```

## 使用说明
1. 首页查看6大分类总结卡片
2. 点击"查看详情"进入详细浏览页
3. 左侧导航栏选择分类快速跳转
4. 右侧查看具体网站信息和访问链接
5. 使用搜索功能快速定位目标网站
6. 右上角切换深色/浅色主题