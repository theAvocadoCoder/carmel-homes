const formStepDetails = [
  {
    step: 1,
    inputs: [
      [
        {
          required() {return `Please input your ${this.label.toLowerCase()}`},
          type: "text",
          name: "firstName",
          label: "First Name",
          placeholder: "Ex. John",
        },
        {
          required() {return `Please input your ${this.label.toLowerCase()}`},
          type: "text",
          name: "lastName",
          label: "Last Name",
          placeholder: "Ex. Doe",
        },
      ],
      [
        {
          required() {return `Please input your ${this.label.toLowerCase()}`},
          type: "email",
          name: "emailAddress",
          label: "Email Address",
          placeholder: "youremail@address.com",
        },
        {
          required() {return `Please input your ${this.label.toLowerCase()}`},
          type: "tel",
          name: "phoneNumber",
          label: "Phone Number",
          placeholder: "Ex. 90534100",
        },
      ],
    ],
  },
  {
    step: 2,
    inputs: [
      {
        type: "select",
        name: "status",
        label: "What is your status?",
        options: [
          {
            value: "permanent_resident",
            text: "Permanent resident"
          },
          {
            value: "canadian_citizen",
            text: "Canadian citizen"
          },
          {
            value: "new_immigrant",
            text: "New Immigrant"
          },
          {
            value: "other",
            text: "Other"
          },
        ],
      },
      {
        type: "select",
        name: "sourceOfIncome",
        label: "Primary source of income?",
        options: [
          { value: "employed", text: "Employed" },
          { value: "self_employed_or_business_owner", text: "Self-employed/Business owner" },
          { value: "no_source", text: "El/No source" },
        ],
      },
      {
        type: "checkbox",
        name: "debtStatus",
        label: "Select all that apply to you",
        options: [
          {value: "consumer_proposal", label: "Consumer Proposal"},
          {value: "bankruptcy", label: "Bankruptcy"},
          {value: "foreclosure", label: "Foreclosure"},
          {value: "none", label: "None of the above"},
        ],
      },
      [
        {
          type: "number",
          name: "preTaxIncome",
          label: "Annual house income before tax?",
          placeholder: "Ex. 500,000",
          noLayoutChange: true,
        },
        {
          type: "number",
          name: "downpayment",
          label: "How much downpayment do you have?",
          placeholder: "Ex. 500,000",
          noLayoutChange: true,
        },
      ],
    ],
  },
  {
    step: 3,
    inputs: [
      {
        type: "select",
        name: "creditScore",
        label: "What is your credit score?",
        options: [
          {
            value: "below_500",
            text: "Below 500"
          },
          {
            value: "500-600",
            text: "500-600"
          },
          {
            value: "600-700",
            text: "600-700"
          },
          {
            value: "above_700",
            text: "Above 700"
          },
        ],
      },
      {
        type: "select",
        name: "maritalStatus",
        label: "What is your marital status?",
        options: [
          {
            value: "single",
            text: "Single"
          },
          {
            value: "married",
            text: "Married"
          },
          {
            value: "common_law",
            text: "Common Law"
          },
          {
            value: "divorced",
            text: "Divorced"
          },
        ],
      },
      {
        type: "select",
        name: "howDidYouHearAboutUs",
        label: "How did you hear about us?",
        options: [
          {
            value: "facebook",
            text: "Facebook"
          },
          {
            value: "instagram",
            text: "Instagram"
          },
          {
            value: "family_and_friends",
            text: "Family & Friends"
          },
          {
            value: "other",
            text: "Other"
          },
        ],
      },
      {
        type: "text",
        name: "otherHowDidYouHearAboutUs",
        label: "Other",
        placeholder: "Ex. LinkedIn",
        other: true,
      },
    ],
  },
  {
    step: 4,
    inputs: [
      [
        {
          required() {return `Please input your ${this.label.toLowerCase()}`},
          type: "select",
          name: "methodOfContact",
          label: "Preferred method of contact",
          options: [
            {
              value: "voice_call",
              text: "Voice Call"
            },
            {
              value: "sms",
              text: "SMS"
            },
            {
              value: "whatsapp_message",
              text: "WhatsApp Message"
            },
            {
              value: "email",
              text: "Email"
            },
          ],
        },
        {
          type: "date",
          name: "moveInDate",
          label: "Target move in date",
        },
      ],
      [
        {
          type: "select",
          name: "preferredProvince",
          label: "Select the province you want to live in",
          options: [
            {
              value: "ontario",
              text: "Ontario"
            },
            {
              value: "british_columbia",
              text: "British Columbia"
            },
            {
              value: "nova_scotia",
              text: "Nova Scotia"
            },
            {
              value: "northwest_territories",
              text: "Northwest Territories"
            },
            {
              value: "quebec",
              text: "Québec"
            },
            {
              value: "alberta",
              text: "Alberta"
            },
            {
              value: "manitoba",
              text: "Manitoba"
            },
            {
              value: "newfoundland_and_labrador",
              text: "Newfoundland and Labrador"
            },
            {
              value: "nunavut",
              text: "Nunavut"
            },
            {
              value: "atlantic_canada",
              text: "Atlantic Canada"
            },
            {
              value: "saskatchewan",
              text: "Saskatchewan"
            },
            {
              value: "new_brunswick",
              text: "New Brunswick"
            },
            {
              value: "prince_edward_island",
              text: "Prince Edward Island"
            },
            {
              value: "yukon",
              text: "Yukon"
            },
          ],
        },
        {
          type: "text",
          name: "preferredCities",
          label: "List all cities you would like to live in",
          placeholder: "Ex. Toronto, Ottawa, Hamilton",
        },
      ],
    ],
  },
];

export {formStepDetails};