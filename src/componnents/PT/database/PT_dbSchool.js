const knex = require("knex");
export const DB = knex({
  client: "sqlite3",
  connection: {
    filename: "./school.db",
  },
  useNullAsDefault: true
});

const initDatabase = async () => {
  const tblTeacher = await DB.schema.hasTable("teacher");
  if (!tblTeacher) {
    await DB.schema.createTable("teacher", (table) => {
      table.increments("id");
      table.string("first_name");
      table.string("last_name");
      table.string("email_address");
      table.string("account_number");
    });
  }

  //const driversLicense = await DB.schema.hasTable("drivers_license");
  //if (!driversLicense) {
  //  await DB.schema.createTable("drivers_license", (table) => {
  //    table.increments("id");
   //   table.integer("age");
   //   table.integer("namn_id").references("namn.id");
   // });
  //}

  //const alex = await DB("namn").insert({
  //  first_name: "Alexander",
   // last_name: "Wiklund",
   // middle_name: "",
  //});
  //console.log("Insert ID:", alex[0]);

  //await DB("drivers_license").insert({
  //  age: 27,
  //  namn_id: alex[0],
  //});

  //const licenseWithName = await DB("drivers_license")
   // .join("namn", "drivers_license.namn_id", "namn.id")
   // .select("*");

  //console.log(licenseWithName);

  //const select = await DB.select("*").from("drivers_license");
  //console.log(select);
};

initDatabase();
