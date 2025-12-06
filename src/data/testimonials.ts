// Testimonial configurations
// Text content (quotes and descriptions) come from translation files

export type CompanyLogo = "microsoft" | "telescope" | "medyat";
export type CompanyFilter =
  | "all"
  | "microsoft"
  | "telescope"
  | "kod"
  | "medyat";

export interface TestimonialConfig {
  id: string;
  translationKey: string;
  companyLogo?: CompanyLogo;
  author: {
    name: string;
    role: string;
    company: string;
    linkedin: string;
  };
}

export const testimonialConfigs: TestimonialConfig[] = [
  {
    id: "1",
    translationKey: "johannes",
    companyLogo: "microsoft",
    author: {
      name: "Johannes Dommnich",
      role: "Principal Product Manager",
      company: "Microsoft",
      linkedin: "https://www.linkedin.com/in/johannesdommnich/",
    },
  },
  {
    id: "2",
    translationKey: "riza",
    companyLogo: "microsoft",
    author: {
      name: "Rıza Aktunç",
      role: "Team Leader",
      company: "Microsoft",
      linkedin: "https://www.linkedin.com/in/rizaaktunc/",
    },
  },
  {
    id: "3",
    translationKey: "alp",
    companyLogo: "microsoft",
    author: {
      name: "Alp Oral",
      role: "Principal Software Engineer",
      company: "Microsoft",
      linkedin: "https://www.linkedin.com/in/alporal/",
    },
  },
  {
    id: "4",
    translationKey: "edgar",
    companyLogo: "microsoft",
    author: {
      name: "Edgar Pansu",
      role: "Product Manager",
      company: "Microsoft",
      linkedin: "https://www.linkedin.com/in/edgar-pansu-a999571b/",
    },
  },
  {
    id: "5",
    translationKey: "mert",
    companyLogo: "microsoft",
    author: {
      name: "Mert V. Yılmaz",
      role: "Product Manager",
      company: "Microsoft",
      linkedin: "https://www.linkedin.com/in/mertvyilmaz/",
    },
  },
  {
    id: "6",
    translationKey: "asli",
    companyLogo: "microsoft",
    author: {
      name: "Aslı Atar",
      role: "Frontend Developer",
      company: "Microsoft",
      linkedin: "https://www.linkedin.com/in/asli-atar/",
    },
  },
  {
    id: "7",
    translationKey: "mustafa",
    companyLogo: "microsoft",
    author: {
      name: "Mustafa Yiğit Şahin",
      role: "Software Engineer",
      company: "Microsoft",
      linkedin:
        "https://www.linkedin.com/in/mustafa-yi%C4%9Fit-%C5%9Fahin-msc-5a477922/",
    },
  },
  {
    id: "8",
    translationKey: "mertuysal",
    companyLogo: "microsoft",
    author: {
      name: "Mert Uysal",
      role: "Software Engineer",
      company: "Microsoft",
      linkedin: "https://www.linkedin.com/in/mert-uysal-3579a516a/",
    },
  },
  {
    id: "9",
    translationKey: "huseyin",
    companyLogo: "microsoft",
    author: {
      name: "Hüseyin Polat",
      role: "Software Engineer",
      company: "Microsoft",
      linkedin: "https://www.linkedin.com/in/huseyin-polat/",
    },
  },
  {
    id: "10",
    translationKey: "tugce",
    companyLogo: "microsoft",
    author: {
      name: "Tuğçe Yalçın",
      role: "Software Engineer",
      company: "Microsoft",
      linkedin: "https://www.linkedin.com/in/tugceyalc%C4%B1n/",
    },
  },
  {
    id: "11",
    translationKey: "mustafagur",
    companyLogo: "microsoft",
    author: {
      name: "Mustafa Gür",
      role: "Software Engineer",
      company: "Microsoft",
      linkedin: "https://www.linkedin.com/in/musgurcom/",
    },
  },
  {
    id: "12",
    translationKey: "tahir",
    companyLogo: "telescope",
    author: {
      name: "Tahir Yüksel",
      role: "UI/UX Designer",
      company: "Telescope Labs",
      linkedin: "https://www.linkedin.com/in/tahir-yuksel/",
    },
  },
  {
    id: "13",
    translationKey: "tarik",
    companyLogo: "telescope",
    author: {
      name: "Tarık Umutlu",
      role: "Backend Engineer",
      company: "Telescope Labs",
      linkedin: "https://www.linkedin.com/in/tar%C4%B1k-umutlu-b87135165/",
    },
  },
  {
    id: "14",
    translationKey: "fatma",
    author: {
      name: "Fatma Kalkan",
      role: "Senior Software Developer",
      company: "Kod Yazılım",
      linkedin: "https://www.linkedin.com/in/fatma-kalkan-768276149/",
    },
  },
  {
    id: "15",
    translationKey: "oguzhan",
    author: {
      name: "Oğuzhan Selamoğlu",
      role: "Head of Software Department",
      company: "Kod Yazılım",
      linkedin: "https://www.linkedin.com/in/oguzhan-selamoglu-4b257b74/",
    },
  },
  {
    id: "16",
    translationKey: "isfendiyar",
    author: {
      name: "İsfendiyar Akpınar",
      role: "Backend Developer",
      company: "Kod Yazılım",
      linkedin: "https://www.linkedin.com/in/isfendiyar-akpinar/",
    },
  },
  {
    id: "17",
    translationKey: "mehmet",
    author: {
      name: "Mehmet Gülen",
      role: "Deputy General Manager",
      company: "Kod Yazılım",
      linkedin: "https://www.linkedin.com/in/mehmet-g%C3%BClen-238060137/",
    },
  },
  {
    id: "18",
    translationKey: "murat",
    companyLogo: "medyat",
    author: {
      name: "Murat Altay",
      role: "Full Stack Engineer",
      company: "Medya-T",
      linkedin: "https://www.linkedin.com/in/murat-altay/",
    },
  },
  {
    id: "19",
    translationKey: "tasar",
    companyLogo: "medyat",
    author: {
      name: "Murat Taşarsu",
      role: "CEO",
      company: "Medya-T",
      linkedin: "https://www.linkedin.com/in/tasarsu/",
    },
  },
];

// Pre-calculated counts (computed once, not on every render)
export const testimonialCounts = {
  all: testimonialConfigs.length,
  microsoft: testimonialConfigs.filter((c) => c.companyLogo === "microsoft")
    .length,
  telescope: testimonialConfigs.filter((c) => c.companyLogo === "telescope")
    .length,
  kod: testimonialConfigs.filter((c) => c.author.company === "Kod Yazılım")
    .length,
  medyat: testimonialConfigs.filter((c) => c.companyLogo === "medyat").length,
};

// Filter options
export const companyFilters: CompanyFilter[] = [
  "all",
  "microsoft",
  "telescope",
  "kod",
  "medyat",
];

// Helper function to get company filter from config
export function getCompanyFilter(config: TestimonialConfig): CompanyFilter {
  if (config.companyLogo === "microsoft") return "microsoft";
  if (config.companyLogo === "telescope") return "telescope";
  if (config.companyLogo === "medyat") return "medyat";
  if (config.author.company === "Kod Yazılım") return "kod";
  return "all";
}
