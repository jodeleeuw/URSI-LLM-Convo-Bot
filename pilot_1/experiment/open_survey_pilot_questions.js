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
      type: "checkbox",
      name: "ethnicity",
      title: "What is your ethnicity? (Select all that apply)",
      isRequired: true,
      choices: [
        {
          value: "White",
          text: "White",
        },
        {
          value: "Black or African American",
          text: "Black or African American",
        },
        {
          value: "Hispanic or Latino",
          text: "Hispanic or Latino",
        },
        {
          value: "Asian",
          text: "Asian",
        },
        {
          value: "Native American or Alaska Native",
          text: "Native American or Alaska Native",
        },
        {
          value: "Middle Eastern or North African",
          text: "Middle Eastern or North African",
        },
        {
          value: "Native Hawaiian or Other Pacific Islander",
          text: "Native Hawaiian or Other Pacific Islander",
        },
      ],
      showOtherItem: true,
      otherText: "Other (please specify)",
    },
    {
      type: "radiogroup",
      name: "political-affiliation",
      title: "What is your political affiliation? (Select one)",
      isRequired: true,
      choices: [
        {
          value: "Republican",
          text: "Republican",
        },
        {
          value: "Democrat",
          text: "Democrat",
        },
        {
          value: "Independent",
          text: "Independent",
        },
      ],
      showOtherItem: true,
      otherText: "Other (please specify)",
    },
    {
      type: "text",
      name: "gender-identification",
      title: "With which gender do you most identify? (Fill in)",
      isRequired: true,
    },
    {
      type: "radiogroup",
      name: "education-level",
      title: "What is the highest level of education that you have completed? (Select one)",
      isRequired: true,
      choices: [
        {
          value: "Less than high school",
          text: "Less than high school",
        },
        {
          value: "High school diploma or GED",
          text: "High school diploma or GED",
        },
        {
          value: "Some college; no degree",
          text: "Some college, no degree",
        },
        {
          value: "Associate degree",
          text: "Associate degree",
        },
        {
          value: "Bachelor's degree",
          text: "Bachelor's degree",
        },
        {
          value: "Master's degree",
          text: "Master's degree",
        },
        {
          value: "Doctoral degree (PhD; EdD; etc.)",
          text: "Doctoral degree (PhD, EdD, etc.)",
        },
        {
          value: "Professional degree (JD; MD; etc.)",
          text: "Professional degree (JD, MD, etc.)",
        },
      ],
    },
    {
      type: "text",
      name: "religious-affiliation",
      title: "What religion do you most identify with? (Fill in)",
      isRequired: true,
    },
    {
      type: "radiogroup",
      name: "political-ideology",
      title: "How would you describe your political ideology? (Select one)",
      isRequired: true,
      choices: [
        {
          value: "Very conservative",
          text: "Very conservative",
        },
        {
          value: "Conservative",
          text: "Conservative",
        },
        {
          value: "Somewhat conservative",
          text: "Somewhat conservative",
        },
        {
          value: "Moderate",
          text: "Moderate",
        },
        {
          value: "Somewhat liberal",
          text: "Somewhat liberal",
        },
        {
          value: "Liberal",
          text: "Liberal",
        },
        {
          value: "Very liberal",
          text: "Very liberal",
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
          value: "gender equality in the U.S.",
          text: "Gender equality in the U.S.",
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
          value: "the criminal justice system in the U.S.",
          text: "The criminal justice system in the U.S.",
        },
        {
          value: "same-sex marriage in the U.S.",
          text: "Same-sex marriage in the U.S.",
        },
      ],
      rowsOrder: "random",
    },
  ],
};
