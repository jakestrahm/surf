exports.seed = async knex => {
    await knex('users').del()
    await knex('users').insert([
        {
            username: 'jake',
            password_hash: "jake_password",
            email: "jake@gmail.com"
        },
        {
            username: 'bosworth',
            password_hash: "bosworth_password",
            email: "bosworth@gmail.com"
        },
        {
            username: 'gordon',
            password_hash: "gordon_password",
            email: "gordon@gmail.com"
        },
    ]);
};
