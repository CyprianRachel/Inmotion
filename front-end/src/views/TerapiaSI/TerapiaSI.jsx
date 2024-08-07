import { Layout } from "../../components/Layout/Layout";
import { ServicesWrapper } from "../../components/ServicesWrapper/ServicesWrapper";
import styles from "../../components/SubCategory/SubCategory.module.css";

export function TerapiaSI() {
  return (
    <Layout>
      <ServicesWrapper
        team={false}
        selectedServiceId={[3]}
        description={false}
        selectedEmployeesId={[3]}
        subCategory={true}
      >
        {/* <div className={styles.leftDiv}>
        <HeroImage image={image} />
      </div> */}
        <div className={styles.h1DescriptionWrapper}>
          <div className={styles.h1Wrapper}>
            <h1>
              Terapia{" "}
              <span className={styles.orange}>Integracji Sensorycznej</span>
            </h1>
          </div>

          <p className={styles.description}>
            <p>
              To proces, którego celem jest poprawa funkcjonowania dziecka w
              środowisku domowym oraz przedszkolnym/szkolnym. Wykorzystując
              naturalną potrzebę zabawy i ruchu terapeuta SI dobiera aktywności
              w taki sposób, by układ nerwowy dziecka był „usatysfakcjonowany”,
              a reakcja adaptacyjna (czyli odpowiedź na bodziec) stała się
              adekwatna do sytuacji. Podczas zajęć dziecko korzysta ze
              specjalistycznego sprzętu jak: hamak, różnego typu huśtawki,
              deskorolka, piłka rehabilitacyjna czy tor równoważny dlatego
              konieczne jest zapewnienie mu wygody. Podczas zajęć obowiązuje
              strój sportowy (dres/spodenki/getry i koszulka) oraz spięte włosy.
              Terapia SI odbywa się w kontakcie indywidualnym i trwa 50 minut.
            </p>
            <p>
              <strong>
                WAŻNE: terapią SI może być objęte dziecko posiadające aktualną
                diagnozę procesów przetwarzania sensorycznego (nie starszą niż 6
                miesięcy).
              </strong>
            </p>
          </p>
        </div>
      </ServicesWrapper>
    </Layout>
  );
}
