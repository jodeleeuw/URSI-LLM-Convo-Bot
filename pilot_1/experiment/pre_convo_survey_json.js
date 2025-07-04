var pre_convo_survey_json = {
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
      name: "rating-republicans",
      visibleIf: "{political-affiliation} != 'Republican'",
      title: "How strongly do you agree or disagree with the following statements?",
      isRequired: true,
      columns: [
        {
          value: 1,
          text: "Disagree strongly",
        },
        {
          value: 2,
          text: "Disagree moderately",
        },
        {
          value: 3,
          text: "Disagree a little",
        },
        {
          value: 4,
          text: "Neither agree nor disagree",
        },
        {
          value: 5,
          text: "Agree a little",
        },
        {
          value: 6,
          text: "Agree moderately",
        },
        {
          value: 7,
          text: "Agree strongly",
        },
      ],
      rows: [
        {
          value: "pre-rating-republicans-Republicans are intelligent",
          text: "Republicans are intelligent",
        },
        {
          value: "pre-rating-republicans-Republicans are open-minded",
          text: "Republicans are open-minded",
        },
        {
          value: "pre-rating-republicans-Republicans are generous",
          text: "Republicans are generous",
        },
        {
          value: "pre-rating-republicans-Republicans are hypocritical @R@",
          text: "Republicans are hypocritical",
        },
        {
          value: "pre-rating-republicans-Republicans are selfish @R@",
          text: "Republicans are selfish",
        },
        {
          value: "pre-rating-republicans-Republicans are mean @R@",
          text: "Republicans are mean",
        },
      ],
    },
    {
      type: "matrix",
      name: "rating-democrats",
      visibleIf: "{political-affiliation} != 'Democrat'",
      title: "How strongly do you agree or disagree with the following statements?",
      isRequired: true,
      columns: [
        {
          value: 1,
          text: "Disagree strongly",
        },
        {
          value: 2,
          text: "Disagree moderately",
        },
        {
          value: 3,
          text: "Disagree a little",
        },
        {
          value: 4,
          text: "Neither agree nor disagree",
        },
        {
          value: 5,
          text: "Agree a little",
        },
        {
          value: 6,
          text: "Agree moderately",
        },
        {
          value: 7,
          text: "Agree strongly",
        },
      ],
      rows: [
        {
          value: "pre-rating-democrats-Democrats are intelligent",
          text: "Democrats are intelligent",
        },
        {
          value: "pre-rating-democrats-Democrats are open-minded",
          text: "Democrats are open-minded",
        },
        {
          value: "pre-rating-democrats-Democrats are generous",
          text: "Democrats are generous",
        },
        {
          value: "pre-rating-democrats-Democrats are hypocritical @R@",
          text: "Democrats are hypocritical",
        },
        {
          value: "pre-rating-democrats-Democrats are selfish @R@",
          text: "Democrats are selfish",
        },
        {
          value: "pre-rating-democrats-Democrats are mean @R@",
          text: "Democrats are mean",
        },
      ],
    },
    {
      type: "matrix",
      name: "interacting-with-republicans",
      visibleIf: "{political-affiliation} != 'Republican'",
      title: "To what extent do these statements apply to you?",
      isRequired: true,
      columns: [
        {
          value: 1,
          text: "Very untrue of me",
        },
        {
          value: 2,
          text: "Untrue of me",
        },
        {
          value: 3,
          text: "Somewhat untrue of me",
        },
        {
          value: 4,
          text: "Neither true nor untrue of me",
        },
        {
          value: 5,
          text: "Somewhat true of me",
        },
        {
          value: 6,
          text: "True of me",
        },
        {
          value: 7,
          text: "Very true of me",
        },
      ],
      rows: [
        {
          value: "pre-interacting-with-republicans-family married a republican @R@",
          text: "I would be unhappy if someone in my immediate family married a republican",
        },
        {
          value: "pre-interacting-with-republicans-socializing with a republican @R@",
          text: "I would be unhappy if I had to spend time socializing with a republican",
        },
        {
          value: "pre-interacting-with-republicans-work closely with a republican @R@",
          text: "I would be unhappy if I had to work closely with a republican on the job",
        },
      ],
    },
    {
      type: "matrix",
      name: "interacting-with-democrats",
      visibleIf: "{political-affiliation} != 'Democrat'",
      title: "To what extent do these statements apply to you?",
      isRequired: true,
      columns: [
        {
          value: 1,
          text: "Very untrue of me",
        },
        {
          value: 2,
          text: "Untrue of me",
        },
        {
          value: 3,
          text: "Somewhat untrue of me",
        },
        {
          value: 4,
          text: "Neither true nor untrue of me",
        },
        {
          value: 5,
          text: "Somewhat true of me",
        },
        {
          value: 6,
          text: "True of me",
        },
        {
          value: 7,
          text: "Very true of me",
        },
      ],
      rows: [
        {
          value: "pre-interacting-with-democrats-family married a democrat @R@",
          text: "I would be unhappy if someone in my immediate family married a democrat",
        },
        {
          value: "pre-interacting-with-democrats-socializing with a democrat @R@",
          text: "I would be unhappy if I had to spend time socializing with a democrat",
        },
        {
          value: "pre-interacting-with-democrats-work closely with a democrat @R@",
          text: "I would be unhappy if I had to work closely with a democrat on the job",
        },
      ],
    },
    {
      type: "matrix",
      name: "topic",
      title: `Imagine you are about to engage in a conversation with a small group of people where differing opinions exist. For each of the following conversation topics, rate how willing you would be to engage in the conversation.
      
     Imagine you are about to engage in a conversation with a small group of people where differing opinions exist. For each of the following potential topics, how willing would you be to actively engage in the conversation? 'Engage' here means not just observing, but also expressing your own views, listening openly to others, and participating respectfully.
      
     Imagine you are about to engage in a conversation with a small group of people where differing opinions exist. For each of the following potential topics, rate how unwilling would you be to actively engage in the conversation? 'Engage' here means not just observing, but also expressing your own views, listening openly to others, and participating respectfully.`,
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
          text: "A little unwilling",
        },
        {
          value: 6,
          text: "Moderately unwilling",
        },
        {
          value: 7,
          text: "Strongly unwilling",
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
