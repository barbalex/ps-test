export default [
  {
    "statements": [
      "CREATE TABLE \"users\" (\n  \"user_id\" TEXT NOT NULL,\n  \"email\" TEXT,\n  \"auth_id\" TEXT,\n  \"label_replace_by_generated_column\" TEXT,\n  \"deleted\" INTEGER,\n  CONSTRAINT \"users_pkey\" PRIMARY KEY (\"user_id\")\n) WITHOUT ROWID;\n",
      "CREATE INDEX \"users_email_idx\" ON \"users\" (\"email\" ASC);\n",
      "-- Toggles for turning the triggers on and off\nINSERT OR IGNORE INTO _electric_trigger_settings(tablename,flag) VALUES ('main.users', 1);",
      "  /* Triggers for table users */\n\n  -- ensures primary key is immutable\n  DROP TRIGGER IF EXISTS update_ensure_main_users_primarykey;",
      "CREATE TRIGGER update_ensure_main_users_primarykey\n  BEFORE UPDATE ON \"main\".\"users\"\nBEGIN\n  SELECT\n    CASE\n      WHEN old.\"user_id\" != new.\"user_id\" THEN\n      \t\tRAISE (ABORT, 'cannot change the value of column user_id as it belongs to the primary key')\n    END;\nEND;",
      "-- Triggers that add INSERT, UPDATE, DELETE operation to the _opslog table\nDROP TRIGGER IF EXISTS insert_main_users_into_oplog;",
      "CREATE TRIGGER insert_main_users_into_oplog\n   AFTER INSERT ON \"main\".\"users\"\n   WHEN 1 == (SELECT flag from _electric_trigger_settings WHERE tablename == 'main.users')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  VALUES ('main', 'users', 'INSERT', json_object('user_id', new.\"user_id\"), json_object('auth_id', new.\"auth_id\", 'deleted', new.\"deleted\", 'email', new.\"email\", 'label_replace_by_generated_column', new.\"label_replace_by_generated_column\", 'user_id', new.\"user_id\"), NULL, NULL);\nEND;",
      "DROP TRIGGER IF EXISTS update_main_users_into_oplog;",
      "CREATE TRIGGER update_main_users_into_oplog\n   AFTER UPDATE ON \"main\".\"users\"\n   WHEN 1 == (SELECT flag from _electric_trigger_settings WHERE tablename == 'main.users')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  VALUES ('main', 'users', 'UPDATE', json_object('user_id', new.\"user_id\"), json_object('auth_id', new.\"auth_id\", 'deleted', new.\"deleted\", 'email', new.\"email\", 'label_replace_by_generated_column', new.\"label_replace_by_generated_column\", 'user_id', new.\"user_id\"), json_object('auth_id', old.\"auth_id\", 'deleted', old.\"deleted\", 'email', old.\"email\", 'label_replace_by_generated_column', old.\"label_replace_by_generated_column\", 'user_id', old.\"user_id\"), NULL);\nEND;",
      "DROP TRIGGER IF EXISTS delete_main_users_into_oplog;",
      "CREATE TRIGGER delete_main_users_into_oplog\n   AFTER DELETE ON \"main\".\"users\"\n   WHEN 1 == (SELECT flag from _electric_trigger_settings WHERE tablename == 'main.users')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  VALUES ('main', 'users', 'DELETE', json_object('user_id', old.\"user_id\"), NULL, json_object('auth_id', old.\"auth_id\", 'deleted', old.\"deleted\", 'email', old.\"email\", 'label_replace_by_generated_column', old.\"label_replace_by_generated_column\", 'user_id', old.\"user_id\"), NULL);\nEND;"
    ],
    "version": "1"
  }
]