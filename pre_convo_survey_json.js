var pre_convo_survey_json = {
    elements: [ {
    "type": "checkbox",
    "name": "ethnicity",
    "title": "What is your ethnicity? (Select all that apply)",
    "isRequired": false,
    "choices": [
        {
            "value": "Item 1",
            "text": "White"
        },
        {
            "value": "Item 2",
            "text": "Black or African American"
        },
        {
            "value": "Item 3",
            "text": "Hispanic or Latino"
        },
        {
            "value": "Item 4",
            "text": "Asian"
        },
        {
            "value": "Item 5",
            "text": "Native American or Alaska Native"
        },
        {
            "value": "Item 6",
            "text": "Middle Eastern or North African"
        },
        {
            "value": "Item 7",
            "text": "Native Hawaiian or Other Pacific Islander"
        }
    ],
    "showOtherItem": true,
    "otherText": "Other (please specify)"
},
{
    "type": "radiogroup",
    "name": "political-affiliation",
    "title": "What is your political affiliation? (Select one)",
    "isRequired": false,
    "choices": [
        {
            "value": "Item 1",
            "text": "Republican"
        },
        {
            "value": "Item 2",
            "text": "Democrat"
        },
        {
            "value": "Item 3",
            "text": "Independent"
        }
    ],
    "showOtherItem": true,
    "otherText": "Other (please specify)"
},
{
    "type": "radiogroup",
    "name": "gender-identification",
    "title": "With which gender do you most identify? (Select one)",
    "isRequired": false,
    "choices": [
        {
            "value": "Item 1",
            "text": "Male"
        },
        {
            "value": "Item 2",
            "text": "Female"
        }
    ],
    "showOtherItem": true
},
{
    "type": "radiogroup",
    "name": "education-level",
    "title": "What is the highest level of education that you have completed? (Select one)",
    "isRequired": false,
    "choices": [
        {
            "value": "Item 1",
            "text": "Less than high school"
        },
        {
            "value": "Item 2",
            "text": "High school diploma or GED"
        },
        {
            "value": "Item 3",
            "text": "Some college, no degree"
        },
        {
            "value": "Item 4",
            "text": "Associate degree"
        },
        {
            "value": "Item 5",
            "text": "Bachelor's degree"
        },
        {
            "value": "Item 6",
            "text": "Master's degree"
        },
        {
            "value": "Item 7",
            "text": "Doctoral degree (PhD, EdD, etc.)"
        },
        {
            "value": "Item 8",
            "text": "Professional degree (JD, MD, etc.)"
        }
    ]
},
{
    "type": "text",
    "name": "religious-affiliation",
    "title": "With which religious family do you most identify? (Fill in)",
    "isRequired": false
},
{
    "type": "radiogroup",
    "name": "political-ideology",
    "title": "How would you describe your political ideology? (Select one)",
    "isRequired": false,
    "choices": [
        {
            "value": "Item 1",
            "text": "Very conservative"
        },
        {
            "value": "Item 2",
            "text": "Conservative"
        },
        {
            "value": "Item 3",
            "text": "Somewhat conservative"
        },
        {
            "value": "Item 4",
            "text": "Moderate"
        },
        {
            "value": "Item 5",
            "text": "Somewhat liberal"
        },
        {
            "value": "Item 6",
            "text": "Liberal"
        },
        {
            "value": "Item 7",
            "text": "Very liberal"
        }
    ]
},
{
    "type": "matrix",
    "name": "personality-trait-identification",
    "title": "Here are a number of personality traits that may or may not apply to you. Please indicate the extent to which you agree or disagree with each statement. You should rate the extent to which the pair of traits applies to you, even if one characteristic applies more strongly than the other.",
    "isRequired": false,
    "columns": [
        {
            "value": "Column 1",
            "text": "Disagree strongly"
        },
        {
            "value": "Column 2",
            "text": "Disagree moderately"
        },
        {
            "value": "Column 3",
            "text": "Disagree a little"
        },
        {
            "value": "Column 4",
            "text": "Neither agree nor disagree"
        },
        {
            "value": "Column 5",
            "text": "Agree a little"
        },
        {
            "value": "Column 6",
            "text": "Agree moderately"
        },
        {
            "value": "Column 7",
            "text": "Agree strongly"
        }
    ],
    "rows": [
        {
            "value": "Row 1",
            "text": "I see myself as extraverted, enthusiastic"
        },
        {
            "value": "Row 2",
            "text": "I see myself as critical, quarrelsome"
        },
        {
            "value": "Row 3",
            "text": "I see myself as dependable, self-disciplined"
        },
        {
            "value": "Row 4",
            "text": "I see myself as anxious, easily upset"
        },
        {
            "value": "Row 5",
            "text": "I see myself as open to new experiences, complex"
        },
        {
            "value": "Row 6",
            "text": "I see myself as reserved, quiet"
        },
        {
            "value": "Row 7",
            "text": "I see myself as sympathetic, warm"
        },
        {
            "value": "Row 8",
            "text": "I see myself as disorganized, careless"
        },
        {
            "value": "Row 9",
            "text": "I see myself as calm, emotionally stable"
        },
        {
            "value": "Row 10",
            "text": "I see myself as conventional, uncreative"
        }
    ]
},
{
    "type": "matrix",
    "name": "rating-republicans",
    "visibleIf": "{political-affiliation} <> 'Item 1'",
    "title": "How strongly do you agree or disagree with the following statements?",
    "isRequired": false,
    "columns": [
        {
            "value": "Column 1",
            "text": "Disagree very strongly"
        },
        {
            "value": "Column 2",
            "text": "Disgree strongly"
        },
        {
            "value": "Column 3",
            "text": "Disagree somewhat"
        },
        {
            "value": "Column 4",
            "text": "Neither agree nor disagree"
        },
        {
            "value": "Column 5",
            "text": "Agree somewhat"
        },
        {
            "value": "Column 6",
            "text": "Agree strongly"
        },
        {
            "value": "Column 7",
            "text": "Agree very strongly"
        }
    ],
    "rows": [
        {
            "value": "Row 1",
            "text": "Republicans are intelligent"
        },
        {
            "value": "Row 2",
            "text": "Republicans are open-minded"
        },
        {
            "value": "Row 3",
            "text": "Republicans are generous"
        },
        {
            "value": "Row 4",
            "text": "Republicans are hypocritical"
        },
        {
            "value": "Row 5",
            "text": "Republicans are selfish"
        },
        {
            "value": "Row 6",
            "text": "Republicans are mean"
        }
    ]
},
{
    "type": "matrix",
    "name": "rating-democrats",
    "visibleIf": "{political-affiliation} <> 'Item 2'",
    "title": "How strongly do you agree or disagree with the following statements?",
    "isRequired": false,
    "columns": [
        {
            "value": "Column 1",
            "text": "Disagree very strongly"
        },
        {
            "value": "Column 2",
            "text": "Disagree strongly"
        },
        {
            "value": "Column 3",
            "text": "Disagree somewhat"
        },
        {
            "value": "Column 4",
            "text": "Neither agree nor disagree"
        },
        {
            "value": "Column 5",
            "text": "Agree somewhat"
        },
        {
            "value": "Column 6",
            "text": "Agree strongly"
        },
        {
            "value": "Column 7",
            "text": "Agree very strongly"
        }
    ],
    "rows": [
        {
            "value": "Row 1",
            "text": "Democrats are intelligent"
        },
        {
            "value": "Row 2",
            "text": "Democrats are open-minded"
        },
        {
            "value": "Row 3",
            "text": "Democrats are generous"
        },
        {
            "value": "Row 4",
            "text": "Democrats are hypocritical"
        },
        {
            "value": "Row 5",
            "text": "Democrats are selfish"
        },
        {
            "value": "Row 6",
            "text": "Democrats are mean"
        }
    ]
},
{
    "type": "matrix",
    "name": "interacting-with-republicans",
    "visibleIf": "{political-affiliation} <> 'Item 1'",
    "title": "To what extent do these statements apply to you?",
    "isRequired": false,
    "columns": [
        {
            "value": "Column 1",
            "text": "Very untrue of me"
        },
        {
            "value": "Column 2",
            "text": "Untrue of me"
        },
        {
            "value": "Column 3",
            "text": "Somewhat untrue of me"
        },
        {
            "value": "Column 4",
            "text": "Neither true nor untrue of me"
        },
        {
            "value": "Column 5",
            "text": "Somewhat true of me"
        },
        {
            "value": "Column 6",
            "text": "True of me"
        },
        {
            "value": "Column 7",
            "text": "Very true of me"
        }
    ],
    "rows": [
        {
            "value": "Row 1",
            "text": "I would be unhappy if someone in my immediate family married a republican"
        },
        {
            "value": "Row 2",
            "text": "I would be unhappy if I had to spend time socializing with a republican"
        },
        {
            "value": "Row 3",
            "text": "I would be unhappy if I had to work closely with a republican on the job"
        }
    ]
},
{
    "type": "matrix",
    "name": "interacting-with-democrats",
    "visibleIf": "{political-affiliation} <> 'Item 2'",
    "title": "To what extent do these statements apply to you?",
    "isRequired": false,
    "columns": [
        {
            "value": "Column 1",
            "text": "Very untrue of me"
        },
        {
            "value": "Column 2",
            "text": "Untrue of me"
        },
        {
            "value": "Column 3",
            "text": "Somewhat untrue of me"
        },
        {
            "value": "Column 4",
            "text": "Neither true nor untrue of me"
        },
        {
            "value": "Column 5",
            "text": "Somewhat true of me"
        },
        {
            "value": "Column 6",
            "text": "True of me"
        },
        {
            "value": "Column 7",
            "text": "Very true of me"
        }
    ],
    "rows": [
        {
            "value": "Row 1",
            "text": "I would be unhappy if someone in my immediate family married a democrat"
        },
        {
            "value": "Row 2",
            "text": "I would be unhappy if I had to spend time socializing with a democrat"
        },
        {
            "value": "Row 3",
            "text": "I would be unhappy if I had to work closely with a democrat on the job"
        }
    ]
},
{
    "type": "matrix",
    "name": "self-reported-tendency-for-strong-opinions",
    "title": "How much do you agree or disagree with the following statements?",
    "isRequired": false,
    "columns": [
        {
            "value": "Column 1",
            "text": "Disagree very strongly"
        },
        {
            "value": "Column 2",
            "text": "Disagree strongly"
        },
        {
            "value": "Column 3",
            "text": "Disagree somewhat"
        },
        {
            "value": "Column 4",
            "text": "Neither agree nor disagree"
        },
        {
            "value": "Column 5",
            "text": "Agree somewhat"
        },
        {
            "value": "Column 6",
            "text": "Agree strongly"
        },
        {
            "value": "Column 7",
            "text": "Agree very strongly"
        }
    ],
    "rows": [
        {
            "value": "Row 1",
            "text": "I form opinions about everything"
        },
        {
            "value": "Row 2",
            "text": "I prefer to avoid taking extreme positions"
        },
        {
            "value": "Row 3",
            "text": "It is very important to me to hold strong opinions"
        },
        {
            "value": "Row 4",
            "text": "I want to know exactly what is good and bad about everything"
        },
        {
            "value": "Row 5",
            "text": "I often prefer to remain neutral about complex issues"
        },
        {
            "value": "Row 6",
            "text": "If something does not affect me, I do not usually determine if it is good or bad"
        },
        {
            "value": "Row 7",
            "text": "I enjoy strongly liking and disliking new things"
        },
        {
            "value": "Row 8",
            "text": "There are many things for which I do not have a preference"
        },
        {
            "value": "Row 9",
            "text": "It bothers me to remain neutral"
        },
        {
            "value": "Row 10",
            "text": "I like to have strong opinions even when I am not personally involved"
        },
        {
            "value": "Row 11",
            "text": "I have many more opinions than the average person"
        },
        {
            "value": "Row 12",
            "text": "I would rather have a strong opinion than no opinion at all"
        },
        {
            "value": "Row 13",
            "text": "I pay a lot of attention to whether things are good or bad"
        },
        {
            "value": "Row 14",
            "text": "I only form strong opinions when I have to"
        },
        {
            "value": "Row 15",
            "text": "I like to decide that new things are really good or really bad"
        },
        {
            "value": "Row 16",
            "text": "I am pretty much indifferent to many important issues"
        }
    ]
},
{
    "type": "radiogroup",
    "name": "topic-choice",
    "title": "Which topic would you like to discuss with the chatbot?",
    "isRequired": false,
    "choices": [
        {
            "value": "Item 1",
            "text": "Human euthanasia in the U.S."
        },
        {
            "value": "Item 2",
            "text": "Gender inequality in the U.S."
        },
        {
            "value": "Item 3",
            "text": "The role of the U.S. government in healthcare"
        },
        {
            "value": "Item 4",
            "text": "The atomic bombings of Hiroshima and Nagasaki"
        },
        {
            "value": "Item 5",
            "text": "Mandating vaccines in the U.S."
        },
        {
            "value": "Item 6",
            "text": "Criminal justice reform in the U.S."
        },
        {
            "value": "Item 7",
            "text": "same-sex marriage in the U.S."
        }
    ]
},
{
    "type": "matrix",
    "name": "euthanasia-polarization1",
    "visibleIf": "{topic-choice} = 'Item 1'",
    "title": "Please indicate whether you would support or oppose the following proposals about human euthanasia in the U.S.",
    "isRequired": false,
    "columns": [
        {
            "value": "Column 1",
            "text": "Oppose strongly"
        },
        {
            "value": "Column 2",
            "text": "Oppose moderately"
        },
        {
            "value": "Column 3",
            "text": "Oppose slightly"
        },
        {
            "value": "Column 4",
            "text": "Neither oppose nor support"
        },
        {
            "value": "Column 5",
            "text": "Support slightly"
        },
        {
            "value": "Column 6",
            "text": "Support moderately"
        },
        {
            "value": "Column 7",
            "text": "Support strongly"
        }
    ],
    "rows": [
        {
            "value": "Row 1",
            "text": "Allowing euthanasia for terminally ill patients who request it"
        },
        {
            "value": "Row 2",
            "text": "Providing legal protections for doctors who perform euthanasia"
        },
        {
            "value": "Row 3",
            "text": "Allowing family members to request euthanasia on behalf of incapacitated patients"
        },
        {
            "value": "Row 4",
            "text": "Requiring psychological evaluations before euthanasia can be performed"
        },
        {
            "value": "Row 5",
            "text": "Banning euthanasia for patients with non-terminal conditions"
        },
        {
            "value": "Row 6",
            "text": "Banning euthanasia for all patients"
        },
        {
            "value": "Row 7",
            "text": "Allowing euthanasia to be performed at home"
        }
    ],
    "rowsOrder": "random"
},
{
    "type": "matrix",
    "name": "gender-polarization1",
    "visibleIf": "{topic-choice} = 'Item 2'",
    "title": "Please indicate whether you would support or oppose the following proposals about gender inequality in the U.S.",
    "isRequired": false,
    "columns": [
        {
            "value": "Column 1",
            "text": "Oppose strongly"
        },
        {
            "value": "Column 2",
            "text": "Oppose moderately"
        },
        {
            "value": "Column 3",
            "text": "Oppose slightly"
        },
        {
            "value": "Column 4",
            "text": "Neither oppose nor support"
        },
        {
            "value": "Column 5",
            "text": "Support slightly"
        },
        {
            "value": "Column 6",
            "text": "Support moderately"
        },
        {
            "value": "Column 7",
            "text": "Support strongly"
        }
    ],
    "rows": [
        {
            "value": "Row 1",
            "text": "Implementing gender quotas in corporate boards and executive positions"
        },
        {
            "value": "Row 2",
            "text": "Mandating equal pay for equal work regardless of gender"
        },
        {
            "value": "Row 3",
            "text": "Providing paid parental leave for both mothers and fathers"
        },
        {
            "value": "Row 4",
            "text": "Offering free childcare services to support working parents"
        },
        {
            "value": "Row 5",
            "text": "Increasing funding for programs aimed at reducing gender-based violence"
        },
        {
            "value": "Row 6",
            "text": "Encouraging gender diversity in STEM fields through scholarships and grants"
        },
        {
            "value": "Row 7",
            "text": "Disregarding gender when selecting candidates for career advancement opportunities"
        }
    ],
    "rowsOrder": "random"
},
{
    "type": "matrix",
    "name": "healthcare-polarization1",
    "visibleIf": "{topic-choice} = 'Item 3'",
    "title": "Please indicate whether you would support or oppose the following proposals about the role of the U.S. government in healthcare",
    "isRequired": false,
    "columns": [
        {
            "value": "Column 1",
            "text": "Oppose strongly"
        },
        {
            "value": "Column 2",
            "text": "Oppose moderately"
        },
        {
            "value": "Column 3",
            "text": "Oppose slightly"
        },
        {
            "value": "Column 4",
            "text": "Neither oppose nor support"
        },
        {
            "value": "Column 5",
            "text": "Support slightly"
        },
        {
            "value": "Column 6",
            "text": "Support moderately"
        },
        {
            "value": "Column 7",
            "text": "Support strongly"
        }
    ],
    "rows": [
        {
            "value": "Row 1",
            "text": "Implementing a universal healthcare system"
        },
        {
            "value": "Row 2",
            "text": "Expanding Medicaid to cover more low-income individuals"
        },
        {
            "value": "Row 3",
            "text": "Regulating prescription drug prices to make them more affordable"
        },
        {
            "value": "Row 4",
            "text": "Providing government subsidies for private health insurance"
        },
        {
            "value": "Row 5",
            "text": "Allowing the government to negotiate drug prices with pharmaceutical companies"
        },
        {
            "value": "Row 6",
            "text": "Increasing government funding for mental health services"
        },
        {
            "value": "Row 7",
            "text": "Allowing the competitive market to drive healthcare prices"
        }
    ],
    "rowsOrder": "random"
},
{
    "type": "matrix",
    "name": "vaccines-polarization1",
    "visibleIf": "{topic-choice} = 'Item 5'",
    "title": "Please indicate whether you would support or oppose the following proposals about mandating vaccines in the U.S.",
    "isRequired": false,
    "columns": [
        {
            "value": "Column 1",
            "text": "Oppose strongly"
        },
        {
            "value": "Column 2",
            "text": "Oppose moderately"
        },
        {
            "value": "Column 3",
            "text": "Oppose slightly"
        },
        {
            "value": "Column 4",
            "text": "Neither oppose nor support"
        },
        {
            "value": "Column 5",
            "text": "Support slightly"
        },
        {
            "value": "Column 6",
            "text": "Support moderately"
        },
        {
            "value": "Column 7",
            "text": "Support strongly"
        }
    ],
    "rows": [
        {
            "value": "Row 1",
            "text": "Preventing people without vaccinations from entering public spaces and transportation"
        },
        {
            "value": "Row 2",
            "text": "Mandating vaccines for healthcare workers"
        },
        {
            "value": "Row 3",
            "text": "Allowing businesses to require proof of vaccination for entry"
        },
        {
            "value": "Row 4",
            "text": "Barring business and institutions from discriminating based on vaccination status"
        },
        {
            "value": "Row 5",
            "text": "Allowing schools to require vaccinations for attendance"
        },
        {
            "value": "Row 6",
            "text": "Mandating a vaccine once it has been successfully deployed in a certain number of trials"
        }
    ],
    "rowsOrder": "random"
},
{
    "type": "matrix",
    "name": "criminal-polarization1",
    "visibleIf": "{topic-choice} = 'Item 6'",
    "title": "Please indicate whether you would support or oppose the following proposals about criminal justice reform in the U.S.",
    "isRequired": false,
    "columns": [
        {
            "value": "Column 1",
            "text": "Oppose strongly"
        },
        {
            "value": "Column 2",
            "text": "Oppose moderately"
        },
        {
            "value": "Column 3",
            "text": "Oppose slightly"
        },
        {
            "value": "Column 4",
            "text": "Neither oppose nor support"
        },
        {
            "value": "Column 5",
            "text": "Support slightly"
        },
        {
            "value": "Column 6",
            "text": "Support moderately"
        },
        {
            "value": "Column 7",
            "text": "Support strongly"
        }
    ],
    "rows": [
        {
            "value": "Row1",
            "text": "Implementing comprehensive background checks for all individuals entering the criminal justice system"
        },
        {
            "value": "Row2",
            "text": "Enhancing mental health support services for incarcerated individuals"
        },
        {
            "value": "Row3",
            "text": "Banning the use of solitary confinement as a punishment"
        },
        {
            "value": "Row4",
            "text": "Allowing greater access to educational programs for inmates"
        },
        {
            "value": "Row5",
            "text": "Permitting non-violent offenders to serve sentences through community service or house arrest"
        },
        {
            "value": "Row6",
            "text": "Restricting the use of private prisons"
        }
    ],
    "rowsOrder": "random"
},
{
    "type": "matrix",
    "name": "same-sex-polarization1",
    "visibleIf": "{topic-choice} = 'Item 7'",
    "title": "Please indicate whether you would support or oppose the following proposals about same-sex marriage",
    "isRequired": false,
    "columns": [
        {
            "value": "Column 1",
            "text": "Oppose strongly"
        },
        {
            "value": "Column 2",
            "text": "Oppose moderately"
        },
        {
            "value": "Column 3",
            "text": "Oppose slightly"
        },
        {
            "value": "Column 4",
            "text": "Neither oppose nor support"
        },
        {
            "value": "Column 5",
            "text": "Support slightly"
        },
        {
            "value": "Column 6",
            "text": "Support moderately"
        },
        {
            "value": "Column 7",
            "text": "Support strongly"
        }
    ],
    "rows": [
        {
            "value": "Row1",
            "text": "Keeping same-sex marriage legalized nationwide"
        },
        {
            "value": "Row2",
            "text": "Granting adoption rights to married same-sex couples"
        },
        {
            "value": "Row3",
            "text": "Providing employment non-discrimination protections for LGBTQ+ individuals"
        },
        {
            "value": "Row4",
            "text": "Allowing same-sex couples to receive spousal benefits (e.g., health insurance, survivor benefits)"
        },
        {
            "value": "Row5",
            "text": "Not providing the same federal rights and support for same-sex couples as opposite-sex couples"
        },
        {
            "value": "Row6",
            "text": "Barring discrimination against same-sex couples in housing and public accommodations"
        }
    ],
    "rowsOrder": "random"
},
{
    "type": "matrix",
    "name": "euthanasia-polarization2",
    "visibleIf": "{topic-choice} = 'Item 1'",
    "title": "How much do you agree or disagree with the following statements on human euthanasia in the U.S.? ",
    "isRequired": false,
    "columns": [
        {
            "value": "Column 1",
            "text": "Disagree very strongly"
        },
        {
            "value": "Column 2",
            "text": "Disagree strongly"
        },
        {
            "value": "Column 3",
            "text": "Disagree somewhat"
        },
        {
            "value": "Column 4",
            "text": "Neither agree nor disgree"
        },
        {
            "value": "Column 5",
            "text": "Agree somewhat"
        },
        {
            "value": "Column 6",
            "text": "Agree strongly"
        },
        {
            "value": "Column 7",
            "text": "Agree very strongly"
        }
    ],
    "rows": [
        {
            "value": "Row 1",
            "text": "The benefits of euthanasia outweigh the potential downsides"
        },
        {
            "value": "Row 2",
            "text": "The federal government should make it easier for people to access euthanasia"
        },
        {
            "value": "Row 3",
            "text": "More access to euthanasia would alleviate suffering for terminally ill patients"
        },
        {
            "value": "Row 4",
            "text": "More access to euthanasia could lead to abuse and misuse by healthcare providers"
        }
    ]
},
{
    "type": "matrix",
    "name": "gender-polarization2",
    "visibleIf": "{topic-choice} = 'Item 2'",
    "title": "How much do you agree or disagree with the following statements on gender inequality in the U.S.? ",
    "isRequired": false,
    "columns": [
        {
            "value": "Column 1",
            "text": "Disagree very strongly"
        },
        {
            "value": "Column 2",
            "text": "Disagree strongly"
        },
        {
            "value": "Column 3",
            "text": "Disagree somewhat"
        },
        {
            "value": "Column 4",
            "text": "Neither agree nor disgree"
        },
        {
            "value": "Column 5",
            "text": "Agree somewhat"
        },
        {
            "value": "Column 6",
            "text": "Agree strongly"
        },
        {
            "value": "Column 7",
            "text": "Agree very strongly"
        }
    ],
    "rows": [
        {
            "value": "Row 1",
            "text": "Efforts to reduce gender inequality benefit society as a whole"
        },
        {
            "value": "Row 2",
            "text": "The federal government should take more action to address gender inequality"
        },
        {
            "value": "Row 3",
            "text": "Reducing gender inequality would lead to more opportunities for everyone"
        },
        {
            "value": "Row 4",
            "text": "Efforts to reduce inequality for women often create unfair advantages for women over men"
        }
    ]
},
{
    "type": "matrix",
    "name": "healthcare-polarization2",
    "visibleIf": "{topic-choice} = 'Item 3'",
    "title": "How much do you agree or disagree with the following statements on the role of the U.S. government in healthcare? ",
    "isRequired": false,
    "columns": [
        {
            "value": "Column 1",
            "text": "Disagree very strongly"
        },
        {
            "value": "Column 2",
            "text": "Disagree strongly"
        },
        {
            "value": "Column 3",
            "text": "Disagree somewhat"
        },
        {
            "value": "Column 4",
            "text": "Neither agree nor disgree"
        },
        {
            "value": "Column 5",
            "text": "Agree somewhat"
        },
        {
            "value": "Column 6",
            "text": "Agree strongly"
        },
        {
            "value": "Column 7",
            "text": "Agree very strongly"
        }
    ],
    "rows": [
        {
            "value": "Row 1",
            "text": "The federal government should ensure that all citizens have access to healthcare"
        },
        {
            "value": "Row 2",
            "text": "Government involvement in healthcare would worsen overall public health"
        },
        {
            "value": "Row 3",
            "text": "More government regulation in healthcare would lead to better patient outcomes"
        },
        {
            "value": "Row 4",
            "text": "Increased government involvement in healthcare could lead to inefficiencies and higher costs"
        }
    ]
},
{
    "type": "matrix",
    "name": "bombing-polarization1",
    "visibleIf": "{topic-choice} = 'Item 4'",
    "title": "How much do you agree or disagree with the following statements on the atomic bombings of Hiroshima and Nagasaki? ",
    "isRequired": false,
    "columns": [
        {
            "value": "Column 1",
            "text": "Disagree very strongly"
        },
        {
            "value": "Column 2",
            "text": "Disagree strongly"
        },
        {
            "value": "Column 3",
            "text": "Disagree somewhat"
        },
        {
            "value": "Column 4",
            "text": "Neither agree nor disgree"
        },
        {
            "value": "Column 5",
            "text": "Agree somewhat"
        },
        {
            "value": "Column 6",
            "text": "Agree strongly"
        },
        {
            "value": "Column 7",
            "text": "Agree very strongly"
        }
    ],
    "rows": [
        {
            "value": "Row 1",
            "text": "The bombings of Hiroshima and Nagasaki were necessary to end World War II"
        },
        {
            "value": "Row 2",
            "text": "The U.S. government should have issued a formal apology to Japan"
        },
        {
            "value": "Row 3",
            "text": "The bombings should be recognized as a war crime under international law"
        },
        {
            "value": "Row 4",
            "text": "The bombings should be included in educational curricula as a significant historical event"
        },
        {
            "value": "Row 5",
            "text": "A memorial should be established in the U.S. to honor the victims of the bombings"
        },
        {
            "value": "Row 6",
            "text": "The U.S. government should provide financial reparations to the survivors and their families"
        },
        {
            "value": "Row 7",
            "text": "The bombings were justified to bring a swift end to the war"
        },
        {
            "value": "Row 8",
            "text": "The bombings were morally wrong"
        },
        {
            "value": "Row 9",
            "text": "Learning about the atomic bombings of Hiroshima and Nagasaki is essential for understanding the consequences of nuclear warfare"
        },
        {
            "value": "Row 10",
            "text": "The U.S. should take responsibility for the humanitarian impact of the bombings"
        },
        {
            "value": "Row 11",
            "text": "The U.S. should participate in international efforts to promote nuclear disarmament and non-proliferation"
        }
    ]
},
{
    "type": "matrix",
    "name": "vaccine-polarization2",
    "visibleIf": "{topic-choice} = 'Item 5'",
    "title": "How much do you agree or disagree with the following statements on vaccine mandates in the U.S.? ",
    "isRequired": false,
    "columns": [
        {
            "value": "Column 1",
            "text": "Disagree very strongly"
        },
        {
            "value": "Column 2",
            "text": "Disagree strongly"
        },
        {
            "value": "Column 3",
            "text": "Disagree somewhat"
        },
        {
            "value": "Column 4",
            "text": "Neither agree nor disgree"
        },
        {
            "value": "Column 5",
            "text": "Agree somewhat"
        },
        {
            "value": "Column 6",
            "text": "Agree strongly"
        },
        {
            "value": "Column 7",
            "text": "Agree very strongly"
        }
    ],
    "rows": [
        {
            "value": "Row 1",
            "text": "The benefits of vaccine mandates outweigh the potential downsides"
        },
        {
            "value": "Row 2",
            "text": "The federal government should make it mandatory for people to get vaccinated"
        },
        {
            "value": "Row 3",
            "text": "More vaccine mandates would decrease the spread of infectious diseases by ensuring more people are vaccinated"
        },
        {
            "value": "Row 4",
            "text": "More vaccine mandates would increase public resistance by making people feel their freedoms are being infringed upon"
        }
    ]
},
{
    "type": "matrix",
    "name": "criminal-polarization2",
    "visibleIf": "{topic-choice} = 'Item 6'",
    "title": "How much do you agree or disagree with the following statements on criminal justice reform in the U.S.? ",
    "isRequired": false,
    "columns": [
        {
            "value": "Column 1",
            "text": "Disagree very strongly"
        },
        {
            "value": "Column 2",
            "text": "Disagree strongly"
        },
        {
            "value": "Column 3",
            "text": "Disagree somewhat"
        },
        {
            "value": "Column 4",
            "text": "Neither agree nor disgree"
        },
        {
            "value": "Column 5",
            "text": "Agree somewhat"
        },
        {
            "value": "Column 6",
            "text": "Agree strongly"
        },
        {
            "value": "Column 7",
            "text": "Agree very strongly"
        }
    ],
    "rows": [
        {
            "value": "Row 1",
            "text": "The benefits of criminal justice reform outweigh the potential downsides"
        },
        {
            "value": "Row 2",
            "text": "The federal government should implement stricter regulations to reduce incarceration rates"
        },
        {
            "value": "Row 3",
            "text": "The federal government should implement more robust rehabilitation programs to improve public safety"
        },
        {
            "value": "Row 4",
            "text": "The federal government should implement greater punishments to improve public safety"
        }
    ]
},
{
    "type": "matrix",
    "name": "same-sex-polarization2",
    "visibleIf": "{topic-choice} = 'Item 7'",
    "title": "How much do you agree or disagree with the following statements on same-sex marriage in the U.S.? ",
    "isRequired": false,
    "columns": [
        {
            "value": "Column 1",
            "text": "Disagree very strongly"
        },
        {
            "value": "Column 2",
            "text": "Disagree strongly"
        },
        {
            "value": "Column 3",
            "text": "Disagree somewhat"
        },
        {
            "value": "Column 4",
            "text": "Neither agree nor disgree"
        },
        {
            "value": "Column 5",
            "text": "Agree somewhat"
        },
        {
            "value": "Column 6",
            "text": "Agree strongly"
        },
        {
            "value": "Column 7",
            "text": "Agree very strongly"
        }
    ],
    "rows": [
        {
            "value": "Row 1",
            "text": "Same-sex couples should not have the same right to legal marriage that opposite-sex couples have"
        },
        {
            "value": "Row 2",
            "text": "The federal government should ensure equal rights for married same-sex couples"
        },
        {
            "value": "Row 3",
            "text": "More protections for married same-sex couples would decrease discrimination and improve societal acceptance"
        },
        {
            "value": "Row 4",
            "text": "More restrictions on same-sex marriage would increase discrimination and harm the well-being of same-sex couples"
        }
    ]
},
{
    "type": "expression",
    "name": "euthanasia-slider1",
    "visibleIf": "{topic-choice} = 'Item 1'",
    "title": "Using the slider, please rate your willingness to have a conversation with someone who strongly disagrees with you about human euthanasia in the U.S., where a score of 0 is absolute unwillingness to converse and 100 is absolute willingness to converse. A score of 50 is neutral.",
},
{
    "type": "html",
    "name": "euthanasia-slider1-placeholder",
    "visibleIf": "{topic-choice} = 'Item 1'",
    "title": "Using the slider, please rate your willingness to have a conversation with someone who strongly disagrees with you about human euthanasia in the U.S., where a score of 0 is absolute unwillingness to converse and 100 is absolute willingness to converse. A score of 50 is neutral.",
    "html": '<div id="sliderOne"></div>' // Placeholder for the slider
},
{
    "type": "expression",
    "name": "euthanasia-slider2",
    "visibleIf": "{topic-choice} = 'Item 1'",
    "title": "Using the slider, please rate your willingness to have a conversation with someone who would push against your views about human euthanasia in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
},
{
    "type": "html",
    "name": "euthanasia-slider2-placeholder",
    "visibleIf": "{topic-choice} = 'Item 1'",
    "title": "Using the slider, please rate your willingness to have a conversation with someone who would push against your views about human euthanasia in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
    "html": '<div id="sliderTwo"></div>' // Placeholder for the slider
},
{
    "type": "expression",
    "name": "euthanasia-slider3",
    "visibleIf": "{topic-choice} = 'Item 1'",
    "title": "Using the slider, please rate your willingness to have a conversation with someone who would challenge your perspective on human euthanasia in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
},
{
    "type": "html",
    "name": "euthanasia-slider3-placeholder",
    "visibleIf": "{topic-choice} = 'Item 1'",
    "title": "Using the slider, please rate your willingness to have a conversation with someone who would challenge your perspective on human euthanasia in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
    "html": '<div id="sliderThree"></div>' // Placeholder for the slider
},
{
    "type": "expression",
    "name": "euthanasia-slider4",
    "visibleIf": "{topic-choice} = 'Item 1'",
    "title": "Using the slider, please rate your willingness to have a conversation with someone who is heavily invested in human euthanasia in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
},
{
    "type": "html",
    "name": "euthanasia-slider4-placeholder",
    "visibleIf": "{topic-choice} = 'Item 1'",
    "title": "Using the slider, please rate your willingness to have a conversation with someone who is heavily invested in human euthanasia in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
    "html": '<div id="sliderFour"></div>' // Placeholder for the slider
},

{
    "type": "expression",
    "name": "gender-slider1",
    "visibleIf": "{topic-choice} = 'Item 2'",
    "title": "Using the slider, please rate your willingness to have a conversation with someone who strongly disagrees with you about gender inequality in the U.S., where a score of 0 is absolute unwillingness to converse and 100 is absolute willingness to converse. A score of 50 is neutral.",
},
{
    "type": "html",
    "name": "gender-slider1-placeholder",
    "visibleIf": "{topic-choice} = 'Item 2'",
    "title": "Using the slider, please rate your willingness to have a conversation with someone who strongly disagrees with you about gender inequality in the U.S., where a score of 0 is absolute unwillingness to converse and 100 is absolute willingness to converse. A score of 50 is neutral.",
    "html": '<div id="sliderOne"></div>' // Placeholder for the slider
},
{
    "type": "expression",
    "name": "gender-slider2",
    "visibleIf": "{topic-choice} = 'Item 2'",
    "title": "Using the slider, please rate your willingness to have a conversation with someone who would push against your views about gender inequality in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
},
{
    "type": "html",
    "name": "gender-slider2-placeholder",
    "visibleIf": "{topic-choice} = 'Item 2'",
    "title": "Using the slider, please rate your willingness to have a conversation with someone who would push against your views about gender inequality in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
    "html": '<div id="sliderTwo"></div>' // Placeholder for the slider
},
{
    "type": "expression",
    "name": "gender-slider3",
    "visibleIf": "{topic-choice} = 'Item 2'",
    "title": "Using the slider, please rate your willingness to have a conversation with someone who would challenge your perspective on gender inequality in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
},
{
    "type": "html",
    "name": "gender-slider3-placeholder",
    "visibleIf": "{topic-choice} = 'Item 2'",
    "title": "Using the slider, please rate your willingness to have a conversation with someone who would challenge your perspective on gender inequality in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
    "html": '<div id="sliderThree"></div>' // Placeholder for the slider
},
{
    "type": "expression",
    "name": "gender-slider4",
    "visibleIf": "{topic-choice} = 'Item 2'",
    "title": "Using the slider, please rate your willingness to have a conversation with someone who is heavily invested in gender inequality in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
},
{
    "type": "html",
    "name": "gender-slider4-placeholder",
    "visibleIf": "{topic-choice} = 'Item 2'",
    "title": "Using the slider, please rate your willingness to have a conversation with someone who is heavily invested in gender inequality in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
    "html": '<div id="sliderFour"></div>' // Placeholder for the slider
},

{
    "type": "expression",
    "name": "healthcare-slider1",
    "visibleIf": "{topic-choice} = 'Item 3'",
    "title": "Using the slider, please rate your willingness to have a conversation with someone who strongly disagrees with you about the role of the government in U.S. healthcare, where a score of 0 is absolute unwillingness to converse and 100 is absolute willingness to converse. A score of 50 is neutral.",
},
{
    "type": "html",
    "name": "healthcare-slider1-placeholder",
    "visibleIf": "{topic-choice} = 'Item 3'",
    "title": "Using the slider, please rate your willingness to have a conversation with someone who strongly disagrees with you about the role of the government in U.S. healthcare, where a score of 0 is absolute unwillingness to converse and 100 is absolute willingness to converse. A score of 50 is neutral.",
    "html": '<div id="sliderOne"></div>' // Placeholder for the slider
},
{
    "type": "expression",
    "name": "healthcare-slider2",
    "visibleIf": "{topic-choice} = 'Item 3'",
    "title": "Using the slider, please rate your willingness to have a conversation with someone who would push against your views about the role of the government in U.S. healthcare, where 0 is absolute unwillingness and 100 is absolute willingness.",
},
{
    "type": "html",
    "name": "healthcare-slider2-placeholder",
    "visibleIf": "{topic-choice} = 'Item 3'",
    "title": "Using the slider, please rate your willingness to have a conversation with someone who would push against your views about the role of the government in U.S. healthcare, where 0 is absolute unwillingness and 100 is absolute willingness.",
    "html": '<div id="sliderTwo"></div>' // Placeholder for the slider
},
{
    "type": "expression",
    "name": "healthcare-slider3",
    "visibleIf": "{topic-choice} = 'Item 3'",
    "title": "Using the slider, please rate your willingness to have a conversation with someone who would challenge your perspective on the role of the government in U.S. healthcare, where 0 is absolute unwillingness and 100 is absolute willingness.",
},
{
    "type": "html",
    "name": "healthcare-slider3-placeholder",
    "visibleIf": "{topic-choice} = 'Item 3'",
    "title": "Using the slider, please rate your willingness to have a conversation with someone who would challenge your perspective on the role of the government in U.S. healthcare, where 0 is absolute unwillingness and 100 is absolute willingness.",
    "html": '<div id="sliderThree"></div>' // Placeholder for the slider
},
{
    "type": "expression",
    "name": "healthcare-slider4",
    "visibleIf": "{topic-choice} = 'Item 3'",
    "title": "Using the slider, please rate your willingness to have a conversation with someone who is heavily invested in the role of the government in U.S. healthcare, where 0 is absolute unwillingness and 100 is absolute willingness.",
},
{
    "type": "html",
    "name": "healthcare-slider4-placeholder",
    "visibleIf": "{topic-choice} = 'Item 3'",
    "title": "Using the slider, please rate your willingness to have a conversation with someone who is heavily invested in the role of the government in U.S. healthcare, where 0 is absolute unwillingness and 100 is absolute willingness.",
    "html": '<div id="sliderFour"></div>' // Placeholder for the slider
},

{
    "type": "expression",
    "name": "bombing-slider1",
    "visibleIf": "{topic-choice} = 'Item 4'",
    "title": "Using the slider, please rate your willingness to have a conversation with someone who strongly disagrees with you about the atomic bombings of Hiroshima and Nagasaki, where a score of 0 is absolute unwillingness to converse and 100 is absolute willingness to converse. A score of 50 is neutral.",
},
{
    "type": "html",
    "name": "bombing-slider1-placeholder",
    "visibleIf": "{topic-choice} = 'Item 4'",
    "title": "Using the slider, please rate your willingness to have a conversation with someone who strongly disagrees with you about the atomic bombings of Hiroshima and Nagasaki, where a score of 0 is absolute unwillingness to converse and 100 is absolute willingness to converse. A score of 50 is neutral.",
    "html": '<div id="sliderOne"></div>' // Placeholder for the slider
},
{
    "type": "expression",
    "name": "bombing-slider2",
    "visibleIf": "{topic-choice} = 'Item 4'",
    "title": "Using the slider, please rate your willingness to have a conversation with someone who would push against your views about the atomic bombings of Hiroshima and Nagasaki, where 0 is absolute unwillingness and 100 is absolute willingness.",
},
{
    "type": "html",
    "name": "bombing-slider2-placeholder",
    "visibleIf": "{topic-choice} = 'Item 4'",
    "title": "Using the slider, please rate your willingness to have a conversation with someone who would push against your views about the atomic bombings of Hiroshima and Nagasaki, where 0 is absolute unwillingness and 100 is absolute willingness.",
    "html": '<div id="sliderTwo"></div>' // Placeholder for the slider
},
{
    "type": "expression",
    "name": "bombing-slider3",
    "visibleIf": "{topic-choice} = 'Item 4'",
    "title": "Using the slider, please rate your willingness to have a conversation with someone who would challenge your perspective on the atomic bombings of Hiroshima and Nagasaki, where 0 is absolute unwillingness and 100 is absolute willingness.",
},
{
    "type": "html",
    "name": "bombing-slider3-placeholder",
    "visibleIf": "{topic-choice} = 'Item 4'",
    "title": "Using the slider, please rate your willingness to have a conversation with someone who would challenge your perspective on the atomic bombings of Hiroshima and Nagasaki, where 0 is absolute unwillingness and 100 is absolute willingness.",
    "html": '<div id="sliderThree"></div>' // Placeholder for the slider
},
{
    "type": "expression",
    "name": "bombing-slider4",
    "visibleIf": "{topic-choice} = 'Item 4'",
    "title": "Using the slider, please rate your willingness to have a conversation with someone who is heavily invested in the atomic bombings of Hiroshima and Nagasaki, where 0 is absolute unwillingness and 100 is absolute willingness.",
},
{
    "type": "html",
    "name": "bombing-slider4-placeholder",
    "visibleIf": "{topic-choice} = 'Item 4'",
    "title": "Using the slider, please rate your willingness to have a conversation with someone who is heavily invested in the atomic bombings of Hiroshima and Nagasaki, where 0 is absolute unwillingness and 100 is absolute willingness.",
    "html": '<div id="sliderFour"></div>' // Placeholder for the slider
},

{
    "type": "expression",
    "name": "vaccines-slider1",
    "visibleIf": "{topic-choice} = 'Item 5'",
    "title": "Using the slider, please rate your willingness to have a conversation with someone who strongly disagrees with you about mandating vaccines in the U.S., where a score of 0 is absolute unwillingness to converse and 100 is absolute willingness to converse. A score of 50 is neutral.",
},
{
    "type": "html",
    "name": "vaccines-slider1-placeholder",
    "visibleIf": "{topic-choice} = 'Item 5'",
    "title": "Using the slider, please rate your willingness to have a conversation with someone who strongly disagrees with you about mandating vaccines in the U.S., where a score of 0 is absolute unwillingness to converse and 100 is absolute willingness to converse. A score of 50 is neutral.",
    "html": '<div id="sliderOne"></div>' // Placeholder for the slider
},
{
    "type": "expression",
    "name": "vaccines-slider2",
    "visibleIf": "{topic-choice} = 'Item 5'",
    "title": "Using the slider, please rate your willingness to have a conversation with someone who would push against your views about mandating vaccines in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
},
{
    "type": "html",
    "name": "vaccines-slider2-placeholder",
    "visibleIf": "{topic-choice} = 'Item 5'",
    "title": "Using the slider, please rate your willingness to have a conversation with someone who would push against your views about mandating vaccines in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
    "html": '<div id="sliderTwo"></div>' // Placeholder for the slider
},
{
    "type": "expression",
    "name": "vaccines-slider3",
    "visibleIf": "{topic-choice} = 'Item 5'",
    "title": "Using the slider, please rate your willingness to have a conversation with someone who would challenge your perspective on mandating vaccines in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
},
{
    "type": "html",
    "name": "vaccines-slider3-placeholder",
    "visibleIf": "{topic-choice} = 'Item 5'",
    "title": "Using the slider, please rate your willingness to have a conversation with someone who would challenge your perspective on mandating vaccines in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
    "html": '<div id="sliderThree"></div>' // Placeholder for the slider
},
{
    "type": "expression",
    "name": "vaccines-slider4",
    "visibleIf": "{topic-choice} = 'Item 5'",
    "title": "Using the slider, please rate your willingness to have a conversation with someone who is heavily invested in mandating vaccines in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
},
{
    "type": "html",
    "name": "vaccines-slider4-placeholder",
    "visibleIf": "{topic-choice} = 'Item 5'",
    "title": "Using the slider, please rate your willingness to have a conversation with someone who is heavily invested in mandating vaccines in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
    "html": '<div id="sliderFour"></div>' // Placeholder for the slider
},

{
    "type": "expression",
    "name": "criminal-slider1",
    "visibleIf": "{topic-choice} = 'Item 6'",
    "title": "Using the slider, please rate your willingness to have a conversation with someone who strongly disagrees with you about criminal justice reform in the U.S., where a score of 0 is absolute unwillingness to converse and 100 is absolute willingness to converse. A score of 50 is neutral.",
},
{
    "type": "html",
    "name": "criminal-slider1-placeholder",
    "visibleIf": "{topic-choice} = 'Item 6'",
    "title": "Using the slider, please rate your willingness to have a conversation with someone who strongly disagrees with you about criminal justice reform in the U.S., where a score of 0 is absolute unwillingness to converse and 100 is absolute willingness to converse. A score of 50 is neutral.",
    "html": '<div id="sliderOne"></div>' // Placeholder for the slider
},
{
    "type": "expression",
    "name": "criminal-slider2-placeholder",
    "visibleIf": "{topic-choice} = 'Item 6'",
    "title": "Using the slider, please rate your willingness to have a conversation with someone who would push against your views about criminal justice reform in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
},
{
    "type": "html",
    "name": "criminal-slider2-placeholder",
    "visibleIf": "{topic-choice} = 'Item 6'",
    "title": "Using the slider, please rate your willingness to have a conversation with someone who would push against your views about criminal justice reform in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
    "html": '<div id="sliderTwo"></div>' // Placeholder for the slider
},
{
    "type": "expression",
    "name": "criminal-slider3-placeholder",
    "visibleIf": "{topic-choice} = 'Item 6'",
    "title": "Using the slider, please rate your willingness to have a conversation with someone who would challenge your perspective on criminal justice reform in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
},
{
    "type": "html",
    "name": "criminal-slider3-placeholder",
    "visibleIf": "{topic-choice} = 'Item 6'",
    "title": "Using the slider, please rate your willingness to have a conversation with someone who would challenge your perspective on criminal justice reform in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
    "html": '<div id="sliderThree"></div>' // Placeholder for the slider
},
{
    "type": "expression",
    "name": "criminal-slider4",
    "visibleIf": "{topic-choice} = 'Item 6'",
    "title": "Using the slider, please rate your willingness to have a conversation with someone who is heavily invested in criminal justice reform in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
},
{
    "type": "html",
    "name": "criminal-slider4-placeholder",
    "visibleIf": "{topic-choice} = 'Item 6'",
    "title": "Using the slider, please rate your willingness to have a conversation with someone who is heavily invested in criminal justice reform in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
    "html": '<div id="sliderFour"></div>' // Placeholder for the slider
},

{
    "type": "expression",
    "name": "same-sex-slider1",
    "visibleIf": "{topic-choice} = 'Item 7'",
    "title": "Using the slider, please rate your willingness to have a conversation with someone who strongly disagrees with you about same-sex marriage in the U.S., where a score of 0 is absolute unwillingness to converse and 100 is absolute willingness to converse. A score of 50 is neutral.",
},
{
    "type": "html",
    "name": "same-sex-slider1-placeholder",
    "visibleIf": "{topic-choice} = 'Item 7'",
    "title": "Using the slider, please rate your willingness to have a conversation with someone who strongly disagrees with you about same-sex marriage in the U.S., where a score of 0 is absolute unwillingness to converse and 100 is absolute willingness to converse. A score of 50 is neutral.",
    "html": '<div id="sliderOne"></div>' // Placeholder for the slider
},
{
    "type": "expression",
    "name": "same-sex-slider2",
    "visibleIf": "{topic-choice} = 'Item 7'",
    "title": "Using the slider, please rate your willingness to have a conversation with someone who would push against your views about same-sex marriage in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
},
{
    "type": "html",
    "name": "same-sex-slider2-placeholder",
    "visibleIf": "{topic-choice} = 'Item 7'",
    "title": "Using the slider, please rate your willingness to have a conversation with someone who would push against your views about same-sex marriage in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
    "html": '<div id="sliderTwo"></div>' // Placeholder for the slider
},
{
    "type": "expression",
    "name": "same-sex-slider3",
    "visibleIf": "{topic-choice} = 'Item 7'",
    "title": "Using the slider, please rate your willingness to have a conversation with someone who would challenge your perspective on same-sex marriage in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
},
{
    "type": "html",
    "name": "same-sex-slider3-placeholder",
    "visibleIf": "{topic-choice} = 'Item 7'",
    "title": "Using the slider, please rate your willingness to have a conversation with someone who would challenge your perspective on same-sex marriage in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
    "html": '<div id="sliderThree"></div>' // Placeholder for the slider
},
{
    "type": "expression",
    "name": "same-sex-slider4",
    "visibleIf": "{topic-choice} = 'Item 7'",
    "title": "Using the slider, please rate your willingness to have a conversation with someone who is heavily invested in same-sex marriage in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
},
{
    "type": "html",
    "name": "same-sex-slider4-placeholder",
    "visibleIf": "{topic-choice} = 'Item 7'",
    "title": "Using the slider, please rate your willingness to have a conversation with someone who is heavily invested in same-sex marriage in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
    "html": '<div id="sliderFour"></div>' // Placeholder for the slider
},
{
    "type": "matrix",
    "name": "euthanasia-offending-reason",
    "visibleIf": "{topic-choice} = 'Item 1'",
    "title": "Imagine that you are asked to have a serious conversation about human euthanasia in the U.S. with a group of people. Please rate how much each of the following reasons might make you less willing to participate in the conversation.",
    "isRequired": false,
    "columns": [
        {
            "value": "Column 1",
            "text": "Disagree very strongly"
        },
        {
            "value": "Column 2",
            "text": "Disagree strongly"
        },
        {
            "value": "Column 3",
            "text": "Disagree somewhat"
        },
        {
            "value": "Column 4",
            "text": "Neither agree nor disagree"
        },
        {
            "value": "Column 5",
            "text": "Agree somewhat"
        },
        {
            "value": "Column 6",
            "text": "Agree strongly"
        },
        {
            "value": "Column 7",
            "text": "Agree very strongly"
        }
    ],
    "rows": [
        {
            "value": "Row 1",
            "text": "Do not want to offend someone"
        },
        {
            "value": "Row 2",
            "text": "Do not want to be offended by someone"
        },
        {
            "value": "Row 3",
            "text": "Do not want to be in an awkward, tense, or confrontational situation"
        },
        {
            "value": "Row 4",
            "text": "Do not want to deal with emotional distress or fatigue"
        },
        {
            "value": "Row 5",
            "text": "Do not want people judging me negatively or misunderstanding me"
        },
        {
            "value": "Row 6",
            "text": "Do not want to come off as ignorant or uneducated"
        },
        {
            "value": "Row 7",
            "text": "Previous negative experiences"
        },
        {
            "value": "Row 8",
            "text": "Do not want to incur social repercussions"
        },
        {
            "value": "Row 9",
            "text": "Afraid of feeling disempowered, unheard, or invalidated"
        },
        {
            "value": "Row 10",
            "text": "Afraid of feeling unsafe"
        },
    ]
},

{
    "type": "matrix",
    "name": "gender-offending-reason",
    "visibleIf": "{topic-choice} = 'Item 2'",
    "title": "Imagine that you are asked to have a serious conversation about gender inequality in the U.S. with a group of people. Please rate how much each of the following reasons might make you less willing to participate in the conversation.",
    "isRequired": false,
    "columns": [
        {
            "value": "Column 1",
            "text": "Disagree very strongly"
        },
        {
            "value": "Column 2",
            "text": "Disagree strongly"
        },
        {
            "value": "Column 3",
            "text": "Disagree somewhat"
        },
        {
            "value": "Column 4",
            "text": "Neither agree nor disagree"
        },
        {
            "value": "Column 5",
            "text": "Agree somewhat"
        },
        {
            "value": "Column 6",
            "text": "Agree strongly"
        },
        {
            "value": "Column 7",
            "text": "Agree very strongly"
        }
    ],
    "rows": [
        {
            "value": "Row 1",
            "text": "Do not want to offend someone"
        },
        {
            "value": "Row 2",
            "text": "Do not want to be offended by someone"
        },
        {
            "value": "Row 3",
            "text": "Do not want to be in an awkward, tense, or confrontational situation"
        },
        {
            "value": "Row 4",
            "text": "Do not want to deal with emotional distress or fatigue"
        },
        {
            "value": "Row 5",
            "text": "Do not want people judging me negatively or misunderstanding me"
        },
        {
            "value": "Row 6",
            "text": "Do not want to come off as ignorant or uneducated"
        },
        {
            "value": "Row 7",
            "text": "Previous negative experiences"
        },
        {
            "value": "Row 8",
            "text": "Do not want to incur social repercussions"
        },
        {
            "value": "Row 9",
            "text": "Afraid of feeling disempowered, unheard, or invalidated"
        },
        {
            "value": "Row 10",
            "text": "Afraid of feeling unsafe"
        },
    ]
},

{
    "type": "matrix",
    "name": "healthcare-offending-reason",
    "visibleIf": "{topic-choice} = 'Item 3'",
    "title": "Imagine that you are asked to have a serious conversation about the role of the U.S. government in healthcare with a group of people. Please rate how much each of the following reasons might make you less willing to participate in the conversation.",
    "isRequired": false,
    "columns": [
        {
            "value": "Column 1",
            "text": "Disagree very strongly"
        },
        {
            "value": "Column 2",
            "text": "Disagree strongly"
        },
        {
            "value": "Column 3",
            "text": "Disagree somewhat"
        },
        {
            "value": "Column 4",
            "text": "Neither agree nor disagree"
        },
        {
            "value": "Column 5",
            "text": "Agree somewhat"
        },
        {
            "value": "Column 6",
            "text": "Agree strongly"
        },
        {
            "value": "Column 7",
            "text": "Agree very strongly"
        }
    ],
    "rows": [
        {
            "value": "Row 1",
            "text": "Do not want to offend someone"
        },
        {
            "value": "Row 2",
            "text": "Do not want to be offended by someone"
        },
        {
            "value": "Row 3",
            "text": "Do not want to be in an awkward, tense, or confrontational situation"
        },
        {
            "value": "Row 4",
            "text": "Do not want to deal with emotional distress or fatigue"
        },
        {
            "value": "Row 5",
            "text": "Do not want people judging me negatively or misunderstanding me"
        },
        {
            "value": "Row 6",
            "text": "Do not want to come off as ignorant or uneducated"
        },
        {
            "value": "Row 7",
            "text": "Previous negative experiences"
        },
        {
            "value": "Row 8",
            "text": "Do not want to incur social repercussions"
        },
        {
            "value": "Row 9",
            "text": "Afraid of feeling disempowered, unheard, or invalidated"
        },
        {
            "value": "Row 10",
            "text": "Afraid of feeling unsafe"
        },
    ]
},

{
    "type": "matrix",
    "name": "bombing-offending-reason",
    "visibleIf": "{topic-choice} = 'Item 4'",
    "title": "Imagine that you are asked to have a serious conversation about the atomic bombings of Hiroshima and Nagasaki with a group of people. Please rate how much each of the following reasons might make you less willing to participate in the conversation.",
    "isRequired": false,
    "columns": [
        {
            "value": "Column 1",
            "text": "Disagree very strongly"
        },
        {
            "value": "Column 2",
            "text": "Disagree strongly"
        },
        {
            "value": "Column 3",
            "text": "Disagree somewhat"
        },
        {
            "value": "Column 4",
            "text": "Neither agree nor disagree"
        },
        {
            "value": "Column 5",
            "text": "Agree somewhat"
        },
        {
            "value": "Column 6",
            "text": "Agree strongly"
        },
        {
            "value": "Column 7",
            "text": "Agree very strongly"
        }
    ],
    "rows": [
        {
            "value": "Row 1",
            "text": "Do not want to offend someone"
        },
        {
            "value": "Row 2",
            "text": "Do not want to be offended by someone"
        },
        {
            "value": "Row 3",
            "text": "Do not want to be in an awkward, tense, or confrontational situation"
        },
        {
            "value": "Row 4",
            "text": "Do not want to deal with emotional distress or fatigue"
        },
        {
            "value": "Row 5",
            "text": "Do not want people judging me negatively or misunderstanding me"
        },
        {
            "value": "Row 6",
            "text": "Do not want to come off as ignorant or uneducated"
        },
        {
            "value": "Row 7",
            "text": "Previous negative experiences"
        },
        {
            "value": "Row 8",
            "text": "Do not want to incur social repercussions"
        },
        {
            "value": "Row 9",
            "text": "Afraid of feeling disempowered, unheard, or invalidated"
        },
        {
            "value": "Row 10",
            "text": "Afraid of feeling unsafe"
        },
    ]
},

{
    "type": "matrix",
    "name": "vaccines-offending-reason",
    "visibleIf": "{topic-choice} = 'Item 5'",
    "title": "Imagine that you are asked to have a serious conversation about mandating vaccines in the U.S. with a group of people. Please rate how much each of the following reasons might make you less willing to participate in the conversation.",
    "isRequired": false,
    "columns": [
        {
            "value": "Column 1",
            "text": "Disagree very strongly"
        },
        {
            "value": "Column 2",
            "text": "Disagree strongly"
        },
        {
            "value": "Column 3",
            "text": "Disagree somewhat"
        },
        {
            "value": "Column 4",
            "text": "Neither agree nor disagree"
        },
        {
            "value": "Column 5",
            "text": "Agree somewhat"
        },
        {
            "value": "Column 6",
            "text": "Agree strongly"
        },
        {
            "value": "Column 7",
            "text": "Agree very strongly"
        }
    ],
    "rows": [
        {
            "value": "Row 1",
            "text": "Do not want to offend someone"
        },
        {
            "value": "Row 2",
            "text": "Do not want to be offended by someone"
        },
        {
            "value": "Row 3",
            "text": "Do not want to be in an awkward, tense, or confrontational situation"
        },
        {
            "value": "Row 4",
            "text": "Do not want to deal with emotional distress or fatigue"
        },
        {
            "value": "Row 5",
            "text": "Do not want people judging me negatively or misunderstanding me"
        },
        {
            "value": "Row 6",
            "text": "Do not want to come off as ignorant or uneducated"
        },
        {
            "value": "Row 7",
            "text": "Previous negative experiences"
        },
        {
            "value": "Row 8",
            "text": "Do not want to incur social repercussions"
        },
        {
            "value": "Row 9",
            "text": "Afraid of feeling disempowered, unheard, or invalidated"
        },
        {
            "value": "Row 10",
            "text": "Afraid of feeling unsafe"
        },
    ]
},

{
    "type": "matrix",
    "name": "criminal-offending-reason",
    "visibleIf": "{topic-choice} = 'Item 6'",
    "title": "Imagine that you are asked to have a serious conversation about criminal justice reform in the U.S. with a group of people. Please rate how much each of the following reasons might make you less willing to participate in the conversation.",
    "isRequired": false,
    "columns": [
        {
            "value": "Column 1",
            "text": "Disagree very strongly"
        },
        {
            "value": "Column 2",
            "text": "Disagree strongly"
        },
        {
            "value": "Column 3",
            "text": "Disagree somewhat"
        },
        {
            "value": "Column 4",
            "text": "Neither agree nor disagree"
        },
        {
            "value": "Column 5",
            "text": "Agree somewhat"
        },
        {
            "value": "Column 6",
            "text": "Agree strongly"
        },
        {
            "value": "Column 7",
            "text": "Agree very strongly"
        }
    ],
    "rows": [
        {
            "value": "Row 1",
            "text": "Do not want to offend someone"
        },
        {
            "value": "Row 2",
            "text": "Do not want to be offended by someone"
        },
        {
            "value": "Row 3",
            "text": "Do not want to be in an awkward, tense, or confrontational situation"
        },
        {
            "value": "Row 4",
            "text": "Do not want to deal with emotional distress or fatigue"
        },
        {
            "value": "Row 5",
            "text": "Do not want people judging me negatively or misunderstanding me"
        },
        {
            "value": "Row 6",
            "text": "Do not want to come off as ignorant or uneducated"
        },
        {
            "value": "Row 7",
            "text": "Previous negative experiences"
        },
        {
            "value": "Row 8",
            "text": "Do not want to incur social repercussions"
        },
        {
            "value": "Row 9",
            "text": "Afraid of feeling disempowered, unheard, or invalidated"
        },
        {
            "value": "Row 10",
            "text": "Afraid of feeling unsafe"
        },
    ]
},

{
    "type": "matrix",
    "name": "same-sex-offending-reason",
    "visibleIf": "{topic-choice} = 'Item 7'",
    "title": "Imagine that you are asked to have a serious conversation about same-sex marriage in the U.S. with a group of people. Please rate how much each of the following reasons might make you less willing to participate in the conversation.",
    "isRequired": false,
    "columns": [
        {
            "value": "Column 1",
            "text": "Disagree very strongly"
        },
        {
            "value": "Column 2",
            "text": "Disagree strongly"
        },
        {
            "value": "Column 3",
            "text": "Disagree somewhat"
        },
        {
            "value": "Column 4",
            "text": "Neither agree nor disagree"
        },
        {
            "value": "Column 5",
            "text": "Agree somewhat"
        },
        {
            "value": "Column 6",
            "text": "Agree strongly"
        },
        {
            "value": "Column 7",
            "text": "Agree very strongly"
        }
    ],
    "rows": [
        {
            "value": "Row 1",
            "text": "Do not want to offend someone"
        },
        {
            "value": "Row 2",
            "text": "Do not want to be offended by someone"
        },
        {
            "value": "Row 3",
            "text": "Do not want to be in an awkward, tense, or confrontational situation"
        },
        {
            "value": "Row 4",
            "text": "Do not want to deal with emotional distress or fatigue"
        },
        {
            "value": "Row 5",
            "text": "Do not want people judging me negatively or misunderstanding me"
        },
        {
            "value": "Row 6",
            "text": "Do not want to come off as ignorant or uneducated"
        },
        {
            "value": "Row 7",
            "text": "Previous negative experiences"
        },
        {
            "value": "Row 8",
            "text": "Do not want to incur social repercussions"
        },
        {
            "value": "Row 9",
            "text": "Afraid of feeling disempowered, unheard, or invalidated"
        },
        {
            "value": "Row 10",
            "text": "Afraid of feeling unsafe"
        },
    ]
}
]

};
