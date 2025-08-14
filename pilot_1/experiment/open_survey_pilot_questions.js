var open_survey_json = {
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
      title: "Imagine you are about to engage in a conversation with a small group of people where differing opinions exist. For each of the following potential conversation topics, rate how willing you would be to join the conversation.",
      isRequired: true,
      columns: [
        {
          value: 1,
          text: "Strongly uncomfortable",
        },
        {
          value: 2,
          text: "Moderately uncomfortable",
        },
        {
          value: 3,
          text: "A little uncomfortable",
        },
        {
          value: 4,
          text: "Neutral",
        },
        {
          value: 5,
          text: "A little comfortable",
        },
        {
          value: 6,
          text: "Moderately comfortable",
        },
        {
          value: 7,
          text: "Strongly comfortable",
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
