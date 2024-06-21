var post_convo_survey_gender = {
            elements: [
                {
                    "type": "matrix",
                    "name": "gender-openmindedness",
                    "visibleIf": "{topic-choice} = 'Item 2'",
                    "title": "Regarding your experience conversing with the chat bot, how much do you agree or disagree with the following statements?",
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
                            "text": "I had little patience for arguments about gender inequality in the U.S. that I disagree with"
                        },
                        {
                            "value": "Row 2",
                            "text": "I avoided messages about gender inequality in the U.S. that I disagree with"
                        },
                        {
                            "value": "Row 3",
                            "text": "I believed it was a waste of time to pay attention to certain political ideas"
                        },
                        {
                            "value": "Row 4",
                            "text": "I was open to considering other political viewpoints about gender inequality in the U.S."
                        },
                        {
                            "value": "Row 5",
                            "text": "I considered as many different opinions as possible"
                        }
                    ]
                },
                {
                    "type": "comment",
                    "name": "gender-free-response",
                    "visibleIf": "{topic-choice} = 'Item 2'",
                    "title": "After your conversation with the chat bot, do you feel more willing to have a conversation with others about gender inequality in the U.S.? Please freely reflect in the space below.",
                    "isRequired": false
                },
                {
                    "type": "matrix",
                    "name": "gender-willing-to-converse-likert-post",
                    "visibleIf": "{topic-choice} = 'Item 2'",
                    "title": "Rate this conversation's effect on your willingness to converse with others about gender inequality in the U.S.",
                    "isRequired": false,
                    "choices": [
                        {
                            "value": "Item 1",
                            "text": "Much less willing"
                        },
                        {
                            "value": "Item 2",
                            "text": "Moderately less willing"
                        },
                        {
                            "value": "Item 3",
                            "text": "Somewhat less willing"
                        },
                        {
                            "value": "Item 4",
                            "text": "Neither more nor less willing"
                        },
                        {
                            "value": "Item 5",
                            "text": "Somewhat more willing"
                        },
                        {
                            "value": "Item 6",
                            "text": "Moderately more willing"
                        },
                        {
                            "value": "Item 7",
                            "text": "Much more willing"
                        }]
                },
                {
                    "type": "comment",
                    "name": "gender-what-affected-post",
                    "visibleIf": "{topic-choice} = 'Item 2'",
                    "title": "What parts of this conversation, if any, affected your willingness to talk with someone who has different views on gender inequality?",
                    "isRequired": false
                },
                {
                    "type": "comment",
                    "name": "gender-new-perspective-post",
                    "visibleIf": "{topic-choice} = 'Item 2'",
                    "title": "Throughout this conversation, were there any moments that opened you up to a new perspective about gender inequality in the U.S.? If so, what occurred in these moments? If not, what made you feel like the conversation was not productive?",
                    "isRequired": false
                },
                {
                    "type": "comment",
                    "name": "gender-still-contributes-post",
                    "visibleIf": "{topic-choice} = 'Item 2'",
                    "title": "What still contributes to your willingness or unwillingness to converse with others about gender inequality in the U.S.? Please freely reflect in the space below.",
                    "isRequired": false
                },
                {
                    "type": "matrix",
                    "name": "gender-polarization1-post",
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
                    "name": "gender-polarization2-post",
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
                    "type": "expression",
                    "name": "gender-slider1-post",
                    "visibleIf": "{topic-choice} = 'Item 2'",
                    "title": "Using the slider, please rate your willingness to have a conversation with someone who strongly disagrees with you about gender inequality in the U.S., where a score of 0 is absolute unwillingness to converse and 100 is absolute willingness to converse. A score of 50 is neutral.",
                },
                {
                    "type": "html",
                    "name": "gender-slider1-post-placeholder",
                    "visibleIf": "{topic-choice} = 'Item 2'",
                    "title": "Using the slider, please rate your willingness to have a conversation with someone who strongly disagrees with you about gender inequality in the U.S., where a score of 0 is absolute unwillingness to converse and 100 is absolute willingness to converse. A score of 50 is neutral.",
                    "html": '<div id="sliderOne"></div>' // Placeholder for the slider
                },
                {
                    "type": "expression",
                    "name": "gender-slider2-post",
                    "visibleIf": "{topic-choice} = 'Item 2'",
                    "title": "Using the slider, please rate your willingness to have a conversation with someone who would push against your views about gender inequality in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
                },
                {
                    "type": "html",
                    "name": "gender-slider2-post-placeholder",
                    "visibleIf": "{topic-choice} = 'Item 2'",
                    "title": "Using the slider, please rate your willingness to have a conversation with someone who would push against your views about gender inequality in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
                    "html": '<div id="sliderTwo"></div>' // Placeholder for the slider
                },
                {
                    "type": "expression",
                    "name": "gender-slider3-post",
                    "visibleIf": "{topic-choice} = 'Item 2'",
                    "title": "Using the slider, please rate your willingness to have a conversation with someone who would challenge your perspective on gender inequality in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
                },
                {
                    "type": "html",
                    "name": "gender-slider3-post-placeholder",
                    "visibleIf": "{topic-choice} = 'Item 2'",
                    "title": "Using the slider, please rate your willingness to have a conversation with someone who would challenge your perspective on gender inequality in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
                    "html": '<div id="sliderThree"></div>' // Placeholder for the slider
                },
                {
                    "type": "expression",
                    "name": "gender-slider4-post",
                    "visibleIf": "{topic-choice} = 'Item 2'",
                    "title": "Using the slider, please rate your willingness to have a conversation with someone who is heavily invested in gender inequality in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
                },
                {
                    "type": "html",
                    "name": "gender-slider4-post-placeholder",
                    "visibleIf": "{topic-choice} = 'Item 2'",
                    "title": "Using the slider, please rate your willingness to have a conversation with someone who is heavily invested in gender inequality in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
                    "html": '<div id="sliderFour"></div>' // Placeholder for the slider
                },
                {
                    "type": "matrix",
                    "name": "gender-reason-of-avoidance-post",
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
                    "type": "comment",
                    "name": "gender-other-willingness-post",
                    "visibleIf": "{topic-choice} = 'Item 2'",
                    "title": "What else contributes to your willingness or unwillingness to converse with others about gender inequality in the U.S.? Please freely reflect in the space below.",
                    "isRequired": false
                }]
        };