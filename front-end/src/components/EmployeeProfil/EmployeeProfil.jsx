import { TEAMMEMBERS } from "../../constants/teamMembers";
import styles from "./EmployeeProfil.module.css";

export function EmployeeProfil({ selectedPersonId }) {
  const filteredEmployee = TEAMMEMBERS.find(
    (employee) => employee.id === selectedPersonId
  );

  if (!filteredEmployee) {
    return <div className={styles.wrapper}>Pracownik nie znaleziony</div>;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.singleMemberWrapper}>
        <div className={styles.employeeImageWrapper}>
          <img
            src={filteredEmployee.image}
            alt={filteredEmployee.name}
            className={styles.employeeImage}
          />
        </div>
        <div className={styles.description}>
          <h3>{filteredEmployee.profession}</h3>
          <h1>{filteredEmployee.name}</h1>
        </div>
      </div>
      {filteredEmployee.description && (
        <p className={styles.descriptionP}>{filteredEmployee.description}</p>
      )}
    </div>
  );
}
