alter table "public"."goals_rituals"
  add constraint "goals_rituals_goal_id_fkey"
  foreign key ("goal_id")
  references "public"."goals"
  ("id") on update cascade on delete cascade;
