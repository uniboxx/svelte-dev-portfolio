<script lang="ts">
  import { Button, ExperienceTable, SectionHeadline } from "$components";
  import image from "$assets/davide_b&w.jpg";
  import { goto } from "$app/navigation";

  function onclick() {
    goto("/#contact-form");
  }
</script>

<section class="about-me mt-l">
  <SectionHeadline sectionName="about-me">Su di Me</SectionHeadline>
  <div class="mt-m content-container default-margin">
    <img class="image" src={image} alt="me" />
    <div class="text">
      <p>
        Ciao, sono Davide, uno sviluppatore freelance specializzato in sviluppo
        web.
      </p>
      <p>
        Studiando da autodidatta, e spronato da una forte passione per la
        programmazione web, ho acquisito una profonda conoscenza del panorama
        tecnologico. Oltre al coding, mi piace condividere le mie conoscenze con
        gli altri. Quando mi è possibile cerco di aiutare gli sviluppatori che
        sono all'inizio del loro percorso formativo. Un mio obiettivo futuro è
        quello di creare dei video corsi e tradurre concetti complessi in
        competenze attuabili che si possono applicare subito.
      </p>

      <Button className="mt-m" {onclick}>Parlami del tuo progetto</Button>
    </div>
  </div>
  <ExperienceTable />
</section>

<style>
  .content-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .image {
    width: 42%;
    border-radius: 20px;
    object-fit: cover;
  }

  .text {
    width: 55%;
    text-align: left;
  }

  @media screen and (max-width: 640px) {
    .content-container > * {
      width: 100%;
    }
    .image {
      margin-bottom: 2rem;
    }
  }
</style>
