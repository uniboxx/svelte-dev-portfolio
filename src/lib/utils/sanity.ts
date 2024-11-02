import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "m65oxp0l",
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-11-01",
};

const sanityClient = createClient(config);
export default sanityClient;
