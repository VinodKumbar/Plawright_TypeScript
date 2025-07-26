for fetching data from the database, we can use the following code snippet:

1. Install mysql2 package:
```bash
npm install mysql2
```

2. Create a file named `db.ts` to handle database connections and queries:

```Typescript
import { createConnection } from 'mysql2/promise';

const connection = await createConnection({
  host: 'localhost',
  user: 'your_username',
  database: 'your_database',
  password: 'your_password',
});

const [rows] = await connection.execute('SELECT * FROM your_table');
console.log(rows);

await connection.end();
```
***********************************************************************************************************************************
craete 2 more pages 
Product
Cart