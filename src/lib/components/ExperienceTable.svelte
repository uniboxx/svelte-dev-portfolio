<script lang="ts">
  interface WorkExperience {
    jobTitle: string;
    company: string;
    startDate: string;
    endDate?: string;
  }
  const workExperience: WorkExperience[] = [
    {
      jobTitle: "Formazione Sviluppo Web",
      company: "none",
      startDate: "2020",
    },
    {
      jobTitle: "Procacciatore d'affari per contratti di telecomunicazione",
      company: "Tim",
      startDate: "2014-09",
      endDate: "2019-11",
    },
    {
      jobTitle:
        "Procacciatore d'affari per la vendita di impianti di energia rinnovabile",
      company: "Enel Green Power",
      startDate: "2011-09",
      endDate: "2014-07",
    },
    {
      jobTitle: "Consulente Finanziario",
      company: "Banca Fideuram",
      startDate: "2008-02",
      endDate: "2011-08",
    },
    {
      jobTitle: "Atleta Professionista",
      company: "Varie società sportive in Italia",
      startDate: "1987-06",
      endDate: "2012-02",
    },
  ];
</script>

<section class="default-margin work-experience mt-m">
  <ul class="work-experience-list">
    {#each workExperience as job, index}
      <li class="work-item">
        <article>
          <h3 class="semi-bold mb-xs">{job.jobTitle}</h3>
          <div class="company-and-date">
            <p>{job.company}</p>
            <p>
              {job.startDate}
              {#if job.endDate}
                / {job.endDate}
              {:else}
                / present
              {/if}
            </p>
          </div>
        </article>
      </li>
    {/each}
  </ul>
  <h2 class="headline">Esperienze dei Lavori <br />Svolti</h2>
</section>

<style>
  .work-experience {
    display: flex;

    justify-content: space-between;
    width: 100%;
  }

  .work-experience-list {
    width: 50%;
  }

  .headline {
    text-align: right;
  }

  .work-item {
    border-bottom: 1px solid #f0eded;
    padding-bottom: 12px;
  }

  .work-item:not(:first-of-type) {
    padding-top: 16px;
  }

  .work-item p {
    margin-bottom: 0;
  }

  .company-and-date {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  @media screen and (max-width: 1080px) {
    .work-experience {
      flex-wrap: wrap;
    }
    .work-experience-list {
      margin: 2rem 0;
      order: 2;
    }
  }

  @media screen and (max-width: 640px) {
    .work-experience-list,
    .headline {
      width: 95%;
    }
    .headline {
      text-align: left;
    }
  }
</style>
