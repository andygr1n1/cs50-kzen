CREATE TABLE "public"."goals" ("id" uuid DEFAULT gen_random_uuid(), "owner_id" uuid NOT NULL, "difficulty" text NOT NULL DEFAULT 'light', "status" text NOT NULL DEFAULT 'active', "privacy" text DEFAULT 'public', "title" text NOT NULL, "description" Text NOT NULL, "slogan" Text NOT NULL, "is_favorite" boolean NOT NULL DEFAULT false, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), "deleted_at" timestamptz, "finished_at" timestamptz, "parent_goal_id" uuid, PRIMARY KEY ("id") );
CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_goals_updated_at"
BEFORE UPDATE ON "public"."goals"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_goals_updated_at" ON "public"."goals"
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE EXTENSION IF NOT EXISTS pgcrypto;
