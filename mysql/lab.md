# 🧪 LAB TITLE: MySQL Practice with DDL, DML, and DCL  

## 🎯 Objectives

- Practice **DDL** commands: `CREATE`, `ALTER`, `DROP`, `RENAME`, `TRUNCATE`
- Practice **DML** commands: `SELECT`, `INSERT`, `UPDATE`, `DELETE`
- Practice **DCL** concepts: `COMMIT`, `ROLLBACK`, `SAVEPOINT`
- Work with **constraints** like `PRIMARY KEY`, `UNIQUE`, `DEFAULT`, `AUTO_INCREMENT`
- Understand basic **transaction control** in MySQL

---

## Steps to Follow

### 🔸 Step 1: Create a Table

```sql
CREATE TABLE customer (
  id INT,
  name VARCHAR(50),
  email VARCHAR(100)
);
```

###  Step 2: Alter Table
* Add PRIMARY KEY to id
* Add UNIQUE to email
* Add DEFAULT value 'Unknown' to name
* Modify id to be AUTO_INCREMENT starting from 101


###  Step 3: Insert Sample Records

###  Step 4: Update and Delete

### Step 5: Use Transactions (commit, rollback,savepoint)

### Step 6: Delete, Truncate and Drop Table

