create table category (
  id int primary key auto_increment not null,
  title varchar(255) not null
);

create table status (
  id int primary key auto_increment not null,
  title varchar(255) not null
);

create table items (
  id int primary key auto_increment not null,
  name varchar(255) not null,
  quantity int not null,
  category_id int not null,
  status_id int not null,
  FOREIGN KEY (category_id) REFERENCES category(id),
  FOREIGN KEY (status_id) REFERENCES status(id)
);

INSERT INTO category (title) VALUES ('Fruits'); 
INSERT INTO category (title) VALUES ('Légumes');
INSERT INTO category (title) VALUES ('Boulangerie');
INSERT INTO category (title) VALUES ('Boissons');
INSERT INTO category (title) VALUES ('Produits laitiers');
INSERT INTO category (title) VALUES ('Épicerie');
INSERT INTO category (title) VALUES ('Viandes');
INSERT INTO category (title) VALUES ('Poissons');

INSERT INTO status (title) VALUES ('A acheté');
INSERT INTO status (title) VALUES ('Acheté');

INSERT INTO items (name, quantity, category_id, status_id) VALUES ('Pommes', 1, 1, 1);
INSERT INTO items (name, quantity, category_id, status_id) VALUES ('Banane', 1, 1, 1);
INSERT INTO items (name, quantity, category_id, status_id) VALUES ('Baguette', 2, 3, 1);
INSERT INTO items (name, quantity, category_id, status_id) VALUES ('Croissant', 6, 3, 1);
INSERT INTO items (name, quantity, category_id, status_id) VALUES ('Eau minérale', 6, 4, 1);
INSERT INTO items (name, quantity, category_id, status_id) VALUES ('Lait', 1, 5, 1);
INSERT INTO items (name, quantity, category_id, status_id) VALUES ('Fromage', 1, 5, 1);
INSERT INTO items (name, quantity, category_id, status_id) VALUES ('Riz', 1, 6, 1);
INSERT INTO items (name, quantity, category_id, status_id) VALUES ('Pâtes', 2, 6, 1);
INSERT INTO items (name, quantity, category_id, status_id) VALUES ('Poulet', 1, 7, 1);
INSERT INTO items (name, quantity, category_id, status_id) VALUES ('Saumon', 3, 8, 1);
INSERT INTO items (name, quantity, category_id, status_id) VALUES ('Tomates', 1, 2, 1);
INSERT INTO items (name, quantity, category_id, status_id) VALUES ('Yaourts', 5, 5, 2);
INSERT INTO items (name, quantity, category_id, status_id) VALUES ('Haricots en conserve', 3, 2, 2);
INSERT INTO items (name, quantity, category_id, status_id) VALUES ('Steak', 2, 7, 2);

