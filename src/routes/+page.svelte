<script lang="ts">
  import { AboutMeSection, HeroSection } from "$components";

  const { data } = $props();
  let { workExperience } = data;
</script>

<HeroSection />
<AboutMeSection {workExperience} />
