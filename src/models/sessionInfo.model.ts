import connection from "./db";
import { ObjectId } from "mongodb";

export interface ISessionInfo {
  id: number;
  date: string;
  startHour: string;
  startMinute: string;
  numberOfSessions: number;
  lengthOfSessions: number;
  sessionName: string;
  sessionTitle: string;
  price: string;
  details: string;
}

export const createOne = async (newSession: ISessionInfo, result: Function) => {
  const query = await connection();
  await query.col2.insertOne(newSession, (err, res) => {
    if (err) {
      console.log(`Error: `, err);
      result(err, null);
      return;
    }
    console.log(`Created new session: ${newSession.sessionName}`);
    result(null, newSession);
  });
};

export const displayAll = async (result: Function) => {
  const query = await connection();
  await query.col2.find({}).toArray((err, res) => {
    if (err) {
      console.log(err);
      result(err, null);
      return;
    }
    console.log(`Found ${res?.length} sessions`);
    result(null, res);
  });
};

export const displayOneById = async (id: string, result: Function) => {
  const query = await connection();
  await query.col2.findOne({ _id: new ObjectId(id) }, (err, res) => {
    if (err) {
      console.log(err);
      result(err, null);
      return;
    }
    console.log(`Found session: ${res?.sessionName}`);
    result(null, res);
  });
};

export const updateOne = async (
  id: string,
  session: ISessionInfo,
  result: Function
) => {
  const query = await connection();
  await query.col2.findOneAndUpdate(
    { _id: new ObjectId(id) },
    { $set: session },
    (err, res) => {
      if (err) {
        console.log(err);
        result(err, null);
        return;
      }
      console.log(`Updated session: ${session.sessionName}`);
      result(null, { returnNewDocument: true });
    }
  );
};

export const deleteOne = async (id: string, result: Function) => {
  const query = await connection();
  await query.col2.findOneAndDelete({ _id: new ObjectId(id) }, (err, res) => {
    if (err) {
      console.log(err);
      result(err, null);
      return;
    }
    console.log(`Deleted session`);
    result(null, res);
  });
};
