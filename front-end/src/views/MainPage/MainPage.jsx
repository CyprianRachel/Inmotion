import { CategorySlider } from "../../components/CategorySlider/CategorySlider";
import { Hero } from "../../components/Hero/Hero";
import { Layout } from "../../components/Layout/Layout";
import { ServicesWrapper } from "../../components/ServicesWrapper/ServicesWrapper";
import TEAMIMAGE from "../../assets/team-image.svg";
import { SLIDER_IMAGES } from "../../constants/sliderImages";
import styles from "../../components/SubCategory/SubCategory.module.css";

const sliderImages = SLIDER_IMAGES.find(
  (imageSet) => imageSet.id === 1
).servicesImages.map((img) => img.image);

export function MainPage() {
  return (
    <Layout>
      <Hero
        text={"Fizjoterapia i Terapia SI"}
        highlight={"In.motion"}
        image={TEAMIMAGE}
        slider={sliderImages}
      />
      <CategorySlider />
      <ServicesWrapper team={false} description={true}>
        <div className={styles.h1DescriptionWrapper}>
          <div className={styles.h1Wrapper}>
            <h3>
              O <span className={styles.orange}>nas</span>
            </h3>
          </div>

          <div className={styles.description}>
            <p>
              W naszym gabinecie świadczymy usługi kompleksowej{" "}
              <strong>fizjoterapii ortopedycznej</strong>,{" "}
              <strong>pediatrycznej</strong> oraz{" "}
              <strong>terapii integracji sensorycznej</strong>. Stawiamy na
              ciągły rozwój naszej praktyki - naszym celem jest osiąganie jak
              najlepszych rezultatów podczas współpracy zarówno z dorosłymi jak
              i dziećmi.
            </p>
          </div>
        </div>
      </ServicesWrapper>
    </Layout>
  );
}
