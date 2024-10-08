var pre_vaccines_json = {
  elements: [
    {
      type: "matrix",
      name: "vaccines-polarization",
      title:
        "How much do you agree or disagree with the following statements on vaccine mandates in the U.S.? ",
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
            "Preventing people without vaccinations from entering public spaces and transportation would do more harm than good",
          text: "Preventing people without vaccinations from entering public spaces and transportation would do more harm than good",
        },
        {
          value: "Vaccines should be mandated for healthcare workers",
          text: "Vaccines should be mandated for healthcare workers",
        },
        {
          value: "Businesses should be allowed to require proof of vaccination for entry",
          text: "Businesses should be allowed to require proof of vaccination for entry",
        },
        {
          value:
            "Businesses and institutions should be barred from discriminating based on vaccination status",
          text: "Barring businesses and institutions from discriminating based on vaccination status is wrong",
        },
        {
          value: "Schools should be allowed to require vaccinations for attendance",
          text: "Schools should be allowed to require vaccinations for attendance",
        },
        {
          value: "All government-approved vaccines should be mandated",
          text: "All government-approved vaccines should be mandated",
        },
      ],
      rowsOrder: "random",
    },
    {
      type: "matrix",
      name: "vaccines-polarization-general",
      title:
        "How much do you agree or disagree with the following statements on vaccine mandates in the U.S.? ",
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
            "pre-vaccines-polarization-general-The benefits of vaccine mandates outweigh the potential downsides",
          text: "The benefits of vaccine mandates outweigh the potential downsides",
        },
        {
          value:
            "pre-vaccines-polarization-general-The federal government should make it mandatory for people to get vaccinated",
          text: "The federal government should make it mandatory for people to get vaccinated",
        },
        {
          value:
            "pre-vaccines-polarization-general-More vaccine mandates would decrease the spread of infectious diseases by ensuring more people are vaccinated",
          text: "More vaccine mandates would decrease the spread of infectious diseases by ensuring more people are vaccinated",
        },
        {
          value:
            "pre-vaccines-polarization-general-More vaccine mandates would increase public resistance by making people feel their freedoms are being infringed upon",
          text: "More vaccine mandates would increase public resistance by making people feel their freedoms are being infringed upon",
        },
      ],
      rowsOrder: "random",
    },
    {
      type: "matrix",
      name: "pre-vaccines-openmindedness",
      title:
        "Rate the following statements on the seven point scale: When I have conversations about vaccines mandates in the U.S., I...",
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
            "pre-vaccines-openmindedness...have little patience for arguments about vaccines mandates that I disagree with @R@",
          text: "...have little patience for arguments about vaccines mandates that I disagree with",
        },
        {
          value:
            "pre-vaccines-openmindedness...avoid messages about vaccines mandates that I disagree with @R@",
          text: "...avoid messages about vaccines mandates that I disagree with",
        },
        {
          value:
            "pre-vaccines-openmindedness...believe it is a waste of time to pay attention to certain political ideas about vaccine mandates @R@",
          text: "...believe it is a waste of time to pay attention to certain political ideas about vaccine mandates",
        },
        {
          value:
            "pre-vaccines-openmindedness...am open to considering other political viewpoints about vaccines mandates",
          text: "...am open to considering other political viewpoints about vaccines mandates",
        },
        {
          value:
            "pre-vaccines-openmindedness...consider as many different opinions as possible about vaccine mandates",
          text: "...consider as many different opinions as possible about vaccine mandates",
        },
      ],
    },
    {
      type: "expression",
      name: "vaccines-slider1",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who strongly disagrees with you about mandating vaccines in the U.S., where a score of 0 is absolute unwillingness to converse and 100 is absolute willingness to converse. A score of 50 is neutral.",
    },
    {
      type: "html",
      name: "vaccines-slider1-placeholder",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who strongly disagrees with you about mandating vaccines in the U.S., where a score of 0 is absolute unwillingness to converse and 100 is absolute willingness to converse. A score of 50 is neutral.",
      html: '<div id="vaccines-slider1-placeholder"></div>', // Placeholder for the slider
    },
    {
      type: "expression",
      name: "vaccines-slider2",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who would push against your views about mandating vaccines in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
    },
    {
      type: "html",
      name: "vaccines-slider2-placeholder",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who would push against your views about mandating vaccines in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
      html: '<div id="vaccines-slider2-placeholder"></div>', // Placeholder for the slider
    },
    {
      type: "expression",
      name: "attention-check-slider",
      title: "Using the slider, please move the slider all the way to the left to the zero value. This is a question to assess whether you are attending to the instructions.",
    },
    {
      type: "html",
      name: "attention-check-slider-pre-placeholder",
      title: "Using the slider, please move the slider all the way to the left to the zero value. This is a question to assess whether you are attending to the instructions.",
      html: '<div id="attention-check-slider-pre-placeholder"></div>', // Placeholder for the slider
    },
    {
      type: "expression",
      name: "vaccines-slider3",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who would challenge your perspective on mandating vaccines in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
    },
    {
      type: "html",
      name: "vaccines-slider3-placeholder",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who would challenge your perspective on mandating vaccines in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
      html: '<div id="vaccines-slider3-placeholder"></div>', // Placeholder for the slider
    },
    {
      type: "expression",
      name: "vaccines-slider4",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who is heavily invested in mandating vaccines in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
    },
    {
      type: "html",
      name: "vaccines-slider4-placeholder",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who is heavily invested in mandating vaccines in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
      html: '<div id="vaccines-slider4-placeholder"></div>', // Placeholder for the slider
    },
    {
      type: "matrix",
      name: "vaccines-offending-reason",
      title:
        "Imagine that you are asked to have a serious conversation about mandating vaccines in the U.S. with a group of people. Rate the following statements: I would be less willing to join the conversation because...",
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
          value: "pre-vaccines-offending-reason-...I would not want to offend someone",
          text: "...I would not want to offend someone",
        },
        {
          value: "pre-vaccines-offending-reason-...I would not want to be offended by someone",
          text: "...I would not want to be offended by someone",
        },
        {
          value:
            "pre-vaccines-offending-reason-...I would not want to be in an awkward, tense, or confrontational situation",
          text: "...I would not want to be in an awkward, tense, or confrontational situation",
        },
        {
          value:
            "pre-vaccines-offending-reason-...I would not want to deal with emotional distress or fatigue",
          text: "...I would not want to deal with emotional distress or fatigue",
        },
        {
          value:
            "pre-vaccines-offending-reason-...I would not want people judging me negatively or misunderstanding me",
          text: "...I would not want people judging me negatively or misunderstanding me",
        },
        {
          value:
            "pre-vaccines-offending-reason-...I would not want to come off as ignorant or uneducated",
          text: "...I would not want to come off as ignorant or uneducated",
        },
        {
          value: "pre-vaccines-offending-reason-...I have had previous negative experiences",
          text: "...I have had previous negative experiences",
        },
        {
          value: "pre-vaccines-offending-reason-...I would not want to incur social repercussions",
          text: "...I would not want to incur social repercussions",
        },
        {
          value:
            "pre-vaccines-offending-reason-...I would be afraid of feeling disempowered, unheard, or invalidated",
          text: "...I would be afraid of feeling disempowered, unheard, or invalidated",
        },
        {
          value: "pre-vaccines-offending-reason-...I would be afraid of feeling unsafe",
          text: "...I would be afraid of feeling unsafe",
        },
      ],
    },
  ]
}