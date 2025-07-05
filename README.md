# metric-tracking

# Create table query 
CREATE TABLE public.metric (
	id serial4 NOT NULL,
	user_id int4 NOT NULL,
	"type" int4 NULL,
	value numeric NULL,
	created_at timestamptz DEFAULT now() NOT NULL,
	CONSTRAINT metric_pkey PRIMARY KEY (id)
);

## Endpoints
| Method | Path            | Description |
| ------ | --------------- | ----------- |
| POST   | `/metrics`      | Add new metric  |
| GET    | `/metrics`      | List metrics by type |
| GET    | `/metrics/chart`| Get chart data |