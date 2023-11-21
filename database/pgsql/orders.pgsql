
-- postgresql

CREATE TABLE orders(
    id BIGINT PRIMARY KEY,
    user_id BIGINT NOT NULL,
    id_delivery BIGINT NOT NULL,
    lat DECIMAL(10, 0) NOT NULL,
    lng DECIMAL(10, 0) NOT NULL,
    status VARCHAR(255) NOT NULL,
    timestamp TIMESTAMP NOT NULL,
    create_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, 
    update_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
)

