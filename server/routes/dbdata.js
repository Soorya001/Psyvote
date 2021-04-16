import oracledb from "oracledb";

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

const password = "lokesh"; // set it to your password of Oracle

const GetData = async (req, res) => {
  let connection;
  try {
    connection = await oracledb.getConnection({
      user: "system", // set it to your username of Oracle
      password: password,
      connectString: "localhost/xe", // set it to your connection string of Oracle (generally its xe but sometimes it differs. You can check it by searching for "services" in windows search and scroll down to view "OracleConnection" and paste the gibberish string found at the end of it.)
    });

    const result = await connection.execute(`select * from district`); // write your query to be executed here
    res.send(result);
  } catch (err) {
    console.error(err);
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

export { GetData };
