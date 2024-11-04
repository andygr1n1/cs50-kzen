CREATE TABLE "public"."notepad" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "owner_id" uuid NOT NULL, "description" text NOT NULL, "locked" boolean NOT NULL DEFAULT false, PRIMARY KEY ("id") , FOREIGN KEY ("owner_id") REFERENCES "public"."heroes"("id") ON UPDATE cascade ON DELETE cascade, UNIQUE ("id"), UNIQUE ("owner_id"));
CREATE EXTENSION IF NOT EXISTS pgcrypto;
