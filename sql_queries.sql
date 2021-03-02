CREATE DATABASE lemondrops;

CREATE TABLE users (
  id VARCHAR NOT NULL UNIQUE PRIMARY KEY,
  email VARCHAR NOT NULL UNIQUE,
  phone VARCHAR NOT NULL UNIQUE,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_DATE,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_DATE
);

CREATE TABLE products (
  id VARCHAR NOT NULL UNIQUE PRIMARY KEY,
  user_id VARCHAR NOT NULL REFERENCES users (id),
  sku VARCHAR NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_DATE,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_DATE
);


-- *Companies that have leaders and the count of leaders*
-- select c.name, c.id, count(l.id)
-- from companies c
-- left join leaders l on l.company_id = c.id
-- GROUP BY c.id
-- -- having count(l.id) > 0;

-- select name, job_title
-- from leaders
-- where company_id = 17955
-- and LOWER(name) like 'jon%'
-- OR company_id = 17955
-- and LOWER(job_title) like 'jon%';

-- *Companies that I need to scrape that don't have leaders*
-- select c.name, c.id, count(l.id)
-- from companies c
-- left join leaders l on l.company_id = c.id
-- where c.industry IN (
--   'Computer Hardware & Software',
--   'Internet',
--   'Enterprise Software & Network Solutions',
--   'Biotech & Pharmaceuticals',
--   'Advertising & Marketing',
--   'Food & Beverage Manufacturing'
-- )
-- GROUP BY c.id
-- having count(l.id) = 0;

-- * Top Companies that have leaders that have crummy website names...*
-- select c.website, c.id
-- from companies c
-- left join leaders l on l.company_id = c.id
-- where c.website not like 'www.%' and is_top_company = true
-- GROUP BY c.id;

-- ADD COLUMN!!!
-- ALTER TABLE emails
-- ADD COLUMN potential_email VARCHAR DEFAULT NULL;

-- ALTER COLUMN!!!!
-- ALTER TABLE emails
-- ALTER COLUMN google_email_id TYPE VARCHAR;

-- DELETE COLUMN!!!
-- ALTER TABLE companies 
-- DROP COLUMN scraped;

-- ALTER TABLE users
-- ALTER COLUMN id TYPE VARCHAR;

-- UPDATE ROW!!!
-- UPDATE users
-- SET admin = true
-- WHERE id = '061a91e8-0cc6-46b9-9c09-91ebd7a88baf';

-- DELETE ROW!!!
-- DELETE FROM companies
-- WHERE id = 23234;

-- ADD FOREIGN KEY CONSTRAINT TO EXISITING TABLE!!!!
-- ALTER TABLE companies 
-- ADD CONSTRAINT company_size_id FOREIGN KEY (company_size_id) REFERENCES company_sizes (id);

-- MAKE COLUMN UNIQUE!!!!
-- ALTER TABLE leaders ADD CONSTRAINT unique_leader_email UNIQUE (email);

-- CREATE TABLE companies (
--   id SERIAL NOT NULL PRIMARY KEY,
--   name VARCHAR UNIQUE NOT NULL,
--   website VARCHAR NOT NULL,
--   location VARCHAR NOT NULL,
--   created_at TIMESTAMP NOT NULL,
--   updated_at TIMESTAMP NOT NULL,
--   glassdoor_link VARCHAR,
--   size VARCHAR,
--   company_size_id INT,
--   company_type VARCHAR,
--   founded VARCHAR,
--   industry VARCHAR,
--   revenue VARCHAR,
--   glassdoor_rating VARCHAR,
--   logo VARCHAR
-- );

-- CREATE TABLE locations (
--   id SERIAL NOT NULL PRIMARY KEY,
--   name UNIQUE VARCHAR NOT NULL
-- );

-- CREATE TABLE company_locations (
--   location_id BIGINT NOT NULL,
--   company_id BIGINT NOT NULL,
--   PRIMARY KEY (location_id, company_id),
--   FOREIGN KEY (company_id) REFERENCES companies (id) ON DELETE CASCADE,
--   FOREIGN KEY (location_id) REFERENCES locations (id) ON DELETE CASCADE
-- );


-- CREATE TABLE departments (
--   id SERIAL NOT NULL PRIMARY KEY,
--   name VARCHAR UNIQUE NOT NULL
-- );

-- CREATE TABLE job_titles (
--   id SERIAL NOT NULL PRIMARY KEY,
--   name VARCHAR UNIQUE NOT NULL,
--   code VARCHAR UNIQUE
-- );

-- CREATE TABLE leaders (
--   id SERIAL NOT NULL PRIMARY KEY,
--   name VARCHAR NOT NULL,
--   email VARCHAR,
--   google_blurb VARCHAR,
--   scraped_from_google BOOLEAN DEFAULT FALSE,
--   scraped_from_linkedin BOOLEAN DEFAULT FALSE,
--   linkedin_link VARCHAR UNIQUE NOT NULL,
--   last_emailed_date TIMESTAMP,
--   emailed_count INT DEFAULT 0,
--   job_title_id INT,
--   job_title VARCHAR,
--   location_id INT,
--   company_id INT,
--   created_at TIMESTAMP,
--   updated_at TIMESTAMP,
--   FOREIGN KEY (job_title_id) REFERENCES job_titles (id) ON DELETE CASCADE,
--   FOREIGN KEY (location_id) REFERENCES locations (id) ON DELETE CASCADE,
--   FOREIGN KEY (company_id) REFERENCES companies (id) ON DELETE CASCADE
-- );

-- CREATE TABLE company_sizes (
--   id SERIAL NOT NULL PRIMARY KEY,
--   size VARCHAR UNIQUE NOT NULL
-- );
