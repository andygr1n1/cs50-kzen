CREATE TABLE "public"."restore_codes" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "email" text, "secret" text, "created_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") );
CREATE EXTENSION IF NOT EXISTS pgcrypto;
