

    var pre_healthcare_json = {
      elements: [
        {
          type: "matrix",
          name: "healthcare-polarization",
          title:
            "How much do you agree or disagree with the following statements on role of the U.S. government in healthcare?",
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
      ],
    };