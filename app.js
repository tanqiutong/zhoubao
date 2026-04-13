const reportData = {
  owner: "谭秋彤",
  period: "2026 年 4 月",
  generatedAt: "2026-04-13 · 对齐更新",
  intro:
    "聚焦未来美术坊三期需求推进与成长守护社区 4 月重点动作，把今天与领导对齐后的进度、目标和历史记录统一沉淀成可复用的周报面板。",
  dailyReminder: {
    defaultTime: "18:00",
    description:
      "建议每天收工前更新一次进度，至少补充今天推进、当前卡点和明日计划三类信息。网站会把记录保存到当前浏览器，方便你持续迭代。",
    checklist: [
      {
        title: "今天推进",
        text: "记录今天推进了哪些需求、评审、对齐或运营事项。"
      },
      {
        title: "风险卡点",
        text: "写清楚还卡在哪里、等谁反馈、最晚什么时间需要结果。"
      },
      {
        title: "明日计划",
        text: "用 1 到 3 条说明明天最重要的推进动作。"
      }
    ]
  },
  weeks: [
    {
      id: "week-1",
      label: "4 月第 1 周",
      dateRange: "4/1 - 4/4",
      focus: "完成小程序立项推进、竞品分析机制启动与成长守护常规运营协同。",
      highlights: [
        "和谢恬确认未来美术坊申请方式，并在中午前同步群内",
        "启动日更美术产品竞品分析 Agent，建立持续观察机制",
        "提测前补充评审协同，提前拉齐测试侧同学",
        "成长守护维持内容审核、精选打标与互动支持"
      ],
      updates: [
        {
          date: "4/1 周三",
          project: "未来美术坊",
          priority: "P0 / P1 / P2",
          status: "done",
          title: "立项申请与提测协同启动",
          detail: "围绕小程序申请方式、竞品 Agent 建设和提测流程做前置铺垫，解决立项阶段的信息同步问题。",
          bullets: [
            "P0：已与谢恬沟通申请方式，并计划在中午前发群同步",
            "P1：开始搭建美术产品竞品分析 Agent，目标是形成日更机制",
            "P2：针对昨晚提测群事项，补齐表格和评审前测试同学协同"
          ]
        },
        {
          date: "4/2 周四",
          project: "未来美术坊",
          priority: "P0 / P1 / P2",
          status: "ongoing",
          title: "竞品分析与需求文档持续补强",
          detail: "继续推进竞品分析推送、需求文档更新与运营资料库沉淀，开始形成产品资料的结构化资产。",
          bullets: [
            "P0：竞品分析推送已产出首版简报页面",
            "P1：需求文档需要在下班前继续补齐",
            "P2：整理美术坊产品运营资料库、产品介绍、功能介绍与迭代进度"
          ],
          links: [
            {
              label: "竞品简报示例",
              url: "http://localhost:7788/brief_2026-04-02.html"
            }
          ]
        },
        {
          date: "4/1 - 4/2",
          project: "成长守护",
          priority: "P0 / P1",
          status: "ongoing",
          title: "内容审核与话题 PK 运营并行推进",
          detail: "围绕社区精选、审核、互动和话题 PK 进行运营支持，同时探索技能化生产方式。",
          bullets: [
            "P0：持续进行内容审核、精选打标与互动",
            "P1：生产话题 PK 的 skill，已在 WorkBuddy 中调试",
            "4/2：话题 PK 上新待确认，需要补齐运营对齐信息"
          ]
        }
      ]
    },
    {
      id: "week-2",
      label: "4 月第 2 周",
      dateRange: "4/7 - 4/11",
      focus: "把美术坊需求、竞品输入和 AI 画廊方向进一步收束，并维持成长守护日常运营节奏。",
      highlights: [
        "持续更新每日竞品简报，并补充昨天竞品案例",
        "需求文档仍缺设计交互图，需要继续跟进",
        "AI 画廊构想进入问题收束阶段，需明确目标与边界",
        "成长守护话题 PK 有新内容上新，方案仍在脑暴确认中"
      ],
      updates: [
        {
          date: "4/8 周三",
          project: "未来美术坊",
          priority: "持续推进",
          status: "ongoing",
          title: "每日竞品简报与流程资料补充",
          detail: "继续维护竞品简报，并补录乡村童画坊案例，同时沉淀流程图、产品介绍与需求文档链接。",
          bullets: [
            "维护每日竞品简报站点 art-report",
            "补充昨日竞品案例：乡村童画坊（魔搭社区）摄像头互动美育工具",
            "需求文档仍缺设计交互图，流程脑图和产品介绍链接已串联"
          ],
          links: [
            {
              label: "每日竞品简报",
              url: "https://tanqiutong.github.io/art-report/"
            },
            {
              label: "乡村童画坊案例",
              url: "https://modelscope.cn/studios/CoCo0000/Camera-Interactive-Painting-Tool2.0/summary"
            },
            {
              label: "需求文档",
              url: "https://doc.weixin.qq.com/doc/w3_AXkA4gY0AKECNpSvKxXcGQwCWQAP8?scode=AJEAIQdfAAoyAG158qAXkA4gY0AKE"
            },
            {
              label: "流程脑图",
              url: "https://doc.weixin.qq.com/mind/m4_AXkA4gY0AKECNquiPi7t1T4OQnO67?scode=AJEAIQdfAAoe1lUtTdAXkA4gY0AKE"
            },
            {
              label: "产品介绍",
              url: "https://doc.weixin.qq.com/doc/w3_AXkA4gY0AKECNgXB0uhckQAGtVLr8?scode=AJEAIQdfAAoECrwVwUAXkA4gY0AKE"
            }
          ]
        },
        {
          date: "4/9 周四",
          project: "未来美术坊",
          priority: "方向收敛",
          status: "brainstorm",
          title: "AI 画廊方向问题收束",
          detail: "围绕星光画廊核心目标、用户优先级、内容来源和 AI 价值表达进行集中梳理，形成后续方案评审的关键问题池。",
          bullets: [
            "需要明确星光画廊更偏展示、运营、AI 卖点还是腾讯特色表达",
            "待确认核心用户优先级：老师、运营还是外部访客",
            "待明确与活动、动态、我的三者的边界，以及最小展示单元",
            "需评估腾讯游戏元素、勋章挑战机制、公开展示授权与后台审核范围"
          ],
          links: [
            {
              label: "每日竞品简报",
              url: "https://tanqiutong.github.io/art-report/"
            },
            {
              label: "需求文档",
              url: "https://doc.weixin.qq.com/doc/w3_AXkA4gY0AKECNpSvKxXcGQwCWQAP8?scode=AJEAIQdfAAoyAG158qAXkA4gY0AKE"
            }
          ]
        },
        {
          date: "4/8 - 4/9",
          project: "成长守护",
          priority: "日常运营 / 新话题",
          status: "ongoing",
          title: "精选审核稳定推进，话题 PK 方案待拍板",
          detail: "维持社区精选和审核节奏，同时围绕今日上新的话题 PK 进行内容更新和方案脑暴。",
          bullets: [
            "持续进行日常运营：精选、审核与内容支持",
            "4/8：话题 PK 已更新 3 条，仍需继续对齐",
            "4/9：今日上新话题 PK 方案仍在脑暴，中午前需确认方向"
          ]
        }
      ]
    },
    {
      id: "week-3",
      label: "4 月第 3 周",
      dateRange: "4/13 - 4/17",
      focus: "和领导对齐后，明确未来美术坊三期需求节奏与成长守护社区 4 月重点动作，当前工作从方向收敛转向节点推进。",
      highlights: [
        "未来美术坊第一期需求正在审核中，预计 4 月 16 日前收到审核结果",
        "第二期需求文档进入最终版确认，本周补 Figma 图并约开发确认需求与排期",
        "第三期需求文档开始补价值论证、用户需求、UGC 审核与使用范围等核心信息",
        "成长守护聚焦五一前活动上新、专家语料 skill 化与 AI 改版后用户分析"
      ],
      updates: [
        {
          date: "4/13 周一",
          project: "未来美术坊",
          priority: "第一期 / 第二期",
          status: "ongoing",
          title: "一期审核跟进与二期排期确认启动",
          detail: "今天对齐后明确：第一期需求处于审核阶段，第二期进入终版校对、补图和开发排期确认阶段。",
          bullets: [
            "第一期需求正在审核中，预计 4 月 16 日前拿到审核结果",
            "第二期需求文档进入最终版确认，需要继续检查是否仍有纰漏",
            "本周补充第二期 Figma 图片，便于研发和评审同步理解",
            "这周约开发等相关同学确认第二期需求和开发排期"
          ]
        },
        {
          date: "4/13 周一",
          project: "未来美术坊",
          priority: "第三期需求",
          status: "ongoing",
          title: "第三期需求文档补充核心论证信息",
          detail: "第三期不再只补功能描述，而是补齐为什么做、给谁做、怎么管和怎么用的完整论证，降低后续评审成本。",
          bullets: [
            "补充每个功能的价值是什么，以及新功能上架的意义点在哪里",
            "明确用户需求来自哪里，补齐功能对应的真实场景与痛点",
            "补充管理端如何审核 UGC 的规则与流程边界",
            "说明功能使用范围、有无次数限制，以及首期上线的控制策略"
          ]
        },
        {
          date: "4/13 周一",
          project: "成长守护",
          priority: "五一前 / 四月内",
          status: "ongoing",
          title: "五一活动与 AI 用户研究并行推进",
          detail: "成长守护社区已明确近期优先级：先保五一前活动上新，再推进专家语料 skill 化和 AI 改版后的用户研究。",
          bullets: [
            "五一前上新活动是当前最紧急事项，需要优先推进落地",
            "梳理家庭教育专家语料如何蒸馏成一个可复用的 skill",
            "专家语料库对社区与其他产品的建议供给、运营知识供给可作为闲暇推进项",
            "四月内要启动 AI 改版后的用户分析动作，优先在有问必答等场景寻找可联系、可加微信的家长用户",
            "计划围绕这些家长用户做一期深度访谈和用户调研，并观察用户访谈过程中 AI 技术的使用情况"
          ]
        }
      ]
    }
  ],
  kpis: [
    {
      project: "未来美术坊",
      owner: "产品 / 用户 / 教师项目",
      target: "2026 H1 完成立项、合规，并上线首页、活动、动态、星光画廊、我的 5 项主功能。",
      progress:
        "第一期需求审核中，预计 4 月 16 日前获得结果；第二期最终版正在校对并补齐 Figma 图，本周会同开发确认需求与排期；第三期开始补充功能价值、用户需求、UGC 审核规则与使用范围等核心信息。",
      actions: [
        "跟进第一期审核反馈，拿到结果后及时回写文档与排期影响",
        "完成第二期终版校对、Figma 图片补充，并与开发确认需求和开发排期",
        "完善第三期需求文档，补齐功能价值、上架意义、用户需求、UGC 审核、使用范围与次数限制",
        "持续推进小程序注册、立项、合规和评审协同"
      ],
      aiMoves: [
        "通过竞品 Agent、AI 辅助分析和需求整理提升需求输入效率",
        "围绕星光画廊继续明确 AI 的表达方式和产品边界",
        "目标是相较教室小程序产品与开发协同，整体提速 50%"
      ]
    },
    {
      project: "成长守护",
      owner: "运营 / 用户 / 青少年产品",
      target: "2026 H1 月活 350 万，推动管控工具推广、提升使用量与社区活跃，同时保障合规安全。",
      progress:
        "已明确五一前活动上新是最高优先级，同时把家庭教育专家语料 skill 化、知识供给和 AI 改版后用户分析列为 4 月重点动作。",
      actions: [
        "五一前完成社区上新活动方案和落地准备",
        "设计家庭教育专家语料蒸馏成 skill 的方案",
        "梳理专家语料库向社区与其他产品提供建议和运营知识供给的方式",
        "四月内启动 AI 改版后的用户分析、用户调研与深度访谈"
      ],
      aiMoves: [
        "在有问必答等场景触达可联系的家长用户，沉淀访谈样本",
        "观察用户访谈过程中 AI 技术的使用情况，评估后续产品机会",
        "持续提升内容生产和审核环节的 AI 提效能力"
      ]
    }
  ],
  monthlyTodo: [
    {
      project: "未来美术坊",
      items: [
        "跟进第一期需求审核结果，预计 4 月 16 日前拿到反馈",
        "完成第二期需求文档最终版校对，并补充 Figma 图片",
        "这周约开发等相关同学确认第二期需求与开发排期",
        "在第三期文档补充功能价值、上架意义、用户需求、UGC 审核、使用范围与次数限制",
        "持续维护竞品简报、需求资料和 AI 画廊相关方案沉淀"
      ]
    },
    {
      project: "成长守护",
      items: [
        "优先推进五一前社区上新活动落地",
        "梳理家庭教育专家语料蒸馏成 skill 的方案",
        "评估专家语料库对社区与其他产品的建议供给与运营知识供给价值",
        "四月内启动 AI 改版后的用户分析动作",
        "触达可联系、可加微信的家长用户，完成一轮深度访谈与用户调研"
      ]
    }
  ],
  openQuestions: [
    "星光画廊 H1 最核心目标应优先落在展示、运营、AI 卖点还是腾讯特色表达？",
    "核心用户应优先服务老师、运营，还是外部访客？",
    "星光画廊与活动、动态、我的之间的边界如何划分？",
    "内容来源优先采用运营精选、老师投稿，还是混合机制？",
    "最小展示单元应定义为作品、专题展，还是活动展？",
    "AI 在画廊中的角色更偏包装、解读、辅助文案，还是直接生成内容？",
    "腾讯游戏元素应体现为任务勋章机制，还是内容主题与视觉风格？",
    "是否需要点亮、勋章、挑战赛机制，做到什么程度更适合首期上线？",
    "学生作品公开展示的授权、隐私和合规边界如何设定？",
    "首期上线是否需要同步包含后台审核、专题配置和推荐位管理？"
  ],
  nextSteps: [
    {
      title: "等待一期审核结果",
      description: "重点盯住 4 月 16 日前的审核反馈，拿到结论后及时评估对排期和后续需求的影响。"
    },
    {
      title: "完成二期终版与排期确认",
      description: "补齐第二期 Figma 图片、确认文档无遗漏，并在本周约开发同学一起对齐需求与排期。"
    },
    {
      title: "补齐三期需求论证",
      description: "把功能价值、用户需求来源、UGC 审核规则、使用范围和次数限制写进第三期文档。"
    },
    {
      title: "落地五一活动与家长访谈",
      description: "优先推进五一前活动，同时启动可联系家长用户的深访与 AI 改版后用户分析。"
    }
  ]
};

const DAILY_STORAGE_KEY = "weekly-report-daily-updates-v1";

const state = {
  activeWeekId: reportData.weeks[reportData.weeks.length - 1].id,
  activeProject: "全部"
};

const statusTextMap = {
  done: "已完成",
  ongoing: "进行中",
  brainstorm: "待收敛"
};

function getElement(id) {
  return document.getElementById(id);
}

function formatDateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatDateLabel(dateKey) {
  const [year, month, day] = dateKey.split("-");
  return `${year}/${Number(month)}/${Number(day)}`;
}

function getStoredDailyEntries() {
  try {
    const raw = window.localStorage.getItem(DAILY_STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
}

function saveStoredDailyEntries(entries) {
  window.localStorage.setItem(DAILY_STORAGE_KEY, JSON.stringify(entries));
}

function upsertDailyEntry(content) {
  const todayKey = formatDateKey();
  const entries = getStoredDailyEntries().filter((item) => item.dateKey !== todayKey);
  const nextEntries = [
    {
      dateKey: todayKey,
      content,
      updatedAt: new Date().toISOString()
    },
    ...entries
  ];
  saveStoredDailyEntries(nextEntries);
  return nextEntries;
}

function getDailyEntriesSorted() {
  return getStoredDailyEntries().sort((a, b) => b.dateKey.localeCompare(a.dateKey));
}

function getAllUpdates() {
  return reportData.weeks.flatMap((week, weekIndex) =>
    week.updates.map((update, updateIndex) => ({
      ...update,
      weekId: week.id,
      weekLabel: week.label,
      dateRange: week.dateRange,
      weekIndex,
      updateIndex
    }))
  );
}

function getFilteredUpdates() {
  const week = reportData.weeks.find((item) => item.id === state.activeWeekId);
  if (!week) return [];

  return week.updates.filter((item) => {
    if (state.activeProject === "全部") return true;
    return item.project === state.activeProject;
  });
}

function createChip(label, active, onClick, extraClass = "") {
  const button = document.createElement("button");
  button.className = `chip ${extraClass} ${active ? "active" : ""}`.trim();
  button.textContent = label;
  button.addEventListener("click", onClick);
  return button;
}

function renderHeader() {
  const heroText = getElement("heroText");
  const generatedAt = getElement("generatedAt");
  const summaryRoot = getElement("summaryCards");
  if (!heroText || !generatedAt || !summaryRoot) return;

  heroText.textContent = reportData.intro;
  generatedAt.textContent = `更新于 ${reportData.generatedAt}`;

  const allUpdates = getAllUpdates();
  const doneCount = allUpdates.filter((item) => item.status === "done").length;
  const ongoingCount = allUpdates.filter((item) => item.status === "ongoing").length;
  const brainstormCount = allUpdates.filter((item) => item.status === "brainstorm").length;
  const dailyCount = getDailyEntriesSorted().length;

  const summaryCards = [
    { label: "已整理周次", value: `${reportData.weeks.length}` },
    { label: "周报事项", value: `${allUpdates.length}` },
    { label: "每日记录", value: `${dailyCount}` },
    { label: "进行中 / 待收敛", value: `${ongoingCount} / ${brainstormCount}` },
    { label: "已完成", value: `${doneCount}` }
  ];

  summaryRoot.innerHTML = "";
  summaryCards.forEach((item) => {
    const card = document.createElement("div");
    card.className = "summary-item";
    card.innerHTML = `<span>${item.label}</span><strong>${item.value}</strong>`;
    summaryRoot.appendChild(card);
  });
}

function renderDailySection() {
  const statusRoot = getElement("dailyReminderStatus");
  const metaRoot = getElement("dailyReminderMeta");
  const textRoot = getElement("dailyReminderText");
  const checklistRoot = getElement("dailyReminderChecklist");
  const input = getElement("dailyUpdateInput");
  const listRoot = getElement("dailyUpdateList");
  if (!statusRoot || !metaRoot || !textRoot || !checklistRoot || !input || !listRoot) return;

  const entries = getDailyEntriesSorted();
  const todayKey = formatDateKey();
  const todayEntry = entries.find((item) => item.dateKey === todayKey);
  const statusClass = todayEntry ? "fresh" : "alert";
  const statusText = todayEntry
    ? `今天已更新，建议收工前再检查一次是否要补风险或明日计划。`
    : `今天还没记录，建议在 ${reportData.dailyReminder.defaultTime} 前补一次工作进度。`;

  statusRoot.innerHTML = `<span class="status-pill ${statusClass}">${todayEntry ? "今日已更新" : "今日待更新"}</span> ${statusText}`;
  metaRoot.innerHTML = `
    <span class="badge">默认提醒时间 ${reportData.dailyReminder.defaultTime}</span>
    <span class="badge">已累计 ${entries.length} 条日更记录</span>
  `;
  textRoot.textContent = reportData.dailyReminder.description;
  input.value = todayEntry?.content || "";

  checklistRoot.innerHTML = "";
  reportData.dailyReminder.checklist.forEach((item) => {
    const block = document.createElement("div");
    block.className = "checklist-item";
    block.innerHTML = `<strong>${item.title}</strong><div class="muted">${item.text}</div>`;
    checklistRoot.appendChild(block);
  });

  listRoot.innerHTML = "";
  const latestEntries = entries.slice(0, 7);

  if (!latestEntries.length) {
    listRoot.innerHTML = '<div class="empty-state">还没有日更记录，今天可以先写第一条。</div>';
    return;
  }

  latestEntries.forEach((entry) => {
    const card = document.createElement("article");
    card.className = "daily-log-item";
    card.innerHTML = `
      <strong>${formatDateLabel(entry.dateKey)}</strong>
      <p>${entry.content.replace(/\n/g, "<br />")}</p>
    `;
    listRoot.appendChild(card);
  });
}

function renderWeekTabs() {
  const weekTabs = getElement("weekTabs");
  if (!weekTabs) return;

  weekTabs.innerHTML = "";
  reportData.weeks.forEach((week) => {
    weekTabs.appendChild(
      createChip(week.label, week.id === state.activeWeekId, () => {
        state.activeWeekId = week.id;
        renderWeekSection();
      })
    );
  });
}

function renderProjectFilters() {
  const projects = ["全部", ...new Set(getAllUpdates().map((item) => item.project))];
  const projectRoot = getElement("projectFilters");
  if (!projectRoot) return;

  projectRoot.innerHTML = "";

  projects.forEach((project) => {
    projectRoot.appendChild(
      createChip(
        project,
        state.activeProject === project,
        () => {
          state.activeProject = project;
          renderWeekSection();
        },
        "secondary"
      )
    );
  });
}

function renderWeekOverview(week, updates) {
  const root = getElement("weekOverview");
  if (!root || !week) return;

  root.innerHTML = "";

  const wrapper = document.createElement("div");
  wrapper.innerHTML = `
    <h3>${week.label} · ${week.dateRange}</h3>
    <p class="hero-text">${week.focus}</p>
    <div class="week-meta">
      <span class="badge">${updates.length} 条筛选结果</span>
      <span class="badge">${week.highlights.length} 个本周重点</span>
    </div>
  `;

  const list = document.createElement("ul");
  list.className = "bullet-list";
  week.highlights.forEach((highlight) => {
    const li = document.createElement("li");
    li.textContent = highlight;
    list.appendChild(li);
  });

  wrapper.appendChild(list);
  root.appendChild(wrapper);
}

function renderWeekContent() {
  const week = reportData.weeks.find((item) => item.id === state.activeWeekId);
  const updates = getFilteredUpdates();
  const root = getElement("weekContent");
  if (!root) return;

  root.innerHTML = "";
  renderWeekOverview(week, updates);

  if (!week) {
    root.innerHTML = '<div class="empty-state">当前周数据不存在，请检查周报数据结构。</div>';
    return;
  }

  if (!updates.length) {
    root.innerHTML = '<div class="empty-state">当前筛选下暂无记录，可以切换项目或继续补充数据。</div>';
    return;
  }

  updates.forEach((item) => {
    const card = document.createElement("article");
    card.className = "update-card";

    const linkHTML = (item.links || [])
      .map(
        (link) =>
          `<a class="link-chip" href="${link.url}" target="_blank" rel="noreferrer">${link.label}</a>`
      )
      .join("");

    const bulletsHTML = item.bullets.map((bullet) => `<li>${bullet}</li>`).join("");

    card.innerHTML = `
      <div class="card-top">
        <div>
          <small>${item.date} · ${item.project}</small>
          <h3>${item.title}</h3>
        </div>
        <div class="meta-inline">
          <span class="status-pill ${item.status}">${statusTextMap[item.status]}</span>
          <span class="priority-pill">${item.priority}</span>
        </div>
      </div>
      <p class="hero-text">${item.detail}</p>
      <ul class="bullet-list">${bulletsHTML}</ul>
      ${linkHTML ? `<div class="link-row">${linkHTML}</div>` : ""}
    `;

    root.appendChild(card);
  });
}

function renderWeekSection() {
  renderWeekTabs();
  renderProjectFilters();
  renderWeekContent();
}

function renderKpis() {
  const root = getElement("kpiCards");
  if (!root) return;

  root.innerHTML = "";

  reportData.kpis.forEach((item) => {
    const card = document.createElement("article");
    card.className = "kpi-card";
    card.innerHTML = `
      <div class="kpi-top">
        <div>
          <small>${item.owner}</small>
          <h3>${item.project}</h3>
        </div>
        <span class="kpi-tag">H1 指标</span>
      </div>
      <p class="hero-text"><strong>目标：</strong>${item.target}</p>
      <p class="hero-text"><strong>当前进展：</strong>${item.progress}</p>
      <div class="info-block">
        <strong>关键动作</strong>
        <ul class="sub-list">${item.actions.map((action) => `<li>${action}</li>`).join("")}</ul>
      </div>
      <div class="info-block">
        <strong>AI 相关动作</strong>
        <ul class="sub-list">${item.aiMoves.map((action) => `<li>${action}</li>`).join("")}</ul>
      </div>
    `;
    root.appendChild(card);
  });
}

function renderQuestions() {
  const root = getElement("questionBoard");
  if (!root) return;

  root.innerHTML = "";

  reportData.openQuestions.forEach((question, index) => {
    const card = document.createElement("div");
    card.className = "question-card";
    card.innerHTML = `<strong>问题 ${index + 1}</strong><div class="muted">${question}</div>`;
    root.appendChild(card);
  });
}

function renderMonthlyTodo() {
  const root = getElement("monthlyTodo");
  if (!root) return;

  root.innerHTML = "";

  reportData.monthlyTodo.forEach((section) => {
    const card = document.createElement("article");
    card.className = "todo-column";
    card.innerHTML = `
      <small>${reportData.period}</small>
      <h3>${section.project}</h3>
      <ul>${section.items.map((item) => `<li>${item}</li>`).join("")}</ul>
    `;
    root.appendChild(card);
  });
}

function renderHistory() {
  const history = getAllUpdates().sort((a, b) => {
    if (a.weekIndex !== b.weekIndex) return a.weekIndex - b.weekIndex;
    return a.updateIndex - b.updateIndex;
  });
  const root = getElement("historyTimeline");
  if (!root) return;

  root.innerHTML = "";

  history.forEach((item) => {
    const block = document.createElement("article");
    block.className = "timeline-item";
    block.innerHTML = `
      <small>${item.date} · ${item.weekLabel}</small>
      <h3>${item.project}｜${item.title}</h3>
      <div class="meta-inline">
        <span class="status-pill ${item.status}">${statusTextMap[item.status]}</span>
        <span class="priority-pill">${item.priority}</span>
      </div>
      <p>${item.detail}</p>
      <ul>${item.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}</ul>
    `;
    root.appendChild(block);
  });
}

function renderNextSteps() {
  const root = getElement("nextSteps");
  if (!root) return;

  root.innerHTML = "";

  reportData.nextSteps.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "todo-step";
    card.innerHTML = `
      <strong>${index + 1}. ${item.title}</strong>
      <div class="muted">${item.description}</div>
    `;
    root.appendChild(card);
  });
}

function getCurrentWeekSummary() {
  const week = reportData.weeks.find((item) => item.id === state.activeWeekId);
  if (!week) return "暂无周报数据";

  const updates = getFilteredUpdates();
  const lines = [
    `${week.label}（${week.dateRange}）`,
    `周焦点：${week.focus}`,
    "",
    "重点事项：",
    ...week.highlights.map((item, index) => `${index + 1}. ${item}`),
    "",
    "项目更新：",
    ...updates.flatMap((item) => [
      `- ${item.project}｜${item.title}（${statusTextMap[item.status]}）`,
      ...item.bullets.map((bullet) => `  • ${bullet}`)
    ])
  ];

  return lines.join("\n");
}

function getCurrentDailyDraft() {
  const input = getElement("dailyUpdateInput");
  const content = input?.value?.trim();
  if (content) return content;

  return `今天推进：\n- \n\n风险卡点：\n- \n\n明日计划：\n- `;
}

function bindActions() {
  const copyButton = getElement("copyWeeklySummary");
  const jumpButton = getElement("jumpHistory");
  const saveDailyButton = getElement("saveDailyUpdate");
  const copyDailyButton = getElement("copyDailyUpdate");
  const input = getElement("dailyUpdateInput");

  if (copyButton) {
    copyButton.addEventListener("click", async () => {
      const content = getCurrentWeekSummary();
      try {
        await navigator.clipboard.writeText(content);
        const originalText = copyButton.textContent;
        copyButton.textContent = "已复制当前周摘要";
        setTimeout(() => {
          copyButton.textContent = originalText;
        }, 1800);
      } catch (error) {
        window.alert("复制失败，请手动复制页面内容。");
      }
    });
  }

  if (jumpButton) {
    jumpButton.addEventListener("click", () => {
      const historySection = getElement("historySection");
      historySection?.scrollIntoView?.({ behavior: "smooth", block: "start" });
    });
  }

  if (saveDailyButton && input) {
    saveDailyButton.addEventListener("click", () => {
      const content = input.value.trim();
      if (!content) {
        window.alert("先写一点今天的工作进度，再保存吧。\n例如：今天推进 / 风险卡点 / 明日计划。");
        return;
      }

      upsertDailyEntry(content);
      renderDailySection();
      renderHeader();

      const originalText = saveDailyButton.textContent;
      saveDailyButton.textContent = "已保存今日进度";
      setTimeout(() => {
        saveDailyButton.textContent = originalText;
      }, 1800);
    });
  }

  if (copyDailyButton) {
    copyDailyButton.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(getCurrentDailyDraft());
        const originalText = copyDailyButton.textContent;
        copyDailyButton.textContent = "已复制今日记录";
        setTimeout(() => {
          copyDailyButton.textContent = originalText;
        }, 1800);
      } catch (error) {
        window.alert("复制失败，请手动复制文本内容。");
      }
    });
  }
}

function init() {
  if (!getElement("heroText")) return;

  renderHeader();
  renderDailySection();
  renderWeekSection();
  renderKpis();
  renderQuestions();
  renderMonthlyTodo();
  renderHistory();
  renderNextSteps();
  bindActions();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init, { once: true });
} else {
  init();
}
