# Polyglot persistence for PostgreSQL & MySQL using GraphQL

WunderGraph Realtime Chat Example using NextJS and TypeScript as well as PostgreSQL OR MySQL for persistence.

## Description

This Example demonstrates how to build a production-grade Realtime Chat application by writing two GraphQL Queries.

In terms of persistence, the application is fully polyglot, allowing to store the data in either PostgreSQL or MySQL.
This allows you to switch the storage engine by changing a single config option, the API stays unaffected.

Features:
- Authentication
- Authorization
- Realtime Updates
- Cross Tab Login/Logout
- typesafe generated Typescript Client
- polyglot persistence

## Prerequisites

Make sure you have docker compose installed.
Alternatively, you can use any PostgreSQL database available on localhost.

## Getting Started

Install the dependencies and run the example:

```shell
yarn global add @wundergraph/wunderctl@latest
yarn
yarn dev
```

## Questions?

Read the [Docs](https://wundergraph.com/docs).

Join us on [Discord](https://wundergraph.com/discord)!