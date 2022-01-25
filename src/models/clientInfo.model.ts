import connection from "./db";

interface IClientName {
  firstName: string;
  lastName: string;
}

interface IClientContact {
  email: string;
  phoneNumber: string;
}

interface IClientBilling {
  address1: string;
  address2?: string;
  city: string;
  province: string;
  postalCode: string;
  country: string;
}

export interface IClientInfo {
  name: IClientName;
  contact: IClientContact;
  billing: IClientBilling;
}

const ClientInfo = {} as IClientInfo;

export const create = async () => {
  const query = await connection();
};
