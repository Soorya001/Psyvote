import oracledb from "oracledb";
import {
  PASSWORD,
  USERNAME,
  CONNECTIONSTRING,
} from "../config/oracleconfig.js";

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

const DeleteData = async (req, res) => {
  let connection;
  const { id, table } = req.query;
  console.log(req.query);
  try {
    connection = await oracledb.getConnection({
      user: USERNAME,
      password: PASSWORD,
      connectString: CONNECTIONSTRING,
    });

    const result1 = await connection.execute(
      `DELETE FROM ${table} WHERE ID=${id}`
    ); // write your query to be executed here

    // const result = await connection.execute("select * from district");

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

export { DeleteData };
