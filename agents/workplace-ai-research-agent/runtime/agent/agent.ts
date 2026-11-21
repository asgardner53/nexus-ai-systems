import { defineAgent, defineDynamic } from "eve";

// Fail before provider calls until adapters, budget controls and release gates exist.
export default defineAgent({
  defaultTools: false,
  tool: false,
  model: defineDynamic({
    events: {
      "session.started": () => {
        throw new Error("Workplace AI Research Agent runtime disabled: integration and pilot gates pending");
      },
    },
  }),
});
