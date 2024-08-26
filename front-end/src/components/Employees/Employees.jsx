import { TEAMMEMBERS } from "../../constants/teamMembers";
import styles from "./Employees.module.css";
import UPRIGHTICON from "../../assets/up-right-icon.svg";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../hooks/scrollToTop";
import { BorderTop } from "../BorderTop/BorderTop";

export function Employees({ selectedEmployeesId, groupActivity, borderTop }) {
  if (!selectedEmployeesId || selectedEmployeesId.length === 0) {
    return <></>;
  }
  const selectedEmployees = TEAMMEMBERS.filter((employee) =>
    selectedEmployeesId.includes(employee.id)
  );

  return (
    <>
      <BorderTop borderTop={borderTop} />
      <div className={styles.wrapper}>
        {groupActivity ? <h3>Prowadzący</h3> : <h2>Pracownicy</h2>}
        {selectedEmployees.map((employee) => (
          <Link to={employee.path} key={employee.name} onClick={scrollToTop}>
            <div className={styles.employeeWrapper}>
              <div className={styles.left}>
                <div
                  className={styles.employeeImage}
                  style={{
                    backgroundImage: `url(${employee.image})`,
                  }}
                ></div>
                <div className={styles.aboutWrapper}>
                  <span>{employee.profession}</span>
                  <h3>{employee.name}</h3>
                </div>
              </div>
              <img className={styles.icon} src={UPRIGHTICON}></img>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
