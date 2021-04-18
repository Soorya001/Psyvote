import oracledb from "oracledb";
import {
  PASSWORD,
  USERNAME,
  CONNECTIONSTRING,
} from "../config/oracleconfig.js";

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

const AddData = async (req, res) => {
  let connection;
  const { id, name, no_of_constituencies, population, table } = req.query;
  console.log(req.query);
  try {
    connection = await oracledb.getConnection({
      user: USERNAME,
      password: PASSWORD,
      connectString: CONNECTIONSTRING,
    });

    await connection.execute(
      `INSERT INTO ${table} VALUES(:id,:name,:no_of_constituencies,:population)`,
      [id, name, no_of_constituencies, population]
    ); // write your query to be executed here

    // const result = await connection.execute("select * from district");
    // res.send(result);
    await connection.execute("commit");
    res.send("success");
  } catch (err) {
    res.send(err.message);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
};

export { AddData };
