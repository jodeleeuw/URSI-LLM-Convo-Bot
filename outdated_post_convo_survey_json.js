var post_convo_survey_json = {
            elements: [
                {
                    "type": "matrix",
                    "name": "rating-republicans-post",
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
                    "name": "rating-democrats-post",
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
                    "name": "interacting-with-republicans-post",
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
                    "name": "interacting-with-democrats-post",
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
                    "name": "euthanasia-openmindedness",
                    "visibleIf": "{topic-choice} = 'Item 1'",
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
                            "text": "I had little patience for arguments about human euthanasia in the U.S. that I disagree with"
                        },
                        {
                            "value": "Row 2",
                            "text": "I avoided messages about human euthanasia in the U.S. that I disagree with"
                        },
                        {
                            "value": "Row 3",
                            "text": "I believed it was a waste of time to pay attention to certain political ideas"
                        },
                        {
                            "value": "Row 4",
                            "text": "I was open to considering other political viewpoints about human euthanasia in the U.S."
                        },
                        {
                            "value": "Row 5",
                            "text": "I considered as many different opinions as possible"
                        }
                    ]
                },
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
                    "type": "matrix",
                    "name": "healthcare-openmindedness",
                    "visibleIf": "{topic-choice} = 'Item 3'",
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
                            "text": "I had little patience for arguments about the role of the government in U.S. healthcare that I disagree with"
                        },
                        {
                            "value": "Row 2",
                            "text": "I avoided messages about the role of the government in U.S. healthcare that I disagree with"
                        },
                        {
                            "value": "Row 3",
                            "text": "I believed it was a waste of time to pay attention to certain political ideas"
                        },
                        {
                            "value": "Row 4",
                            "text": "I was open to considering other political viewpoints about the role of the government in U.S. healthcare"
                        },
                        {
                            "value": "Row 5",
                            "text": "I considered as many different opinions as possible"
                        }
                    ]
                },

                {
                    "type": "matrix",
                    "name": "bombing-openmindedness",
                    "visibleIf": "{topic-choice} = 'Item 4'",
                    "title": "Regarding your experience conversing with the chat bot, how much do you agree or disagree with the following statements?",
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
                            "text": "I had little patience for arguments about the atomic bombings of Hiroshima and Nagasaki that I disagree with"
                        },
                        {
                            "value": "Row 2",
                            "text": "I avoided messages about the atomic bombings of Hiroshima and Nagasaki that I disagree with"
                        },
                        {
                            "value": "Row 3",
                            "text": "I believed it was a waste of time to pay attention to certain political ideas"
                        },
                        {
                            "value": "Row 4",
                            "text": "I was open to considering other political viewpoints about the atomic bombings of Hiroshima and Nagasaki"
                        },
                        {
                            "value": "Row 5",
                            "text": "I considered as many different opinions as possible"
                        }
                    ]
                },

                {
                    "type": "matrix",
                    "name": "vaccines-openmindedness",
                    "visibleIf": "{topic-choice} = 'Item 5'",
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
                            "text": "I had little patience for arguments about mandating vaccines in the U.S. that I disagree with"
                        },
                        {
                            "value": "Row 2",
                            "text": "I avoided messages about mandating vaccines in the U.S. that I disagree with"
                        },
                        {
                            "value": "Row 3",
                            "text": "I believed it was a waste of time to pay attention to certain political ideas"
                        },
                        {
                            "value": "Row 4",
                            "text": "I was open to considering other political viewpoints about mandating vaccines in the U.S."
                        },
                        {
                            "value": "Row 5",
                            "text": "I considered as many different opinions as possible"
                        }
                    ]
                },

                {
                    "type": "matrix",
                    "name": "criminal-openmindedness",
                    "visibleIf": "{topic-choice} = 'Item 6'",
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
                            "text": "I had little patience for arguments about criminal justice reform in the U.S. that I disagree with"
                        },
                        {
                            "value": "Row 2",
                            "text": "I avoided messages about criminal justice reform in the U.S. that I disagree with"
                        },
                        {
                            "value": "Row 3",
                            "text": "I believed it was a waste of time to pay attention to certain political ideas"
                        },
                        {
                            "value": "Row 4",
                            "text": "I was open to considering other political viewpoints about criminal justice reform in the U.S."
                        },
                        {
                            "value": "Row 5",
                            "text": "I considered as many different opinions as possible"
                        }
                    ]
                },

                {
                    "type": "matrix",
                    "name": "same-sex-openmindedness",
                    "visibleIf": "{topic-choice} = 'Item 7'",
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
                            "text": "I had little patience for arguments about same-sex marriage in the U.S. that I disagree with"
                        },
                        {
                            "value": "Row 2",
                            "text": "I avoided messages about same-sex marriage in the U.S. that I disagree with"
                        },
                        {
                            "value": "Row 3",
                            "text": "I believed it was a waste of time to pay attention to certain political ideas"
                        },
                        {
                            "value": "Row 4",
                            "text": "I was open to considering other political viewpoints about same-sex marriage in the U.S."
                        },
                        {
                            "value": "Row 5",
                            "text": "I considered as many different opinions as possible"
                        }
                    ]
                },
                {
                    "type": "comment",
                    "name": "euthanasia-free-response",
                    "visibleIf": "{topic-choice} = 'Item 1'",
                    "title": "After your conversation with the chat bot, do you feel more willing to have a conversation with others about human euthanasia in the U.S.? Please freely reflect in the space below.",
                    "isRequired": false
                },
                {
                    "type": "comment",
                    "name": "gender-free-response",
                    "visibleIf": "{topic-choice} = 'Item 2'",
                    "title": "After your conversation with the chat bot, do you feel more willing to have a conversation with others about gender inequality in the U.S.? Please freely reflect in the space below.",
                    "isRequired": false
                },
                {
                    "type": "comment",
                    "name": "healthcare-free-response",
                    "visibleIf": "{topic-choice} = 'Item 3'",
                    "title": "After your conversation with the chat bot, do you feel more willing to have a conversation with others about the role of the U.S. government in healthcare? Please freely reflect in the space below.",
                    "isRequired": false
                },
                {
                    "type": "comment",
                    "name": "bombing-free-response",
                    "visibleIf": "{topic-choice} = 'Item 4'",
                    "title": "After your conversation with the chat bot, do you feel more willing to have a conversation with others about the atomic bombings of Hiroshima and Nagasaki? Please freely reflect in the space below.",
                    "isRequired": false
                },
                {
                    "type": "comment",
                    "name": "vaccines-free-response",
                    "visibleIf": "{topic-choice} = 'Item 5'",
                    "title": "After your conversation with the chat bot, do you feel more willing to have a conversation with others about mandating vaccines in the U.S.? Please freely reflect in the space below.",
                    "isRequired": false
                },
                {
                    "type": "comment",
                    "name": "criminal-free-response",
                    "visibleIf": "{topic-choice} = 'Item 6'",
                    "title": "After your conversation with the chat bot, do you feel more willing to have a conversation with others about criminal justice reform in the U.S.? Please freely reflect in the space below.",
                    "isRequired": false
                },
                {
                    "type": "comment",
                    "name": "same-sex-free-response",
                    "visibleIf": "{topic-choice} = 'Item 7'",
                    "title": "After your conversation with the chat bot, do you feel more willing to have a conversation with others about same-sex marriage in the U.S.? Please freely reflect in the space below.",
                    "isRequired": false
                },
                {
                    "type": "radiogroup",
                    "name": "euthanasia-willing-to-converse-likert-post",
                    "visibleIf": "{topic-choice} = 'Item 1'",
                    "title": "Rate this conversation's effect on your willingness to converse with others about human euthanasia in the U.S.",
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
                    "type": "radiogroup",
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
                    "type": "radiogroup",
                    "name": "healthcare-willing-to-converse-likert-post",
                    "visibleIf": "{topic-choice} = 'Item 3'",
                    "title": "Rate this conversation's effect on your willingness to converse with others about the role of the U.S. government in healthcare",
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
                    "type": "radiogroup",
                    "name": "bombing-willing-to-converse-likert-post",
                    "visibleIf": "{topic-choice} = 'Item 4'",
                    "title": "Rate this conversation's effect on your willingness to converse about the atomic bombings of Hiroshima and Nagasaki with others",
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
                    "type": "radiogroup",
                    "name": "vaccines-willing-to-converse-likert-post",
                    "visibleIf": "{topic-choice} = 'Item 5'",
                    "title": "Rate this conversation's effect on your willingness to converse with others about mandating vaccines in the U.S.",
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
                    "type": "radiogroup",
                    "name": "criminal-willing-to-converse-likert-post",
                    "visibleIf": "{topic-choice} = 'Item 6'",
                    "title": "Rate this conversation's effect on your willingness to converse with others about criminal justice reform in the U.S.",
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
                    "type": "radiogroup",
                    "name": "same-sex-willing-to-converse-likert-post",
                    "visibleIf": "{topic-choice} = 'Item 7'",
                    "title": "Rate this conversation's effect on your willingness to converse with others about same-sex marriage in the U.S.",
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
                    "name": "euthanasia-what-affected-post",
                    "visibleIf": "{topic-choice} = 'Item 1'",
                    "title": "What parts of this conversation, if any, affected your willingness to talk with someone who has different views on euthanasia?",
                    "isRequired": false
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
                    "name": "healthcare-what-affected-post",
                    "visibleIf": "{topic-choice} = 'Item 3'",
                    "title": "What parts of this conversation, if any, affected your willingness to talk with someone who has different views on the role of the government in healthcare?",
                    "isRequired": false
                },
                {
                    "type": "comment",
                    "name": "bombing-what-affected-post",
                    "visibleIf": "{topic-choice} = 'Item 4'",
                    "title": "What parts of this conversation, if any, affected your willingness to talk with someone who has different views on the atomic bombings?",
                    "isRequired": false
                },
                {
                    "type": "comment",
                    "name": "vaccine-what-affected-post",
                    "visibleIf": "{topic-choice} = 'Item 5'",
                    "title": "What parts of this conversation, if any, affected your willingness to talk with someone who has different views on mandating vaccines in the U.S.?",
                    "isRequired": false
                },
                {
                    "type": "comment",
                    "name": "criminal-what-affected-post",
                    "visibleIf": "{topic-choice} = 'Item 6'",
                    "title": "What parts of this conversation, if any, affected your willingness to talk with someone who has different views on criminal justice reform in the U.S.?",
                    "isRequired": false
                },
                {
                    "type": "comment",
                    "name": "same-sex-what-affected-post",
                    "visibleIf": "{topic-choice} = 'Item 7'",
                    "title": "What parts of this conversation, if any, affected your willingness to talk with someone who has different views on same-sex marriage in the U.S.?",
                    "isRequired": false
                },
                {
                    "type": "comment",
                    "name": "euthanasia-new-perspective-post",
                    "visibleIf": "{topic-choice} = 'Item 1'",
                    "title": "Throughout this conversation, were there any moments that opened you up to a new perspective about human euthanasia? If so, what occurred in these moments? If not, what made you feel like the conversation was not productive?",
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
                    "name": "healthcare-new-perspective-post",
                    "visibleIf": "{topic-choice} = 'Item 3'",
                    "title": "Throughout this conversation, were there any moments that opened you up to a new perspective about the role of the U.S. government in healthcare? If so, what occurred in these moments? If not, what made you feel like the conversation was not productive?",
                    "isRequired": false
                },
                {
                    "type": "comment",
                    "name": "bombing-new-perspective-post",
                    "visibleIf": "{topic-choice} = 'Item 4'",
                    "title": "Throughout this conversation, were there any moments that opened you up to a new perspective about the atomic bombings? If so, what occurred in these moments? If not, what made you feel like the conversation was not productive?",
                    "isRequired": false
                },
                {
                    "type": "comment",
                    "name": "vaccines-new-perspective-post",
                    "visibleIf": "{topic-choice} = 'Item 5'",
                    "title": "Throughout this conversation, were there any moments that opened you up to a new perspective about mandating vaccines in the U.S.? If so, what occurred in these moments? If not, what made you feel like the conversation was not productive?",
                    "isRequired": false
                },
                {
                    "type": "comment",
                    "name": "criminal-new-perspective-post",
                    "visibleIf": "{topic-choice} = 'Item 6'",
                    "title": "Throughout this conversation, were there any moments that opened you up to a new perspective about criminal justice reform? If so, what occurred in these moments? If not, what made you feel like the conversation was not productive?",
                    "isRequired": false
                },
                {
                    "type": "comment",
                    "name": "same-sex-new-perspective-post",
                    "visibleIf": "{topic-choice} = 'Item 7'",
                    "title": "Throughout this conversation, were there any moments that opened you up to a new perspective about same-sex marriage in the U.S.? If so, what occurred in these moments? If not, what made you feel like the conversation was not productive?",
                    "isRequired": false
                },
                {
                    "type": "comment",
                    "name": "euthanasia-still-contributes-post",
                    "visibleIf": "{topic-choice} = 'Item 1'",
                    "title": "What still contributes to your willingness or unwillingness to converse with others about human euthanasia in the U.S.? Please freely reflect in the space below.",
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
                    "type": "comment",
                    "name": "healthcare-still-contributes-post",
                    "visibleIf": "{topic-choice} = 'Item 3'",
                    "title": "What still contributes to your willingness or unwillingness to converse with others about the role of the U.S. government in healthcare? Please freely reflect in the space below.",
                    "isRequired": false
                },
                {
                    "type": "comment",
                    "name": "bombing-still-contributes-post",
                    "visibleIf": "{topic-choice} = 'Item 4'",
                    "title": "What still contributes to your willingness or unwillingness to converse with others about the atomic bombings of Hiroshima and Nagasaki? Please freely reflect in the space below.",
                    "isRequired": false
                },
                {
                    "type": "comment",
                    "name": "vaccines-still-contributes-post",
                    "visibleIf": "{topic-choice} = 'Item 5'",
                    "title": "What still contributes to your willingness or unwillingness to converse with others about mandating vaccines in the U.S.? Please freely reflect in the space below.",
                    "isRequired": false
                },
                {
                    "type": "comment",
                    "name": "criminal-still-contributes-post",
                    "visibleIf": "{topic-choice} = 'Item 6'",
                    "title": "What still contributes to your willingness or unwillingness to converse with others about criminal justice reform in the U.S.? Please freely reflect in the space below.",
                    "isRequired": false
                },
                {
                    "type": "comment",
                    "name": "same-sex-still-contributes-post",
                    "visibleIf": "{topic-choice} = 'Item 7'",
                    "title": "What still contributes to your willingness or unwillingness to converse with others about same-sex marriage in the U.S.? Please freely reflect in the space below.",
                    "isRequired": false
                },
                {
                    "type": "matrix",
                    "name": "euthanasia-polarization1-post",
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
                    "name": "healthcare-polarization1-post",
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
                    "name": "vaccines-polarization1-post",
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
                    "name": "criminal-polarization1-post",
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
                    "name": "same-sex-polarization1-post",
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
                    "name": "euthanasia-polarization2-post",
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
                    "type": "matrix",
                    "name": "healthcare-polarization2-post",
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
                    "name": "bombing-polarization1-post",
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
                    "name": "vaccines-polarization2-post",
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
                    "name": "criminal-polarization2-post",
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
                    "name": "same-sex-polarization2-post",
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
                    "name": "euthanasia-slider1-post",
                    "visibleIf": "{topic-choice} = 'Item 1'",
                    "title": "Using the slider, please rate your willingness to have a conversation with someone who strongly disagrees with you about human euthanasia in the U.S., where a score of 0 is absolute unwillingness to converse and 100 is absolute willingness to converse. A score of 50 is neutral.",
                },
                {
                    "type": "html",
                    "name": "euthanasia-slider1-post-placeholder-placeholder",
                    "visibleIf": "{topic-choice} = 'Item 1'",
                    "title": "Using the slider, please rate your willingness to have a conversation with someone who strongly disagrees with you about human euthanasia in the U.S., where a score of 0 is absolute unwillingness to converse and 100 is absolute willingness to converse. A score of 50 is neutral.",
                    "html": '<div id="sliderOne"></div>' // Placeholder for the slider
                },
                {
                    "type": "expression",
                    "name": "euthanasia-slider2-post",
                    "visibleIf": "{topic-choice} = 'Item 1'",
                    "title": "Using the slider, please rate your willingness to have a conversation with someone who would push against your views about human euthanasia in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
                },
                {
                    "type": "html",
                    "name": "euthanasia-slider2-post-placeholder",
                    "visibleIf": "{topic-choice} = 'Item 1'",
                    "title": "Using the slider, please rate your willingness to have a conversation with someone who would push against your views about human euthanasia in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
                    "html": '<div id="sliderTwo"></div>' // Placeholder for the slider
                },
                {
                    "type": "expression",
                    "name": "euthanasia-slider3-post",
                    "visibleIf": "{topic-choice} = 'Item 1'",
                    "title": "Using the slider, please rate your willingness to have a conversation with someone who would challenge your perspective on human euthanasia in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
                },
                {
                    "type": "html",
                    "name": "euthanasia-slider3-post-placeholder",
                    "visibleIf": "{topic-choice} = 'Item 1'",
                    "title": "Using the slider, please rate your willingness to have a conversation with someone who would challenge your perspective on human euthanasia in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
                    "html": '<div id="sliderThree"></div>' // Placeholder for the slider
                },
                {
                    "type": "expression",
                    "name": "euthanasia-slider4-post",
                    "visibleIf": "{topic-choice} = 'Item 1'",
                    "title": "Using the slider, please rate your willingness to have a conversation with someone who is heavily invested in human euthanasia in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
                },
                {
                    "type": "html",
                    "name": "euthanasia-slider4-post-placeholder",
                    "visibleIf": "{topic-choice} = 'Item 1'",
                    "title": "Using the slider, please rate your willingness to have a conversation with someone who is heavily invested in human euthanasia in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
                    "html": '<div id="sliderFour"></div>' // Placeholder for the slider
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
                    "type": "expression",
                    "name": "healthcare-slider1-post",
                    "visibleIf": "{topic-choice} = 'Item 3'",
                    "title": "Using the slider, please rate your willingness to have a conversation with someone who strongly disagrees with you about the role of the government in U.S. healthcare, where a score of 0 is absolute unwillingness to converse and 100 is absolute willingness to converse. A score of 50 is neutral.",
                },
                {
                    "type": "html",
                    "name": "healthcare-slider1-post-placeholder",
                    "visibleIf": "{topic-choice} = 'Item 3'",
                    "title": "Using the slider, please rate your willingness to have a conversation with someone who strongly disagrees with you about the role of the government in U.S. healthcare, where a score of 0 is absolute unwillingness to converse and 100 is absolute willingness to converse. A score of 50 is neutral.",
                    "html": '<div id="sliderOne"></div>' // Placeholder for the slider
                },
                {
                    "type": "expression",
                    "name": "healthcare-slider2-post",
                    "visibleIf": "{topic-choice} = 'Item 3'",
                    "title": "Using the slider, please rate your willingness to have a conversation with someone who would push against your views about the role of the government in U.S. healthcare, where 0 is absolute unwillingness and 100 is absolute willingness.",
                },
                {
                    "type": "html",
                    "name": "healthcare-slider2-post-placeholder",
                    "visibleIf": "{topic-choice} = 'Item 3'",
                    "title": "Using the slider, please rate your willingness to have a conversation with someone who would push against your views about the role of the government in U.S. healthcare, where 0 is absolute unwillingness and 100 is absolute willingness.",
                    "html": '<div id="sliderTwo"></div>' // Placeholder for the slider
                },
                {
                    "type": "expression",
                    "name": "healthcare-slider3-post",
                    "visibleIf": "{topic-choice} = 'Item 3'",
                    "title": "Using the slider, please rate your willingness to have a conversation with someone who would challenge your perspective on the role of the government in U.S. healthcare, where 0 is absolute unwillingness and 100 is absolute willingness.",
                },
                {
                    "type": "html",
                    "name": "healthcare-slider3-post-placeholder",
                    "visibleIf": "{topic-choice} = 'Item 3'",
                    "title": "Using the slider, please rate your willingness to have a conversation with someone who would challenge your perspective on the role of the government in U.S. healthcare, where 0 is absolute unwillingness and 100 is absolute willingness.",
                    "html": '<div id="sliderThree"></div>' // Placeholder for the slider
                },
                {
                    "type": "expression",
                    "name": "healthcare-slider4-post",
                    "visibleIf": "{topic-choice} = 'Item 3'",
                    "title": "Using the slider, please rate your willingness to have a conversation with someone who is heavily invested in the role of the government in U.S. healthcare, where 0 is absolute unwillingness and 100 is absolute willingness.",
                },
                {
                    "type": "html",
                    "name": "healthcare-slider4-post-placeholder",
                    "visibleIf": "{topic-choice} = 'Item 3'",
                    "title": "Using the slider, please rate your willingness to have a conversation with someone who is heavily invested in the role of the government in U.S. healthcare, where 0 is absolute unwillingness and 100 is absolute willingness.",
                    "html": '<div id="sliderFour"></div>' // Placeholder for the slider
                },

                {
                    "type": "expression",
                    "name": "bombing-slider1-post",
                    "visibleIf": "{topic-choice} = 'Item 4'",
                    "title": "Using the slider, please rate your willingness to have a conversation with someone who strongly disagrees with you about the atomic bombings of Hiroshima and Nagasaki, where a score of 0 is absolute unwillingness to converse and 100 is absolute willingness to converse. A score of 50 is neutral.",
                },
                {
                    "type": "html",
                    "name": "bombing-slider1-post-placeholder",
                    "visibleIf": "{topic-choice} = 'Item 4'",
                    "title": "Using the slider, please rate your willingness to have a conversation with someone who strongly disagrees with you about the atomic bombings of Hiroshima and Nagasaki, where a score of 0 is absolute unwillingness to converse and 100 is absolute willingness to converse. A score of 50 is neutral.",
                    "html": '<div id="sliderOne"></div>' // Placeholder for the slider
                },
                {
                    "type": "expression",
                    "name": "bombing-slider2-post",
                    "visibleIf": "{topic-choice} = 'Item 4'",
                    "title": "Using the slider, please rate your willingness to have a conversation with someone who would push against your views about the atomic bombings of Hiroshima and Nagasaki, where 0 is absolute unwillingness and 100 is absolute willingness.",
                },
                {
                    "type": "html",
                    "name": "bombing-slider2-post-placeholder",
                    "visibleIf": "{topic-choice} = 'Item 4'",
                    "title": "Using the slider, please rate your willingness to have a conversation with someone who would push against your views about the atomic bombings of Hiroshima and Nagasaki, where 0 is absolute unwillingness and 100 is absolute willingness.",
                    "html": '<div id="sliderTwo"></div>' // Placeholder for the slider
                },
                {
                    "type": "expression",
                    "name": "bombing-slider3-post",
                    "visibleIf": "{topic-choice} = 'Item 4'",
                    "title": "Using the slider, please rate your willingness to have a conversation with someone who would challenge your perspective on the atomic bombings of Hiroshima and Nagasaki, where 0 is absolute unwillingness and 100 is absolute willingness.",
                },
                {
                    "type": "html",
                    "name": "bombing-slider3-post-placeholder",
                    "visibleIf": "{topic-choice} = 'Item 4'",
                    "title": "Using the slider, please rate your willingness to have a conversation with someone who would challenge your perspective on the atomic bombings of Hiroshima and Nagasaki, where 0 is absolute unwillingness and 100 is absolute willingness.",
                    "html": '<div id="sliderThree"></div>' // Placeholder for the slider
                },
                {
                    "type": "expression",
                    "name": "bombing-slider4-post",
                    "visibleIf": "{topic-choice} = 'Item 4'",
                    "title": "Using the slider, please rate your willingness to have a conversation with someone who is heavily invested in the atomic bombings of Hiroshima and Nagasaki, where 0 is absolute unwillingness and 100 is absolute willingness.",
                },
                {
                    "type": "html",
                    "name": "bombing-slider4-post-placeholder",
                    "visibleIf": "{topic-choice} = 'Item 4'",
                    "title": "Using the slider, please rate your willingness to have a conversation with someone who is heavily invested in the atomic bombings of Hiroshima and Nagasaki, where 0 is absolute unwillingness and 100 is absolute willingness.",
                    "html": '<div id="sliderFour"></div>' // Placeholder for the slider
                },

                {
                    "type": "expression",
                    "name": "vaccines-slider1-post",
                    "visibleIf": "{topic-choice} = 'Item 5'",
                    "title": "Using the slider, please rate your willingness to have a conversation with someone who strongly disagrees with you about mandating vaccines in the U.S., where a score of 0 is absolute unwillingness to converse and 100 is absolute willingness to converse. A score of 50 is neutral.",
                },
                {
                    "type": "html",
                    "name": "vaccines-slider1-post-placeholder",
                    "visibleIf": "{topic-choice} = 'Item 5'",
                    "title": "Using the slider, please rate your willingness to have a conversation with someone who strongly disagrees with you about mandating vaccines in the U.S., where a score of 0 is absolute unwillingness to converse and 100 is absolute willingness to converse. A score of 50 is neutral.",
                    "html": '<div id="sliderOne"></div>' // Placeholder for the slider
                },
                {
                    "type": "expression",
                    "name": "vaccines-slider2-post",
                    "visibleIf": "{topic-choice} = 'Item 5'",
                    "title": "Using the slider, please rate your willingness to have a conversation with someone who would push against your views about mandating vaccines in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
                },
                {
                    "type": "html",
                    "name": "vaccines-slider2-post-placeholder",
                    "visibleIf": "{topic-choice} = 'Item 5'",
                    "title": "Using the slider, please rate your willingness to have a conversation with someone who would push against your views about mandating vaccines in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
                    "html": '<div id="sliderTwo"></div>' // Placeholder for the slider
                },
                {
                    "type": "expression",
                    "name": "vaccines-slider3-post",
                    "visibleIf": "{topic-choice} = 'Item 5'",
                    "title": "Using the slider, please rate your willingness to have a conversation with someone who would challenge your perspective on mandating vaccines in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
                },
                {
                    "type": "html",
                    "name": "vaccines-slider3-post-placeholder",
                    "visibleIf": "{topic-choice} = 'Item 5'",
                    "title": "Using the slider, please rate your willingness to have a conversation with someone who would challenge your perspective on mandating vaccines in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
                    "html": '<div id="sliderThree"></div>' // Placeholder for the slider
                },
                {
                    "type": "expression",
                    "name": "vaccines-slider4-post",
                    "visibleIf": "{topic-choice} = 'Item 5'",
                    "title": "Using the slider, please rate your willingness to have a conversation with someone who is heavily invested in mandating vaccines in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
                },
                {
                    "type": "html",
                    "name": "vaccines-slider4-post-placeholder",
                    "visibleIf": "{topic-choice} = 'Item 5'",
                    "title": "Using the slider, please rate your willingness to have a conversation with someone who is heavily invested in mandating vaccines in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
                    "html": '<div id="sliderFour"></div>' // Placeholder for the slider
                },

                {
                    "type": "expression",
                    "name": "criminal-slider1-post",
                    "visibleIf": "{topic-choice} = 'Item 6'",
                    "title": "Using the slider, please rate your willingness to have a conversation with someone who strongly disagrees with you about criminal justice reform in the U.S., where a score of 0 is absolute unwillingness to converse and 100 is absolute willingness to converse. A score of 50 is neutral.",
                },
                {
                    "type": "html",
                    "name": "criminal-slider1-post-placeholder",
                    "visibleIf": "{topic-choice} = 'Item 6'",
                    "title": "Using the slider, please rate your willingness to have a conversation with someone who strongly disagrees with you about criminal justice reform in the U.S., where a score of 0 is absolute unwillingness to converse and 100 is absolute willingness to converse. A score of 50 is neutral.",
                    "html": '<div id="sliderOne"></div>' // Placeholder for the slider
                },
                {
                    "type": "expression",
                    "name": "criminal-slider2-post",
                    "visibleIf": "{topic-choice} = 'Item 6'",
                    "title": "Using the slider, please rate your willingness to have a conversation with someone who would push against your views about criminal justice reform in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
                },
                {
                    "type": "html",
                    "name": "criminal-slider2-post-placeholder",
                    "visibleIf": "{topic-choice} = 'Item 6'",
                    "title": "Using the slider, please rate your willingness to have a conversation with someone who would push against your views about criminal justice reform in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
                    "html": '<div id="sliderTwo"></div>' // Placeholder for the slider
                },
                {
                    "type": "expression",
                    "name": "criminal-slider3-post",
                    "visibleIf": "{topic-choice} = 'Item 6'",
                    "title": "Using the slider, please rate your willingness to have a conversation with someone who would challenge your perspective on criminal justice reform in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
                },
                {
                    "type": "html",
                    "name": "criminal-slider3-post-placeholder",
                    "visibleIf": "{topic-choice} = 'Item 6'",
                    "title": "Using the slider, please rate your willingness to have a conversation with someone who would challenge your perspective on criminal justice reform in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
                    "html": '<div id="sliderThree"></div>' // Placeholder for the slider
                },
                {
                    "type": "expression",
                    "name": "criminal-slider4-post",
                    "visibleIf": "{topic-choice} = 'Item 6'",
                    "title": "Using the slider, please rate your willingness to have a conversation with someone who is heavily invested in criminal justice reform in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
                },
                {
                    "type": "html",
                    "name": "criminal-slider4-post-placeholder",
                    "visibleIf": "{topic-choice} = 'Item 6'",
                    "title": "Using the slider, please rate your willingness to have a conversation with someone who is heavily invested in criminal justice reform in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
                    "html": '<div id="sliderFour"></div>' // Placeholder for the slider
                },

                {
                    "type": "expression",
                    "name": "same-sex-slider1-post",
                    "visibleIf": "{topic-choice} = 'Item 7'",
                    "title": "Using the slider, please rate your willingness to have a conversation with someone who strongly disagrees with you about same-sex marriage in the U.S., where a score of 0 is absolute unwillingness to converse and 100 is absolute willingness to converse. A score of 50 is neutral.",
                },
                {
                    "type": "html",
                    "name": "same-sex-slider1-post-placeholder",
                    "visibleIf": "{topic-choice} = 'Item 7'",
                    "title": "Using the slider, please rate your willingness to have a conversation with someone who strongly disagrees with you about same-sex marriage in the U.S., where a score of 0 is absolute unwillingness to converse and 100 is absolute willingness to converse. A score of 50 is neutral.",
                    "html": '<div id="sliderOne"></div>' // Placeholder for the slider
                },
                {
                    "type": "expression",
                    "name": "same-sex-slider2-post",
                    "visibleIf": "{topic-choice} = 'Item 7'",
                    "title": "Using the slider, please rate your willingness to have a conversation with someone who would push against your views about same-sex marriage in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
                },
                {
                    "type": "html",
                    "name": "same-sex-slider2-post-placeholder",
                    "visibleIf": "{topic-choice} = 'Item 7'",
                    "title": "Using the slider, please rate your willingness to have a conversation with someone who would push against your views about same-sex marriage in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
                    "html": '<div id="sliderTwo"></div>' // Placeholder for the slider
                },
                {
                    "type": "expression",
                    "name": "same-sex-slider3-post",
                    "visibleIf": "{topic-choice} = 'Item 7'",
                    "title": "Using the slider, please rate your willingness to have a conversation with someone who would challenge your perspective on same-sex marriage in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
                },
                {
                    "type": "html",
                    "name": "same-sex-slider3-post-placeholder",
                    "visibleIf": "{topic-choice} = 'Item 7'",
                    "title": "Using the slider, please rate your willingness to have a conversation with someone who would challenge your perspective on same-sex marriage in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
                    "html": '<div id="sliderThree"></div>' // Placeholder for the slider
                },
                {
                    "type": "expression",
                    "name": "same-sex-slider4-post",
                    "visibleIf": "{topic-choice} = 'Item 7'",
                    "title": "Using the slider, please rate your willingness to have a conversation with someone who is heavily invested in same-sex marriage in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
                },
                {
                    "type": "html",
                    "name": "same-sex-slider4-post-placeholder",
                    "visibleIf": "{topic-choice} = 'Item 7'",
                    "title": "Using the slider, please rate your willingness to have a conversation with someone who is heavily invested in same-sex marriage in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
                    "html": '<div id="sliderFour"></div>' // Placeholder for the slider
                },
                {
                    "type": "matrix",
                    "name": "euthanasia-reason-of-avoidance-post",
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
                    "type": "matrix",
                    "name": "healthcare-reason-of-avoidance-post",
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
                    "name": "bombing-reason-of-avoidance-post",
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
                    "name": "vaccines-reason-of-avoidance-post",
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
                    "name": "criminal-reason-of-avoidance-post",
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
                    "name": "same-sex-reason-of-avoidance-post",
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
                },
                {
                    "type": "comment",
                    "name": "euthanasia-other-willingness-post",
                    "visibleIf": "{topic-choice} = 'Item 1'",
                    "title": "What else contributes to your willingness or unwillingness to converse with others about human euthanasia in the U.S.? Please freely reflect in the space below.",
                    "isRequired": false
                },
                {
                    "type": "comment",
                    "name": "gender-other-willingness-post",
                    "visibleIf": "{topic-choice} = 'Item 2'",
                    "title": "What else contributes to your willingness or unwillingness to converse with others about gender inequality in the U.S.? Please freely reflect in the space below.",
                    "isRequired": false
                },
                {
                    "type": "comment",
                    "name": "healthcare-other-willingness-post",
                    "visibleIf": "{topic-choice} = 'Item 3'",
                    "title": "What else contributes to your willingness or unwillingness to converse with others about the role of the U.S. government in healthcare? Please freely reflect in the space below.",
                    "isRequired": false
                },
                {
                    "type": "comment",
                    "name": "bombing-other-willingness-post",
                    "visibleIf": "{topic-choice} = 'Item 4'",
                    "title": "What else contributes to your willingness or unwillingness to converse with others about the atomic bombings of Hiroshima and Nagasaki? Please freely reflect in the space below.",
                    "isRequired": false
                },
                {
                    "type": "comment",
                    "name": "vaccines-other-willingness-post",
                    "visibleIf": "{topic-choice} = 'Item 5'",
                    "title": "What else contributes to your willingness or unwillingness to converse with others about mandating vaccines in the U.S.? Please freely reflect in the space below.",
                    "isRequired": false
                },
                {
                    "type": "comment",
                    "name": "criminal-other-willingness-post",
                    "visibleIf": "{topic-choice} = 'Item 6'",
                    "title": "What else contributes to your willingness or unwillingness to converse with others about criminal justice reform in the U.S.? Please freely reflect in the space below.",
                    "isRequired": false
                },
                {
                    "type": "comment",
                    "name": "same-sex-other-willingness-post",
                    "visibleIf": "{topic-choice} = 'Item 7'",
                    "title": "What else contributes to your willingness or unwillingness to converse with others about same-sex marriage in the U.S.? Please freely reflect in the space below.",
                    "isRequired": false
                }]
        };