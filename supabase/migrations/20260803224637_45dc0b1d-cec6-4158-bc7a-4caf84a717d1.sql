ALTER TABLE public.articles
  ADD COLUMN IF NOT EXISTS faqs jsonb NOT NULL DEFAULT '[]'::jsonb,
  ADD COLUMN IF NOT EXISTS closing_note text NOT NULL DEFAULT '';

UPDATE public.articles SET faqs = faq WHERE faqs = '[]'::jsonb AND faq <> '[]'::jsonb;

ALTER TABLE public.articles DROP COLUMN IF EXISTS faq;