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
    jobTitle: "Consulente alle vendite per impianti di energia rinnovabile",
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
