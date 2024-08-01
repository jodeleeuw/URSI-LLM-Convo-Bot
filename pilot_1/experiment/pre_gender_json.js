var pre_gender_json = {
    elements: [
{
    type: "matrix",
    name: "gender-polarization",
    title:
      "How much do you agree or disagree with the following statements on gender equality in the U.S.? ",
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
        value: "Gender quotas should be implemented in corporate boards and executive positions",
        text: "Gender quotas should be implemented in corporate boards and executive positions",
      },
      {
        value:
          "Mandating equal pay for equal work regardless of gender would improve gender equality",
        text: "Mandating equal pay for equal work regardless of gender would improve gender equality",
      },
      {
        value: "Both mothers and fathers should be provided with parental leave",
        text: "Both mothers and fathers should be provided with parental leave",
      },
      {
        value: "Free childcare services should be provided to support working parents",
        text: "Free childcare services should be provided to support working parents",
      },
      {
        value: "Funding for programs aimed at reducing gender-based violence should be increased",
        text: "Funding for programs aimed at reducing gender-based violence should be increased",
      },
      {
        value:
          "Gender diversity should be encouraged in STEM fields through scholarships and grant",
        text: "Gender diversity should be encouraged in STEM fields through scholarships and grants",
      },
      {
        value:
          "Gender should be disregarded when selecting candidates for career advancement opportunities",
        text: "Gender should be disregarded when selecting candidates for career advancement opportunities",
      },
    ],
    rowsOrder: "random",
  },
  {
    type: "matrix",
    name: "gender-polarization-general",
    title:
      "How much do you agree or disagree with the following statements on gender equality in the U.S.? ",
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
          "pre-gender-polarization-general-Efforts to reduce gender inequality benefit society as a whole",
        text: "Efforts to reduce gender inequality benefit society as a whole",
      },
      {
        value:
          "pre-gender-polarization-general-The federal government should take more action to address gender inequality",
        text: "The federal government should take more action to address gender inequality",
      },
      {
        value:
          "pre-gender-polarization-general-Reducing gender inequality would lead to more opportunities for everyone",
        text: "Reducing gender inequality would lead to more opportunities for everyone",
      },
      {
        value:
          "pre-gender-polarization-general-Efforts to reduce inequality for women often create unfair advantages for women over men",
        text: "Efforts to reduce inequality for women often create unfair advantages for women over men",
      },
    ],
    rowsOrder: "random",
  },
  {
    type: "matrix",
    name: "pre-gender-openmindedness",
    title:
      "Rate the following statements on the seven point scale: When I have conversations about gender equality in the U.S., I...",
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
        text: "Disagree somewhat",
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
          "pre-gender-openmindedness...have little patience for arguments about gender equality that I disagree with @R@",
        text: "...have little patience for arguments about gender equality that I disagree with",
      },
      {
        value:
          "pre-gender-openmindedness...avoid messages about gender equality that I disagree with @R@",
        text: "...avoid messages about gender equality that I disagree with",
      },
      {
        value:
          "pre-gender-openmindedness...believe it is a waste of time to pay attention to certain political ideas about gender equality @R@",
        text: "...believe it is a waste of time to pay attention to certain political ideas about gender equality",
      },
      {
        value:
          "pre-gender-openmindedness...am open to considering other political viewpoints about gender equality",
        text: "...am open to considering other political viewpoints about gender equality",
      },
      {
        value:
          "pre-gender-openmindedness...consider as many different opinions as possible about gender equality",
        text: "...consider as many different opinions as possible about gender equality",
      },
    ],
  },
  {
    type: "expression",
    name: "gender-slider1",
    title:
      "Using the slider, please rate your willingness to have a conversation with someone who strongly disagrees with you about gender equality in the U.S., where a score of 0 is absolute unwillingness to converse and 100 is absolute willingness to converse. A score of 50 is neutral.",
  },
  {
    type: "html",
    name: "gender-slider1-placeholder",
    title:
      "Using the slider, please rate your willingness to have a conversation with someone who strongly disagrees with you about gender equality in the U.S., where a score of 0 is absolute unwillingness to converse and 100 is absolute willingness to converse. A score of 50 is neutral.",
    html: '<div id="gender-slider1-placeholder"></div>', // Placeholder for the slider
  },
  {
    type: "expression",
    name: "gender-slider2",
    title:
      "Using the slider, please rate your willingness to have a conversation with someone who would push against your views about gender equality in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
  },
  {
    type: "html",
    name: "gender-slider2-placeholder",
    title:
      "Using the slider, please rate your willingness to have a conversation with someone who would push against your views about gender equality in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
    html: '<div id="gender-slider2-placeholder"></div>', // Placeholder for the slider
  },
  {
    type: "expression",
    name: "gender-slider3",
    title:
      "Using the slider, please rate your willingness to have a conversation with someone who would challenge your perspective on gender equality in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
  },
  {
    type: "html",
    name: "gender-slider3-placeholder",
    title:
      "Using the slider, please rate your willingness to have a conversation with someone who would challenge your perspective on gender equality in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
    html: '<div id="gender-slider3-placeholder"></div>', // Placeholder for the slider
  },
  {
    type: "expression",
    name: "gender-slider4",
    title:
      "Using the slider, please rate your willingness to have a conversation with someone who is heavily invested in gender equality in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
  },
  {
    type: "html",
    name: "gender-slider4-placeholder",
    title:
      "Using the slider, please rate your willingness to have a conversation with someone who is heavily invested in gender equality in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
    html: '<div id="gender-slider4-placeholder"></div>', // Placeholder for the slider
  },
  {
    type: "matrix",
    name: "gender-offending-reason",
    title:
      "Imagine that you are asked to have a serious conversation about gender equality in the U.S. with a group of people. Rate the following statements: I would be less willing to join the conversation because...",
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
        value: "pre-gender-offending-reason-...I would not want to offend someone",
        text: "...I would not want to offend someone",
      },
      {
        value: "pre-gender-offending-reason-...I would not want to be offended by someone",
        text: "...I would not want to be offended by someone",
      },
      {
        value:
          "pre-gender-offending-reason-...I would not want to be in an awkward, tense, or confrontational situation",
        text: "...I would not want to be in an awkward, tense, or confrontational situation",
      },
      {
        value:
          "pre-gender-offending-reason-...I would not want to deal with emotional distress or fatigue",
        text: "...I would not want to deal with emotional distress or fatigue",
      },
      {
        value:
          "pre-gender-offending-reason-...I would not want people judging me negatively or misunderstanding me",
        text: "...I would not want people judging me negatively or misunderstanding me",
      },
      {
        value:
          "pre-gender-offending-reason-...I would not want to come off as ignorant or uneducated",
        text: "...I would not want to come off as ignorant or uneducated",
      },
      {
        value: "pre-gender-offending-reason-...I have had previous negative experiences",
        text: "...I have had previous negative experiences",
      },
      {
        value: "pre-gender-offending-reason-...I would not want to incur social repercussions",
        text: "...I would not want to incur social repercussions",
      },
      {
        value:
          "pre-gender-offending-reason-...I would be afraid of feeling disempowered, unheard, or invalidated",
        text: "...I would be afraid of feeling disempowered, unheard, or invalidated",
      },
      {
        value: "pre-gender-offending-reason-...I would be afraid of feeling unsafe",
        text: "...I would be afraid of feeling unsafe",
      },
    ],
  },
]
}