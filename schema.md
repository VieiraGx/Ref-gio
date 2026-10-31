-- WARNING: This schema is for context only and is not meant to be run.
-- Table order and constraints may not be valid for execution.

CREATE TABLE public.notes (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  category USER-DEFINED NOT NULL,
  content text NOT NULL,
  author character varying NOT NULL,
  created_at timestamp with time zone DEFAULT now(),
  CONSTRAINT notes_pkey PRIMARY KEY (id)
);
CREATE TABLE public.monthly_posts (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  month integer NOT NULL CHECK (month >= 1 AND month <= 12),
  year integer NOT NULL CHECK (year >= 2026),
  title character varying,
  content text NOT NULL,
  created_at timestamp with time zone DEFAULT now(),
  CONSTRAINT monthly_posts_pkey PRIMARY KEY (id)
);
CREATE TABLE public.us_content (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  type USER-DEFINED NOT NULL,
  title character varying NOT NULL,
  description text NOT NULL,
  image_url text,
  completed boolean DEFAULT false,
  author character varying NOT NULL,
  created_at timestamp with time zone DEFAULT now(),
  CONSTRAINT us_content_pkey PRIMARY KEY (id)
);
CREATE TABLE public.fortune_messages (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  content text NOT NULL,
  author character varying,
  created_at timestamp with time zone DEFAULT now(),
  CONSTRAINT fortune_messages_pkey PRIMARY KEY (id)
);
CREATE TABLE public.playlist_messages (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  content text NOT NULL,
  created_at timestamp with time zone DEFAULT now(),
  CONSTRAINT playlist_messages_pkey PRIMARY KEY (id)
);
