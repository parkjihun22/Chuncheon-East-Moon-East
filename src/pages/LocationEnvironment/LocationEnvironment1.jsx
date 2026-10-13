import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FiSearch, FiX } from "react-icons/fi";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import LocationSectionBox from "../../components/LocationSectionBox/LocationSectionBox";
import page1 from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import section2Image1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import section2Image2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import section2Image3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import section2Image4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import section2Image5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import section2Image6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";

const locationMenu = [
  { title: "입지안내", url: "/LocationEnvironment/intro" },
  { title: "프리미엄", url: "/LocationEnvironment/primium" },
];

const locationSections = [
  {
    img: section2Image1,
    titleText: "춘천 만천리와 후평동 생활권<br />생활과 자연을 품은 주거환경",
    contentText:
      "만천리와 후평동의 생활 인프라를 함께 누리는 입지<br />일상의 편리함과 자연의 여유를 담은 브랜드 아파트",
  },
  {
    img: section2Image2,
    titleText: "풍부한 생활 인프라<br />편리한 일상",
    contentText:
      "후평동의 마트와 상업시설을 이용하는 생활권<br />기존 생활 인프라로 편리한 일상을 누리는 주거 환경",
  },
  {
    img: section2Image3,
    titleText: "후평산업단지 직주근접<br />주요 교통망 연계",
    contentText:
      "후평산업단지와 주변 업무시설 접근성을 고려한 입지<br />춘천 주요 도로망과 철도역을 연계해 이동하는 생활 환경",
  },
  {
    img: section2Image4,
    titleText: "교육과 생활을 모두 갖춘<br />만천리 생활권",
    contentText:
      "만천초 통학환경과 주변 교육·생활시설을 이용하는 환경<br />가족 중심의 쾌적한 주거 라이프를 계획하였습니다.",
  },
  {
    img: section2Image5,
    titleText: "동문건설 디 이스트 브랜드<br />프리미엄 아파트",
    contentText:
      "단지 배치와 다양한 커뮤니티 계획을 갖춘 주거 공간<br />춘천 만천리에 조성되는 동문건설의 브랜드 아파트",
  },
  {
    img: section2Image6,
    titleText: "자연과 함께하는<br />프리미엄 라이프",
    contentText:
      "만천천 산책길과 인근 체육시설을 누리는 쾌적한 생활환경<br />일상의 편의와 자연의 여유를 담은 춘천 동문디이스트",
  },
];

const LocationEnvironment1 = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [zoomImage, setZoomImage] = useState(null);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!zoomImage) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setZoomImage(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [zoomImage]);

  const openZoom = (src, alt) => {
    setZoomImage({ src, alt });
  };

  return (
    <div className={styles.container}>
      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="입지환경" />
      <MenuBar contents={locationMenu} />

      <div className={styles.textBox}>
        <div>춘천 생활권에서</div>
        <div>삶의 가치가 높아지는 곳</div>
        <div>춘천 동문디이스트가 새로운 주거 가치로 찾아옵니다.</div>
      </div>

      <figure className={styles.locationMapFrame}>
        <img
          src={page1}
          className={styles.image2}
          alt="춘천 동문디이스트 입지환경과 생활권 안내 이미지"
        />
        <button
          type="button"
          className={styles.zoomButton}
          onClick={() =>
            openZoom(
              page1,
              "춘천 동문디이스트 입지환경과 생활권 안내 이미지"
            )
          }
          aria-label="입지환경 이미지 크게 보기"
        >
          <FiSearch />
          <span>크게 보기</span>
        </button>
      </figure>

      <div className={styles.section2}>
        {locationSections.map((value) => (
          <LocationSectionBox
            key={value.titleText}
            image={value.img}
            title={value.titleText}
            text={value.contentText}
            onZoom={() =>
              openZoom(
                value.img,
                `춘천 동문디이스트 ${value.titleText.replace(/<[^>]*>/g, " ")} 이미지`
              )
            }
          />
        ))}
      </div>

      <div className={styles.commonBox}>
        <div className={styles.notice}>
          본 홍보물의 내용과 이미지는 소비자의 이해를 돕기 위한 것으로, 개발 예정 및 교통,
          학교 계획 등에 관한 사항은 해당 기관의 자료를 토대로 제작되었습니다. 사업계획 및
          일정은 관계 기관과 사업 주체의 사정에 따라 변경될 수 있으며, 자세한 내용은
          입주자모집공고와 관계 기관의 최종 고시를 확인하시기 바랍니다.
        </div>
      </div>

      {zoomImage && (
        <div
          className={styles.zoomModal}
          role="dialog"
          aria-modal="true"
          aria-label="이미지 확대 보기"
          onClick={() => setZoomImage(null)}
        >
          <div className={styles.zoomModalInner} onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className={styles.zoomClose}
              onClick={() => setZoomImage(null)}
              aria-label="확대 이미지 닫기"
            >
              <FiX />
            </button>
            <img src={zoomImage.src} alt={zoomImage.alt} />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
