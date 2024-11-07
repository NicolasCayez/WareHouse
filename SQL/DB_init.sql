-- warehouse database creation
DROP DATABASE warehouse;
CREATE DATABASE IF NOT EXISTS warehouse;
-- warehouse database selection
USE warehouse;

-- tables creation
CREATE TABLE users (
    user_id INT NOT NULL AUTO_INCREMENT,
    user_lastname VARCHAR(50) NOT NULL,
    user_firstname VARCHAR(50) NOT NULL,
    user_phone VARCHAR(13),
    user_address_number INT,
    user_address_road VARCHAR(50),
    user_address_label VARCHAR(50),
    user_address_postal_code VARCHAR(8),
    user_address_city VARCHAR(50),
    user_address_state VARCHAR(50),
    user_address_country VARCHAR(50),
    user_login VARCHAR(50) UNIQUE NOT NULL,
    user_password VARCHAR(50) NOT NULL,
    user_type ENUM('base_user', 'manager', 'administrator') NOT NULL DEFAULT 'base_user',
    PRIMARY KEY(user_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE warehouses (
    wh_id INT NOT NULL AUTO_INCREMENT,
    wh_name VARCHAR(50) UNIQUE NOT NULL,
    wh_phone VARCHAR(13),
    wh_address_number INT,
    wh_address_road VARCHAR(50),
    wh_address_label VARCHAR(50),
    wh_address_postal_code VARCHAR(8),
    wh_address_city VARCHAR(50),
    wh_address_state VARCHAR(50),
    wh_address_country VARCHAR(50),
    PRIMARY KEY(wh_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE wh_user (
    fk_user_id INT,
    fk_wh_id INT,
    FOREIGN KEY(fk_user_id) REFERENCES users(user_id),
	FOREIGN KEY(fk_wh_id) REFERENCES warehouses(wh_id),
    PRIMARY KEY(fk_user_id, fk_wh_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE brands (
    brand_id INT NOT NULL AUTO_INCREMENT,
    brand_name VARCHAR(50) UNIQUE NOT NULL,
    PRIMARY KEY(brand_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE products (
    product_id INT NOT NULL AUTO_INCREMENT,
    product_serial_number VARCHAR(50),
    product_name VARCHAR(50) NOT NULL,
    product_ref VARCHAR(50),
    product_ref_2 VARCHAR(50),
    product_value DECIMAL(7,2),
    PRIMARY KEY(product_id),
    fk_brand_id INT,
    FOREIGN KEY(fk_brand_id) REFERENCES brands(brand_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE wh_product (
    fk_wh_id INT,
    fk_product_id INT,
    FOREIGN KEY(fk_wh_id) REFERENCES warehouses(wh_id),
	FOREIGN KEY(fk_product_id) REFERENCES products(product_id),
    PRIMARY KEY(fk_wh_id, fk_product_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE families (
    family_id INT NOT NULL AUTO_INCREMENT,
    family_name VARCHAR(50) UNIQUE NOT NULL,
    PRIMARY KEY(family_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE product_family (
    fk_product_id INT,
    fk_family_id INT,
	FOREIGN KEY(fk_product_id) REFERENCES products(product_id),
    FOREIGN KEY(fk_family_id) REFERENCES families(family_id),
    PRIMARY KEY(fk_product_id, fk_family_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE product_sizes (
    product_size_id INT NOT NULL AUTO_INCREMENT,
    product_size_height DECIMAL(7,2),
    product_size_width DECIMAL(7,2),
    product_size_depth DECIMAL(7,2),
    product_size_weight DECIMAL(7,2),
    PRIMARY KEY(product_size_id),
    fk_product_id INT,
    FOREIGN KEY(fk_product_id) REFERENCES products(product_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE product_colors (
    product_color_id INT NOT NULL AUTO_INCREMENT,
    product_color_name VARCHAR(50) NOT NULL,
    product_color_label VARCHAR(50),
    PRIMARY KEY(product_color_id),
    fk_product_id INT,
    FOREIGN KEY(fk_product_id) REFERENCES products(product_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE product_infos (
    product_info_id INT NOT NULL AUTO_INCREMENT,
    product_info_name VARCHAR(50) NOT NULL,
    product_info_content TEXT,
    PRIMARY KEY(product_info_id),
    fk_product_id INT,
    FOREIGN KEY(fk_product_id) REFERENCES products(product_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE suppliers (
    supplier_id INT NOT NULL AUTO_INCREMENT,
    supplier_name VARCHAR(50) UNIQUE NOT NULL,
    supplier_phone VARCHAR(13),
    supplier_address_number INT,
    supplier_address_road VARCHAR(50),
    supplier_address_label VARCHAR(50),
    supplier_address_postal_code VARCHAR(8),
    supplier_address_city VARCHAR(50),
    supplier_address_state VARCHAR(50),
    supplier_address_country VARCHAR(50),
    PRIMARY KEY(supplier_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE product_supplier (
    fk_product_id INT,
    fk_supplier_id INT,
	FOREIGN KEY(fk_product_id) REFERENCES products(product_id),
    FOREIGN KEY(fk_supplier_id) REFERENCES suppliers(supplier_id),
    PRIMARY KEY(fk_product_id, fk_supplier_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE movements (
    mvmt_id INT NOT NULL AUTO_INCREMENT,
    mvmt_date DATETIME NOT NULL,
    mvmt_type ENUM('product_receptions', 'stock_modifications', 'stock_transferts', 'inventories') NOT NULL DEFAULT 'stock_modifications',
    PRIMARY KEY(mvmt_id),
    fk_wh_id INT,
    FOREIGN KEY(fk_wh_id) REFERENCES warehouses(wh_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE product_mvmt (
    fk_product_id INT,
    fk_mvmt_id INT,
    last_qty INT NOT NULL,
    new_qty INT NOT NULL,
	FOREIGN KEY(fk_product_id) REFERENCES products(product_id),
    FOREIGN KEY(fk_mvmt_id) REFERENCES movements(mvmt_id),
    PRIMARY KEY(fk_product_id, fk_mvmt_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
CREATE TABLE stock_transferts (
    fk_mvmt_id_1 INT,
    fk_mvmt_id_2 INT,
    stock_transfert_message TEXT NOT NULL,
    PRIMARY KEY (fk_mvmt_id_1, fk_mvmt_id_2),
    FOREIGN KEY(fk_mvmt_id_1) REFERENCES movements(mvmt_id),
    FOREIGN KEY(fk_mvmt_id_2) REFERENCES movements(mvmt_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE product_receptions (
    fk_mvmt_id INT REFERENCES movements(mvmt_id),
    invoice_ref VARCHAR(50),
    parcel_ref VARCHAR(50),
    PRIMARY KEY (fk_mvmt_id),
    FOREIGN KEY(fk_mvmt_id) REFERENCES movements(mvmt_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE stock_modifications (
    fk_mvmt_id INT REFERENCES movements(mvmt_id),
    stock_modification_message TEXT,
    PRIMARY KEY (fk_mvmt_id),
    FOREIGN KEY(fk_mvmt_id) REFERENCES movements(mvmt_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE inventories (
    fk_mvmt_id INT REFERENCES movements(mvmt_id),
    inventory_date DATETIME,
    inventory_closed BOOLEAN DEFAULT 0,
    PRIMARY KEY (fk_mvmt_id),
    FOREIGN KEY(fk_mvmt_id) REFERENCES movements(mvmt_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
