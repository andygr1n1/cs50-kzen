CREATE TABLE "public"."heroes_tokens" ("hero_id" uuid NOT NULL, "token" text, "session_id" uuid NOT NULL DEFAULT gen_random_uuid(), PRIMARY KEY ("session_id") , FOREIGN KEY ("hero_id") REFERENCES "public"."heroes"("id") ON UPDATE cascade ON DELETE cascade, UNIQUE ("session_id"));
CREATE EXTENSION IF NOT EXISTS pgcrypto;
