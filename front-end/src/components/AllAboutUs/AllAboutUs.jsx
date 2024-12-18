import styles from "./AllAboutUs.module.css";
import { OPENHOURS } from "../../constants/openHours";
import { HeroAboutUs } from "../HeroAboutUs/HeroAboutUs";
import { Employees } from "../Employees/Employees";
import { IconsWrapper } from "../IconsWrapper/IconsWrapper";
import { CONTACT_ICONS, ICONS, LOCATION } from "../../constants/aboutUsIcons";
import { CenteredContent } from "../CenteredContent/CenteredContent";
import { BorderTop } from "../BorderTop/BorderTop";

export function AllAboutUs({
  description,
  selectedEmployeesId,
  descriptionText,
  groupActivity,
  borderTop,
  sectionH2,
}) {
  return (
    <div className={styles.wrapperAll}>
      <Employees
        selectedEmployeesId={selectedEmployeesId}
        groupActivity={groupActivity}
        borderTop={borderTop}
      />
      {description && (
        <>
          <BorderTop borderTop={borderTop} />{" "}
          <HeroAboutUs descriptionText={descriptionText} />
        </>
      )}
      <BorderTop borderTop={borderTop} />
      {sectionH2 && <h2 className={styles.contact}>Kontakt</h2>}
      <div className={styles.sticky}>
        <div className={styles.wrapper}>
          <h3 className={styles.h3}>Telefon - Email</h3>
          <IconsWrapper icons={CONTACT_ICONS} />
          <h3 className={styles.h3}>Lokalizacja</h3>
          <IconsWrapper icons={LOCATION} />
          <h3 className={styles.h3}>Godziny otwarcia</h3>
          <div className={styles.openHoursWrapper}>
            {OPENHOURS.map((hours) => {
              return (
                <div className={styles.singleOpenHours} key={hours.day}>
                  <span>{hours.day}</span>
                  <div>
                    <span className={styles.hours}>
                      {hours.open}
                      {hours.close}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          <h3 className={styles.h3}>Media społecznościowe</h3>
          <IconsWrapper icons={ICONS} />
        </div>
      </div>
    </div>
  );
}
