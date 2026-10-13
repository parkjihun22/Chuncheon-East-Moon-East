const SITE_URL = "https://godeok-sujainhouse.co.kr";

export const siteSeo = {
  siteName: "춘천 동문디이스트",
  siteUrl: SITE_URL,
  phone: "1533-8848",
  ogImage: "/img/og/main.jpg",
  locale: "ko_KR",
  organizationId: `${SITE_URL}/#organization`,
  websiteId: `${SITE_URL}/#website`,
  defaultTitle: "춘천 동문디이스트",
  defaultDescription:
    "춘천 동문디이스트 어반포레 안내 홈페이지입니다. 춘천 만천리·후평동 생활권, 사업안내, 입주자 모집공고, 59㎡·84㎡ 평면도, E-모델하우스와 모델하우스 방문예약 정보를 확인하세요.",
  project: {
    addressCountry: "KR",
    addressRegion: "강원특별자치도",
    addressLocality: "춘천시",
    streetAddress: "동면 만천리 811-21번지 외 10필지",
    block: "동면 만천리 811-21번지 일원",
    households: "569세대",
    scale: "지하 4층~지상 최고 29층, 총 6개 동 569세대",
    unitTypes: ["59㎡", "84㎡"],
    brand: "동문 디 이스트",
    brands: ["동문건설", "디 이스트"],
    navigationSchemaName: "춘천 동문디이스트 주요 메뉴",
  },
  keywords: [
    "춘천 동문디이스트",
    "춘천 동문디이스트 어반포레",
    "춘천 만천리 동문디이스트",
    "춘천시 동면 만천리",
    "춘천 만천리 아파트",
    "춘천 동문디이스트 분양",
    "춘천 동문디이스트 569세대",
    "후평동 생활권",
    "후평산업단지 직주근접",
    "59㎡ 84㎡ 평면도",
    "E-모델하우스",
    "모델하우스 방문예약",
  ],
};

export const seoNavigation = [
  {
    name: "브랜드소개",
    path: "/Brand/intro",
    children: [
      { name: "브랜드소개", path: "/Brand/intro" },
      // { name: "홍보영상", path: "/Brand/video" },
    ],
  },
  {
    name: "사업안내",
    path: "/BusinessGuide/intro",
    children: [
      { name: "사업안내", path: "/BusinessGuide/intro" },
      // { name: "분양일정", path: "/BusinessGuide/plan" },
    ],
  },
  {
    name: "입지환경",
    path: "/LocationEnvironment/intro",
    children: [
      { name: "입지안내", path: "/LocationEnvironment/intro" },
      { name: "프리미엄", path: "/LocationEnvironment/primium" },
    ],
  },
  {
    name: "단지안내",
    path: "/ComplexGuide/intro",
    children: [
      { name: "단지배치도", path: "/ComplexGuide/intro" },
      { name: "호수배치도", path: "/ComplexGuide/detailintro" },
      { name: "커뮤니티", path: "/ComplexGuide/community" },
    ],
  },
  {
    name: "분양안내",
    path: "/SalesInfo/announcement",
    children: [
      // { name: "공급안내", path: "/BusinessGuide/documents" },
      { name: "입주자 모집공고", path: "/SalesInfo/announcement" },
      // { name: "계약서류안내", path: "/SalesInfo/guide" },
      // { name: "청약안내", path: "/SalesInfo/SubscriptionGuide" },
      // { name: "인지세 납부안내", path: "/SalesInfo/StampTax" },
    ],
  },
  {
    name: "타입안내",
    path: "/FloorPlan/59A",
    children: [
      { name: "59㎡", path: "/FloorPlan/59A" },
      { name: "84A㎡", path: "/FloorPlan/59B" },
      { name: "84B㎡", path: "/FloorPlan/84A" },
      { name: "84C㎡", path: "/FloorPlan/84B" },
      { name: "84D㎡", path: "/FloorPlan/114A" },
      // { name: "84㎡B", path: "/FloorPlan/114B" },
      { name: "E-모델하우스", path: "/FloorPlan/Emodel" },
    ],
  },
  // 현재 헤더에서 사용하지 않는 인테리어 메뉴는 보존합니다.
  // {
  //   name: "인테리어",
  //   path: "/Interior/59A",
  //   children: [
  //     { name: "인테리어", path: "/Interior/59A" },
  //     { name: "인테리어", path: "/Interior/84A" },
  //     { name: "인테리어", path: "/Interior/84B" },
  //   ],
  // },
  {
    name: "홍보센터",
    path: "/Promotion/Press",
    children: [
      { name: "언론보도", path: "/Promotion/Press" },
      { name: "관심고객등록", path: "/Promotion/Customer" },
    ],
  },
];

const page = ({
  path,
  title,
  description,
  menu,
  image = siteSeo.ogImage,
  priority = 0.8,
  changefreq = "weekly",
  robots = "index, follow, max-snippet:-1, max-image-preview:large",
}) => ({
  path,
  title,
  description,
  menu,
  image,
  priority,
  changefreq,
  robots,
});

export const seoPages = {
  home: page({
    path: "/",
    title: "춘천 동문디이스트",
    description: siteSeo.defaultDescription,
    menu: "홈",
    priority: 1,
    changefreq: "daily",
  }),
  brandIntro: page({
    path: "/Brand/intro",
    title: "브랜드소개 | 춘천 동문디이스트",
    description:
      "춘천 동문디이스트의 동문건설 디 이스트 브랜드 가치와 주거 철학을 소개합니다. 춘천 만천리에서 만나는 브랜드 아파트의 주거 가치를 확인하세요.",
    menu: "브랜드소개",
  }),
  brandVideo: page({
    path: "/Brand/video",
    title: "홍보영상 | 춘천 동문디이스트",
    description:
      "춘천 동문디이스트 홍보영상을 통해 춘천 만천리와 후평동 생활권, 브랜드 프리미엄과 단지의 주거 가치를 확인하세요.",
    menu: "브랜드소개",
  }),
  businessIntro: page({
    path: "/BusinessGuide/intro",
    title: "사업안내 | 춘천 동문디이스트",
    description:
      "춘천 동문디이스트 사업개요 안내입니다. 춘천시 동면 만천리, 총 6개 동 569세대 규모, 전용 59㎡·84㎡ 구성의 브랜드 아파트 정보를 확인하세요.",
    menu: "사업안내",
    image: "/img/og/business.jpg",
    priority: 0.9,
  }),
  businessPlan: page({
    path: "/BusinessGuide/plan",
    title: "분양일정 | 춘천 동문디이스트",
    description:
      "춘천 동문디이스트 분양일정 안내입니다. 해당 공급의 접수, 당첨자 발표, 서류접수와 계약 등 모집공고에 명시된 주요 일정을 확인하세요.",
    menu: "사업안내",
  }),
  salesGuide: page({
    path: "/BusinessGuide/documents",
    title: "공급안내 | 춘천 동문디이스트",
    description:
      "춘천 동문디이스트 공급안내 페이지입니다. 전용 59㎡·84㎡ 타입별 공급 구성, 모집공고와 공급 조건 등 계약 전 확인해야 할 주요 정보를 안내합니다.",
    menu: "분양안내",
  }),
  salesInfoGuide: page({
    path: "/SalesInfo/guide",
    title: "계약서류안내 | 춘천 동문디이스트",
    description:
      "춘천 동문디이스트 계약서류안내 페이지입니다. 계약 준비에 필요한 제출서류와 확인사항, 공급 및 계약 관련 주요 안내를 한눈에 확인하세요.",
    menu: "분양안내",
  }),
  subscriptionGuide: page({
    path: "/SalesInfo/SubscriptionGuide",
    title: "청약안내 | 춘천 동문디이스트",
    description:
      "춘천 동문디이스트 청약안내입니다. 해당 공급의 모집공고를 기준으로 신청 전 확인해야 할 청약 자격, 접수 절차와 당첨자 발표 정보를 안내합니다.",
    menu: "분양안내",
  }),
  announcement: page({
    path: "/SalesInfo/announcement",
    title: "입주자 모집공고 | 춘천 동문디이스트",
    description:
      "춘천 동문디이스트 입주자 모집공고 안내입니다. 공급 대상, 주택형 구성, 공고별 일정과 계약 조건 등 청약 및 계약 전 확인해야 할 정보를 제공합니다.",
    menu: "분양안내",
  }),
  stampTax: page({
    path: "/SalesInfo/StampTax",
    title: "인지세 납부안내 | 춘천 동문디이스트",
    description:
      "춘천 동문디이스트 인지세 납부안내입니다. 분양계약 시 확인해야 할 인지세 납부 기준과 계약 관련 유의사항을 확인하세요.",
    menu: "분양안내",
  }),
  locationIntro: page({
    path: "/LocationEnvironment/intro",
    title: "입지안내 | 춘천 동문디이스트",
    description:
      "춘천 동문디이스트 입지환경 안내입니다. 만천리·후평동 생활권, 후평산업단지 접근성, 만천초 통학환경과 생활·자연 인프라를 확인하세요.",
    menu: "입지환경",
    image: "/img/og/location.jpg",
    priority: 0.9,
  }),
  locationPremium: page({
    path: "/LocationEnvironment/primium",
    title: "프리미엄 | 춘천 동문디이스트",
    description:
      "춘천 동문디이스트 프리미엄 안내입니다. 만천리와 후평동 생활권, 교육·자연환경, 주변 개발사업의 추진 흐름과 브랜드 주거 가치를 소개합니다.",
    menu: "입지환경",
    image: "/img/og/location.jpg",
  }),
  complexIntro: page({
    path: "/ComplexGuide/intro",
    title: "단지배치도 | 춘천 동문디이스트",
    description:
      "춘천 동문디이스트 단지배치도 안내입니다. 채광과 통풍, 보행 동선과 생활 편의를 고려한 총 6개 동의 단지 구성과 배치 계획을 확인하세요.",
    menu: "단지안내",
    image: "/img/og/complex.jpg",
    priority: 0.9,
  }),
  complexDetail: page({
    path: "/ComplexGuide/detailintro",
    title: "호수배치도 | 춘천 동문디이스트",
    description:
      "춘천 동문디이스트 호수배치도 안내입니다. 동·호수 구성과 단지 내 위치 정보를 통해 타입별 세대 배치와 방향을 확인하세요.",
    menu: "단지안내",
    image: "/img/og/complex.jpg",
  }),
  complexCommunity: page({
    path: "/ComplexGuide/community",
    title: "커뮤니티 | 춘천 동문디이스트",
    description:
      "춘천 동문디이스트 커뮤니티 안내입니다. 피트니스, 골프연습장, 작은도서관과 스카이카페 등 일상과 여가를 위한 시설 계획을 확인하세요.",
    menu: "단지안내",
    image: "/img/og/complex.jpg",
  }),

  // 기존 키는 유지하고 표시 타입은 현재 헤더 연결 기준으로 맞춥니다.
  // /FloorPlan/59A → 59㎡
  floorPlan84A: page({
    path: "/FloorPlan/59A",
    title: "59㎡ 평면도 | 춘천 동문디이스트",
    description:
      "춘천 동문디이스트 59㎡ 평면도 안내입니다. 실용적인 면적에 구성된 침실과 거실, 주방 등 공간 구성과 생활 동선을 확인하세요.",
    menu: "타입안내",
  }),

  // /FloorPlan/59B → 84A㎡
  floorPlan84C: page({
    path: "/FloorPlan/59B",
    title: "84A㎡ 평면도 | 춘천 동문디이스트",
    description:
      "춘천 동문디이스트 84A㎡ 평면도 안내입니다. 주방 옆 알파룸과 드레스룸, 가족 생활 동선을 고려한 세대 구성을 확인하세요.",
    menu: "타입안내",
  }),

  // /FloorPlan/84A → 84B㎡
  floorPlan101: page({
    path: "/FloorPlan/84A",
    title: "84B㎡ 평면도 | 춘천 동문디이스트",
    description:
      "춘천 동문디이스트 84B㎡ 평면도 안내입니다. 침실 배치와 주방·거실 연결, 실거주를 고려한 공간 구성과 생활 동선을 확인하세요.",
    menu: "타입안내",
  }),

  // /FloorPlan/84B → 84C㎡
  floorPlan84B: page({
    path: "/FloorPlan/84B",
    title: "84C㎡ 평면도 | 춘천 동문디이스트",
    description:
      "춘천 동문디이스트 84C㎡ 평면도 안내입니다. 거실과 주방 배치, 거실 옆 알파룸과 팬트리 등 공간 활용 포인트를 확인하세요.",
    menu: "타입안내",
  }),

  // /FloorPlan/114A → 84D㎡
  floorPlan114A: page({
    path: "/FloorPlan/114A",
    title: "84D㎡ 평면도 | 춘천 동문디이스트",
    description:
      "춘천 동문디이스트 84D㎡ 평면도 안내입니다. 주방 옆 알파룸과 팬트리, 침실 배치 등 타입별 공간 구성과 주거 동선을 확인하세요.",
    menu: "타입안내",
  }),

  // 현재 헤더에서 비활성인 기존 페이지 설정은 보존합니다.
  floorPlan114B: page({
    path: "/FloorPlan/114B",
    title: "타입별 세대안내 | 춘천 동문디이스트",
    description:
      "춘천 동문디이스트 세대안내 페이지입니다. 전용 59㎡·84㎡의 타입별 공간 구성, 수납 계획과 생활 동선 등 주요 정보를 확인하세요.",
    menu: "타입안내",
  }),
  floorPlanVideos: page({
    path: "/FloorPlan/videos",
    title: "세대안내영상 | 춘천 동문디이스트",
    description:
      "춘천 동문디이스트 세대안내영상 페이지입니다. 제공되는 타입별 공간 구성과 실내 포인트, 생활 동선을 영상으로 확인하세요.",
    menu: "타입안내",
  }),
  emodel: page({
    path: "/FloorPlan/Emodel",
    title: "E-모델하우스 | 춘천 동문디이스트",
    description:
      "춘천 동문디이스트 E-모델하우스입니다. 제공되는 84A㎡·84C㎡ 유니트의 실내 구조, 공간 구성과 주거 동선을 온라인으로 확인하세요.",
    menu: "타입안내",
    image: "/img/og/emodel.jpg",
    priority: 0.9,
  }),

  // 인테리어 경로별 타입 연결은 미확인 상태이므로 공통 설명을 사용합니다.
  interior84A: page({
    path: "/Interior/59A",
    title: "실내 공간 인테리어 | 춘천 동문디이스트",
    description:
      "춘천 동문디이스트 인테리어 안내입니다. 소개된 세대의 실내 마감, 공간 분위기와 인테리어 포인트를 확인하세요.",
    menu: "인테리어",
  }),
  interior84C: page({
    path: "/Interior/84A",
    title: "공간 구성 인테리어 | 춘천 동문디이스트",
    description:
      "춘천 동문디이스트 인테리어 안내입니다. 소개된 실내 공간의 분위기와 구성, 생활 동선과 공간 활용 포인트를 확인하세요.",
    menu: "인테리어",
  }),
  interior101: page({
    path: "/Interior/84B",
    title: "실내 마감 인테리어 | 춘천 동문디이스트",
    description:
      "춘천 동문디이스트 인테리어 안내입니다. 소개된 세대의 실내 공간과 마감, 수납 구성 등 주요 인테리어 포인트를 확인하세요.",
    menu: "인테리어",
  }),
  press: page({
    path: "/Promotion/Press",
    title: "언론보도 | 춘천 동문디이스트",
    description:
      "춘천 동문디이스트 언론보도 페이지입니다. 춘천 만천리 사업정보, 전용 59㎡·84㎡ 타입 구성, 입지환경, E-모델하우스와 방문예약 관련 안내 및 단지 소식을 확인하세요.",
    menu: "홍보센터",
    image: "/img/og/main.jpg",
    priority: 0.9,
    changefreq: "daily",
  }),
  customer: page({
    path: "/Promotion/Customer",
    title: "관심고객등록 | 춘천 동문디이스트",
    description:
      "춘천 동문디이스트 관심고객등록 페이지입니다. 공급 현황, 모델하우스 방문예약, 상담 안내와 현장 관련 주요 소식을 받아보세요.",
    menu: "홍보센터",
    image: "/img/og/customer.jpg",
    priority: 0.9,
    changefreq: "daily",
  }),
  notFound: page({
    path: "/404",
    title: "페이지를 찾을 수 없습니다 | 춘천 동문디이스트",
    description:
      "요청하신 페이지를 찾을 수 없습니다. 춘천 동문디이스트 안내 홈페이지의 사업안내, 입지환경, 타입안내, E-모델하우스와 관심고객등록 메뉴를 이용해 주세요.",
    menu: "오류",
    priority: 0,
    changefreq: "yearly",
    robots: "noindex, follow",
  }),
};

export const seoPathMap = Object.fromEntries(
  Object.entries(seoPages).map(([key, value]) => [value.path.toLowerCase(), key])
);

export const getAbsoluteUrl = (path = "/") => {
  if (/^https?:\/\//.test(path)) return path;
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteSeo.siteUrl}${normalizedPath}`;
};

export const getSeoPageByPath = (pathname = "/") => {
  const decodedPath = decodeURI(pathname).replace(/\/$/, "") || "/";
  const normalizedPath = decodedPath.toLowerCase();
  const exactKey = seoPathMap[normalizedPath];

  if (exactKey) return seoPages[exactKey];

  if (normalizedPath.endsWith("/press")) return seoPages.press;
  if (normalizedPath.includes("/press/")) return seoPages.press;
  if (normalizedPath.endsWith("/customer")) return seoPages.customer;

  return seoPages.notFound;
};