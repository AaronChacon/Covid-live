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

export interface IDataCountry{
    Active: number,
    City: string,
    CityCode: string,
    Confirmed: number,
    Country: string,
    CountryCode: string,
    Date: string,
    Deaths: number,
    Lat: string,
    Lon: string,
    Province: string,
    Recovered: number,
}

export interface IChartAreaData{
    name: string,
    data: [number,number]
}