create table if not exists users
(
    id    serial primary key not null,
    email varchar(255)       not null,
    name  text               not null,
    unique (email)
);

create table if not exists messages
(
    id       serial primary key not null,
    users_id BIGINT UNSIGNED not null,
    message  text               not null,
    constraint user_id
        foreign key (users_id) references users (id)
            on delete CASCADE
            on update RESTRICT
);

insert into users (email, name)
VALUES ('jens@wundergraph.com', 'Jens@WunderGraph');

insert into messages (users_id, message)
VALUES (1, 'Hey, welcome to the WunderChat! =)');