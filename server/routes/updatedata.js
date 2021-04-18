import oracledb from "oracledb";
import {
  PASSWORD,
  USERNAME,
  CONNECTIONSTRING,
} from "../config/oracleconfig.js";

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

const UpdateData = async (req, res) => {
  let connection;
  let { data, table } = req.query;
  data = data.split(",");
  
  console.log(data);
  
  console.log(req.query);
  try {
    connection = await oracledb.getConnection({
      user: USERNAME,
      password: PASSWORD,
      connectString: CONNECTIONSTRING,
    });

    const {attribute1, oldvalue, attribute2, newvalue} = data;

    await connection.execute(
      `UPDATE ${table} SET ${attribute2} = :newvalue WHERE ${attribute1} = :oldvalue`,
      [newvalue, oldvalue]
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

export { UpdateData };
