import { HEROCATEGORIES } from "../../constants/heroCategories";
import UPRIGHTICON from "../../assets/up-right-icon.svg";
import { CenteredContent } from "../CenteredContent/CenteredContent";
import styles from "./CategorySlider.module.css";
import { Link } from "react-router-dom";

export function CategorySlider() {
  return (
    <div className={styles.wrapper}>
      <CenteredContent>
        <div className={styles.mainCategories}>
          {HEROCATEGORIES.map((category) => {
            const words = category.categoryTitle.split(" ");
            return (
              <div
                key={category.categoryTitle}
                className={styles.singleCategoryWrapper}
              >
                <div className={styles.leftDiv}>
                  <h2>
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className={index === 0 ? styles.black : styles.orange}
                      >
                        {word}{" "}
                      </span>
                    ))}
                  </h2>
                  <p
                    dangerouslySetInnerHTML={{ __html: category.description }}
                  ></p>
                </div>
                <div className={styles.rightDiv}>
                  <div className={styles.imageWrapper}>
                    <div
                      className={styles.whiteCircle}
                      style={{
                        top: category.whiteStyle.top,
                        bottom: category.whiteStyle.bottom,
                        right: category.whiteStyle.right,
                        left: category.whiteStyle.left,
                      }}
                    ></div>
                    <div
                      className={styles.orangeCircle}
                      style={{
                        top: category.orangeStyle.top,
                        bottom: category.orangeStyle.bottom,
                        right: category.orangeStyle.right,
                        left: category.orangeStyle.left,
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundImage: `url(${category.image})`,
                        width: "100%",
                        height: "17rem",
                        position: "relative",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                        backgroundPosition: "bottom",
                      }}
                    ></div>
                    <Link to={category.path} className={styles.link}>
                      <img
                        style={{
                          marginLeft: "auto",
                          width: "2.5rem",
                          position: "absolute",
                          top: "1.5rem",
                          right: "1.5rem",
                        }}
                        src={UPRIGHTICON}
                      ></img>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CenteredContent>
    </div>
  );
}
