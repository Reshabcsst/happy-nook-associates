import servicesData from "./servicesData";

const removeServicesFromTitles = (data) => {
    return data.map(service => {
      return {
        ...service,
        title: service.title.replace(' Services', '')
      };
    });
  };
  
  // Update the servicesData with modified titles
  const updatedServicesData = removeServicesFromTitles(servicesData);
  
  export default updatedServicesData;