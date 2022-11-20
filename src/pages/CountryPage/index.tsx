import React from "react";
import Card from "../../components/Card";
import { useQuery } from "@apollo/client";
import { Country } from "../../typings/country";
import { useParams } from "react-router-dom";
import { GET_COUNTRY } from "./../../graphql/queries/get-country";

export const CountryPage = () => {
  const { countryCode }: never = useParams();
  const { data, loading, error } = useQuery<
    { country: Country },
    { code: string }
  >(GET_COUNTRY, { variables: { code: countryCode } });

  if (loading) return <> Carregando estados...</>;
  if (error || !data?.country) return <>Deu ruim... :(</>;

  const { country } = data;

  return (
    <div className="state-block flex flex-wrap columns-4 max-w-screen my-9">
      <Card>
        <h3 className="flex mb-5 font-bold text-3xl text-blue-dark">
          {country.name}
        </h3>

        <h3 className="flex text-xl font-sans font-semibold text-gray-dark mb-3">
          Moeda:
          <span className="font-light ml-3">{country.currency}</span>
        </h3>
        <h3 className="flex text-xl font-sans font-semibold text-gray-dark mb-3">
          Capital:
          <span className="font-light ml-3">{country.capital}</span>
        </h3>
        <h3 className="flex text-xl font-sans font-semibold text-gray-dark mb-3">
          DDD:
          <span className="font-light ml-3">{country.phone}</span>
        </h3>

        <div className="flex flex-col">
          <h4 className="flex flex-col mt-4 mb-2 text-xl font-semibold ">
            Estados
          </h4>
          <div>
            <table>
              <thead>
                <th>Code</th>
                <th>Name</th>
              </thead>
              <tbody>
                {country.states.map(({ code, name }) => (
                  <tr>
                    <td className="text-center">{code}</td>
                    <td className="text-center">{name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Card>
    </div>
  );
};
