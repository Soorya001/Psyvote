import oracledb from "oracledb";

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

const PASSWORD = "lokesh"; // set it to your password of Oracle
const USERNAME = "system"; // set it to your username of Oracle
const CONNECTIONSTRING = "localhost/xe"; // set it to your connection string of Oracle (generally its xe but sometimes it differs. You can check it by searching for "services" in windows search and scroll down to view "OracleConnection" and paste the gibberish string found at the end of it.)

export { PASSWORD, USERNAME, CONNECTIONSTRING };
