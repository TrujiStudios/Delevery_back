DROP TABLE IF EXISTS products CASCADE;
CREATE TABLE products (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE,
  description VARCHAR(255) NOT NULL,
  price DECIMAL DEFAULT 0,
  image1 VARCHAR(255) NOT NULL,
  image2 VARCHAR(255) NULL,
  image3 VARCHAR(255) NULL,
  category_id BIGINT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(), 
  updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
  FOREIGN KEY (category_id) REFERENCES categories (id) ON UPDATE CASCADE ON DELETE CASCADE
);