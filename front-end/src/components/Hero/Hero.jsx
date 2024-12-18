import { CenteredContent } from "../CenteredContent/CenteredContent";
import styles from "./Hero.module.css";
import { HeroSlider } from "../HeroSlider/HeroSlider";
import { H1 } from "../H1/H1";
import { HeroImage } from "../HeroImage/HeroImage";
import { Opinions } from "../Opinions/Opinions";
import { BorderTop } from "../BorderTop/BorderTop";

export function Hero({ text, highlight, image, slider }) {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.leftDiv}>
          <H1 text={text} highlight={highlight} />
          <div className={styles.mobileDisplayNone}>
            <HeroImage image={image} />
          </div>
          <HeroSlider slider={slider} className="mobileDisplayBlock" />
          <Opinions />
        </div>
        <HeroSlider slider={slider} className="mobileDisplayNone" />
      </div>
      <BorderTop />
    </>
  );
}
