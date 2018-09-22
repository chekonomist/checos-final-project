const brokersRows = [
  {
     "id": 1,
     "company_name": "Los Meros Meros",
     "company_description": "Nadie como nosotros para encontrar una propiedad",
     "contact_name": "Antonio",
     "contact_last_name": "Camoranessi",
     "mobile_number": 5566189097,
     "office_number": 5584888754,
     "web_page": "www.merosmeros.com"
  },
  {
     "id": 2,
     "company_name": "BBB",
     "company_description": "Only buenos, bonitos y baratos properties for you.",
     "contact_name": "Mia",
     "contact_last_name": "Hamm",
     "mobile_number": 5566158544,
     "office_number": 5581865585,
     "web_page": "www.bbb.com"
  },
  {
     "id": 3,
     "company_name": "True Real Estate",
     "company_description": "Find the real value with us.",
     "contact_name": "Sandra",
     "contact_last_name": "Beautyful",
     "mobile_number": 5566648360,
     "office_number": 5581977318,
     "web_page": "www.truerealestate.com"
  },
  {
     "id": 4,
     "company_name": "The Boring Company",
     "company_description": "We have a long list of commercial properties.",
     "contact_name": "Berenice",
     "contact_last_name": "Hakkinnen",
     "mobile_number": 5566702757,
     "office_number": 5592643768,
     "web_page": "www.booooring.com"
  },
  {
     "id": 5,
     "company_name": "Impressive Retail",
     "company_description": "You will not believe what we've got for you.",
     "contact_name": "Roberto",
     "contact_last_name": "Gomez-Junco",
     "mobile_number": 5566998293,
     "office_number": 5591792843,
     "web_page": "www.ir.com"
  },
  {
     "id": 6,
     "company_name": "Jems Properties",
     "company_description": "Find true jems with us.",
     "contact_name": "José",
     "contact_last_name": "Mourinho",
     "mobile_number": 5566401707,
     "office_number": 5585687555,
     "web_page": "www.jems.properties"
  },
  {
     "id": 7,
     "company_name": "Luxury RE",
     "company_description": "We only offer expensive properties.",
     "contact_name": "Jean",
     "contact_last_name": "Van Damm",
     "mobile_number": 5566391568,
     "office_number": 5583279420,
     "web_page": "www.le.com"
  },
  {
     "id": 8,
     "company_name": "The Best in Town",
     "company_description": "Find the best real estate properties with us.",
     "contact_name": "Travis",
     "contact_last_name": "Pastrana",
     "mobile_number": 5566385062,
     "office_number": 5596146968,
     "web_page": "www.thebest.com"
  },
  {
     "id": 9,
     "company_name": "The Few, The Proud Brokers",
     "company_description": "We are only two in the company, but we will make you happy.",
     "contact_name": "Serginho",
     "contact_last_name": "Conceiçao",
     "mobile_number": 5566350655,
     "office_number": 5584096543,
     "web_page": "www.few&proud.com"
  },
  {
     "id": 10,
     "company_name": "Bronco Real Estate",
     "company_description": "Looking for rustic properties? You're in the right place.",
     "contact_name": "Diego",
     "contact_last_name": "Maradona",
     "mobile_number": 5566706200,
     "office_number": 5595976001,
     "web_page": "www.bronco.properties"
  }
]
exports.seed = async function(knex, Promise) {
  // Deletes ALL existing entries
  await knex('brokers').del()
    .then(async function () {
      // Inserts seed entries
      return knex('brokers').insert(brokersRows);
    });

  await knex.raw(`SELECT setval('brokers_id_seq', MAX(id)) FROM brokers`)

  return knex
};
