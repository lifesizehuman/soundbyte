drop database if exists musicArtists_db;

create database musicArtists_db;
use musicArtists_db;

create table artists
  (
  id int auto_increment not null,
  artist varchar(128) not null,
  status boolean not null default true,
  createdAt TIMESTAMP not null default CURRENT_TIMESTAMP,
  primary key (id)
);
