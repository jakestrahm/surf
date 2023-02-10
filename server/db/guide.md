# seeding
## making
npx knex seed: make *seed_name*
## running
npx knex seed:run

# migrations
## create
npx knex migrate:make migration_name
## apply
### single
#### apply
##### target
knex migrate:up *migration_mame*
##### next migration that hasn't been run
knex migrate:up
#### undo
##### target
knex migrate:down *migration_mame*
##### last ran
knex migrate:down
### all
#### apply
npx knex migrate:latest
#### undo last batch
npx knex migrate:rollback
#### undo all migrations
knex migrate:rollback --all
