import oracledb from "oracledb";
import {
  PASSWORD,
  USERNAME,
  CONNECTIONSTRING,
} from "../config/oracleconfig.js";

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

const FindData = async (req, res) => {
  let connection;
  const { table, value, attribute } = req.query;
  console.log(req.query);
  try {
    connection = await oracledb.getConnection({
      user: USERNAME,
      password: PASSWORD,
      connectString: CONNECTIONSTRING,
    });

    const result = await connection.execute(
      `SELECT * FROM ${table} WHERE ${attribute}=:val`,
      [value]
    ); // write your query to be executed here

    console.log(result);

    res.send(result);
    await connection.execute("commit");
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

export { FindData };
