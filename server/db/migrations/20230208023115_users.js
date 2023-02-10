exports.up = async knex => {
    await knex.schema.createTable("users", (table) => {
        table.increments("id")
        table.string("username").notNullable().unique()
        table.string("email").notNullable().unique()
        table.string("password_hash")
        table.timestamps(true, true, false)
    }
    )
};

exports.down = async knex => {
    await knex.schema.dropTableIfExists("users")
};
