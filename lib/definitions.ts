type GeoCode = {
    lat: string;
    lng: string;
}

type Address = {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: GeoCode;
}

type Company = {
    name: string;
    catchPhrase: string;
    bs: string;
}

export type User = {
    id: number;
    name: string;
    userName: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}
