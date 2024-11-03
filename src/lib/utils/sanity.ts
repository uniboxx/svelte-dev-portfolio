import { createClient, type ClientConfig } from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

const config: ClientConfig = {
  projectId: "m65oxp0l",
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-11-01",
};

const sanityClient = createClient(config);
export default sanityClient;

export function processProjectEntries(rawProject: Project) {
  const builder = ImageUrlBuilder(sanityClient);
  const projectImageUrl = builder.image(rawProject.image).url();
  const processedProject: ProcessedProject = {
    name: rawProject.name,
    company: rawProject.company,
    dataAccomplished: rawProject.dateAccomplished,
    stack: rawProject.stack,
    slug: rawProject.slug,
    projectImageUrl,
    content: rawProject.content.map(processProjectContent),
  };

  return processedProject;
}

function processProjectContent(content: RawTextContent | RawImageContent) {
  if (content._type === "block") {
    // process text content
    const ProcessedTextContent: ProcessedTextContent = {
      type: "text",
      style: content.style,
      textToRender: content.children.map((el) => el.text).join("\n"),
    };
    return ProcessedTextContent;
  } else {
    // process image content
    const builder = ImageUrlBuilder(sanityClient);
    const projectImageUrl = builder.image(content).url();

    const processedImage: ProcessedImageContent = {
      type: "image",
      url: projectImageUrl,
    };

    return processedImage;
  }
}
