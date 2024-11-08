CREATE TABLE "public"."heroes" ("id" uuid NOT NULL, "name" text NOT NULL, "phone" text, "email" text NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), "birthday" timestamptz, "coins" integer NOT NULL DEFAULT 0, "avatar" text, "password" text, "role" text DEFAULT 'guest', PRIMARY KEY ("id") , UNIQUE ("id"), UNIQUE ("email"));
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
CREATE TRIGGER "set_public_heroes_updated_at"
BEFORE UPDATE ON "public"."heroes"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_heroes_updated_at" ON "public"."heroes"
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
