import oracledb from "oracledb";

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

const password = "lokesh"; // set it to your password of Oracle

const DeleteData = async (req, res) => {
  let connection;
  const { id, table } = req.query;
  console.log(req.query);
  try {
    connection = await oracledb.getConnection({
      user: "system", // set it to your username of Oracle
      password: password,
      connectString: "localhost/xe", // set it to your connection string of Oracle (generally its xe but sometimes it differs. You can check it by searching for "services" in windows search and scroll down to view "OracleConnection" and paste the gibberish string found at the end of it.)
    });

    const result1 = await connection.execute(
      `DELETE FROM ${table} WHERE ID=${id}`
    ); // write your query to be executed here

    const result = await connection.execute("select * from district");

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
