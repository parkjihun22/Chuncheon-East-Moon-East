// src/components/MobileOverviewSection/MobileOverviewSection.jsx

import React, { useState, useEffect, useRef } from "react";
import styles from "./MobileOverviewSection.module.scss";

// 1) 모바일 메인 히어로 이미지
import heroImage from "../../assets/Main/heroImage.jpg";
// 2) 입지환경 지도
import mobileMap from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import mobileMap2 from "../../assets/LocationEnvironment/LocationEnvironment2/page2.jpg";
// 3) 프리미엄 슬라이드 이미지들
import slide1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import slide2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import slide3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import slide4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import slide5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import slide6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";

const items = [
  {
    key: "overview",
    label: "사업개요",
    content: (
      <ul className={styles.detailList}>
        <li>
          <strong>사업명</strong>
          <span>춘천 동문디이스트 어반포레</span>
        </li>
        <li>
          <strong>대지위치</strong>
          <span>강원특별자치도 춘천시 동면 만천리 811-21번지 외 10필지</span>
        </li>
        <li>
          <strong>건축규모</strong>
          <span>지하 4층~지상 최고 29층 / 총 6개 동</span>
        </li>
        <li>
          <strong>세대수</strong>
          <span>총 569세대</span>
        </li>
        <li>
          <strong>세대정보</strong>
          <span>전용 59㎡ · 84㎡ 중심의 브랜드 아파트</span>
        </li>
        <li>
          <strong>입지환경</strong>
          <span>춘천 만천리 · 후평동 생활권</span>
        </li>
        <li>
          <strong>직주근접</strong>
          <span>후평산업단지 및 주변 업무시설 접근 생활권</span>
        </li>
        <li>
          <strong>브랜드</strong>
          <span>동문건설 · 디 이스트</span>
        </li>
      </ul>
    ),
  },
  
  {
    key: "location",
    label: "입지환경",
    content: (
      <div className={styles.mapGrid}>
        <img
          src={mobileMap}
          className={styles.mapImage}
          alt="춘천 동문디이스트 입지환경 지도"
        />
        <img
          src={mobileMap2}
          className={styles.mapImage}
          alt="춘천 동문디이스트 생활권 지도"
        />
      </div>
    ),
  },
  {
    key: "premium",
    label: "프리미엄",
    content: (
      <>
        {/* 프리미엄 섹션 상단 문단 */}
        <div className={styles.premiumIntro}>
          <h3 className={styles.premiumTitle}>GREAT PREMIUM</h3>
          <p className={styles.premiumSubtitle}>
            후평동 생활 인프라와 만천리의 자연을 누리는<br />
            춘천 동문디이스트 프리미엄 라이프
          </p>
        </div>
        {/* 슬라이더 */}
        <PremiumSlider />
      </>
    ),
  },
];

function PremiumSlider() {
  const slides = [
    {
      img: slide1,
      title: "춘천 만천리와 후평동 생활권",
      desc:
        "만천리와 후평동을 함께 누리는 생활권 입지<br/>생활·교육·자연 인프라가 어우러진 주거환경<br/>춘천 동문디이스트 브랜드 프리미엄",
    },
    {
      img: slide2,
      title: "59㎡ · 84㎡ 브랜드 평면",
      desc:
        "실용적인 전용 59㎡와 선호도 높은 84㎡ 구성<br/>공간 활용과 생활 동선을 고려한 특화 설계<br/>가족 중심 라이프스타일을 담은 주거 공간",
    },
    {
      img: slide3,
      title: "후평산업단지 직주근접",
      desc:
        "후평산업단지와 주변 업무시설 접근 입지<br/>춘천 주요 도로망과 철도역 연계 이동 가능<br/>출퇴근 동선과 생활 편의를 함께 고려한 주거 환경",
    },
    {
      img: slide4,
      title: "생활·교육 인프라를 모두 누리다",
      desc:
        "후평동의 마트와 상업시설을 이용하는 생활권<br/>만천초 통학환경과 만천천 산책길의 여유<br/>편리함과 쾌적함을 함께 담은 브랜드 아파트",
    },
    {
      img: slide5,
      title: "동문건설 디 이스트 브랜드 프리미엄",
      desc:
        "차별화된 단지 설계와 다양한 커뮤니티 계획<br/>운동과 독서, 휴식을 위한 입주민 중심 공간<br/>27층 스카이카페로 더하는 특별한 일상의 여유",
    },
    {
      img: slide6,
      title: "변화가 기대되는 주거 선택",
      desc:
        "후평산업단지 재생사업으로 기대되는 주변 변화<br/>GTX-B 춘천 연장 추진 등 광역교통 개선 기대<br/>현재의 생활과 미래의 변화를 살펴보는 춘천 동문디이스트",
    },
  ];
  

  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  const nextSlide = () =>
    setCurrent((c) => (c + 1 + slides.length) % slides.length);
  const prevSlide = () =>
    setCurrent((c) => (c - 1 + slides.length) % slides.length);

  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const handleTouchMove = (e) => setTouchEndX(e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStartX == null || touchEndX == null) return;
    const dist = touchStartX - touchEndX;
    if (dist > 50) nextSlide();
    else if (dist < -50) prevSlide();
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div
      className={styles.premiumSlider}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.slide}>
        <img src={slides[current].img} alt="" />
        <div className={styles.caption}>
          <h4
            dangerouslySetInnerHTML={{ __html: slides[current].title.replace(/\n/g, "<br/>") }}
          />
          <p
            dangerouslySetInnerHTML={{ __html: slides[current].desc }}
          />
        </div>
      </div>
      <div className={styles.dots}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={idx === current ? styles.dotActive : styles.dot}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default function MobileOverviewSection() {
  const [openKey, setOpenKey] = useState(null);
  const itemRefs = useRef({});

  const toggle = (key) => {
    setOpenKey((prevKey) => (prevKey === key ? null : key));

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        const targetItem = itemRefs.current[key];
        if (!targetItem) return;

        const fixedHeaderOffset = 96;
        const targetTop =
          window.scrollY + targetItem.getBoundingClientRect().top - fixedHeaderOffset;

        window.scrollTo({
          top: Math.max(targetTop, 0),
          behavior: "auto",
        });
      });
    });
  };

  return (
    <section className={styles.overviewSection}>
      {/* ─── 헤더 영역 ─── */}
      <header className={styles.overviewHeader}>
        <div className={styles.preTitle}>BUSINESS</div>
        <div className={styles.line} />
        <h2 className={styles.mainTitle}>사업안내</h2>
      </header>

      <img src={heroImage} className={styles.heroImage} alt="춘천 동문디이스트 히어로 메인사진" />

      {/* ─── 아코디언 항목 ─── */}
      {items.map(({ key, label, content }) => (
        <div
          key={key}
          className={styles.accordionItem}
          ref={(node) => {
            itemRefs.current[key] = node;
          }}
        >
          <button
            type="button"
            className={`${styles.accordionHeader} ${openKey === key ? styles.active : ""}`}
            onClick={() => toggle(key)}
            aria-expanded={openKey === key}
          >
            <span className={styles.label}>{label}</span>
            <span className={`${styles.arrow} ${openKey === key ? styles.up : styles.down}`} />
          </button>
          {openKey === key && <div className={styles.accordionContent}>{content}</div>}
        </div>
      ))}
    </section>
  );
}
