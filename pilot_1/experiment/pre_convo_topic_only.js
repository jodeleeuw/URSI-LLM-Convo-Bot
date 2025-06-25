var pre_convo_topic_only_json = {
    elements: [
      {
        type: "matrix",
        name: "topic",
        title: "Imagine you're asked to have a serious conversation about [topic] with a group of people who mostly hold differing views from yours. Below is a list of potential concerns that you might have in the conversation. For each item, if it would concern you, rate how much it would affect your willingness to join the conversation on a scale from “Not at all” to “Extremely.” If an item wouldn’t concern you, then mark “Not at all.” (You may reflect on past experiences you've had in similar situations.)",
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
  