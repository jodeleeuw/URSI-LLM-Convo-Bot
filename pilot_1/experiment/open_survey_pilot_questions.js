
var open_survey_pilot_questions_json = {
    elements: [
{
    type: "matrix",
    name: "question1",
    title: "Imagine you are about to engage in a conversation with a small group of people where differing opinions exist. Rate how much you agree with the following statements.",
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
        value:
          "value",
        text: "I would feel excited to join the conversation",
      },
      {
        value:
          "value",
        text: "I would feel anxiety or dread",
      },
      {
        value:
          "value",
        text: "I would look forward to hearing what others have to say on the topic",
      },
      {
        value:
          "value",
        text: "I would prefer to listen to the others discuss and not chime in",
      },
      {
        value:
          "value",
        text: "I would enjoy the conversation if I knew that the conversation would not become heated",
      },
      {
        value:
          "value",
        text: "I would prefer to only share my opinion and not have other's competing perspectives in the conversation",
      },
      {
        value:
          "value",
        text: "I would enjoy the conversation if it were purely meant to be a learning opportunity and there were no expectations for people's opinions to change.",
      },
      {
        value:
          "value",
        text: "I would feel anxiety or dread",
      },
    ],
    rowsOrder: "random",
  },
    ]
}

// then have conditional follow ups that ask why they feel that way in free response 