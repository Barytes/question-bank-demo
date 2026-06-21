window.QUESTION_BANK = [
  {
    "id": "q001",
    "title": "拔河中的相互作用力与静摩擦力",
    "source": {
      "pdf": "53+-+2026B广东+-+一年预测.pdf",
      "page": 3,
      "extraction": "pdftoppm page render + Pillow manual-region crop + agent structure draft"
    },
    "questionImage": "assets/questions/q001.png",
    "type": "single",
    "difficulty": "中等",
    "stem": "拔河中的相互作用力与静摩擦力。题干、图像和选项以原 PDF 截图为准。",
    "options": [
      {
        "id": "A",
        "text": "见原题截图中的 A 选项"
      },
      {
        "id": "B",
        "text": "见原题截图中的 B 选项"
      },
      {
        "id": "C",
        "text": "见原题截图中的 C 选项"
      },
      {
        "id": "D",
        "text": "见原题截图中的 D 选项"
      }
    ],
    "answer": [
      "C"
    ],
    "analysis": {
      "summary": "绳对两队的拉力是一对相互作用力，大小相等、方向相反；胜负取决于地面对人的静摩擦力等条件。",
      "steps": [
        {
          "title": "锁定研究对象",
          "body": "分别分析甲队、乙队和绳，绳两端拉力满足牛顿第三定律。"
        },
        {
          "title": "区分内外相互作用",
          "body": "绳对甲与甲对绳、绳对乙与乙对绳分别成对出现，不能用总质量大小判断绳力大小。"
        },
        {
          "title": "判断选项",
          "body": "真正影响队伍运动趋势的是地面对人的摩擦力，静摩擦力不必同时达到最大。"
        }
      ],
      "optionJudgements": {
        "A": "按题目条件逐项判断，详见原题截图和解析步骤。",
        "B": "按题目条件逐项判断，详见原题截图和解析步骤。",
        "C": "按题目条件逐项判断，详见原题截图和解析步骤。",
        "D": "按题目条件逐项判断，详见原题截图和解析步骤。"
      }
    },
    "tags": {
      "knowledge": [
        "相互作用力",
        "静摩擦力",
        "受力分析"
      ],
      "methods": [
        "隔离法",
        "牛顿第三定律"
      ],
      "cognition": [
        "概念辨析",
        "研究对象切换"
      ],
      "mistakes": [
        "把相互作用力大小误判为由质量决定"
      ]
    },
    "diagnosis": {
      "qMatrix": {
        "相互作用力": 1.0,
        "静摩擦力": 0.6,
        "受力分析": 0.6
      },
      "abilityLoadings": {
        "概念辨析": 0.85,
        "研究对象切换": 0.55
      },
      "mistakeEvidence": {
        "把相互作用力大小误判为由质量决定": {
          "ifWrong": 0.85,
          "ifCorrect": 0.15,
          "feedback": "若本题出错，优先检查：把相互作用力大小误判为由质量决定。"
        }
      }
    },
    "recommendations": {
      "similar": [
        "q002"
      ],
      "remediation": [
        "q003"
      ],
      "advanced": [
        "q004"
      ]
    },
    "qualityFlags": [
      "answer_generated",
      "ocr_uncertain",
      "formula_needs_review",
      "needs_teacher_review"
    ]
  },
  {
    "id": "q002",
    "title": "匀减速运动的位移、速度与时间关系",
    "source": {
      "pdf": "53+-+2026B广东+-+一年预测.pdf",
      "page": 3,
      "extraction": "pdftoppm page render + Pillow manual-region crop + agent structure draft"
    },
    "questionImage": "assets/questions/q002.png",
    "type": "single",
    "difficulty": "中等",
    "stem": "匀减速运动的位移、速度与时间关系。题干、图像和选项以原 PDF 截图为准。",
    "options": [
      {
        "id": "A",
        "text": "见原题截图中的 A 选项"
      },
      {
        "id": "B",
        "text": "见原题截图中的 B 选项"
      },
      {
        "id": "C",
        "text": "见原题截图中的 C 选项"
      },
      {
        "id": "D",
        "text": "见原题截图中的 D 选项"
      }
    ],
    "answer": [
      "D"
    ],
    "analysis": {
      "summary": "以向右为正，减速过程的加速度方向与速度方向相反，连续相等时间内速度变化量相同。",
      "steps": [
        {
          "title": "建立符号约定",
          "body": "题目规定水平向右为正，若汽车向右减速，则加速度为负。"
        },
        {
          "title": "用速度变化求时间",
          "body": "连续两段时间相等，速度变化量大小相同，时间尺度由速度变化量和加速度大小确定。"
        },
        {
          "title": "回代位移关系",
          "body": "将位移公式和平均速度关系联立，判断每个表达式是否符合量纲与方向。"
        }
      ],
      "optionJudgements": {
        "A": "按题目条件逐项判断，详见原题截图和解析步骤。",
        "B": "按题目条件逐项判断，详见原题截图和解析步骤。",
        "C": "按题目条件逐项判断，详见原题截图和解析步骤。",
        "D": "按题目条件逐项判断，详见原题截图和解析步骤。"
      }
    },
    "tags": {
      "knowledge": [
        "匀变速直线运动",
        "速度时间关系",
        "位移公式"
      ],
      "methods": [
        "运动学公式",
        "图像化建模"
      ],
      "cognition": [
        "公式迁移",
        "符号方向判断"
      ],
      "mistakes": [
        "把加速度大小和带符号加速度混用"
      ]
    },
    "diagnosis": {
      "qMatrix": {
        "匀变速直线运动": 1.0,
        "速度时间关系": 0.6,
        "位移公式": 0.6
      },
      "abilityLoadings": {
        "公式迁移": 0.85,
        "符号方向判断": 0.55
      },
      "mistakeEvidence": {
        "把加速度大小和带符号加速度混用": {
          "ifWrong": 0.85,
          "ifCorrect": 0.15,
          "feedback": "若本题出错，优先检查：把加速度大小和带符号加速度混用。"
        }
      }
    },
    "recommendations": {
      "similar": [
        "q003"
      ],
      "remediation": [
        "q004"
      ],
      "advanced": [
        "q005"
      ]
    },
    "qualityFlags": [
      "answer_generated",
      "ocr_uncertain",
      "formula_needs_review",
      "needs_teacher_review"
    ]
  },
  {
    "id": "q003",
    "title": "细绳约束下小圆环与小车的运动",
    "source": {
      "pdf": "53+-+2026B广东+-+一年预测.pdf",
      "page": 3,
      "extraction": "pdftoppm page render + Pillow manual-region crop + agent structure draft"
    },
    "questionImage": "assets/questions/q003.png",
    "type": "single",
    "difficulty": "中等",
    "stem": "细绳约束下小圆环与小车的运动。题干、图像和选项以原 PDF 截图为准。",
    "options": [
      {
        "id": "A",
        "text": "见原题截图中的 A 选项"
      },
      {
        "id": "B",
        "text": "见原题截图中的 B 选项"
      },
      {
        "id": "C",
        "text": "见原题截图中的 C 选项"
      },
      {
        "id": "D",
        "text": "见原题截图中的 D 选项"
      }
    ],
    "answer": [
      "B"
    ],
    "analysis": {
      "summary": "小圆环相对车厢静止时，可在非惯性参考系中等效为平衡问题，也可在地面系中列牛顿第二定律。",
      "steps": [
        {
          "title": "确定加速度方向",
          "body": "小圆环与车保持相对静止时，环和车有相同水平加速度。"
        },
        {
          "title": "分解拉力",
          "body": "把两段细绳拉力沿水平、竖直方向分解，结合重力和加速度列式。"
        },
        {
          "title": "比较选项",
          "body": "重点检查两段拉力是否必然相等、车能否匀速以及加速度表达式。"
        }
      ],
      "optionJudgements": {
        "A": "按题目条件逐项判断，详见原题截图和解析步骤。",
        "B": "按题目条件逐项判断，详见原题截图和解析步骤。",
        "C": "按题目条件逐项判断，详见原题截图和解析步骤。",
        "D": "按题目条件逐项判断，详见原题截图和解析步骤。"
      }
    },
    "tags": {
      "knowledge": [
        "力的分解",
        "平衡条件",
        "加速度"
      ],
      "methods": [
        "隔离法",
        "正交分解"
      ],
      "cognition": [
        "图形表征",
        "模型抽象"
      ],
      "mistakes": [
        "忽略约束条件导致方向判断错误"
      ]
    },
    "diagnosis": {
      "qMatrix": {
        "力的分解": 1.0,
        "平衡条件": 0.6,
        "加速度": 0.6
      },
      "abilityLoadings": {
        "图形表征": 0.85,
        "模型抽象": 0.55
      },
      "mistakeEvidence": {
        "忽略约束条件导致方向判断错误": {
          "ifWrong": 0.85,
          "ifCorrect": 0.15,
          "feedback": "若本题出错，优先检查：忽略约束条件导致方向判断错误。"
        }
      }
    },
    "recommendations": {
      "similar": [
        "q004"
      ],
      "remediation": [
        "q005"
      ],
      "advanced": [
        "q006"
      ]
    },
    "qualityFlags": [
      "answer_generated",
      "ocr_uncertain",
      "formula_needs_review",
      "needs_teacher_review"
    ]
  },
  {
    "id": "q004",
    "title": "竖直窗边抛体与相遇条件",
    "source": {
      "pdf": "53+-+2026B广东+-+一年预测.pdf",
      "page": 3,
      "extraction": "pdftoppm page render + Pillow manual-region crop + agent structure draft"
    },
    "questionImage": "assets/questions/q004.png",
    "type": "single",
    "difficulty": "中等",
    "stem": "竖直窗边抛体与相遇条件。题干、图像和选项以原 PDF 截图为准。",
    "options": [
      {
        "id": "A",
        "text": "见原题截图中的 A 选项"
      },
      {
        "id": "B",
        "text": "见原题截图中的 B 选项"
      },
      {
        "id": "C",
        "text": "见原题截图中的 C 选项"
      },
      {
        "id": "D",
        "text": "见原题截图中的 D 选项"
      }
    ],
    "answer": [
      "C"
    ],
    "analysis": {
      "summary": "两小球在同一竖直线上运动，可统一设坐标原点并用位移时间方程比较。",
      "steps": [
        {
          "title": "统一坐标",
          "body": "以窗口下端或 A 点为参考点，分别写出甲、乙的高度表达式。"
        },
        {
          "title": "利用高度差",
          "body": "题中给出 C、B 与 B、A 的高度关系，先转化为位移约束。"
        },
        {
          "title": "判断多解性",
          "body": "竖直上抛存在上升和下降两种经过同一点的可能，要检查时间正值与物理情境。"
        }
      ],
      "optionJudgements": {
        "A": "按题目条件逐项判断，详见原题截图和解析步骤。",
        "B": "按题目条件逐项判断，详见原题截图和解析步骤。",
        "C": "按题目条件逐项判断，详见原题截图和解析步骤。",
        "D": "按题目条件逐项判断，详见原题截图和解析步骤。"
      }
    },
    "tags": {
      "knowledge": [
        "竖直上抛",
        "自由落体",
        "相遇问题"
      ],
      "methods": [
        "运动分解",
        "临界分析"
      ],
      "cognition": [
        "时空关系建模",
        "方程联立"
      ],
      "mistakes": [
        "把相遇时刻和往返时间混淆"
      ]
    },
    "diagnosis": {
      "qMatrix": {
        "竖直上抛": 1.0,
        "自由落体": 0.6,
        "相遇问题": 0.6
      },
      "abilityLoadings": {
        "时空关系建模": 0.85,
        "方程联立": 0.55
      },
      "mistakeEvidence": {
        "把相遇时刻和往返时间混淆": {
          "ifWrong": 0.85,
          "ifCorrect": 0.15,
          "feedback": "若本题出错，优先检查：把相遇时刻和往返时间混淆。"
        }
      }
    },
    "recommendations": {
      "similar": [
        "q005"
      ],
      "remediation": [
        "q006"
      ],
      "advanced": [
        "q007"
      ]
    },
    "qualityFlags": [
      "answer_generated",
      "ocr_uncertain",
      "formula_needs_review",
      "needs_teacher_review"
    ]
  },
  {
    "id": "q005",
    "title": "传送带上物块离带瞬间的运动",
    "source": {
      "pdf": "53+-+2026B广东+-+一年预测.pdf",
      "page": 4,
      "extraction": "pdftoppm page render + Pillow manual-region crop + agent structure draft"
    },
    "questionImage": "assets/questions/q005.png",
    "type": "single",
    "difficulty": "中等",
    "stem": "传送带上物块离带瞬间的运动。题干、图像和选项以原 PDF 截图为准。",
    "options": [
      {
        "id": "A",
        "text": "见原题截图中的 A 选项"
      },
      {
        "id": "B",
        "text": "见原题截图中的 B 选项"
      },
      {
        "id": "C",
        "text": "见原题截图中的 C 选项"
      },
      {
        "id": "D",
        "text": "见原题截图中的 D 选项"
      }
    ],
    "answer": [
      "D"
    ],
    "analysis": {
      "summary": "物块在传送带上经历共同加速和离带后的抛体阶段，需要分段列运动学关系。",
      "steps": [
        {
          "title": "分段处理",
          "body": "先分析物块与传送带共同运动的阶段，再分析离开传送带后的运动。"
        },
        {
          "title": "相对量转换",
          "body": "刻痕长度、轮距和相对位移必须统一到同一参考系。"
        },
        {
          "title": "核对选项",
          "body": "速度、摩擦因数和刻痕长度都应由分段运动关系共同约束。"
        }
      ],
      "optionJudgements": {
        "A": "按题目条件逐项判断，详见原题截图和解析步骤。",
        "B": "按题目条件逐项判断，详见原题截图和解析步骤。",
        "C": "按题目条件逐项判断，详见原题截图和解析步骤。",
        "D": "按题目条件逐项判断，详见原题截图和解析步骤。"
      }
    },
    "tags": {
      "knowledge": [
        "相对运动",
        "传送带模型",
        "匀加速运动"
      ],
      "methods": [
        "运动学建模",
        "临界时刻分析"
      ],
      "cognition": [
        "过程分段",
        "模型迁移"
      ],
      "mistakes": [
        "把相对地面的速度和相对传送带的速度混淆"
      ]
    },
    "diagnosis": {
      "qMatrix": {
        "相对运动": 1.0,
        "传送带模型": 0.6,
        "匀加速运动": 0.6
      },
      "abilityLoadings": {
        "过程分段": 0.85,
        "模型迁移": 0.55
      },
      "mistakeEvidence": {
        "把相对地面的速度和相对传送带的速度混淆": {
          "ifWrong": 0.85,
          "ifCorrect": 0.15,
          "feedback": "若本题出错，优先检查：把相对地面的速度和相对传送带的速度混淆。"
        }
      }
    },
    "recommendations": {
      "similar": [
        "q006"
      ],
      "remediation": [
        "q007"
      ],
      "advanced": [
        "q008"
      ]
    },
    "qualityFlags": [
      "answer_generated",
      "ocr_uncertain",
      "formula_needs_review",
      "needs_teacher_review"
    ]
  },
  {
    "id": "q006",
    "title": "粗糙斜面上物块的受力与动摩擦",
    "source": {
      "pdf": "53+-+2026B广东+-+一年预测.pdf",
      "page": 4,
      "extraction": "pdftoppm page render + Pillow manual-region crop + agent structure draft"
    },
    "questionImage": "assets/questions/q006.png",
    "type": "single",
    "difficulty": "中等",
    "stem": "粗糙斜面上物块的受力与动摩擦。题干、图像和选项以原 PDF 截图为准。",
    "options": [
      {
        "id": "A",
        "text": "见原题截图中的 A 选项"
      },
      {
        "id": "B",
        "text": "见原题截图中的 B 选项"
      },
      {
        "id": "C",
        "text": "见原题截图中的 C 选项"
      },
      {
        "id": "D",
        "text": "见原题截图中的 D 选项"
      }
    ],
    "answer": [
      "B"
    ],
    "analysis": {
      "summary": "物块沿斜面对角线运动时，支持力、拉力、重力和摩擦力需在斜面坐标中分解。",
      "steps": [
        {
          "title": "选取坐标轴",
          "body": "沿斜面和垂直斜面方向建立坐标，避免直接在空间图中猜测力的大小。"
        },
        {
          "title": "列约束方程",
          "body": "物块沿 ac 匀速运动，沿运动方向合力为零，垂直运动方向也满足约束。"
        },
        {
          "title": "求摩擦关系",
          "body": "动摩擦力等于动摩擦因数乘支持力，最终与选项表达式比较。"
        }
      ],
      "optionJudgements": {
        "A": "按题目条件逐项判断，详见原题截图和解析步骤。",
        "B": "按题目条件逐项判断，详见原题截图和解析步骤。",
        "C": "按题目条件逐项判断，详见原题截图和解析步骤。",
        "D": "按题目条件逐项判断，详见原题截图和解析步骤。"
      }
    },
    "tags": {
      "knowledge": [
        "斜面运动",
        "动摩擦力",
        "牛顿第二定律"
      ],
      "methods": [
        "受力分析",
        "正交分解"
      ],
      "cognition": [
        "空间关系提取",
        "方程建模"
      ],
      "mistakes": [
        "把支持力和重力分力方向混淆"
      ]
    },
    "diagnosis": {
      "qMatrix": {
        "斜面运动": 1.0,
        "动摩擦力": 0.6,
        "牛顿第二定律": 0.6
      },
      "abilityLoadings": {
        "空间关系提取": 0.85,
        "方程建模": 0.55
      },
      "mistakeEvidence": {
        "把支持力和重力分力方向混淆": {
          "ifWrong": 0.85,
          "ifCorrect": 0.15,
          "feedback": "若本题出错，优先检查：把支持力和重力分力方向混淆。"
        }
      }
    },
    "recommendations": {
      "similar": [
        "q007"
      ],
      "remediation": [
        "q008"
      ],
      "advanced": [
        "q009"
      ]
    },
    "qualityFlags": [
      "answer_generated",
      "ocr_uncertain",
      "formula_needs_review",
      "needs_teacher_review"
    ]
  },
  {
    "id": "q007",
    "title": "圆周运动中的速度变化量与向心加速度",
    "source": {
      "pdf": "53+-+2026B广东+-+一年预测.pdf",
      "page": 5,
      "extraction": "pdftoppm page render + Pillow manual-region crop + agent structure draft"
    },
    "questionImage": "assets/questions/q007.png",
    "type": "single",
    "difficulty": "中等",
    "stem": "圆周运动中的速度变化量与向心加速度。题干、图像和选项以原 PDF 截图为准。",
    "options": [
      {
        "id": "A",
        "text": "见原题截图中的 A 选项"
      },
      {
        "id": "B",
        "text": "见原题截图中的 B 选项"
      },
      {
        "id": "C",
        "text": "见原题截图中的 C 选项"
      },
      {
        "id": "D",
        "text": "见原题截图中的 D 选项"
      }
    ],
    "answer": [
      "C"
    ],
    "analysis": {
      "summary": "匀速圆周运动速度大小不变，但速度方向变化，速度变化量应按矢量处理。",
      "steps": [
        {
          "title": "画速度矢量",
          "body": "在 A、B 两点分别画切向速度，速度变化量为末速度减初速度。"
        },
        {
          "title": "用弦长表示变化",
          "body": "线段 BC 表示位移，不可直接当作速度变化量；需要建立相似或角度关系。"
        },
        {
          "title": "检验选项",
          "body": "重点检查速度、向心加速度和速度变化量三者的对象是否一致。"
        }
      ],
      "optionJudgements": {
        "A": "按题目条件逐项判断，详见原题截图和解析步骤。",
        "B": "按题目条件逐项判断，详见原题截图和解析步骤。",
        "C": "按题目条件逐项判断，详见原题截图和解析步骤。",
        "D": "按题目条件逐项判断，详见原题截图和解析步骤。"
      }
    },
    "tags": {
      "knowledge": [
        "圆周运动",
        "速度变化量",
        "向心加速度"
      ],
      "methods": [
        "矢量三角形",
        "几何关系"
      ],
      "cognition": [
        "矢量表征",
        "图形建模"
      ],
      "mistakes": [
        "把速度大小相同误认为速度变化量为零"
      ]
    },
    "diagnosis": {
      "qMatrix": {
        "圆周运动": 1.0,
        "速度变化量": 0.6,
        "向心加速度": 0.6
      },
      "abilityLoadings": {
        "矢量表征": 0.85,
        "图形建模": 0.55
      },
      "mistakeEvidence": {
        "把速度大小相同误认为速度变化量为零": {
          "ifWrong": 0.85,
          "ifCorrect": 0.15,
          "feedback": "若本题出错，优先检查：把速度大小相同误认为速度变化量为零。"
        }
      }
    },
    "recommendations": {
      "similar": [
        "q008"
      ],
      "remediation": [
        "q009"
      ],
      "advanced": [
        "q010"
      ]
    },
    "qualityFlags": [
      "answer_page_matched",
      "ocr_uncertain",
      "formula_needs_review",
      "needs_teacher_review"
    ]
  },
  {
    "id": "q008",
    "title": "小船渡河的合速度与渡河时间",
    "source": {
      "pdf": "53+-+2026B广东+-+一年预测.pdf",
      "page": 5,
      "extraction": "pdftoppm page render + Pillow manual-region crop + agent structure draft"
    },
    "questionImage": "assets/questions/q008.png",
    "type": "single",
    "difficulty": "中等",
    "stem": "小船渡河的合速度与渡河时间。题干、图像和选项以原 PDF 截图为准。",
    "options": [
      {
        "id": "A",
        "text": "见原题截图中的 A 选项"
      },
      {
        "id": "B",
        "text": "见原题截图中的 B 选项"
      },
      {
        "id": "C",
        "text": "见原题截图中的 C 选项"
      },
      {
        "id": "D",
        "text": "见原题截图中的 D 选项"
      }
    ],
    "answer": [
      "D"
    ],
    "analysis": {
      "summary": "小船实际运动方向由船相对水速度和水流速度合成，渡河时间由垂直河岸方向分量决定。",
      "steps": [
        {
          "title": "识别三个速度",
          "body": "水速、船相对水速度、船相对岸速度构成矢量三角形。"
        },
        {
          "title": "求垂直分量",
          "body": "渡河时间只由垂直河岸方向的速度分量决定。"
        },
        {
          "title": "判断距离",
          "body": "沿河漂移距离由平行河岸方向速度和渡河时间共同决定。"
        }
      ],
      "optionJudgements": {
        "A": "按题目条件逐项判断，详见原题截图和解析步骤。",
        "B": "按题目条件逐项判断，详见原题截图和解析步骤。",
        "C": "按题目条件逐项判断，详见原题截图和解析步骤。",
        "D": "按题目条件逐项判断，详见原题截图和解析步骤。"
      }
    },
    "tags": {
      "knowledge": [
        "运动合成",
        "相对运动",
        "渡河模型"
      ],
      "methods": [
        "矢量分解",
        "几何建模"
      ],
      "cognition": [
        "模型迁移",
        "图形表征"
      ],
      "mistakes": [
        "把船速、水速和合速度混为同一速度"
      ]
    },
    "diagnosis": {
      "qMatrix": {
        "运动合成": 1.0,
        "相对运动": 0.6,
        "渡河模型": 0.6
      },
      "abilityLoadings": {
        "模型迁移": 0.85,
        "图形表征": 0.55
      },
      "mistakeEvidence": {
        "把船速、水速和合速度混为同一速度": {
          "ifWrong": 0.85,
          "ifCorrect": 0.15,
          "feedback": "若本题出错，优先检查：把船速、水速和合速度混为同一速度。"
        }
      }
    },
    "recommendations": {
      "similar": [
        "q009"
      ],
      "remediation": [
        "q010"
      ],
      "advanced": [
        "q011"
      ]
    },
    "qualityFlags": [
      "answer_page_matched",
      "ocr_uncertain",
      "formula_needs_review",
      "needs_teacher_review"
    ]
  },
  {
    "id": "q009",
    "title": "汽车功率图像与速度时间图像",
    "source": {
      "pdf": "53+-+2026B广东+-+一年预测.pdf",
      "page": 5,
      "extraction": "pdftoppm page render + Pillow manual-region crop + agent structure draft"
    },
    "questionImage": "assets/questions/q009.png",
    "type": "single",
    "difficulty": "中等",
    "stem": "汽车功率图像与速度时间图像。题干、图像和选项以原 PDF 截图为准。",
    "options": [
      {
        "id": "A",
        "text": "见原题截图中的 A 选项"
      },
      {
        "id": "B",
        "text": "见原题截图中的 B 选项"
      },
      {
        "id": "C",
        "text": "见原题截图中的 C 选项"
      },
      {
        "id": "D",
        "text": "见原题截图中的 D 选项"
      }
    ],
    "answer": [
      "B"
    ],
    "analysis": {
      "summary": "功率-时间图像的面积表示牵引力做功，速度-时间图像的面积表示位移。",
      "steps": [
        {
          "title": "读图像物理量",
          "body": "P-t 图像面积是功，v-t 图像面积是位移，两者不能互换。"
        },
        {
          "title": "应用动能定理",
          "body": "牵引力做功、阻力做功和动能变化共同决定运动状态。"
        },
        {
          "title": "逐项核算",
          "body": "加速度是否恒定、平均功率、阻力大小和质量表达式都需量纲一致。"
        }
      ],
      "optionJudgements": {
        "A": "按题目条件逐项判断，详见原题截图和解析步骤。",
        "B": "按题目条件逐项判断，详见原题截图和解析步骤。",
        "C": "按题目条件逐项判断，详见原题截图和解析步骤。",
        "D": "按题目条件逐项判断，详见原题截图和解析步骤。"
      }
    },
    "tags": {
      "knowledge": [
        "功率",
        "动能定理",
        "图像面积"
      ],
      "methods": [
        "图像法",
        "能量分析"
      ],
      "cognition": [
        "图像信息提取",
        "量纲审查"
      ],
      "mistakes": [
        "把功率时间图像面积与速度时间图像面积混淆"
      ]
    },
    "diagnosis": {
      "qMatrix": {
        "功率": 1.0,
        "动能定理": 0.6,
        "图像面积": 0.6
      },
      "abilityLoadings": {
        "图像信息提取": 0.85,
        "量纲审查": 0.55
      },
      "mistakeEvidence": {
        "把功率时间图像面积与速度时间图像面积混淆": {
          "ifWrong": 0.85,
          "ifCorrect": 0.15,
          "feedback": "若本题出错，优先检查：把功率时间图像面积与速度时间图像面积混淆。"
        }
      }
    },
    "recommendations": {
      "similar": [
        "q010"
      ],
      "remediation": [
        "q011"
      ],
      "advanced": [
        "q012"
      ]
    },
    "qualityFlags": [
      "answer_page_matched",
      "ocr_uncertain",
      "formula_needs_review",
      "needs_teacher_review"
    ]
  },
  {
    "id": "q010",
    "title": "圆筒内壁上小球的螺旋运动",
    "source": {
      "pdf": "53+-+2026B广东+-+一年预测.pdf",
      "page": 6,
      "extraction": "pdftoppm page render + Pillow manual-region crop + agent structure draft"
    },
    "questionImage": "assets/questions/q010.png",
    "type": "single",
    "difficulty": "中等",
    "stem": "圆筒内壁上小球的螺旋运动。题干、图像和选项以原 PDF 截图为准。",
    "options": [
      {
        "id": "A",
        "text": "见原题截图中的 A 选项"
      },
      {
        "id": "B",
        "text": "见原题截图中的 B 选项"
      },
      {
        "id": "C",
        "text": "见原题截图中的 C 选项"
      },
      {
        "id": "D",
        "text": "见原题截图中的 D 选项"
      }
    ],
    "answer": [
      "A"
    ],
    "analysis": {
      "summary": "小球沿圆筒内壁运动，可分解为水平方向的匀速圆周运动和竖直方向的自由落体运动。",
      "steps": [
        {
          "title": "分解运动",
          "body": "水平投影是圆周运动，竖直方向受重力做匀加速运动。"
        },
        {
          "title": "联系高度差",
          "body": "从 A 到 B 的高度差与自由落体位移相联系。"
        },
        {
          "title": "检查周期条件",
          "body": "若绕行整数圈到达对应点，应满足圆周运动周期和竖直位移同时成立。"
        }
      ],
      "optionJudgements": {
        "A": "按题目条件逐项判断，详见原题截图和解析步骤。",
        "B": "按题目条件逐项判断，详见原题截图和解析步骤。",
        "C": "按题目条件逐项判断，详见原题截图和解析步骤。",
        "D": "按题目条件逐项判断，详见原题截图和解析步骤。"
      }
    },
    "tags": {
      "knowledge": [
        "圆周运动",
        "平抛分解",
        "运动合成"
      ],
      "methods": [
        "运动分解",
        "周期性条件"
      ],
      "cognition": [
        "三维情境建模",
        "空间表征"
      ],
      "mistakes": [
        "忽略竖直方向自由落体分运动"
      ]
    },
    "diagnosis": {
      "qMatrix": {
        "圆周运动": 1.0,
        "平抛分解": 0.6,
        "运动合成": 0.6
      },
      "abilityLoadings": {
        "三维情境建模": 0.85,
        "空间表征": 0.55
      },
      "mistakeEvidence": {
        "忽略竖直方向自由落体分运动": {
          "ifWrong": 0.85,
          "ifCorrect": 0.15,
          "feedback": "若本题出错，优先检查：忽略竖直方向自由落体分运动。"
        }
      }
    },
    "recommendations": {
      "similar": [
        "q011"
      ],
      "remediation": [
        "q012"
      ],
      "advanced": [
        "q013"
      ]
    },
    "qualityFlags": [
      "answer_generated",
      "ocr_uncertain",
      "formula_needs_review",
      "needs_teacher_review"
    ]
  },
  {
    "id": "q011",
    "title": "圆弧面与直管连接的临界飞入条件",
    "source": {
      "pdf": "53+-+2026B广东+-+一年预测.pdf",
      "page": 6,
      "extraction": "pdftoppm page render + Pillow manual-region crop + agent structure draft"
    },
    "questionImage": "assets/questions/q011.png",
    "type": "single",
    "difficulty": "中等",
    "stem": "圆弧面与直管连接的临界飞入条件。题干、图像和选项以原 PDF 截图为准。",
    "options": [
      {
        "id": "A",
        "text": "见原题截图中的 A 选项"
      },
      {
        "id": "B",
        "text": "见原题截图中的 B 选项"
      },
      {
        "id": "C",
        "text": "见原题截图中的 C 选项"
      },
      {
        "id": "D",
        "text": "见原题截图中的 D 选项"
      }
    ],
    "answer": [
      "C"
    ],
    "analysis": {
      "summary": "小球能否飞入直管取决于到达 D 点时速度方向是否沿直管，并同时满足能量关系。",
      "steps": [
        {
          "title": "识别临界条件",
          "body": "题设强调速度方向沿直管，这比只到达 D 点更强。"
        },
        {
          "title": "用几何确定位置",
          "body": "由圆弧半径、斜面和直管方向建立 C、D 的几何关系。"
        },
        {
          "title": "用能量求速度",
          "body": "忽略摩擦时机械能守恒，可由高度差得到 D 点速度。"
        }
      ],
      "optionJudgements": {
        "A": "按题目条件逐项判断，详见原题截图和解析步骤。",
        "B": "按题目条件逐项判断，详见原题截图和解析步骤。",
        "C": "按题目条件逐项判断，详见原题截图和解析步骤。",
        "D": "按题目条件逐项判断，详见原题截图和解析步骤。"
      }
    },
    "tags": {
      "knowledge": [
        "机械能守恒",
        "圆周运动",
        "临界条件"
      ],
      "methods": [
        "能量法",
        "几何约束"
      ],
      "cognition": [
        "临界思维",
        "图形关系提取"
      ],
      "mistakes": [
        "把速度方向约束和位置约束分开处理"
      ]
    },
    "diagnosis": {
      "qMatrix": {
        "机械能守恒": 1.0,
        "圆周运动": 0.6,
        "临界条件": 0.6
      },
      "abilityLoadings": {
        "临界思维": 0.85,
        "图形关系提取": 0.55
      },
      "mistakeEvidence": {
        "把速度方向约束和位置约束分开处理": {
          "ifWrong": 0.85,
          "ifCorrect": 0.15,
          "feedback": "若本题出错，优先检查：把速度方向约束和位置约束分开处理。"
        }
      }
    },
    "recommendations": {
      "similar": [
        "q012"
      ],
      "remediation": [
        "q013"
      ],
      "advanced": [
        "q014"
      ]
    },
    "qualityFlags": [
      "answer_generated",
      "ocr_uncertain",
      "formula_needs_review",
      "needs_teacher_review"
    ]
  },
  {
    "id": "q012",
    "title": "圆弧轨道或细圆管中的竖直圆周运动",
    "source": {
      "pdf": "53+-+2026B广东+-+一年预测.pdf",
      "page": 6,
      "extraction": "pdftoppm page render + Pillow manual-region crop + agent structure draft"
    },
    "questionImage": "assets/questions/q012.png",
    "type": "single",
    "difficulty": "中等",
    "stem": "圆弧轨道或细圆管中的竖直圆周运动。题干、图像和选项以原 PDF 截图为准。",
    "options": [
      {
        "id": "A",
        "text": "见原题截图中的 A 选项"
      },
      {
        "id": "B",
        "text": "见原题截图中的 B 选项"
      },
      {
        "id": "C",
        "text": "见原题截图中的 C 选项"
      },
      {
        "id": "D",
        "text": "见原题截图中的 D 选项"
      }
    ],
    "answer": [
      "A"
    ],
    "analysis": {
      "summary": "圆弧轨道和细圆管轨道的约束方式不同，过 B 点的临界速度条件也不同。",
      "steps": [
        {
          "title": "区分轨道模型",
          "body": "圆弧轨道只能提供单侧支持，细圆管可提供双向约束。"
        },
        {
          "title": "列向心方程",
          "body": "在 B 点根据半径方向列出向心力条件。"
        },
        {
          "title": "比较高度差",
          "body": "由能量守恒把 P、B 两点高度差与速度条件联系起来。"
        }
      ],
      "optionJudgements": {
        "A": "按题目条件逐项判断，详见原题截图和解析步骤。",
        "B": "按题目条件逐项判断，详见原题截图和解析步骤。",
        "C": "按题目条件逐项判断，详见原题截图和解析步骤。",
        "D": "按题目条件逐项判断，详见原题截图和解析步骤。"
      }
    },
    "tags": {
      "knowledge": [
        "圆周运动",
        "竖直面运动",
        "临界速度"
      ],
      "methods": [
        "向心力分析",
        "能量法"
      ],
      "cognition": [
        "临界判断",
        "模型区分"
      ],
      "mistakes": [
        "混淆圆弧轨道和细圆管轨道的支持力条件"
      ]
    },
    "diagnosis": {
      "qMatrix": {
        "圆周运动": 1.0,
        "竖直面运动": 0.6,
        "临界速度": 0.6
      },
      "abilityLoadings": {
        "临界判断": 0.85,
        "模型区分": 0.55
      },
      "mistakeEvidence": {
        "混淆圆弧轨道和细圆管轨道的支持力条件": {
          "ifWrong": 0.85,
          "ifCorrect": 0.15,
          "feedback": "若本题出错，优先检查：混淆圆弧轨道和细圆管轨道的支持力条件。"
        }
      }
    },
    "recommendations": {
      "similar": [
        "q013"
      ],
      "remediation": [
        "q014"
      ],
      "advanced": [
        "q015"
      ]
    },
    "qualityFlags": [
      "answer_generated",
      "ocr_uncertain",
      "formula_needs_review",
      "needs_teacher_review"
    ]
  },
  {
    "id": "q013",
    "title": "月球抛体与绕月匀速圆周运动",
    "source": {
      "pdf": "53+-+2026B广东+-+一年预测.pdf",
      "page": 6,
      "extraction": "pdftoppm page render + Pillow manual-region crop + agent structure draft"
    },
    "questionImage": "assets/questions/q013.png",
    "type": "free-response",
    "difficulty": "中等",
    "stem": "月球抛体与绕月匀速圆周运动。题干、图像和选项以原 PDF 截图为准。",
    "options": [
      {
        "id": "A",
        "text": "见原题截图中的 A 选项"
      },
      {
        "id": "B",
        "text": "见原题截图中的 B 选项"
      },
      {
        "id": "C",
        "text": "见原题截图中的 C 选项"
      },
      {
        "id": "D",
        "text": "见原题截图中的 D 选项"
      }
    ],
    "answer": [
      "参考解答"
    ],
    "analysis": {
      "summary": "本题是解答题，应先由抛体过程确定月面重力加速度，再由圆周运动求半径、质量和飞船线速度。",
      "steps": [
        {
          "title": "斜抛分解",
          "body": "把初速度分解为水平和竖直分量，用回到同一高度且速度大小不变的条件求月面重力加速度。"
        },
        {
          "title": "引力与重力",
          "body": "月球表面附近有 GmM/R^2 = mg，可联系月球质量与半径。"
        },
        {
          "title": "轨道运动",
          "body": "飞船绕月做匀速圆周运动时，引力提供向心力，结合周期求线速度。"
        }
      ],
      "optionJudgements": {
        "A": "按题目条件逐项判断，详见原题截图和解析步骤。",
        "B": "按题目条件逐项判断，详见原题截图和解析步骤。",
        "C": "按题目条件逐项判断，详见原题截图和解析步骤。",
        "D": "按题目条件逐项判断，详见原题截图和解析步骤。"
      }
    },
    "tags": {
      "knowledge": [
        "万有引力",
        "圆周运动",
        "斜抛运动"
      ],
      "methods": [
        "运动分解",
        "引力提供向心力"
      ],
      "cognition": [
        "综合建模",
        "参数推导"
      ],
      "mistakes": [
        "把月球表面重力和轨道向心加速度混用"
      ]
    },
    "diagnosis": {
      "qMatrix": {
        "万有引力": 1.0,
        "圆周运动": 0.6,
        "斜抛运动": 0.6
      },
      "abilityLoadings": {
        "综合建模": 0.85,
        "参数推导": 0.55
      },
      "mistakeEvidence": {
        "把月球表面重力和轨道向心加速度混用": {
          "ifWrong": 0.85,
          "ifCorrect": 0.15,
          "feedback": "若本题出错，优先检查：把月球表面重力和轨道向心加速度混用。"
        }
      }
    },
    "recommendations": {
      "similar": [
        "q014"
      ],
      "remediation": [
        "q015"
      ],
      "advanced": [
        "q016"
      ]
    },
    "qualityFlags": [
      "answer_generated",
      "ocr_uncertain",
      "formula_needs_review",
      "needs_teacher_review"
    ]
  },
  {
    "id": "q014",
    "title": "类比电通量判断磁通量与电通量",
    "source": {
      "pdf": "53+-+2026B广东+-+一年预测.pdf",
      "page": 7,
      "extraction": "pdftoppm page render + Pillow manual-region crop + agent structure draft"
    },
    "questionImage": "assets/questions/q014.png",
    "type": "single",
    "difficulty": "中等",
    "stem": "类比电通量判断磁通量与电通量。题干、图像和选项以原 PDF 截图为准。",
    "options": [
      {
        "id": "A",
        "text": "见原题截图中的 A 选项"
      },
      {
        "id": "B",
        "text": "见原题截图中的 B 选项"
      },
      {
        "id": "C",
        "text": "见原题截图中的 C 选项"
      },
      {
        "id": "D",
        "text": "见原题截图中的 D 选项"
      }
    ],
    "answer": [
      "C"
    ],
    "analysis": {
      "summary": "题目借类比电通量定义磁通量，关键是识别曲面方向、对称性和场线穿过面积的净贡献。",
      "steps": [
        {
          "title": "理解类比定义",
          "body": "电通量与磁通量都体现场强和面积矢量的乘积。"
        },
        {
          "title": "利用对称性",
          "body": "半球面或球面上的通量可通过对称性和场线分布快速判断。"
        },
        {
          "title": "判断选项",
          "body": "半径变化、电荷位置和曲面方向都会影响通量表达。"
        }
      ],
      "optionJudgements": {
        "A": "按题目条件逐项判断，详见原题截图和解析步骤。",
        "B": "按题目条件逐项判断，详见原题截图和解析步骤。",
        "C": "按题目条件逐项判断，详见原题截图和解析步骤。",
        "D": "按题目条件逐项判断，详见原题截图和解析步骤。"
      }
    },
    "tags": {
      "knowledge": [
        "磁通量",
        "电通量",
        "高斯思想"
      ],
      "methods": [
        "类比建模",
        "对称性分析"
      ],
      "cognition": [
        "抽象迁移",
        "空间表征"
      ],
      "mistakes": [
        "把开曲面和闭曲面的通量性质混淆"
      ]
    },
    "diagnosis": {
      "qMatrix": {
        "磁通量": 1.0,
        "电通量": 0.6,
        "高斯思想": 0.6
      },
      "abilityLoadings": {
        "抽象迁移": 0.85,
        "空间表征": 0.55
      },
      "mistakeEvidence": {
        "把开曲面和闭曲面的通量性质混淆": {
          "ifWrong": 0.85,
          "ifCorrect": 0.15,
          "feedback": "若本题出错，优先检查：把开曲面和闭曲面的通量性质混淆。"
        }
      }
    },
    "recommendations": {
      "similar": [
        "q015"
      ],
      "remediation": [
        "q016"
      ],
      "advanced": [
        "q017"
      ]
    },
    "qualityFlags": [
      "answer_page_matched",
      "ocr_uncertain",
      "formula_needs_review",
      "needs_teacher_review"
    ]
  },
  {
    "id": "q015",
    "title": "两点电荷电场线中的电势与场强",
    "source": {
      "pdf": "53+-+2026B广东+-+一年预测.pdf",
      "page": 7,
      "extraction": "pdftoppm page render + Pillow manual-region crop + agent structure draft"
    },
    "questionImage": "assets/questions/q015.png",
    "type": "single",
    "difficulty": "中等",
    "stem": "两点电荷电场线中的电势与场强。题干、图像和选项以原 PDF 截图为准。",
    "options": [
      {
        "id": "A",
        "text": "见原题截图中的 A 选项"
      },
      {
        "id": "B",
        "text": "见原题截图中的 B 选项"
      },
      {
        "id": "C",
        "text": "见原题截图中的 C 选项"
      },
      {
        "id": "D",
        "text": "见原题截图中的 D 选项"
      }
    ],
    "answer": [
      "B"
    ],
    "analysis": {
      "summary": "电场线方向和疏密反映电场强度，电势判断还需沿电场线方向和电荷符号综合分析。",
      "steps": [
        {
          "title": "识别电荷组合",
          "body": "由电场线起止方向判断正负电荷和相对强弱。"
        },
        {
          "title": "叠加场强",
          "body": "A、B、C 点的场强应由两个点电荷场强矢量叠加。"
        },
        {
          "title": "判断电势",
          "body": "沿电场线方向电势降低，但不同点间仍需结合等势关系。"
        }
      ],
      "optionJudgements": {
        "A": "按题目条件逐项判断，详见原题截图和解析步骤。",
        "B": "按题目条件逐项判断，详见原题截图和解析步骤。",
        "C": "按题目条件逐项判断，详见原题截图和解析步骤。",
        "D": "按题目条件逐项判断，详见原题截图和解析步骤。"
      }
    },
    "tags": {
      "knowledge": [
        "电场线",
        "电势",
        "点电荷场强"
      ],
      "methods": [
        "叠加法",
        "等势面判断"
      ],
      "cognition": [
        "图像信息提取",
        "对称性分析"
      ],
      "mistakes": [
        "把电场线疏密和电势高低直接等同"
      ]
    },
    "diagnosis": {
      "qMatrix": {
        "电场线": 1.0,
        "电势": 0.6,
        "点电荷场强": 0.6
      },
      "abilityLoadings": {
        "图像信息提取": 0.85,
        "对称性分析": 0.55
      },
      "mistakeEvidence": {
        "把电场线疏密和电势高低直接等同": {
          "ifWrong": 0.85,
          "ifCorrect": 0.15,
          "feedback": "若本题出错，优先检查：把电场线疏密和电势高低直接等同。"
        }
      }
    },
    "recommendations": {
      "similar": [
        "q016"
      ],
      "remediation": [
        "q017"
      ],
      "advanced": [
        "q018"
      ]
    },
    "qualityFlags": [
      "answer_page_matched",
      "ocr_uncertain",
      "formula_needs_review",
      "needs_teacher_review"
    ]
  },
  {
    "id": "q016",
    "title": "电容器与静电计的插板问题",
    "source": {
      "pdf": "53+-+2026B广东+-+一年预测.pdf",
      "page": 7,
      "extraction": "pdftoppm page render + Pillow manual-region crop + agent structure draft"
    },
    "questionImage": "assets/questions/q016.png",
    "type": "multi",
    "difficulty": "中等",
    "stem": "电容器与静电计的插板问题。题干、图像和选项以原 PDF 截图为准。",
    "options": [
      {
        "id": "A",
        "text": "见原题截图中的 A 选项"
      },
      {
        "id": "B",
        "text": "见原题截图中的 B 选项"
      },
      {
        "id": "C",
        "text": "见原题截图中的 C 选项"
      },
      {
        "id": "D",
        "text": "见原题截图中的 D 选项"
      }
    ],
    "answer": [
      "A",
      "D"
    ],
    "analysis": {
      "summary": "静电计指针反映电势差，插入导体或电介质会改变电容，从而改变电荷量或电压，需先判断电路是否仍与电源相连。",
      "steps": [
        {
          "title": "判断连接状态",
          "body": "开关闭合稳定后再插板，电源、接地和电容器连接关系决定哪些量保持不变。"
        },
        {
          "title": "分析电容变化",
          "body": "电介质或金属板插入会改变等效电容。"
        },
        {
          "title": "推出指针变化",
          "body": "静电计偏角由电势差决定，不能只看电荷量变化。"
        }
      ],
      "optionJudgements": {
        "A": "按题目条件逐项判断，详见原题截图和解析步骤。",
        "B": "按题目条件逐项判断，详见原题截图和解析步骤。",
        "C": "按题目条件逐项判断，详见原题截图和解析步骤。",
        "D": "按题目条件逐项判断，详见原题截图和解析步骤。"
      }
    },
    "tags": {
      "knowledge": [
        "电容器",
        "静电计",
        "电势差"
      ],
      "methods": [
        "电路状态分析",
        "变量控制"
      ],
      "cognition": [
        "实验情境建模",
        "因果推理"
      ],
      "mistakes": [
        "忽略电容器是否与电源断开"
      ]
    },
    "diagnosis": {
      "qMatrix": {
        "电容器": 1.0,
        "静电计": 0.6,
        "电势差": 0.6
      },
      "abilityLoadings": {
        "实验情境建模": 0.85,
        "因果推理": 0.55
      },
      "mistakeEvidence": {
        "忽略电容器是否与电源断开": {
          "ifWrong": 0.85,
          "ifCorrect": 0.15,
          "feedback": "若本题出错，优先检查：忽略电容器是否与电源断开。"
        }
      }
    },
    "recommendations": {
      "similar": [
        "q017"
      ],
      "remediation": [
        "q018"
      ],
      "advanced": [
        "q019"
      ]
    },
    "qualityFlags": [
      "answer_page_matched",
      "ocr_uncertain",
      "formula_needs_review",
      "needs_teacher_review"
    ]
  },
  {
    "id": "q017",
    "title": "电源 U-I 图像与电阻伏安图像",
    "source": {
      "pdf": "53+-+2026B广东+-+一年预测.pdf",
      "page": 8,
      "extraction": "pdftoppm page render + Pillow manual-region crop + agent structure draft"
    },
    "questionImage": "assets/questions/q017.png",
    "type": "single",
    "difficulty": "中等",
    "stem": "电源 U-I 图像与电阻伏安图像。题干、图像和选项以原 PDF 截图为准。",
    "options": [
      {
        "id": "A",
        "text": "见原题截图中的 A 选项"
      },
      {
        "id": "B",
        "text": "见原题截图中的 B 选项"
      },
      {
        "id": "C",
        "text": "见原题截图中的 C 选项"
      },
      {
        "id": "D",
        "text": "见原题截图中的 D 选项"
      }
    ],
    "answer": [
      "D"
    ],
    "analysis": {
      "summary": "电源和电阻构成闭合回路时，工作点由两条伏安曲线交点确定。",
      "steps": [
        {
          "title": "识别曲线含义",
          "body": "电源 U-I 图像和外电阻伏安曲线分别表示不同元件关系。"
        },
        {
          "title": "求工作点",
          "body": "两曲线交点的横纵坐标即实际电流和端电压。"
        },
        {
          "title": "计算功率",
          "body": "实际功率用工作点处 U 与 I 的乘积，而不是图像斜率本身。"
        }
      ],
      "optionJudgements": {
        "A": "按题目条件逐项判断，详见原题截图和解析步骤。",
        "B": "按题目条件逐项判断，详见原题截图和解析步骤。",
        "C": "按题目条件逐项判断，详见原题截图和解析步骤。",
        "D": "按题目条件逐项判断，详见原题截图和解析步骤。"
      }
    },
    "tags": {
      "knowledge": [
        "闭合电路欧姆定律",
        "U-I 图像",
        "电源内阻"
      ],
      "methods": [
        "图像法",
        "等效电源"
      ],
      "cognition": [
        "图像交点解释",
        "量纲审查"
      ],
      "mistakes": [
        "把电源端电压图像和电阻伏安曲线混淆"
      ]
    },
    "diagnosis": {
      "qMatrix": {
        "闭合电路欧姆定律": 1.0,
        "U-I 图像": 0.6,
        "电源内阻": 0.6
      },
      "abilityLoadings": {
        "图像交点解释": 0.85,
        "量纲审查": 0.55
      },
      "mistakeEvidence": {
        "把电源端电压图像和电阻伏安曲线混淆": {
          "ifWrong": 0.85,
          "ifCorrect": 0.15,
          "feedback": "若本题出错，优先检查：把电源端电压图像和电阻伏安曲线混淆。"
        }
      }
    },
    "recommendations": {
      "similar": [
        "q018"
      ],
      "remediation": [
        "q019"
      ],
      "advanced": [
        "q020"
      ]
    },
    "qualityFlags": [
      "answer_generated",
      "ocr_uncertain",
      "formula_needs_review",
      "needs_teacher_review"
    ]
  },
  {
    "id": "q018",
    "title": "带电粒子在交变电场与辐射状电场中的运动",
    "source": {
      "pdf": "53+-+2026B广东+-+一年预测.pdf",
      "page": 8,
      "extraction": "pdftoppm page render + Pillow manual-region crop + agent structure draft"
    },
    "questionImage": "assets/questions/q018.png",
    "type": "free-response",
    "difficulty": "中等",
    "stem": "带电粒子在交变电场与辐射状电场中的运动。题干、图像和选项以原 PDF 截图为准。",
    "options": [
      {
        "id": "A",
        "text": "见原题截图中的 A 选项"
      },
      {
        "id": "B",
        "text": "见原题截图中的 B 选项"
      },
      {
        "id": "C",
        "text": "见原题截图中的 C 选项"
      },
      {
        "id": "D",
        "text": "见原题截图中的 D 选项"
      }
    ],
    "answer": [
      "参考解答"
    ],
    "analysis": {
      "summary": "本题是综合解答题，应分 A 到 B、B 到 C、C 到 D 三段处理，并分别计算速度、受力、时间和平均加速度。",
      "steps": [
        {
          "title": "A 到 B",
          "body": "由匀强电场对粒子做功和运动学关系求 B 点速度。"
        },
        {
          "title": "B 到 C",
          "body": "进入辐射状电场后做圆弧运动，电场力提供向心力。"
        },
        {
          "title": "C 到 D",
          "body": "离开电场后的速度方向改变，用速度变化量和总时间求平均加速度。"
        }
      ],
      "optionJudgements": {
        "A": "按题目条件逐项判断，详见原题截图和解析步骤。",
        "B": "按题目条件逐项判断，详见原题截图和解析步骤。",
        "C": "按题目条件逐项判断，详见原题截图和解析步骤。",
        "D": "按题目条件逐项判断，详见原题截图和解析步骤。"
      }
    },
    "tags": {
      "knowledge": [
        "带电粒子运动",
        "电场力",
        "圆周运动"
      ],
      "methods": [
        "分段运动",
        "向心力分析"
      ],
      "cognition": [
        "过程建模",
        "图像周期分析"
      ],
      "mistakes": [
        "把交变电场的加速阶段看作连续恒定加速"
      ]
    },
    "diagnosis": {
      "qMatrix": {
        "带电粒子运动": 1.0,
        "电场力": 0.6,
        "圆周运动": 0.6
      },
      "abilityLoadings": {
        "过程建模": 0.85,
        "图像周期分析": 0.55
      },
      "mistakeEvidence": {
        "把交变电场的加速阶段看作连续恒定加速": {
          "ifWrong": 0.85,
          "ifCorrect": 0.15,
          "feedback": "若本题出错，优先检查：把交变电场的加速阶段看作连续恒定加速。"
        }
      }
    },
    "recommendations": {
      "similar": [
        "q019"
      ],
      "remediation": [
        "q020"
      ],
      "advanced": [
        "q001"
      ]
    },
    "qualityFlags": [
      "answer_generated",
      "ocr_uncertain",
      "formula_needs_review",
      "needs_teacher_review"
    ]
  },
  {
    "id": "q019",
    "title": "海市蜃楼中的折射与全反射",
    "source": {
      "pdf": "53+-+2026B广东+-+一年预测.pdf",
      "page": 9,
      "extraction": "pdftoppm page render + Pillow manual-region crop + agent structure draft"
    },
    "questionImage": "assets/questions/q019.png",
    "type": "single",
    "difficulty": "中等",
    "stem": "海市蜃楼中的折射与全反射。题干、图像和选项以原 PDF 截图为准。",
    "options": [
      {
        "id": "A",
        "text": "见原题截图中的 A 选项"
      },
      {
        "id": "B",
        "text": "见原题截图中的 B 选项"
      },
      {
        "id": "C",
        "text": "见原题截图中的 C 选项"
      },
      {
        "id": "D",
        "text": "见原题截图中的 D 选项"
      }
    ],
    "answer": [
      "A"
    ],
    "analysis": {
      "summary": "海市蜃楼可用连续分层介质中的折射解释，光线逐渐弯曲并可能发生全反射。",
      "steps": [
        {
          "title": "建立分层模型",
          "body": "温度导致空气密度和折射率随高度变化，光线方向逐渐改变。"
        },
        {
          "title": "判断传播方向",
          "body": "光总是从一种折射率区域进入另一种折射率区域，不能忽略折射。"
        },
        {
          "title": "解释成像",
          "body": "远处物体的光线经弯曲到达人眼，产生虚像。"
        }
      ],
      "optionJudgements": {
        "A": "按题目条件逐项判断，详见原题截图和解析步骤。",
        "B": "按题目条件逐项判断，详见原题截图和解析步骤。",
        "C": "按题目条件逐项判断，详见原题截图和解析步骤。",
        "D": "按题目条件逐项判断，详见原题截图和解析步骤。"
      }
    },
    "tags": {
      "knowledge": [
        "折射定律",
        "全反射",
        "光路可逆"
      ],
      "methods": [
        "物理图像解释",
        "介质分层模型"
      ],
      "cognition": [
        "情境建模",
        "概念辨析"
      ],
      "mistakes": [
        "把折射现象误判为没有反射"
      ]
    },
    "diagnosis": {
      "qMatrix": {
        "折射定律": 1.0,
        "全反射": 0.6,
        "光路可逆": 0.6
      },
      "abilityLoadings": {
        "情境建模": 0.85,
        "概念辨析": 0.55
      },
      "mistakeEvidence": {
        "把折射现象误判为没有反射": {
          "ifWrong": 0.85,
          "ifCorrect": 0.15,
          "feedback": "若本题出错，优先检查：把折射现象误判为没有反射。"
        }
      }
    },
    "recommendations": {
      "similar": [
        "q020"
      ],
      "remediation": [
        "q001"
      ],
      "advanced": [
        "q002"
      ]
    },
    "qualityFlags": [
      "answer_generated",
      "ocr_uncertain",
      "formula_needs_review",
      "needs_teacher_review"
    ]
  },
  {
    "id": "q020",
    "title": "机械横波与光的偏振类比",
    "source": {
      "pdf": "53+-+2026B广东+-+一年预测.pdf",
      "page": 9,
      "extraction": "pdftoppm page render + Pillow manual-region crop + agent structure draft"
    },
    "questionImage": "assets/questions/q020.png",
    "type": "single",
    "difficulty": "中等",
    "stem": "机械横波与光的偏振类比。题干、图像和选项以原 PDF 截图为准。",
    "options": [
      {
        "id": "A",
        "text": "见原题截图中的 A 选项"
      },
      {
        "id": "B",
        "text": "见原题截图中的 B 选项"
      },
      {
        "id": "C",
        "text": "见原题截图中的 C 选项"
      },
      {
        "id": "D",
        "text": "见原题截图中的 D 选项"
      }
    ],
    "answer": [
      "C"
    ],
    "analysis": {
      "summary": "机械横波通过狭缝演示的是横波振动方向与狭缝方向的关系，偏振片实验体现光的横波性。",
      "steps": [
        {
          "title": "区分现象",
          "body": "绳波通过狭缝主要演示横波的方向选择，光通过偏振片体现偏振。"
        },
        {
          "title": "判断方向关系",
          "body": "当狭缝方向与振动方向匹配时绳波更易通过。"
        },
        {
          "title": "类比光学实验",
          "body": "保持 P 不动旋转 Q，透射光强随偏振方向夹角变化。"
        }
      ],
      "optionJudgements": {
        "A": "按题目条件逐项判断，详见原题截图和解析步骤。",
        "B": "按题目条件逐项判断，详见原题截图和解析步骤。",
        "C": "按题目条件逐项判断，详见原题截图和解析步骤。",
        "D": "按题目条件逐项判断，详见原题截图和解析步骤。"
      }
    },
    "tags": {
      "knowledge": [
        "机械波",
        "衍射",
        "偏振"
      ],
      "methods": [
        "类比分析",
        "实验现象解释"
      ],
      "cognition": [
        "跨模型迁移",
        "图像识别"
      ],
      "mistakes": [
        "把横波通过狭缝和偏振片透光条件混同"
      ]
    },
    "diagnosis": {
      "qMatrix": {
        "机械波": 1.0,
        "衍射": 0.6,
        "偏振": 0.6
      },
      "abilityLoadings": {
        "跨模型迁移": 0.85,
        "图像识别": 0.55
      },
      "mistakeEvidence": {
        "把横波通过狭缝和偏振片透光条件混同": {
          "ifWrong": 0.85,
          "ifCorrect": 0.15,
          "feedback": "若本题出错，优先检查：把横波通过狭缝和偏振片透光条件混同。"
        }
      }
    },
    "recommendations": {
      "similar": [
        "q001"
      ],
      "remediation": [
        "q002"
      ],
      "advanced": [
        "q003"
      ]
    },
    "qualityFlags": [
      "answer_generated",
      "ocr_uncertain",
      "formula_needs_review",
      "needs_teacher_review"
    ]
  }
];
