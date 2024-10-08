import { HEROCATEGORIES } from "../../constants/heroCategories";
import UPRIGHTICON from "../../assets/up-right-icon.svg";
import { CenteredContent } from "../CenteredContent/CenteredContent";
import styles from "./CategorySlider.module.css";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../hooks/scrollToTop";
import { BorderTop } from "../BorderTop/BorderTop";

export function CategorySlider() {
  return (
    <div className={styles.wrapper}>
      <CenteredContent>
        <h2>Kategorie usług</h2>
        <div className={styles.mainCategories}>
          {HEROCATEGORIES.map((category) => {
            return (
              <Link
                to={category.path}
                className={styles.link}
                key={category.categoryTitle}
                onClick={scrollToTop}
              >
                <div className={styles.leftDiv}>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: category.categoryTitle,
                    }}
                    className={styles.h3}
                  ></div>
                </div>
                <div className={styles.rightDiv}>
                  <div className={styles.imageWrapper}>
                    <div className={styles.whiteCircle}></div>
                    <div className={styles.orangeCircle}></div>
                    <div
                      style={{
                        backgroundImage: `url(${category.image})`,
                        backgroundPosition: category.position,
                      }}
                      className={styles.image}
                    ></div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <BorderTop />
      </CenteredContent>
    </div>
  );
}
