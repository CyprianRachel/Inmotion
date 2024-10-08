import { AllAboutUs } from "../../components/AllAboutUs/AllAboutUs";
import { BorderTop } from "../../components/BorderTop/BorderTop";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { CenteredContent } from "../../components/CenteredContent/CenteredContent";
import { H1 } from "../../components/H1/H1";
import { H1Wrapper } from "../../components/H1Wrapper/H1Wrapper";
import { Layout } from "../../components/Layout/Layout";
import { ServicesList } from "../../components/ServicesList/ServicesList";
import { ServicesWrapper } from "../../components/ServicesWrapper/ServicesWrapper";
import styles from "./KonsultacjaSI.module.css";

export function KonsultacjaSI() {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <div className={styles.leftWrapper}>
          <H1Wrapper>
            <Breadcrumbs />
            <div className={styles.groupWrapperWithoutMarginBottom}>
              <h1>
                Konsultacja <span className={styles.orange}>SI</span>
              </h1>
            </div>
          </H1Wrapper>
          <div className={styles.description}>
            <p>
              Konsultacja z terapeutą SI to badanie przesiewowe dedykowane dla
              wszystkich rodziców, którzy nie mają pewności, czy zaobserwowane
              trudności dziecka są uwarunkowane deficytami w zakresie
              przetwarzania sensorycznego.{" "}
            </p>
            <p>
              Spotkanie odbywa się w towarzystwie dziecka i obejmuje wywiad z
              rodzicem/prawnym opiekunem oraz wybrane próby diagnostyczne.
            </p>
            <p>
              Spotkanie kończy się ustną informacją zwrotną na temat zgłaszanego
              problemu i (w przypadku, gdy wskazane jest przeprowadzenie pełnej
              diagnozy SI) może być traktowane jako pierwsze spotkanie
              diagnostyczne.{" "}
            </p>{" "}
            <h2>
              Konsultacja a pełna diagnoza procesów przetwarzania sensorycznego
              – w czym tkwi różnica?
            </h2>{" "}
            <p>
              <strong>Diagnoza SI</strong> to trwający 3 spotkania proces
              (patrz: Diagnoza SI), który polega na pełnym badaniu przetwarzania
              sensorycznego dziecka. Diagnoza kończy się wydaniem pisemnej
              opinii, szczegółowym jej omówieniem i wyjaśnieniem oraz
              przekazaniem zaleceń do dalszej pracy.
            </p>{" "}
            <p>
              <strong>Konsultacja SI</strong> to ok. 75min spotkanie przesiewowe
              z rodzicem/prawnym opiekunem i dzieckiem, podczas którego omawiany
              jest konkretny problem i „niepokój” rodzica. Konsultacja kończy
              się ustnym przekazaniem spostrzeżeń i zaleceń do dalszej pracy. Do
              objęcia dziecka terapią SI konieczne jest przeprowadzenie pełnej
              diagnozy SI.
            </p>
          </div>
          <BorderTop />
          <ServicesList
            team={false}
            sectionH2={true}
            borderTop={true}
            selectedServiceId={[3]}
            description={false}
            selectedEmployeesId={[3]}
          />
        </div>

        <AllAboutUs sectionH2={true} selectedEmployeesId={[3]} />
      </div>
    </Layout>
  );
}
