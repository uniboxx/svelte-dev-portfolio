import sanityClient, { processProjectEntries } from "$lib/utils/sanity";
import type { PageLoad } from "./$types";

export const load: PageLoad = async () => {
  const workExperience: DevExperience[] = await sanityClient.fetch(
    '*[_type == "devExperience"] | order(startDate desc)',
  );

  const rawProjects: Project[] = await sanityClient.fetch(
    "*[_type == 'project'] | order(dateAccomplished desc)",
  );

  // console.log("BEFORE TRANSFORMATION");
  // console.log(rawProjects[0]);
  // console.log(rawProjects[0].image);

  const projects = rawProjects.map(processProjectEntries);

  // console.log("AFTER THE TRANFORMATION");
  // console.log(projects[0]);

  // console.log(projects[0].projectImageUrl);

  return { workExperience, projects };
};
