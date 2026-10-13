import React, { useEffect, useState } from "react";
import styles from "./Bener.module.scss";
import img from "../../assets/Bener/bener.jpg";

const Bener = ({ title = "춘천 동문디이스트" }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    // 이미지가 로드된 후 애니메이션 시작
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true); // 이미지 로딩 후 애니메이션을 시작
        }, 100); // 0.1초 후에 애니메이션을 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
            {/* 배너 이미지 */}
            <img
                className={`${styles.benerImage} ${isLoaded ? styles.showImage : ''}`}
                src={img}
                alt="춘천 동문디이스트 배너이미지"
            />
            <div className={styles.overlay}></div>
            <div
                className={`${styles.contents} ${isLoaded ? styles.showContents : ''}`}
            >
                <h1
                    className={`${styles.title} ${isLoaded ? styles.showTitle : ''}`}
                >
                    {title}
                </h1>
                {contents(title, isLoaded)}
            </div>
        </div>
    );
};

export default Bener;

const contents = (text, isLoaded) => {
  const normalizedText = text.replace(/\s/g, "");
  const brandTitles = ["홍보영상", "브랜드소개", "춘천동문디이스트"];
  const businessTitles = [
    "사업개요",
    "사업안내",
    "분양일정",
    "공급안내",
    "분양안내",
    "청약안내",
    "모집공고안내",
    "인지세납부안내",
  ];
  const locationTitles = ["입지환경", "입지안내", "프리미엄"];
  const complexTitles = ["단지안내", "단지배치도", "호수배치도", "커뮤니티"];
  const unitTitles = [
    "세대안내",
    "세대안내영상",
    "59㎡평면도",
    "84A㎡평면도",
    "84B㎡평면도",
    "84C㎡평면도",
    "84D㎡평면도",
    "E모델하우스",
    "E-모델하우스",
  ];
  const promotionTitles = ["홍보센터", "언론보도", "관심고객등록", "방문예약등록"];

  if (brandTitles.includes(normalizedText)) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          춘천 동면 만천리에서 만나는 춘천 동문디이스트의 새로운 주거 가치.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          춘천 동문디이스트, 동문건설의 브랜드 가치와 자연의 여유를 담은 아파트.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          교육·생활 인프라와 쾌적한 자연환경을 갖춘 만천리의 새로운 주거 선택지.
        </div>
      </>
    );
  } else if (businessTitles.includes(normalizedText) || unitTitles.includes(normalizedText) || normalizedText.includes("인테리어")) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          춘천 만천리와 후평동 생활권을 누리는 춘천 동문디이스트 사업 안내.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          동문건설의 브랜드 가치가 더해진 실거주 중심의 569세대 주거 단지.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          공급 정보부터 모집공고, 세대 구성, 인테리어까지 한눈에 확인하세요.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          춘천 동문디이스트
        </div>
      </>
    );
  } else if (locationTitles.includes(normalizedText)) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          후평동 생활 인프라와 만천초 통학환경을 가까이 누리는 입지 프리미엄.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          만천천 산책길의 여유와 후평산업단지 재생사업의 변화를 기대할 수 있는 주거 환경.
        </div>
      </>
    );
  } else if (complexTitles.includes(normalizedText)) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          쾌적한 단지 설계와 실용적인 공간 구성을 갖춘 춘천 동문디이스트.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          일상 속 여유를 더하는 조경, 스카이카페, 다양한 커뮤니티 계획을 확인하세요.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          춘천 동문디이스트, 만천리에서 새로운 주거 기준을 제안합니다.
        </div>
      </>
    );
  } else if (promotionTitles.includes(normalizedText)) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          춘천 동문디이스트의 분양 소식과 모델하우스 방문예약 안내를 확인하세요.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          관심고객등록을 통해 공급 정보, 현장 소식, 상담 안내를 빠르게 받아보실 수 있습니다.
        </div>
      </>
    );
  }

  return (
    <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
      춘천 동문디이스트 안내 홈페이지에서 주요 분양 정보를 확인하세요.
    </div>
  );
};