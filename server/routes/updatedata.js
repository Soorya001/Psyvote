import oracledb from "oracledb";

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

const password = "Soorya99$%"; // set it to your password of Oracle

const UpdateData = async (req, res) => {
  let connection;
  const { attribute, oldvalue, newvalue, table } = req.query;
  console.log(req.query);
  try {
    connection = await oracledb.getConnection({
      user: "system", // set it to your username of Oracle
      password: password,
      connectString: "localhost/orcl", // set it to your connection string of Oracle (generally its xe but sometimes it differs. You can check it by searching for "services" in windows search and scroll down to view "OracleConnection" and paste the gibberish string found at the end of it.)
    });
    
    const result1 = await connection.execute(
      `UPDATE ${table} SET ${attribute} = :newvalue WHERE ${attribute} = :oldvalue`,
      [newvalue, oldvalue]
    ); // write your query to be executed here

    const result = await connection.execute("select * from district");
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
