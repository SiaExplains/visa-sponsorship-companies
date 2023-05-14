import sortBy from "lodash/sortBy";
import ALL_COUNTRIES from "../../../countries/index";
import { Company } from "../types/company.model";

export const getAggregatedCompaniesFromJsonFiles = () => {
  const companies: Company[] = ALL_COUNTRIES().map((item) => ({
    name: item?.name ?? "",
    yearOfMake: item["year-of-make"] ?? "",
    industry: item?.industry ?? "",
    city: item?.city ?? "",
    numberOfEmployees: item["number-of-employees"] ?? "",
    country: item?.country ?? "",
    linkedin: item?.linkedin ?? "",
  }));

  return sortBy(companies, ["name", "numberOfEmployees", "yearOfMake"]);
};
