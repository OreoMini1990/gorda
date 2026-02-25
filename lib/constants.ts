// 랜딩 페이지 문구 상수

export const SITE = {
  name: "GORDA COMPANY",
  tagline: "COMPANY",
} as const;

export const HERO = {
  badge: "Professional Medical Consulting",
  headline: [
    "성공적인 개원을 위한",
    "스마트한 선택,",
    "필요한 것만 고르다",
  ],
  subcopy:
    "복잡한 개원 과정, 이제는 원하는 서비스만 선택하세요. 데이터 기반의 입지 분석부터 마케팅까지, GORDA가 당신의 성공적인 시작을 함께합니다.",
  ctaPrimary: "무료 상담 신청하기",
  ctaSecondary: "서비스 소개서 다운로드",
} as const;

export const PICK_MODULES = [
  { id: "location", label: "입지" },
  { id: "funding", label: "자금" },
  { id: "interior", label: "인테리어" },
  { id: "tax", label: "세무" },
  { id: "marketing", label: "마케팅" },
  { id: "claim", label: "심사청구" },
  { id: "cs", label: "CS" },
  { id: "emr", label: "EMR" },
] as const;

export const PROBLEM = {
  title: "왜 대부분의 개원 컨설팅은 비효율적일까요?",
  tagline: "병원은 프로젝트가 아니라 '운영 시스템'입니다.",
  points: [
    { id: "1", text: "Full 패키지 강매" },
    { id: "2", text: "불필요한 비용" },
    { id: "3", text: "실무 경험 없는 PPT형 컨설팅" },
    { id: "4", text: "개원 후 운영까지 연결되지 않음" },
  ],
} as const;

export const SOLUTION = {
  badge: "GORDA Pick-set System",
  title: "필요한 조각만 선택하여 완성하는 개원",
  message:
    "일괄적인 컨설팅이 아닌, 원장님께 꼭 필요한 부분만 모듈형으로 선택하세요. 합리적인 비용으로 최고의 효율을 만들어냅니다.",
} as const;

export const PROOF = {
  title: "병원을 실제로 운영해본 사람들이 설계합니다.",
  points: [
    "실제 병원 운영 경험",
    "심사청구 실무",
    "비트컴퓨터 협업",
    "EMR 교육 세미나",
  ],
  tagline:
    "개원 경험이 없는 컨설팅이 아니라, 병원을 만들어본 사람이 설계합니다.",
  kpis: [
    { label: "세미나/교육", value: "—" },
    { label: "컨설팅 건수", value: "—" },
    { label: "협업 기관", value: "—" },
  ],
} as const;

export const SERVICES_LIST = [
  {
    id: "location",
    title: "입지 분석",
    desc: "빅데이터 기반 상권 분석 및 경쟁 병원 현황 파악을 통한 최적의 개원 입지 선정",
    icon: "location_on",
  },
  {
    id: "funding",
    title: "자금/금융",
    desc: "개원 자금 조달 계획 수립 및 닥터론 최저 금리 비교, 예산 운용 포트폴리오 제공",
    icon: "account_balance",
  },
  {
    id: "interior",
    title: "인테리어",
    desc: "진료 동선을 고려한 효율적인 설계와 병원 전문 시공사 매칭 및 감리 서비스",
    icon: "architecture",
  },
  {
    id: "legal",
    title: "법무/세무",
    desc: "의료법 검토, 사업자 등록, 세무 기장 및 절세 전략 컨설팅",
    icon: "gavel",
  },
  {
    id: "equipment",
    title: "의료장비",
    desc: "진료 과목별 필수 장비 리스트업 및 최적가 구매 대행, 데모 지원",
    icon: "medical_services",
  },
  {
    id: "claim",
    title: "심사·청구",
    desc: "심사청구 체계 설계·교육 및 EMR 연동",
    icon: "receipt_long",
  },
  {
    id: "marketing",
    title: "마케팅",
    desc: "온/오프라인 통합 마케팅 전략 수립, 브랜드 아이덴티티(BI) 개발",
    icon: "campaign",
  },
  {
    id: "staff",
    title: "Staff 교육",
    desc: "실무 교육·CS 운영",
    icon: "school",
  },
] as const;

export const MEDIFIRST = {
  title: "컨설팅을 넘어, 생태계를 만듭니다.",
  brand: "메디퍼스트",
  points: [
    "1차의료 전문 커뮤니티",
    "인증 기반 구조",
    "포인트 시스템",
    "실무 노하우 교류",
  ],
  tagline:
    "우리는 병원을 만드는 것이 아니라, 1차의료 인프라를 만듭니다.",
  cta: "메디퍼스트 문의",
} as const;

export const MISSION = {
  title: "Mission & Philosophy",
  statement:
    "1차의료 종사자가 실무적으로 앞서갈 수 있는 환경을 만든다.",
} as const;

export const FINAL_CTA = {
  headline: ["지금, 무엇이 필요하십니까?", "전부가 아니라, 필요한 것만 고르십시오."],
  button: "무료 개원 전략 상담 받기",
} as const;

export const FAQ_ITEMS = [
  {
    id: "1",
    q: "선택형이라 비용은 어떻게 산정되나요?",
    a: "필요한 모듈만 선택하시므로, 선택하신 항목에 따라 비용이 산정됩니다. 패키지가 아닌 모듈 단위로 견적을 드리며, 사전 상담 시 예산에 맞게 조합을 제안해 드립니다.",
  },
  {
    id: "2",
    q: "개원 이후 운영·정산까지 지원하나요?",
    a: "네. 개원 단계뿐 아니라 운영·정산·심사청구까지 이어지는 실무 구조를 설계합니다. 병원은 프로젝트가 아니라 운영 시스템이라는 관점으로, 개원 후까지 연결된 지원을 지향합니다.",
  },
  {
    id: "3",
    q: "심사청구 교육은 누가 대상인가요?",
    a: "원장님, 원무과 담당자, 실무 담당자 등 실제 청구 업무를 수행하시는 분들이 대상입니다. 비트컴퓨터(EMR) 협업 교육 등 실무에 바로 적용 가능한 내용으로 진행합니다.",
  },
  {
    id: "4",
    q: "특정 파트만 의뢰할 수 있나요?",
    a: "아닙니다. 필요하신 분야를 의뢰하시면 상황에 맞게 컨설팅해 드리며, 전체적인 솔루션을 원하실 경우 상담을 통해 결정됩니다.",
  },
  {
    id: "5",
    q: "계약 기간과 프로세스는 어떻게 되나요?",
    a: "의뢰하신 모듈과 범위에 따라 상이합니다. 무료 상담 시 목표 시기, 예산, 필요한 영역을 함께 정리한 뒤 계약 기간과 단계별 진행 방식을 제안해 드립니다.",
  },
  {
    id: "6",
    q: "메디퍼스트 커뮤니티 가입 조건이 있나요?",
    a: "1차의료 관련 종사자·예정자를 대상으로 하며, 인증 기반 구조로 운영됩니다. 가입 조건과 혜택은 메디퍼스트 문의를 통해 안내해 드립니다.",
  },
] as const;

export const FOOTER = {
  company: "GORDA COMPANY",
  links: [
    { label: "서비스 소개", href: "#services" },
    { label: "메디퍼스트", href: "#medifirst" },
    { label: "FAQ", href: "#faq" },
    { label: "문의", href: "#contact" },
  ],
  copyright: "© GORDA COMPANY. All rights reserved.",
} as const;

export const CONTACT_INTERESTS = [
  "입지·자금",
  "인테리어·동선",
  "세무·노무",
  "심사청구·EMR",
  "마케팅",
  "메디퍼스트",
  "기타",
] as const;
