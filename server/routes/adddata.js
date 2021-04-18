process.env.ORA_SDTZ = "UTC";
import oracledb from "oracledb";
import {
  PASSWORD,
  USERNAME,
  CONNECTIONSTRING,
} from "../config/oracleconfig.js";

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

const AddData = async (req, res) => {
  let connection;
  let { data, table } = req.query;
  data = data.split(",");
  // console.log(data);
  try {
    connection = await oracledb.getConnection({
      user: USERNAME,
      password: PASSWORD,
      connectString: CONNECTIONSTRING,
    });

    if (table == "DISTRICT") {
      const [id, name, no_of_constituencies, population] = data;
      await connection.execute(
        `INSERT INTO ${table} VALUES(:id,:name,:no_of_constituencies,:population)`,
        [id, name, no_of_constituencies, population]
      );
    }
    // write your query to be executed here
    else if (table == "CONSTITUENCY") {
      const [
        id,
        name,
        district,
        reservation,
        curr_ruling,
        no_of_contestents,
        population,
      ] = data;
      await connection.execute(
        `INSERT INTO ${table} VALUES(:id,:name,:district,:reservation,:curr_ruling,:no_of_contestents,:population)`,
        [
          id,
          name,
          district,
          reservation,
          curr_ruling,
          no_of_contestents,
          population,
        ]
      );
    } else if (table == "VOTER") {
      const [id, name, fathers_name, dob, gender, category, booth] = data;
      await connection.execute(
        `INSERT INTO ${table} VALUES(:id,:name,:fathers_name,:do_estab,:gender,:category,:booth)`,
        [id, name, fathers_name, dob, gender, category, booth]
      );
    } else if (table == "PARTY") {
      const [id, name, do_estab, leader, no_of_candidates] = data;
      await connection.execute(
        `INSERT INTO ${table} VALUES(:id,:name,:do_estab,:leader,:no_of_candidates)`,
        [id, name, do_estab, leader, no_of_candidates]
      );
    } else if (table == "BOOTH") {
      const [id, name, constituency, population] = data;
      await connection.execute(
        `INSERT INTO ${table} VALUES(:id,:name,:constituency,:population)`,
        [id, name, constituency, population]
      );
    }

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
