import { useState } from "react";
import { SERVICES } from "../../constants/services";
import { ServicePopup } from "../ServicePopup/ServicePopup";
import styles from "./ServicesList.module.css";
import { SearchBar } from "../SearchBar/SearchBar";
import { EmployeeProfil } from "../EmployeeProfil/EmployeeProfil";
import { SubCategory } from "../SubCategory/SubCategory";
import { NothingFound } from "../NothingFound/NothingFound";
import { BorderTop } from "../BorderTop/BorderTop";
import { CenteredContent } from "../CenteredContent/CenteredContent";
import { H1 } from "../H1/H1";

export function ServicesList({
  selectedServiceId,
  selectedPersonId,
  subCategory,
  subCategoryChild,
  sectionH2,
  borderTop,
  cennik,
}) {
  const [searchTerm, setSearchTerm] = useState("");

  // Ensure selectedServiceId is an array or an empty array if not provided
  const selectedIds =
    selectedServiceId && selectedServiceId.length > 0
      ? selectedServiceId
      : SERVICES.map((service) => service.id);

  // Filter categories based on selectedServiceId and searchTerm
  const filteredServicesType = SERVICES.filter((serviceCategory) =>
    selectedIds.includes(serviceCategory.id)
  )
    .map((serviceCategory) => ({
      ...serviceCategory,
      servicesList: serviceCategory.servicesList.filter(
        (service) =>
          !selectedPersonId ||
          (service.personId && service.personId.includes(selectedPersonId))
      ),
    }))
    .filter(
      (serviceCategory) =>
        serviceCategory.servicesName
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        serviceCategory.servicesList.some((service) =>
          service.serviceName.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

  // Filter services within categories based on searchTerm
  const filteredServices = filteredServicesType.map((serviceCategory) => ({
    ...serviceCategory,
    servicesList: serviceCategory.servicesName
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
      ? serviceCategory.servicesList
      : serviceCategory.servicesList.filter((service) =>
          service.serviceName.toLowerCase().includes(searchTerm.toLowerCase())
        ),
  }));

  const [popupData, setPopupData] = useState({
    isPopupOpen: false,
    serviceName: "",
    serviceDescription: "",
    servicePrice: "",
    serviceTime: "",
  });

  function openPopup(
    serviceName,
    serviceDescription,
    servicePrice,
    serviceTime
  ) {
    setPopupData({
      isPopupOpen: true,
      serviceName,
      serviceDescription,
      servicePrice,
      serviceTime,
    });
  }

  function closePopup() {
    setPopupData({
      isPopupOpen: false,
      serviceName: "",
      serviceDescription: "",
      servicePrice: "",
      serviceTime: "",
    });
  }

  const getDescriptionPreview = (description) => {
    const words = description.split(" ");
    if (words.length > 16) {
      const previewText = words.slice(0, 16).join(" ");
      return previewText;
    }
    return description;
  };

  const getServiceCountLabel = (count) => {
    switch (count) {
      case 1:
        return "usługa";
      case 2:
      case 3:
      case 4:
        return "usługi";
      default:
        return "usług";
    }
  };

  return (
    <>
      {subCategory && (
        <CenteredContent>
          <SubCategory subCategoryChild={subCategoryChild} />
        </CenteredContent>
      )}
      <CenteredContent>
        <div className={styles.wrapper}>
          <EmployeeProfil selectedPersonId={selectedPersonId} />

          {popupData.isPopupOpen && (
            <ServicePopup
              serviceName={popupData.serviceName}
              serviceDescription={popupData.serviceDescription}
              servicePrice={popupData.servicePrice}
              serviceTime={popupData.serviceTime}
              onClose={closePopup}
            />
          )}
          <div className={styles.h2SearchBarWrapper}>
            {sectionH2 && (
              <h2>
                Lista <span className={styles.highlighted}>usług</span>
              </h2>
            )}
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </div>
          {filteredServices.length === 0 ? (
            <NothingFound />
          ) : (
            filteredServices.map((services) => {
              const serviceCount = services.servicesList.length;
              return (
                <div
                  className={styles.servicesWrapper}
                  key={services.servicesName}
                >
                  <div className={styles.servicesCounterName}>
                    <h3>{services.servicesName}</h3>
                    <span className={styles.servicesCounter}>
                      {serviceCount} {getServiceCountLabel(serviceCount)}
                    </span>
                  </div>
                  <div className={styles.servicesWrapperAll}>
                    {services.servicesList.map((service) => {
                      const words = service.description.split(" ");
                      const isLongDescription = words.length > 10;
                      const descriptionPreview = getDescriptionPreview(
                        service.description
                      );

                      return (
                        <div
                          className={styles.singleServiceWrapper}
                          key={service.serviceName}
                          onClick={
                            isLongDescription
                              ? () =>
                                  openPopup(
                                    service.serviceName,
                                    service.description,
                                    service.price,
                                    service.time
                                  )
                              : undefined
                          }
                        >
                          <div className={styles.serviceDescription}>
                            <h4 className={styles.serviceName}>
                              {service.serviceName}
                            </h4>
                            <div className={styles.decriptionContainer}>
                              <div
                                className={styles.serviceDescriptionSpan}
                                dangerouslySetInnerHTML={{
                                  __html: descriptionPreview,
                                }}
                              />
                              {isLongDescription && (
                                <div className={styles.readmoreContainter}>
                                  <div className={styles.space}></div>
                                  <p className={styles.readMore}>więcej</p>
                                </div>
                              )}
                            </div>
                          </div>
                          <div className={styles.servicePriceMinButton}>
                            <div className={styles.servicePriceMin}>
                              <span className={styles.price}>
                                {service.price}
                              </span>
                              <span className={styles.time}>
                                {service.time}
                              </span>
                            </div>
                            <button>Umów</button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </CenteredContent>
    </>
  );
}
