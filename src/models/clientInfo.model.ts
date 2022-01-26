import connection from "./db";
import { ObjectId } from "mongodb";

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

export const create = async (newClient: IClientInfo, result: Function) => {
  const { name, contact, billing } = newClient;
  const query = await connection();
  await query.col.insertOne({ name, contact, billing }, (err, res) => {
    if (err) {
      console.log(`Error: `, err);
      result(err, null);
      return;
    }
    console.log(newClient);
    result(null, newClient);
  });
};

export const displayAll = async (result: Function) => {
  const query = await connection();
  await query.col.find({}).toArray((err, res) => {
    if (err) {
      console.log(err);
      result(err, null);
      return;
    }
    console.log(res);
    result(null, res);
  });
};

export const findById = async (id: string, result: Function) => {
  const query = await connection();
  await query.col.findOne({ _id: new ObjectId(id) }, (err, res) => {
    if (err) {
      console.log(err);
      result(err, null);
      return;
    }
    console.log(`Found Client: `, res);
    result(null, res);
  });
};

export const updateById = async (
  id: string,
  client: IClientInfo,
  result: Function
) => {
  const query = await connection();
  await query.col.findOneAndUpdate(
    { _id: new ObjectId(id) },
    {
      $set: {
        name: client.name,
        contact: client.contact,
        billing: client.billing,
      },
    },
    (err, res) => {
      if (err) {
        console.log(err);
        result(err, null);
        return;
      }
      console.log(`Updated Client: `, client);
      result(null, { returnNewDocument: true });
    }
  );
};

export const deleteById = async (id: string, result: Function) => {
  const query = await connection();
  await query.col.findOneAndDelete({ _id: new ObjectId(id) }, (err, res) => {
    if (err) {
      console.log(err);
      result(err, null);
      return;
    }
    console.log(`Deleted Client`);
    result(null, res);
  });
};
