var open_survey_vassar_json = {
  elements: [
    {
      type: "checkbox",
      name: "commitment-check",
      title: "The quality of our survey data plays an integral role in the accuracy of our experiment results. To draw accurate conclusions, it is important to us that you provide thoughtful answers to each survey question. Do you commit to providing thoughtful answers in the questions in this survey?",
      isRequired: true,
      choices: [
        {
          value: "maybe",
          text: "I can't promise either way",
        },
        {
          value: "yes",
          text: "Yes, I do",
        },
        {
          value: "no",
          text: "No, I do not",
        },
      ],
    },
    {
      type: "checkbox",
      name: "class-year",
      title: "What is your class year?",
      isRequired: true,
      choices: [
        {
          value: "2026",
          text: "2026",
        },
        {
          value: "2027",
          text: "2027",
        },
        {
          value: "2028",
          text: "2028",
        },
        {
          value: "2029",
          text: "2029",
        },
        {
          value: "other",
          text: "Other",
        }
      ],
    },
    {
      type: "checkbox",
      name: "major-division",
      title: "What division is your major in? If you are a double major in two divisions, select both. If you are undeclared, indicate your prospective major's divison.",
      isRequired: true,
      choices: [
        {
          value: "arts",
          text: "Arts (Art, Dance, Drama, English, Film, Music)",
        },
        {
          value: "foreign languages and literature",
          text: "Foreign Languages/Literature (Arabic, Chinese, French and Francophone Studies, German Studies,  Greek and Roman Studies, Hebrew, Hispanic Studies, Italian, Japanese, Russian Studies)",
        },
        {
          value: "social sciences",
          text: "Social Sciences (Anthropology, Economics, Education, Geography, History, Philosophy, Political Science, Religion, Sociology)",
        },
        {
          value: "natural sciences",
          text: "Natural Sciences (Astronomy, Biology, Chemistry, Cognitive Science, Computer Science, Earth Science, Mathematics/Statistics, Physics, Psychological Science)",
        },
        {
          value: "multidisciplinary",
          text: "Interdepartmental and Multidisciplinary Programs"
        },
      ],
    },
    {
      type: "matrix",
      name: "topic",
      title: "Imagine you are about to engage in a conversation with a small group of people where differing opinions exist. For each of the following potential conversation topics, rate how willing you would be to engage in the conversation.",
      isRequired: true,
      columns: [
        {
          value: 1,
          text: "Strongly unwilling",
        },
        {
          value: 2,
          text: "Moderately unwilling",
        },
        {
          value: 3,
          text: "A little unwilling",
        },
        {
          value: 4,
          text: "Neutral",
        },
        {
          value: 5,
          text: "A little willing",
        },
        {
          value: 6,
          text: "Moderately willing",
        },
        {
          value: 7,
          text: "Strongly willing",
        },
      ],
      rows: [
        {
          value: "human euthanasia in the U.S.",
          text: "Human euthanasia in the U.S.",
        },
        {
          value: "transgender athletes in U.S. sports",
          text: "Transgender athletes in U.S. sports",
        },
        {
          value: "mandating vaccines in the U.S.",
          text: "Mandating vaccines in the U.S.",
        },
        {
          value: "deportation policies for undocumented immigrants in the U.S.",
          text: "Deportation policies for undocumented immigrants in the U.S.",
        },
        {
          value: "the role of capitalism in the U.S. economy",
          text: "The role of capitalism in the U.S. economy",
        },
        {
          value: "the role of the U.S. in the Israeli-Palestinian conflict",
          text: "The role of the U.S. in Israeli-Palestinian conflict",
        },
        {
          value: "police conduct and accountability in the U.S.",
          text: "Police conduct and accountability in the U.S.",
        },
      ],
      rowsOrder: "random",
    },
  ],
};


var open_survey_prolific_json = {
  elements: [
    {
      type: "checkbox",
      name: "commitment-check",
      title: "The quality of our survey data plays an integral role in the accuracy of our experiment results. To draw accurate conclusions, it is important to us that you provide thoughtful answers to each survey question. Do you commit to providing thoughtful answers in the questions in this survey?",
      isRequired: true,
      choices: [
        {
          value: "maybe",
          text: "I can't promise either way",
        },
        {
          value: "yes",
          text: "Yes, I do",
        },
        {
          value: "no",
          text: "No, I do not",
        },
      ],
    },
    {
      type: "matrix",
      name: "topic",
      title: "Imagine you are about to engage in a conversation with a small group of people where differing opinions exist. For each of the following potential conversation topics, rate how willing you would be to engage in the conversation.",
      isRequired: true,
      columns: [
        {
          value: 1,
          text: "Strongly unwilling",
        },
        {
          value: 2,
          text: "Moderately unwilling",
        },
        {
          value: 3,
          text: "A little unwilling",
        },
        {
          value: 4,
          text: "Neutral",
        },
        {
          value: 5,
          text: "A little willing",
        },
        {
          value: 6,
          text: "Moderately willing",
        },
        {
          value: 7,
          text: "Strongly willing",
        },
      ],
      rows: [
        {
          value: "human euthanasia in the U.S.",
          text: "Human euthanasia in the U.S.",
        },
        {
          value: "transgender athletes in U.S. sports",
          text: "Transgender athletes in U.S. sports",
        },
        {
          value: "the role of the U.S. government in healthcare",
          text: "The role of the U.S. government in healthcare",
        },
        {
          value: "mandating vaccines in the U.S.",
          text: "Mandating vaccines in the U.S.",
        },
        {
          value: "deportation policies for undocumented immigrants in the U.S.",
          text: "Deportation policies for undocumented immigrants in the U.S.",
        },
        {
          value: "U.S. public policy on climate change",
          text: "U.S. public policy on climate change",
        },
        {
          value: "the use of A.I. in traditionally human-run spaces (e.g., medicine, art, driving)",
          text: "The use of A.I. in traditionally human-run spaces (e.g., medicine, art, driving)",
        },
        {
          value: "the role of capitalism in the U.S. economy",
          text: "The role of capitalism in the U.S. economy",
        },
        {
          value: "the role of the U.S. in the Israeli-Palestinian conflict",
          text: "The role of the U.S. in Israeli-Palestinian conflict",
        },
        {
          value: "police conduct and accountability in the U.S.",
          text: "Police conduct and accountability in the U.S.",
        },
      ],
      rowsOrder: "random",
    },
  ],
};
