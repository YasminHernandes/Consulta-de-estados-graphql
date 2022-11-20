import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { LIST_COUNTRIES } from "../../graphql/queries/list-countries";
import { Country } from "../../typings/country";

export const HomePage = () => {
  const { data, loading, error } = useQuery<{ countries: Country[] }>(
    LIST_COUNTRIES
  );

  if (loading) return <>Carregando...</>;
  if (error || !data?.countries) return <>Deu ruim :(</>;

  const { countries } = data;
  return (
    <>
      <h1 className="my-4 text-2xl text-blue-dark font-bold">Countries</h1>
      <div className="flex flex-wrap justify-center items-center columns-4 max-w-screen">
        {countries.map(({ code, name }) => (
          <Link to={`/paises/${code}`}>
            <div className="flex flex-col w-max border border-gray my-4 ml-7 rounded-lg">
              <h2 className="text-xl p-2 text-blue-dark">{name}</h2>
              <span className="p-2 text-sm text-gray">
                Clique para mais informações
              </span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};
