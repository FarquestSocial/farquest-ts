# Organizations

Methods:

- <code title="post /organizations/create">client.organizations.<a href="./src/resources/organizations.ts">create</a>({ ...params }) -> void</code>

# Session

Methods:

- <code title="post /session/{correlatedId}">client.session.<a href="./src/resources/session.ts">createCorrelated</a>({ ...params }) -> void</code>

# Auth

Methods:

- <code title="post /auth/callback">client.auth.<a href="./src/resources/auth.ts">callback</a>({ ...params }) -> void</code>
- <code title="get /auth/{state}">client.auth.<a href="./src/resources/auth.ts">retrieveState</a>(state) -> void</code>

# Quest

Methods:

- <code title="post /quest/create">client.quest.<a href="./src/resources/quest/quest.ts">create</a>({ ...params }) -> void</code>
- <code title="get /quest/{id}">client.quest.<a href="./src/resources/quest/quest.ts">retrieve</a>(id) -> void</code>
- <code title="get /quest/list/{filter}">client.quest.<a href="./src/resources/quest/quest.ts">list</a>(filter) -> void</code>

## Types

Methods:

- <code title="get /quest/types">client.quest.types.<a href="./src/resources/quest/types.ts">list</a>() -> void</code>

## Completions

Methods:

- <code title="get /quest/completions/count/{id}">client.quest.completions.<a href="./src/resources/quest/completions.ts">count</a>(id) -> void</code>

## Validation

Methods:

- <code title="get /quest/validation/{id}">client.quest.validation.<a href="./src/resources/quest/validation.ts">retrieve</a>(id) -> void</code>

# Quests

Methods:

- <code title="post /quest/complete">client.quests.<a href="./src/resources/quests.ts">complete</a>({ ...params }) -> void</code>
