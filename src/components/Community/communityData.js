import bgImage from "../../assets/ComplexGuide/ComplexGuide1/bg-section.jpg";
import bannerImage from "../../assets/ComplexGuide/ComplexGuide1/complex-1024x573.jpg";
import layoutImage from "../../assets/ComplexGuide/ComplexGuide1/page1.webp";
import designImage from "../../assets/ComplexGuide/ComplexGuide2/page1.webp";
import communityImage from "../../assets/ComplexGuide/ComplexGuide3/page1.jpg";

export const communityData = {
  eyebrow: "COMMUNITY",
  title: "품격 있는 일상을 완성하는 단지 설계",
  description:
    "춘천 동문디이스트는 만천리의 자연환경과 어우러진 단지 배치와 조경, 커뮤니티 시설을 통해 입주민의 일상과 휴식, 편의가 조화를 이루는 주거 공간을 계획하였습니다.",
  backgroundImage: bgImage,
  banner: {
    image: bannerImage,
    alt: "춘천 동문디이스트 단지 전경",
  },
  items: [
    {
      id: "complex-layout",
      label: "단지 배치도",
      title: "쾌적한 생활을 고려한 단지 배치",
      description:
        "춘천 동문디이스트는 채광과 통풍, 보행 동선을 고려한 단지 배치로 보다 쾌적한 주거 환경을 계획하였습니다.",
      image: layoutImage,
      alt: "춘천 동문디이스트 단지 배치도",
    },
    {
      id: "complex-design",
      label: "단지 특화설계",
      title: "자연과 일상이 어우러지는 특화 설계",
      description:
        "조경 공간과 휴게 공간, 산책 동선을 유기적으로 연결하여 입주민이 일상 속에서도 자연과 여유를 누릴 수 있도록 계획하였습니다.",
      image: designImage,
      alt: "춘천 동문디이스트 특화 설계",
    },
    {
      id: "community-space",
      label: "커뮤니티",
      title: "입주민 중심의 커뮤니티 시설",
      description:
        "피트니스와 골프연습장, 작은도서관, 스카이카페 등 건강과 여가, 휴식을 고려한 커뮤니티 공간으로 풍요로운 일상을 계획하였습니다.",
      image: communityImage,
      alt: "춘천 동문디이스트 커뮤니티",
    },
  ],
};