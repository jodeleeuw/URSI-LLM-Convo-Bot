var pre_euthanasia_json = {
    elements: [
        {
        type: "matrix",
        name: "euthanasia-polarization",
        title:
          "How much do you agree or disagree with the following statements on human euthanasia in the U.S.? ",
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
            value: "Euthanasia should be allowed for terminally ill patients who request it",
            text: "Euthanasia should be allowed for terminally ill patients who request it",
          },
          {
            value: "Legal protections should be provided for doctors who perform euthanasia",
            text: "Legal protections should be provided for doctors who perform euthanasia",
          },
          {
            value:
              "It is not right for family members to request euthanasia on behalf of incapacitated patients",
            text: "It is not right for family members to request euthanasia on behalf of incapacitated patients",
          },
          {
            value:
              "Euthanasia should only be allowed if the patient has received a psychological evaluation",
            text: "Euthanasia should only be allowed if the patient has received a psychological evaluation",
          },
          {
            value: "Euthanasia should be banned for patients with non-terminal conditions",
            text: "Euthanasia should be banned for patients with non-terminal conditions",
          },
          {
            value: "Euthanasia should be banned for all patients",
            text: "Euthanasia should be banned for all patients",
          },
          {
            value: "Euthanasia should not be performed at home",
            text: "Euthanasia should not be performed at home",
          },
        ],
        rowsOrder: "random",
      },
      { type: "matrix",
        name: "euthanasia-polarization-general",
        title:
          "How much do you agree or disagree with the following statements on human euthanasia in the U.S.? ",
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
              "pre-euthanasia-polarization-general-The benefits of euthanasia outweigh the potential downsides",
            text: "The benefits of euthanasia outweigh the potential downsides",
          },
          {
            value:
              "pre-euthanasia-polarization-general-The federal government should make it easier for people to access euthanasia",
            text: "The federal government should make it easier for people to access euthanasia",
          },
          {
            value:
              "pre-euthanasia-polarization-general-More access to euthanasia would alleviate suffering for terminally ill patient",
            text: "More access to euthanasia would alleviate suffering for terminally ill patients",
          },
          {
            value:
              "pre-euthanasia-polarization-general-More access to euthanasia could lead to abuse and misuse by healthcare providers",
            text: "More access to euthanasia could lead to abuse and misuse by healthcare providers",
          },
        ],
        rowsOrder: "random",
      },
      {
        type: "matrix",
        name: "pre-euthanasia-openmindedness",
        title:
          "Rate the following statements on the seven point scale: When I have conversations about human euthanasia in the U.S., I...",
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
              "pre-euthanasia-openmindedness...have little patience for arguments about human euthanasia that I disagree with @R@",
            text: "...have little patience for arguments about human euthanasia that I disagree with",
          },
          {
            value:
              "pre-euthanasia-openmindedness...avoid messages about human euthanasia that I disagree with @R@",
            text: "...avoid messages about human euthanasia that I disagree with",
          },
          {
            value:
              "pre-euthanasia-openmindedness...believe it is a waste of time to pay attention to certain political ideas about human euthanasia @R@",
            text: "...believe it is a waste of time to pay attention to certain political ideas about human euthanasia",
          },
          {
            value:
              "pre-euthanasia-openmindedness...am open to considering other political viewpoints about human euthanasia",
            text: "...am open to considering other political viewpoints about human euthanasia",
          },
          {
            value:
              "pre-euthanasia-openmindedness...consider as many different opinions as possible about human euthanasia",
            text: "...consider as many different opinions as possible about human euthanasia",
          },
        ],
      },
      {
        type: "expression",
        name: "euthanasia-slider1",
        title:
          "Using the slider, please rate your willingness to have a conversation with someone who strongly disagrees with you about human euthanasia in the U.S., where a score of 0 is absolute unwillingness to converse and 100 is absolute willingness to converse. A score of 50 is neutral.",
      },
      {
        type: "html",
        name: "euthanasia-slider1-placeholder",
        title:
          "Using the slider, please rate your willingness to have a conversation with someone who strongly disagrees with you about human euthanasia in the U.S., where a score of 0 is absolute unwillingness to converse and 100 is absolute willingness to converse. A score of 50 is neutral.",
        html: '<div id="euthanasia-slider1-placeholder"></div>', // Placeholder for the slider
      },
      {
        type: "expression",
        name: "euthanasia-slider2",
        title:
          "Using the slider, please rate your willingness to have a conversation with someone who would push against your views about human euthanasia in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
      },
      {
        type: "html",
        name: "euthanasia-slider2-placeholder",
        title:
          "Using the slider, please rate your willingness to have a conversation with someone who would push against your views about human euthanasia in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
        html: '<div id="euthanasia-slider2-placeholder"></div>', // Placeholder for the slider
      },
      { type: "expression",
        name: "attention-check-slider",
        title: "Using the slider, please move the slider all the way to the left to the zero value. This is a question to assess whether you are attending to the instructions.",
    },
    { type: "html",
        name: "attention-check-slider-pre-placeholder",
        title: "Using the slider, please move the slider all the way to the left to the zero value. This is a question to assess whether you are attending to the instructions.",
        html: '<div id="attention-check-slider-pre-placeholder"></div>', // Placeholder for the slider
    }, 
      {
        type: "expression",
        name: "euthanasia-slider3",
        title:
          "Using the slider, please rate your willingness to have a conversation with someone who would challenge your perspective on human euthanasia in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
      },
      {
        type: "html",
        name: "euthanasia-slider3-placeholder",
        title:
          "Using the slider, please rate your willingness to have a conversation with someone who would challenge your perspective on human euthanasia in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
        html: '<div id="euthanasia-slider3-placeholder"></div>', // Placeholder for the slider
      },
      {
        type: "expression",
        name: "euthanasia-slider4",
        title:
          "Using the slider, please rate your willingness to have a conversation with someone who is heavily invested in human euthanasia in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
      },
      {
        type: "html",
        name: "euthanasia-slider4-placeholder",
        title:
          "Using the slider, please rate your willingness to have a conversation with someone who is heavily invested in human euthanasia in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
        html: '<div id="euthanasia-slider4-placeholder"></div>', // Placeholder for the slider
      },
      {
        type: "matrix",
        name: "euthanasia-offending-reason",
        title:
          "Imagine that you are asked to have a serious conversation about human euthanasia in the U.S. with a group of people. Rate the following statements: I would be less willing to join the conversation because...",
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
            value: "pre-euthanasia-offending-reason-...I would not want to offend someone",
            text: "...I would not want to offend someone",
          },
          {
            value: "pre-euthanasia-offending-reason-...I would not want to be offended by someone",
            text: "...I would not want to be offended by someone",
          },
          {
            value:
              "pre-euthanasia-offending-reason-...I would not want to be in an awkward, tense, or confrontational situation",
            text: "...I would not want to be in an awkward, tense, or confrontational situation",
          },
          {
            value:
              "pre-euthanasia-offending-reason-...I would not want to deal with emotional distress or fatigue",
            text: "...I would not want to deal with emotional distress or fatigue",
          },
          {
            value:
              "pre-euthanasia-offending-reason-...I would not want people judging me negatively or misunderstanding me",
            text: "...I would not want people judging me negatively or misunderstanding me",
          },
          {
            value:
              "pre-euthanasia-offending-reason-...I would not want to come off as ignorant or uneducated",
            text: "...I would not want to come off as ignorant or uneducated",
          },
          {
            value: "pre-euthanasia-offending-reason-...I have had previous negative experiences",
            text: "...I have had previous negative experiences",
          },
          {
            value:
              "pre-euthanasia-offending-reason-...I would not want to incur social repercussions",
            text: "...I would not want to incur social repercussions",
          },
          {
            value:
              "pre-euthanasia-offending-reason-...I would be afraid of feeling disempowered, unheard, or invalidated",
            text: "...I would be afraid of feeling disempowered, unheard, or invalidated",
          },
          {
            value: "pre-euthanasia-offending-reason-...I would be afraid of feeling unsafe",
            text: "...I would be afraid of feeling unsafe",
          },
        ],
      },
    ],
  };
  