import * as Knex from "knex";

const tableName = "wishes";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(tableName, (t) => {
    t.increments("id").primary().unique().notNullable(),
      t.string("title").notNullable(),
      t.string("description"),
      t.string("location"),
      t.integer("deadline").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists(tableName);
}
