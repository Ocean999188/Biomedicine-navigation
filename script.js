// 分类详情数据
const categoryDetails = {
    protein: {
        title: "🧬 蛋白质结构与功能",
        description: "蛋白质结构与功能数据库是基础研究的核心资源，提供蛋白质序列、结构、功能和生物活性信息。这些数据库是连接基因信息和蛋白质功能的桥梁，对于结构生物学、基于结构的药物设计和靶点预测至关重要。",
        websites: [
            // 综合性蛋白质数据库
            {
                name: "UniProt",
                url: "https://www.uniprot.org/",
                description: "全球领先的高质量、免费蛋白质序列和功能信息资源库",
                tags: ["蛋白质序列", "功能注释", "权威数据库"]
            },
            {
                name: "PDB (RCSB)",
                url: "https://www.rcsb.org/",
                description: "蛋白质结构数据库，收录蛋白质三维结构数据",
                tags: ["三维结构", "结构生物学", "实验数据"]
            },
            {
                name: "wwPDB",
                url: "https://www.wwpdb.org/",
                description: "全球蛋白质数据银行，协调全球蛋白质结构数据",
                tags: ["数据协调", "结构数据", "全球共享"]
            },
            {
                name: "UniProtKB/Swiss-Prot",
                url: "https://www.uniprot.org/uniprotkb/",
                description: "专家人工审校的蛋白质知识库",
                tags: ["人工审校", "高质量注释", "蛋白质知识"]
            },
            // 蛋白质结构预测与建模
            {
                name: "SWISS-MODEL",
                url: "https://swissmodel.expasy.org/",
                description: "全自动蛋白质同源建模服务器",
                tags: ["同源建模", "结构预测", "在线服务器"]
            },
            {
                name: "AlphaFold DB",
                url: "https://alphafold.ebi.ac.uk/",
                description: "AlphaFold 预测的蛋白质结构数据库",
                tags: ["AI预测", "蛋白质结构", "深度学习"]
            },
            {
                name: "Phyre2",
                url: "https://github.com/labihb/phyre2",
                description: "蛋白质同源建模和结构预测",
                tags: ["同源建模", "结构预测", "免费工具"]
            },
            // 蛋白质功能分析
            {
                name: "ExPASy ProtParam",
                url: "https://web.expasy.org/protparam/",
                description: "计算蛋白质物理化学参数",
                tags: ["理化参数", "蛋白质分析", "在线工具"]
            },
            {
                name: "PROSITE",
                url: "https://prosite.expasy.org/",
                description: "蛋白质域、家族和功能位点数据库",
                tags: ["蛋白质域", "功能位点", "家族分类"]
            },
            {
                name: "SMART",
                url: "https://smart.embl.de/",
                description: "蛋白质结构域和功能分析",
                tags: ["结构域", "功能分析", " domain分析"]
            },
            {
                name: "InterPro",
                url: "https://www.ebi.ac.uk/interpro/",
                description: "蛋白质家族和结构域分类",
                tags: ["蛋白质家族", "结构域", "功能分类"]
            },
            // 其他重要资源
            {
                name: "NCBI Protein",
                url: "https://www.ncbi.nlm.nih.gov/protein/",
                description: "NCBI 蛋白质数据库",
                tags: ["NCBI", "蛋白质", "序列数据库"]
            },
            {
                name: "Pfam",
                url: "https://pfam.xfam.org/",
                description: "蛋白质家族数据库",
                tags: ["蛋白质家族", "隐马尔可夫模型", "家族分类"]
            },
            {
                name: "KEGG",
                url: "https://www.kegg.jp/",
                description: "京都基因与基因组百科全书",
                tags: ["代谢通路", "基因组", "系统生物学"]
            },
            {
                name: "Gene Ontology",
                url: "http://geneontology.org/",
                description: "基因本体论 - 基因功能标准化描述",
                tags: ["基因功能", "本体论", "标准化"]
            }
        ]
    },
    drug: {
        title: "💊 药物信息与靶点",
        description: "药物信息与靶点数据库主要用于查询药物的基本信息、靶点、临床状态和监管信息。这些数据库对于药物发现、药理研究和临床用药指导非常重要。",
        websites: [
            {
                name: "DrugBank",
                url: "https://go.drugbank.com/",
                description: "一个综合性的药物数据库，详细收录了FDA批准的药物和处于研究阶段的药物信息，包括其化学结构、药理作用、靶点蛋白、作用机制和药物相互作用等。",
                tags: ["药物信息", "FDA批准", "作用机制"]
            },
            {
                name: "PubChem",
                url: "https://pubchem.ncbi.nlm.nih.gov/",
                description: "由美国国立卫生研究院（NIH）管理的开放化学数据库，收录了海量的化合物、物质和生物活性信息，支持结构检索。",
                tags: ["化合物数据库", "生物活性", "化学结构"]
            },
            {
                name: "IUPHAR/BPS Guide to PHARMACOLOGY",
                url: "https://www.guidetopharmacology.org/",
                description: "一个权威的受体和离子通道数据库，专注于配体-活性-靶点关系，旨在提供药理学的'一站式'资源。",
                tags: ["受体数据库", "离子通道", "药理学"]
            },
            {
                name: "Open Targets",
                url: "https://www.opentargets.org/",
                description: "一个公私合作项目，整合了遗传学、药理学、文献等多种公开数据源，为治疗靶点的系统性识别和优先排序提供评分和证据。",
                tags: ["靶点识别", "遗传学", "药理学"]
            }
        ]
    },
    literature: {
        title: "📚 文献与综合检索",
        description: "文献与综合检索平台是获取生物医学文献和综述的主要途径，支持循证医学研究和系统评价。",
        websites: [
            {
                name: "PubMed",
                url: "https://pubmed.ncbi.nlm.nih.gov/",
                description: "由美国国家医学图书馆（NLM）开发，是生命科学和生物医学领域最权威、最全面的文献检索平台。",
                tags: ["文献检索", "生命科学", "权威平台"]
            },
            {
                name: "Cochrane Library",
                url: "https://www.cochranelibrary.com/",
                description: "一个提供高质量、独立性证据的数据库，尤其以系统评价著称，是循证医学的核心资源。",
                tags: ["循证医学", "系统评价", "高质量证据"]
            }
        ]
    },
    safety: {
        title: "⚖️ 药物安全与监管",
        description: "药物安全与监管数据库提供药品上市后的安全性信息、官方标签和监管政策，对于临床用药安全和监管合规非常重要。",
        websites: [
            {
                name: "DailyMed",
                url: "https://dailymed.nlm.nih.gov/dailymed/",
                description: "美国国立卫生研究院（NIH）运营的网站，提供美国市场上药品的官方标签（说明书）信息，数据来源于美国食品药品监督管理局（FDA）。",
                tags: ["药品标签", "说明书", "FDA数据"]
            },
            {
                name: "Drugs@FDA",
                url: "https://www.accessdata.fda.gov/scripts/cder/daf/",
                description: "美国食品药品监督管理局（FDA）的官方数据库，可以检索到FDA批准的药品信息，包括审评文件、说明书等。",
                tags: ["FDA批准", "审评文件", "官方数据库"]
            },
            {
                name: "SIDER",
                url: "http://sideeffects.embl.de/",
                description: "一个从公开文档和药品说明书中提取的药品副作用数据库，记录了已上市药品的副作用发生频率和分类。",
                tags: ["副作用", "药品安全", "上市后监测"]
            },
            {
                name: "LiverTox",
                url: "https://www.ncbi.nlm.nih.gov/books/NBK547852/",
                description: "由美国国家糖尿病、消化和肾脏疾病研究所（NIDDK）开发的资源，专门提供关于处方药、非处方药等物质引起肝损伤的详细信息。",
                tags: ["肝损伤", "药物毒性", "肝脏安全"]
            }
        ]
    },
    special: {
        title: "🧪 特殊领域与前沿",
        description: "特殊领域与前沿数据库专注于特定领域，如遗传药理学、GPCR等，为精准医疗和AI驱动的药物发现提供高质量数据集。",
        websites: [
            {
                name: "PharmGKB",
                url: "https://www.pharmgkb.org/",
                description: "药物基因组学知识库，收集关于遗传变异如何影响个体对药物反应的详细信息，用于指导精准医疗。",
                tags: ["药物基因组学", "精准医疗", "遗传变异"]
            },
            {
                name: "GLASS2",
                url: "https://zhanggroup.org/GLASS/",
                description: "一个专注于G蛋白偶联受体（GPCR）-配体关联的综合数据库。GPCR是重要的药物靶点家族，该数据库为AI驱动的药物发现提供了高质量数据集。",
                tags: ["GPCR", "药物靶点", "AI驱动"]
            },
            {
                name: "ZINC",
                url: "https://zinc.docking.org/",
                description: "一个收录了海量商业化化合物结构的数据库，主要用于虚拟筛选，帮助研究人员寻找潜在的先导化合物。",
                tags: ["化合物库", "虚拟筛选", "先导化合物"]
            }
        ]
    },
    tools: {
        title: "🔬 药物设计工具",
        description: "药物设计工具提供在线计算功能，如pKa预测、代谢预测、毒理预测等，支持药物设计和性质优化。",
        websites: [
            {
                name: "Xundrug MolGpKa",
                url: "https://xundrug.cn/molgpka",
                description: "分子pKa预测平台，支持多质子化状态分析，适用于药物设计和物化性质预测。",
                tags: ["pKa预测", "物化性质", "药物设计"]
            },
            {
                name: "Xenosite",
                url: "https://xenosite.org/",
                description: "预测药物N-脱烷基化代谢位点的在线工具，基于机器学习算法，支持多种化合物格式输入。",
                tags: ["代谢预测", "机器学习", "ADMET"]
            },
            {
                name: "VenomPred2",
                url: "https://www.mmvsl.it/wp/venompred2/",
                description: "毒理预测工具，用于评估化合物的毒性和安全性。",
                tags: ["毒理预测", "安全性评估", "毒性分析"]
            }
        ]
    }
};

// 网站详情数据（用于首页模态框）
const siteDetails = {
    xenosite: {
        title: "Xenosite",
        description: "预测药物N-脱烷基化代谢位点的在线工具，基于机器学习算法，支持多种化合物格式输入。",
        features: [
            "基于机器学习算法的代谢位点预测",
            "支持多种化合物输入格式",
            "提供详细的代谢产物预测结果",
            "可视化展示代谢位点",
            "批量处理功能（需注册）"
        ],
        usage: "适用于药物代谢研究、先导化合物优化和ADMET性质预测。",
        url: "https://xenosite.org/"
    },
    xundrug: {
        title: "Xundrug MolGpKa",
        description: "分子pKa预测平台，支持多质子化状态分析，适用于药物设计和物化性质预测。",
        features: [
            "多质子化状态pKa预测",
            "支持复杂分子结构",
            "提供pKa分布图",
            "预测不同pH条件下的电离状态",
            "批量计算功能"
        ],
        usage: "用于药物溶解度预测、制剂设计和吸收预测。",
        url: "https://xundrug.cn/molgpka"
    }
};

// DOM元素
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const modal = document.getElementById('category-modal');
const modalTitle = document.getElementById('modal-title');
const modalContent = document.getElementById('modal-content');

// 主题切换功能
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    
    if (document.body.classList.contains('dark-theme')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    }
}

// 初始化主题
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
}

// 搜索功能（首页）
function searchSites() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (!searchTerm) {
        // 如果搜索框为空，显示所有卡片
        document.querySelectorAll('.category-card').forEach(card => {
            card.style.display = 'flex';
        });
        return;
    }
    
    document.querySelectorAll('.category-card').forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const description = card.querySelector('.category-description').textContent.toLowerCase();
        const tags = Array.from(card.querySelectorAll('.category-tags .tag')).map(tag => tag.textContent.toLowerCase());
        
        const matches = title.includes(searchTerm) || 
                       description.includes(searchTerm) || 
                       tags.some(tag => tag.includes(searchTerm));
        
        card.style.display = matches ? 'flex' : 'none';
    });
}

// 显示分类详情模态框
function showCategoryDetails(categoryId) {
    const category = categoryDetails[categoryId];
    if (!category) return;
    
    modalTitle.textContent = category.title;
    
    modalContent.innerHTML = `
        <div class="category-detail">
            <div class="detail-header">
                <h4>分类描述</h4>
                <p>${category.description}</p>
            </div>
            
            <div class="detail-section">
                <h4><i class="fas fa-link"></i> 包含网站</h4>
                <div class="websites-list">
                    ${category.websites.map(website => `
                        <div class="website-item">
                            <strong>${website.name}</strong>
                            <a href="${website.url}" target="_blank" class="website-url">${website.url}</a>
                            <p>${website.description}</p>
                            <div class="tags">
                                ${website.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="detail-section">
                <h4><i class="fas fa-cogs"></i> 主要用途</h4>
                <ul class="usage-list">
                    <li><i class="fas fa-check"></i> 支持基础科学研究</li>
                    <li><i class="fas fa-check"></i> 辅助药物发现和设计</li>
                    <li><i class="fas fa-check"></i> 提供临床用药指导</li>
                    <li><i class="fas fa-check"></i> 支持循证医学研究</li>
                </ul>
            </div>
            
            <div class="detail-actions">
                <a href="details.html#${categoryId}" class="btn-primary">
                    <i class="fas fa-external-link-alt"></i> 查看详细列表
                </a>
            </div>
        </div>
    `;
    
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// 关闭模态框
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// 标签点击搜索
function setupTagSearch() {
    document.querySelectorAll('.search-tags .tag').forEach(tag => {
        tag.addEventListener('click', () => {
            const tagText = tag.textContent;
            searchInput.value = tagText;
            searchSites();
        });
    });
}

// 初始化详情页（如果当前页面是详情页）
function initDetailsPage() {
    if (!window.location.pathname.includes('details.html')) return;
    
    // 初始化左侧导航（树形结构）
    const categoryNav = document.querySelector('.category-nav');
    if (categoryNav) {
        let navHTML = '';
        for (const [id, category] of Object.entries(categoryDetails)) {
            navHTML += `
                <li class="category-item">
                    <div class="category-header" data-category="${id}">
                        <div class="category-title">
                            <i class="fas fa-chevron-right expand-icon"></i>
                            <span class="nav-text">${category.title}</span>
                        </div>
                        <span class="site-count">${category.websites.length}个网站</span>
                    </div>
                    <ul class="site-list" id="site-list-${id}">
                        ${category.websites.map(website => `
                            <li>
                                <a href="${website.url}" target="_blank" class="site-link" title="${website.description}">
                                    <i class="fas fa-external-link-alt"></i>
                                    <span>${website.name}</span>
                                </a>
                            </li>
                        `).join('')}
                    </ul>
                </li>
            `;
        }
        categoryNav.innerHTML = navHTML;
    }
    
    // 初始化网站列表
    const detailsContent = document.querySelector('.details-content');
    if (detailsContent) {
        let contentHTML = '';
        for (const [id, category] of Object.entries(categoryDetails)) {
            contentHTML += `
                <section id="${id}" class="category-section">
                    <div class="category-header">
                        <div class="category-icon" style="background: var(--gradient); border-radius: 12px; width: 50px; height: 50px; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem;">
                            <i class="${getCategoryIcon(id)}"></i>
                        </div>
                        <h2>${category.title}</h2>
                    </div>
                    <p class="category-description">${category.description}</p>
                    
                    <div class="sites-list">
                        ${category.websites.map(website => `
                            <div class="site-card">
                                <div class="site-header">
                                    <div>
                                        <h3>${website.name}</h3>
                                        <a href="${website.url}" target="_blank" class="site-url">${website.url}</a>
                                    </div>
                                </div>
                                <p class="site-description">${website.description}</p>
                                <div class="site-tags">
                                    ${website.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                                </div>
                                <div class="site-actions">
                                    <a href="${website.url}" target="_blank" class="btn-primary">
                                        <i class="fas fa-external-link-alt"></i> 立即访问
                                    </a>
                                    <button class="btn-secondary" onclick="window.open('${website.url}', '_blank')">
                                        <i class="fas fa-info-circle"></i> 新标签页打开
                                    </button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </section>
            `;
        }
        detailsContent.innerHTML = contentHTML;
    }
    
    // 初始化左侧导航点击事件
    initCategoryNavigation();
    
    // 默认展开第一个分类
    setTimeout(() => {
        const firstCategory = document.querySelector('.category-header[data-category="protein"]');
        if (firstCategory) {
            toggleCategoryList(firstCategory);
        }
    }, 100);
}

// 获取分类图标
function getCategoryIcon(categoryId) {
    const icons = {
        protein: 'fas fa-atom',
        drug: 'fas fa-capsules',
        literature: 'fas fa-book-open',
        safety: 'fas fa-shield-alt',
        special: 'fas fa-flask',
        tools: 'fas fa-tools'
    };
    return icons[categoryId] || 'fas fa-link';
}

// 初始化分类导航功能
function initCategoryNavigation() {
    // 添加分类标题点击事件
    document.querySelectorAll('.category-header').forEach(header => {
        header.addEventListener('click', function() {
            toggleCategoryList(this);
        });
    });
    
    // 添加网站链接点击事件
    document.querySelectorAll('.site-link').forEach(link => {
        link.addEventListener('click', function(e) {
            // 阻止事件冒泡，避免触发父级分类的点击事件
            e.stopPropagation();
            
            // 标记为已点击
            this.classList.add('visited');
            
            // 可选：添加访问统计
            const siteName = this.querySelector('span').textContent;
            trackSiteVisit(siteName);
        });
    });
}

// 切换分类列表的展开/收起
function toggleCategoryList(headerElement) {
    const categoryId = headerElement.getAttribute('data-category');
    const siteList = document.getElementById(`site-list-${categoryId}`);
    const expandIcon = headerElement.querySelector('.expand-icon');

    if (siteList && expandIcon) {
        const isExpanded = siteList.classList.contains('expanded');

        if (isExpanded) {
            // 收起列表 - 使用 display: none 完全隐藏
            siteList.classList.remove('expanded');
            siteList.style.display = 'none';
            expandIcon.classList.remove('fa-chevron-down');
            expandIcon.classList.add('fa-chevron-right');
        } else {
            // 展开列表 - 使用 display: block 显示
            siteList.style.display = 'block';
            siteList.classList.add('expanded');
            expandIcon.classList.remove('fa-chevron-right');
            expandIcon.classList.add('fa-chevron-down');
            // 不再自动滚动到对应内容区域
        }
    }
}

// 平滑滚动
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// 初始化事件监听器
function initEventListeners() {
    // 主题切换
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // 搜索功能
    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', searchSites);
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchSites();
            }
        });
    }
    
    // 模态框关闭
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
    
    // 标签搜索
    if (document.querySelector('.search-tags')) {
        setupTagSearch();
    }
}

// 添加网站详情样式
function addDetailStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .category-detail {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }
        
        .detail-header h4 {
            font-size: 1.2rem;
            margin-bottom: 0.5rem;
            color: var(--primary-color);
        }
        
        .detail-header p {
            color: var(--text-light);
            line-height: 1.6;
        }
        
        .detail-section {
            background: var(--light-color);
            padding: 1.2rem;
            border-radius: var(--radius);
            border: 1px solid var(--border-color);
        }
        
        .detail-section h4 {
            font-size: 1.1rem;
            margin-bottom: 0.75rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            color: var(--text-color);
        }
        
        .websites-list {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
        
        .website-item {
            padding: 1rem;
            background: rgba(74, 111, 165, 0.05);
            border-radius: var(--radius);
        }
        
        .website-item strong {
            display: block;
            margin-bottom: 0.5rem;
            color: var(--text-color);
        }
        
        .website-url {
            display: block;
            color: var(--primary-color);
            font-size: 0.9rem;
            margin-bottom: 0.5rem;
            word-break: break-all;
            text-decoration: none;
        }
        
        .website-url:hover {
            text-decoration: underline;
        }
        
        .website-item p {
            color: var(--text-light);
            font-size: 0.9rem;
            margin-bottom: 0.5rem;
        }
        
        .website-item .tags {
            display: flex;
            gap: 0.5rem;
            flex-wrap: wrap;
        }
        
        .usage-list {
            list-style: none;
            padding-left: 0;
        }
        
        .usage-list li {
            margin-bottom: 0.5rem;
            display: flex;
            align-items: flex-start;
            gap: 0.5rem;
        }
        
        .usage-list li i {
            color: var(--success-color);
            margin-top: 0.2rem;
        }
        
        .detail-actions {
            text-align: center;
        }
    `;
    document.head.appendChild(style);
}

// 初始化网站
function initWebsite() {
    initTheme();
    initEventListeners();
    addDetailStyles();
    initSmoothScroll();
    initDetailsPage();
    
    console.log('生物医学研究导航平台已初始化');
    console.log('功能说明：');
    console.log('1. 首页展示6大分类总结');
    console.log('2. 点击分类卡片查看详情或进入详细浏览页');
    console.log('3. 详细浏览页左侧导航，右侧显示具体网站信息');
    console.log('4. 点击右上角图标切换深色/浅色主题');
    console.log('5. 支持搜索功能和标签快速筛选');
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', initWebsite);

// 添加键盘快捷键支持
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K 聚焦搜索框
    if ((e.ctrlKey || e.metaKey) && e.key === 'k' && searchInput) {
        e.preventDefault();
        searchInput.focus();
    }
    
    // ESC 关闭模态框
    if (e.key === 'Escape' && modal && modal.style.display === 'flex') {
        closeModal();
    }
    
    // Ctrl/Cmd + / 显示帮助
    if ((e.ctrlKey || e.metaKey) && e.key === '/') {
        e.preventDefault();
        alert('快捷键说明：\nCtrl/Cmd + K: 聚焦搜索框\nESC: 关闭模态框\nCtrl/Cmd + /: 显示此帮助\n数字键1-6: 展开对应分类网站列表');
    }
    
    // 数字键1-6展开对应分类网站列表
    if (e.key >= '1' && e.key <= '6' && window.location.pathname.includes('details.html')) {
        e.preventDefault();
        const categoryIds = ['protein', 'drug', 'literature', 'safety', 'special', 'tools'];
        const index = parseInt(e.key) - 1;
        if (categoryIds[index]) {
            const header = document.querySelector(`.category-header[data-category="${categoryIds[index]}"]`);
            if (header) {
                toggleCategoryList(header);
            }
        }
    }
});

// 添加网站访问统计（模拟）
function trackSiteVisit(siteName) {
    console.log(`访问了网站: ${siteName}`);
    // 在实际应用中，这里可以添加Google Analytics或其他统计代码
}

// 为所有外部链接添加访问跟踪
document.addEventListener('click', (e) => {
    if (e.target.tagName === 'A' && e.target.href.includes('http') && e.target.target === '_blank') {
        const siteName = e.target.textContent || '未知网站';
        trackSiteVisit(siteName);
        
        // 如果链接在简介列表中，提供更好的视觉反馈
        if (e.target.closest('.summary-websites')) {
            const linkItem = e.target.closest('li');
            if (linkItem) {
                linkItem.style.backgroundColor = 'rgba(74, 111, 165, 0.1)';
                setTimeout(() => {
                    linkItem.style.backgroundColor = '';
                }, 1000);
            }
        }
    }
});

// 添加简介列表网站链接的悬停提示增强
function enhanceSummaryLinks() {
    const summaryLinks = document.querySelectorAll('.summary-websites a');
    summaryLinks.forEach(link => {
        // 确保所有链接都有title属性
        if (!link.title) {
            const listItem = link.closest('li');
            if (listItem) {
                const text = listItem.textContent.replace('link', '').trim();
                link.title = `访问 ${text} 网站`;
            }
        }
    });
}

// 在初始化网站时调用
function initWebsite() {
    initTheme();
    initEventListeners();
    addDetailStyles();
    initSmoothScroll();
    initDetailsPage();
    
    console.log('生物医学研究导航平台已初始化');
    console.log('功能说明：');
    console.log('1. 首页展示6大分类总结');
    console.log('2. 点击分类卡片查看详情或进入详细浏览页');
    console.log('3. 详细浏览页左侧导航可展开网站列表，右侧显示具体网站信息');
    console.log('4. 点击右上角图标切换深色/浅色主题');
    console.log('5. 支持搜索功能和标签快速筛选');
    console.log('6. 键盘快捷键：数字键1-6展开对应分类网站列表');
}