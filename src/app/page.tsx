"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import FilterItem from "./components/filter-item";
import FilterBar from "./components/filter-bar";
import { Company } from "./types/company.model";
import { getAggregatedCompaniesFromJsonFiles } from "./helper/companyHelper";

const allFetchedCompanies = getAggregatedCompaniesFromJsonFiles();

export default function Home() {
  const [companies, setCompanies] = useState<Company[]>(allFetchedCompanies);
  const [name, setName] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [size, setSize] = useState<string>("");
  const hasAnyMatchedItem = companies && companies.length > 0;

  useEffect(() => {
    const newItems = allFetchedCompanies.filter(
      (item) =>
        item.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()) &&
        item.country
          .toLocaleUpperCase()
          .includes(country === "--All--" ? "" : country.toLocaleUpperCase()) &&
        Number(item.numberOfEmployees) >= Number(size === "--All--" ? 0 : size)
    );
    setCompanies(newItems);
  }, [name, country, size]);

  return (
    <main className="container">
      <FilterBar>
        <FilterItem>
          <label>Company: </label>
          <input
            className="control"
            placeholder="Google, FlixBus, ..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FilterItem>
        <FilterItem>
          <label>Country: </label>
          <select
            className="control"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option>--All--</option>
            <option>Austria</option>
            <option>Belgium</option>
            <option>England</option>
            <option>Finland</option>
            <option>France</option>
            <option>Germany</option>
            <option>Ireland</option>
            <option>Italy</option>
            <option>Netherlands</option>
            <option>New Zealand</option>
            <option>Norway</option>
            <option>Spain</option>
            <option>Sweden</option>
          </select>
        </FilterItem>
        <FilterItem>
          <label>Size: </label>
          <select
            className="control"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          >
            <option>--All--</option>
            <option>+5</option>
            <option>+10</option>
            <option>+50</option>
            <option>+100</option>
            <option>+250</option>
            <option>+500</option>
            <option>+1000</option>
            <option>+2500</option>
            <option>+5000</option>
            <option>+10000</option>
            <option>+50000</option>
            <option>+100000</option>
            <option>+500000</option>
          </select>
        </FilterItem>
      </FilterBar>
      {hasAnyMatchedItem && (
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Country</th>
              <th>City</th>
              <th className="hidden-on-mobile">Size</th>
              <th className="hidden-on-mobile">Industry</th>
              <th>Jobs</th>
            </tr>
            {companies.map((company: Company) => {
              return (
                <tr
                  key={company.name}
                  className="odd:bg-white even:bg-slate-50"
                >
                  <td>{company.name}</td>
                  <td>{company.country}</td>
                  <td>{company.city}</td>
                  <td className="hidden-on-mobile">
                    {company.numberOfEmployees}
                  </td>
                  <td className="hidden-on-mobile">{company.industry}</td>
                  <td>
                    <a
                      href={company.linkedin}
                      className="text-center"
                      target="_blank"
                    >
                      <Image
                        src="./linkedin.png"
                        width={16}
                        height={16}
                        alt={`LinkedIn job page for ${company.name} company.`}
                      />
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
      {!hasAnyMatchedItem && (
        <p className="no-data">
          There is no company in our current database at the moment based on
          your filter.
        </p>
      )}
      <footer>
        You can help us to improve our list by contribute to this
        repository:&nbsp;
        <a
          href="https://github.com/SiaExplains/visa-sponsorship-companies"
          target="_blank"
        >
          visa-sponsorship-companies
        </a>
      </footer>
    </main>
  );
}
