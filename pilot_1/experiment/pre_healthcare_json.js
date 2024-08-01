var pre_healthcare_json = {
    elements: [
      {
        type: "matrix",
        name: "healthcare-polarization",
        title:
          "How much do you agree or disagree with the following statements on the role of the U.S. government in healthcare? ",
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
            value: "A universal healthcare system should be implemented in the U.S.",
            text: "A universal healthcare system should be implemented in the U.S.",
          },
          {
            value: "Medicaid should be expanded to cover more low-income individuals",
            text: "Medicaid should be expanded to cover more low-income individuals",
          },
          {
            value: "Prescription drug prices should be regulated to make them more affordable",
            text: "Prescription drug prices should be regulated to make them more affordable",
          },
          {
            value: "Government subsidies should be provided for private health insurance",
            text: "Government subsidies should be provided for private health insurance",
          },
          {
            value: "The government should negotiate drug prices with pharmaceutical companies",
            text: "The government should negotiate drug prices with pharmaceutical companies",
          },
          {
            value: "Government funding should be increased for mental health services",
            text: "Government funding should be increased for mental health services",
          },
          {
            value: "The competitive market should drive healthcare prices",
            text: "The competitive market should drive healthcare prices",
          },
        ],
        rowsOrder: "random",
      },
      {
        type: "matrix",
        name: "healthcare-polarization-general",
        title:
          "How much do you agree or disagree with the following statements on the role of the U.S. government in healthcare? ",
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
              "pre-healthcare-polarization-general-The federal government should ensure that all citizens have access to healthcare",
            text: "The federal government should ensure that all citizens have access to healthcare",
          },
          {
            value:
              "pre-healthcare-polarization-general-Government involvement in healthcare would worsen overall public health",
            text: "Government involvement in healthcare would worsen overall public health",
          },
          {
            value:
              "pre-healthcare-polarization-general-More government regulation in healthcare would lead to better patient outcomes",
            text: "More government regulation in healthcare would lead to better patient outcomes",
          },
          {
            value:
              "pre-healthcare-polarization-general-Increased government involvement in healthcare could lead to inefficiencies and higher costs",
            text: "Increased government involvement in healthcare could lead to inefficiencies and higher costs",
          },
        ],
        rowsOrder: "random",
      },
      {
        type: "matrix",
        name: "pre-healthcare-openmindedness",
        title:
          "Rate the following statements on the seven point scale: When I have conversations about the role of the U.S. government in healthcare, I...",
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
              "pre-healthcare-openmindedness...have little patience for arguments about the role of the government in healthcare that I disagree with @R@",
            text: "...have little patience for arguments about the role of the government in healthcare that I disagree with",
          },
          {
            value:
              "pre-healthcare-openmindedness...avoid messages about the role of the government in healthcare that I disagree with @R@",
            text: "...avoid messages about the role of the government in healthcare that I disagree with",
          },
          {
            value:
              "pre-healthcare-openmindedness...believe it is a waste of time to pay attention to certain political ideas about the role of the government in healthcare @R@",
            text: "...believe it is a waste of time to pay attention to certain political ideas about the role of the government in healthcare",
          },
          {
            value:
              "pre-healthcare-openmindedness...am open to considering other political viewpoints about the role of the government in healthcare",
            text: "...am open to considering other political viewpoints about the role of the government in healthcare",
          },
          {
            value:
              "pre-healthcare-openmindedness...consider as many different opinions as possible about the role of the government in healthcare",
            text: "...consider as many different opinions as possible about the role of the government in healthcare",
          },
        ],
      },
      {
        type: "expression",
        name: "healthcare-slider1",
        title:
          "Using the slider, please rate your willingness to have a conversation with someone who strongly disagrees with you about the role of the government in U.S. healthcare, where a score of 0 is absolute unwillingness to converse and 100 is absolute willingness to converse. A score of 50 is neutral.",
      },
      {
        type: "html",
        name: "healthcare-slider1-placeholder",
        title:
          "Using the slider, please rate your willingness to have a conversation with someone who strongly disagrees with you about the role of the government in U.S. healthcare, where a score of 0 is absolute unwillingness to converse and 100 is absolute willingness to converse. A score of 50 is neutral.",
        html: '<div id="healthcare-slider1-placeholder"></div>', // Placeholder for the slider
      },
      {
        type: "expression",
        name: "healthcare-slider2",
        title:
          "Using the slider, please rate your willingness to have a conversation with someone who would push against your views about the role of the government in U.S. healthcare, where 0 is absolute unwillingness and 100 is absolute willingness.",
      },
      {
        type: "html",
        name: "healthcare-slider2-placeholder",
        title:
          "Using the slider, please rate your willingness to have a conversation with someone who would push against your views about the role of the government in U.S. healthcare, where 0 is absolute unwillingness and 100 is absolute willingness.",
        html: '<div id="healthcare-slider2-placeholder"></div>', // Placeholder for the slider
      },
      {
        type: "expression",
        name: "healthcare-slider3",
        title:
          "Using the slider, please rate your willingness to have a conversation with someone who would challenge your perspective on the role of the government in U.S. healthcare, where 0 is absolute unwillingness and 100 is absolute willingness.",
      },
      {
        type: "html",
        name: "healthcare-slider3-placeholder",
        title:
          "Using the slider, please rate your willingness to have a conversation with someone who would challenge your perspective on the role of the government in U.S. healthcare, where 0 is absolute unwillingness and 100 is absolute willingness.",
        html: '<div id="healthcare-slider3-placeholder"></div>', // Placeholder for the slider
      },
      {
        type: "expression",
        name: "healthcare-slider4",
        title:
          "Using the slider, please rate your willingness to have a conversation with someone who is heavily invested in the role of the government in U.S. healthcare, where 0 is absolute unwillingness and 100 is absolute willingness.",
      },
      {
        type: "html",
        name: "healthcare-slider4-placeholder",
        title:
          "Using the slider, please rate your willingness to have a conversation with someone who is heavily invested in the role of the government in U.S. healthcare, where 0 is absolute unwillingness and 100 is absolute willingness.",
        html: '<div id="healthcare-slider4-placeholder"></div>', // Placeholder for the slider
      },
      {
        type: "matrix",
        name: "healthcare-offending-reason",
        title:
          "Imagine that you are asked to have a serious conversation about the role of the U.S. government in healthcare with a group of people. Rate the following statements: I would be less willing to join the conversation because...",
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
            value: "pre-healthcare-offending-reason-...I would not want to offend someone",
            text: "...I would not want to offend someone",
          },
          {
            value: "pre-healthcare-offending-reason-...I would not want to be offended by someone",
            text: "...I would not want to be offended by someone",
          },
          {
            value:
              "pre-healthcare-offending-reason-...I would not want to be in an awkward, tense, or confrontational situation",
            text: "...I would not want to be in an awkward, tense, or confrontational situation",
          },
          {
            value:
              "pre-healthcare-offending-reason-...I would not want to deal with emotional distress or fatigue",
            text: "...I would not want to deal with emotional distress or fatigue",
          },
          {
            value:
              "pre-healthcare-offending-reason-...I would not want people judging me negatively or misunderstanding me",
            text: "...I would not want people judging me negatively or misunderstanding me",
          },
          {
            value:
              "pre-healthcare-offending-reason-...I would not want to come off as ignorant or uneducated",
            text: "...I would not want to come off as ignorant or uneducated",
          },
          {
            value: "pre-healthcare-offending-reason-...I have had previous negative experiences",
            text: "...I have had previous negative experiences",
          },
          {
            value:
              "pre-healthcare-offending-reason-...I would not want to incur social repercussions",
            text: "...I would not want to incur social repercussions",
          },
          {
            value:
              "pre-healthcare-offending-reason-...I would be afraid of feeling disempowered, unheard, or invalidated",
            text: "...I would be afraid of feeling disempowered, unheard, or invalidated",
          },
          {
            value: "pre-healthcare-offending-reason-...I would be afraid of feeling unsafe",
            text: "...I would be afraid of feeling unsafe",
          },
        ],
      },
    ],
  };
  