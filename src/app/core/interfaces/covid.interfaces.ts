export interface IDataCovid{
    Countries: ICountries[],
    Date: string,
    Global: {
        Date: string,
        NewConfirmed: number,
        NewDeaths: number,
        NewRecovered: number,
        TotalConfirmed: number,
        TotalDeaths: number,
        TotalRecovered: number,   
    },
    Id: string,
    Message: string,
}

export interface ICountries{
    Country: string,
    CountryCode: string,
    Date: string,
    ID: string,
    NewConfirmed: number
    NewDeaths: number
    NewRecovered: number
    Slug: string
    TotalConfirmed: number
    TotalDeaths: number
    TotalRecovered: number
}


export interface IMapCountries {
    id: string;
	name: string;
	value: number;
	color: string;
}