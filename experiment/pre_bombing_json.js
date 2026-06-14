var pre_bombing_json = {
    elements: [
      {
        type: "matrix",
        name: "bombing-polarization",
        title:
          "How much do you agree or disagree with the following statements on the atomic bombings of Hiroshima and Nagasaki? ",
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
              "A memorial should be established in the U.S. to honor the victims of the bombings",
            text: "A memorial should be established in the U.S. to honor the victims of the bombings",
          },
          {
            value:
              "The U.S. government should provide financial reparations to the survivors and their families",
            text: "The U.S. government should provide financial reparations to the survivors and their families",
          },
          {
            value: "The bombings were justified to bring a swift end to the war",
            text: "The bombings were justified to bring a swift end to the war",
          },
          {
            value: "The bombings were morally wrong",
            text: "The bombings were morally wrong",
          },
          {
            value:
              "Learning about the atomic bombings of Hiroshima and Nagasaki is essential for understanding the consequences of nuclear warfare",
            text: "Learning about the atomic bombings of Hiroshima and Nagasaki is essential for understanding the consequences of nuclear warfare",
          },
          {
            value: "The U.S. should take responsibility for the humanitarian impact of the bombings",
            text: "The U.S. should take responsibility for the humanitarian impact of the bombings",
          },
          {
            value:
              "The U.S. should participate in international efforts to promote nuclear disarmament and non-proliferation",
            text: "The U.S. should participate in international efforts to promote nuclear disarmament and non-proliferation",
          },
        ],
        rowsOrder: "random",
      },
      {
        type: "matrix",
        name: "bombing-polarization-general",
        title:
          "How much do you agree or disagree with the following statements on the atomic bombings of Hiroshima and Nagasaki? ",
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
              "pre-bombing-polarization-general-The bombings of Hiroshima and Nagasaki were necessary to end World War II",
            text: "The bombings of Hiroshima and Nagasaki were necessary to end World War II",
          },
          {
            value:
              "pre-bombing-polarization-general-The U.S. government should have issued a formal apology to Japan",
            text: "The U.S. government should have issued a formal apology to Japan",
          },
          {
            value:
              "pre-bombing-polarization-general-The bombings should be recognized as a war crime under international law",
            text: "The bombings should be recognized as a war crime under international law",
          },
          {
            value:
              "pre-bombing-polarization-general-The bombings should be included in educational curricula as a significant historical event",
            text: "The bombings should be included in educational curricula as a significant historical event",
          },
        ],
        rowsOrder: "random",
      },
      {
        type: "matrix",
        name: "pre-bombing-openmindedness",
        title:
          "Rate the following statements on the seven point scale: When I have conversations about the atomic bombings of Hiroshima and Nagasaki, I...",
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
              "pre-bombing-openmindedness...have little patience for arguments about the atomic bombings that I disagree with @R@",
            text: "...have little patience for arguments about the atomic bombings that I disagree with",
          },
          {
            value:
              "pre-bombing-openmindedness...avoid messages about the atomic bombings that I disagree with @R@",
            text: "...avoid messages about the atomic bombings that I disagree with",
          },
          {
            value:
              "pre-bombing-openmindedness...believe it is a waste of time to pay attention to certain political ideas about the atomic bombings @R@",
            text: "...believe it is a waste of time to pay attention to certain political ideas about the atomic bombings",
          },
          {
            value:
              "pre-bombing-openmindedness...am open to considering other political viewpoints about the atomic bombings",
            text: "...am open to considering other political viewpoints about the atomic bombings",
          },
          {
            value:
              "pre-bombing-openmindedness...consider as many different opinions as possible about the atomic bombings",
            text: "...consider as many different opinions as possible about the atomic bombings",
          },
        ],
      },
      {
        type: "expression",
        name: "bombing-slider1",
        title:
          "Using the slider, please rate your willingness to have a conversation with someone who strongly disagrees with you about the atomic bombings of Hiroshima and Nagasaki, where a score of 0 is absolute unwillingness to converse and 100 is absolute willingness to converse. A score of 50 is neutral.",
      },
      {
        type: "html",
        name: "bombing-slider1-placeholder",
        title:
          "Using the slider, please rate your willingness to have a conversation with someone who strongly disagrees with you about the atomic bombings of Hiroshima and Nagasaki, where a score of 0 is absolute unwillingness to converse and 100 is absolute willingness to converse. A score of 50 is neutral.",
        html: '<div id="bombing-slider1-placeholder"></div>', // Placeholder for the slider
      },
      {
        type: "expression",
        name: "bombing-slider2",
        title:
          "Using the slider, please rate your willingness to have a conversation with someone who would push against your views about the atomic bombings of Hiroshima and Nagasaki, where 0 is absolute unwillingness and 100 is absolute willingness.",
      },
      {
        type: "html",
        name: "bombing-slider2-placeholder",
        title:
          "Using the slider, please rate your willingness to have a conversation with someone who would push against your views about the atomic bombings of Hiroshima and Nagasaki, where 0 is absolute unwillingness and 100 is absolute willingness.",
        html: '<div id="bombing-slider2-placeholder"></div>', // Placeholder for the slider
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
        name: "bombing-slider3",
        title:
          "Using the slider, please rate your willingness to have a conversation with someone who would challenge your perspective on the atomic bombings of Hiroshima and Nagasaki, where 0 is absolute unwillingness and 100 is absolute willingness.",
      },
      {
        type: "html",
        name: "bombing-slider3-placeholder",
        title:
          "Using the slider, please rate your willingness to have a conversation with someone who would challenge your perspective on the atomic bombings of Hiroshima and Nagasaki, where 0 is absolute unwillingness and 100 is absolute willingness.",
        html: '<div id="bombing-slider3-placeholder"></div>', // Placeholder for the slider
      },
      {
        type: "expression",
        name: "bombing-slider4",
        title:
          "Using the slider, please rate your willingness to have a conversation with someone who is heavily invested in the atomic bombings of Hiroshima and Nagasaki, where 0 is absolute unwillingness and 100 is absolute willingness.",
      },
      {
        type: "html",
        name: "bombing-slider4-placeholder",
        title:
          "Using the slider, please rate your willingness to have a conversation with someone who is heavily invested in the atomic bombings of Hiroshima and Nagasaki, where 0 is absolute unwillingness and 100 is absolute willingness.",
        html: '<div id="bombing-slider4-placeholder"></div>', // Placeholder for the slider
      },
      {
        type: "matrix",
        name: "bombing-offending-reason",
        title:
          "Imagine that you are asked to have a serious conversation about the atomic bombings of Hiroshima and Nagasaki with a group of people. Rate the following statements: I would be less willing to join the conversation because...",
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
            value: "pre-bombing-offending-reason-...I would not want to offend someone",
            text: "...I would not want to offend someone",
          },
          {
            value: "pre-bombing-offending-reason-...I would not want to be offended by someone",
            text: "...I would not want to be offended by someone",
          },
          {
            value:
              "pre-bombing-offending-reason-...I would not want to be in an awkward, tense, or confrontational situation",
            text: "...I would not want to be in an awkward, tense, or confrontational situation",
          },
          {
            value:
              "pre-bombing-offending-reason-...I would not want to deal with emotional distress or fatigue",
            text: "...I would not want to deal with emotional distress or fatigue",
          },
          {
            value:
              "pre-bombing-offending-reason-...I would not want people judging me negatively or misunderstanding me",
            text: "...I would not want people judging me negatively or misunderstanding me",
          },
          {
            value:
              "pre-bombing-offending-reason-...I would not want to come off as ignorant or uneducated",
            text: "...I would not want to come off as ignorant or uneducated",
          },
          {
            value: "pre-bombing-offending-reason-...I have had previous negative experiences",
            text: "...I have had previous negative experiences",
          },
          {
            value: "pre-bombing-offending-reason-...I would not want to incur social repercussions",
            text: "...I would not want to incur social repercussions",
          },
          {
            value:
              "pre-bombing-offending-reason-...I would be afraid of feeling disempowered, unheard, or invalidated",
            text: "...I would be afraid of feeling disempowered, unheard, or invalidated",
          },
          {
            value: "pre-bombing-offending-reason-...I would be afraid of feeling unsafe",
            text: "...I would be afraid of feeling unsafe",
          },
        ],
      },
    ],
  };
  