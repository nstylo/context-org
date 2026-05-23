#!/usr/bin/env node
import { runEngine } from "@context-org/engine";
import { createSource } from "@context-org/source";
import { renderView } from "@context-org/view";

const source = createSource({
  id: "example",
  content: "Hello from the context-org monorepo"
});

const result = runEngine(source);

console.log(renderView(result));
