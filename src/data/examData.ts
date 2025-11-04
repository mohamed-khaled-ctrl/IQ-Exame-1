export interface QuestionItem {
  id: number;
  question: string;
  code?: string;
  language?: string;
  options: string[];
  // data file uses snake_case "correct_answer" and sometimes an array of indices
  correct_answer: number | number[];
  explanation?: string;
}

export interface Exam {
  id: number;
  examName: string;
  questions: QuestionItem[];
}

/* Keep the original data but type it as Exam[] so the shape matches the interfaces above */
export const examQuestions: Exam[] = [
  {
    "id": 1,
    "examName": "IQ Test 1",
    "questions": [
      {
    "id": 1,
    "question": "Miss. Sutha Laxmi. 17, Ashwathakatti Road, Visweshwarapuram, Bangalore - 560004",
    "options": [
      "Miss. Sutha Laxmi 17, Ashwathakatti Road, Viswashwarapuram, Bangalore - 560004",
      "Miss. Sutha Laxmi, 17, Ashwathakatti Road, Visweshwarapuram, Bangalore - 560004",
      "Miss. Sutha Laxrni, 17, Ashwathakatti Road, Visweshwarapuram. Bangalore - 560004",
      "Miss. Sutha Laxme, 17, Ashwathakatti Road. Visweshwarapuram, Bangalore – 560004"
    ],
    "correct_answer": 2
  },
  {
    "id": 2,
    "question": "Anil Santhosh Kumar, 3 West Club Road, Secunderabad-.560003",
    "options": [
      "Anil Santhosh Kumar, 3 West Club Road, Secunderabaad-560003",
      "Anil Santhosh Kumar, 30 West Club Road, Secunderabad-560003",
      "Anil Santosh Kumar, 3 West Club Road, Secunderabad-560003",
      "Anil Santhosh Kumar, 3 West Club Road, Secunderabad-560003"
    ],
    "correct_answer": 4
  },
  {
    "id": 3,
    "question": "Which of the following addresses is not similar to others?",
    "options": [
      "Abhiram, Susarla 50-50-1 , TPT Colony Seethanager",
      "Abhiram, Susarla 50-50-1, TPT Colony Seethanagar",
      "Abhiram, Susarla 50-50-1, TPT Colony Seethanagar",
      "Abhiram, Susarla 50-50-1, TPT Colony Seethanagar"
    ],
    "correct_answer": 1
  },
  {
    "id": 4,
    "question": "Which of the two addresses below are exactly similar?",
    "options": [
      "1 and 3",
      "2 and 4",
      "3 and 2",
      "4 and 1"
    ],
    "correct_answer": 2
  },
  {
    "id": 5,
    "question": "Washington 27th March 1943",
    "options": [
      "Washingtan 27th March 1943",
      "Washington 27th March 1493",
      "Washington 27th March 1943",
      "Washington 27 March 1943"
    ],
    "correct_answer": 3
  },
  {
    "id": 6,
    "question": "Bhuvaneswar. P.O. 10th Sept. 1787",
    "options": [
      "Bhuvaneswar, P.O. 10th September 1787",
      "Bhuvaneshwar, P.O. 10th Sept. 1787",
      "Bhuvaneswar, P.O. 10th Sept. 1787",
      "Bbuvaneswar, P.O. 10th Sept. 1987"
    ],
    "correct_answer": 3
  },
  {
    "id": 7,
    "question": "Bangalore Cantonment 8 Dece 1217",
    "options": [
      "Bangalore Cantonment 8 Dece 1218",
      "Bangalore Cantonment 8th Dec 1217",
      "Bangalore Cantonment 8 Dece 1217",
      "Bangalore Cantonment 8 Dec 1217"
    ],
    "correct_answer": 3
  },
  {
    "id": 8,
    "question": "Thiruvankulam 17th January 1942",
    "options": [
      "Thiruankulam 17th January 1942",
      "Thiruvankulan 17th January 1942",
      "Thiruvankulam 17th January 1942",
      "Thiruvankulam 17 January 1924"
    ],
    "correct_answer": 3
  },
  {
    "id": 9,
    "question": "Visakhapatnam 5th September, 1990 (Choose 2 same)",
    "options": [
      "Visakhapatnam 5th September, 1990",
      "Visakhapatnam 5 September, 1990",
      "Visakhapatnam 5th September, 1909",
      "Visakhapatnam 5th September, 1990"
    ],
    "correct_answer": [1, 4]
  },
  {
    "id": 10,
    "question": "21st November 1643 Chowringhee Road.",
    "options": [
      "21 November 1643, Cbowringhee Road",
      "21st Nobember 1643, Chawringhee Road",
      "21st November 1643, Chowringhee Road",
      "21st November 1634, Chowringhee Road"
    ],
    "correct_answer": 3
  },
  {
    "id": 11,
    "question": "Rupnarainpur 27th, December, 1956",
    "options": [
      "Rupanarainpur 27th, December, 1956",
      "Rupnarainpura 27th, December 1956",
      "Rupnarainpur 27, December 1956",
      "Rupnarainpur 27th, December, 1956"
    ],
    "correct_answer": 4
  },
  {
    "id": 12,
    "question": "Kozhencherry 17th August 1786",
    "options": [
      "Kozhencherry 17th August 1786",
      "Kozhencherry 17 August 1786",
      "Kozhencherry 17th August 1768",
      "Kozhencherry 17th August 1746"
    ],
    "correct_answer": 1
  },
  {
    "id": 13,
    "question": "Himanshu Govil 13/72, Bapal Lane Hoshangabad – 36087",
    "options": [
      "Himanshu Govil 13/72, Bapal Lane Hoshangabad - 36087",
      "Himanshu Govil 13/72, Bapal Hoshangabad - 36087",
      "Himanshu Govil 13/72, Bapal Street Hoshangabad - 36087",
      "Himanshu Govil 13/72, Bapal Lane Hossangabad – 36087"
    ],
    "correct_answer": 1
  },
  {
    "id": 14,
    "question": "Mr. Ray Mohan, Kedar Nath Ram Nath & Co. Meerut, India 6955132",
    "options": [
      "Mr. Ray Mohan, Kedar Nath Ram Nath & Co. Meerut, lndia 6955132",
      "Mr. Rey Mohan, Kedar Nath Ram Nath & Co. Meerut. India 6955132",
      "Mr. Ray Mohan, Kadar Nath Ram Nath & Co. Meerut, India 6955132",
      "Mr. Ray Mohan, Kedar Nath Ram Nath & Co. Meerut, lndia 695532"
    ],
    "correct_answer": 1
  },
  {
    "id": 15,
    "question": "Dr. D. Raja Ganesan 3/27 Seventh Are Malyands, Australia WA 6051",
    "options": [
      "Dr. D. Raja Ganesan 3/27 Seventh Are Malyands. Australia WA 6051",
      "Dr. D. Raja Ganesen 3/27 Seventh Are Malyands. Australia WA 6051",
      "Dr. D. Raja Ganescn 3/27 Seventh Are Malyands. Australia WA 6051",
      "Dr. D. Raja Ganesan 3/23 Seventh Are Maylands. Australia WA 6015"
    ],
    "correct_answer": 1
  },
  {
    "id": 16,
    "question": "Indira Eshwarappa Mandi Merchant Bimasamudra Chitradurga",
    "options": [
      "Indira Eshwarapa Mandi Merchant Bimasamudra Chitradurga",
      "Indira Eshwarappa Mandi Merchant Bimasamudra Chitradurga",
      "India Eshwarappa Mandi Merchant Beemasamudra Chitradurga",
      "India Eshwarapa Mandi Merchant Beemasamudra Chitradurga"
    ],
    "correct_answer": 2
  },
  {
    "id": 17,
    "question": "Two numbers are respectively 20% and 50% more than a third number. The ratio of the two numbers is:",
    "options": ["2 : 5", "3 : 5", "4 : 5", "6 : 7"],
    "correct_answer": 3
  },
  {
    "id": 18,
    "question": "The fourth proportional to 5, 8, 15 is:",
    "options": ["18", "24", "19", "20"],
    "correct_answer": 2
  },
  {
    "id": 19,
    "question": "Two numbers are in the ratio 3 : 5. If 9 is subtracted from each, the new numbers are in the ratio 12 : 23. The smaller number is:",
    "options": ["27", "33", "49", "55"],
    "correct_answer": 2
  },
  {
    "id": 20,
    "question": "The average of 20 numbers is zero. Of them, at the most, how many may be greater than zero?",
    "options": ["0", "1", "10", "19"],
    "correct_answer": 4
  },
  {
    "id": 21,
    "question": "The average monthly income of P and Q is Rs. 5050. The average monthly income of Q and R is Rs. 6250 and the average monthly income of P and R is Rs. 5200. The monthly income of P is:",
    "options": ["3500", "4000", "4050", "5000"],
    "correct_answer": 2
  },
  {
    "id": 22,
    "question": "The average age of husband, wife and their child 3 years ago was 27 years and that of wife and the child 5 years ago was 20 years. The present age of the husband is:",
    "options": ["35 years", "40 years", "50 years", "None of these"],
    "correct_answer": 2
  },
  {
    "id": 23,
    "question": "A library has an average of 510 visitors on Sundays and 240 on other days. The average number of visitors per day in a month of 30 days beginning with a Sunday is:",
    "options": ["250", "276", "280", "285"],
    "correct_answer": 4
  },
  {
    "id": 24,
    "question": "In a certain store, the profit is 320% of the cost. If the cost increases by 25% but the selling price remains constant, approximately what percentage of the selling price is the profit?",
    "options": ["30%", "70%", "100%", "250%"],
    "correct_answer": 2
  },
  {
    "id": 25,
    "question": "A vendor bought toffees at 6 for a rupee. How many for a rupee must he sell to gain 20%?",
    "options": ["3", "4", "5", "6"],
    "correct_answer": 3
  },
  {
    "id": 26,
    "question": "A man buys a cycle for Rs. 1400 and sells it at a loss of 15%. What is the selling price of the cycle?",
    "options": ["Rs. 1090", "Rs. 1160", "Rs. 1190", "Rs. 1202"],
    "correct_answer": 3
  },
  {
    "id": 27,
    "question": "On selling 17 balls at Rs. 720, there is a loss equal to the cost price of 5 balls. The cost price of a ball is:",
    "options": ["Rs. 45", "Rs. 50", "Rs. 55", "Rs. 60"],
    "correct_answer": 4
  },
  {
    "id": 28,
    "question": "Pick the odd one out:",
    "options": ["scissors", "knife", "toothpaste", "sword"],
    "correct_answer": 3
  },
  {
    "id": 29,
    "question": "Pick the odd one out:",
    "options": ["sun", "moon", "star", "water"],
    "correct_answer": 4
  },
  {
    "id": 30,
    "question": "Pick the odd one out:",
    "options": ["man", "woman", "father", "dog"],
    "correct_answer": 4
  },
  {
    "id": 31,
    "question": "King: Throne :: Judge : ?",
    "options": ["Lawyer", "Bench", "Court", "Trial"],
    "correct_answer": 2
  },
  {
    "id": 32,
    "question": "Melt : Liquid :: Freeze : ?",
    "options": ["Air", "Solid", "Condense", "Crystal"],
    "correct_answer": 2
  },
  {
    "id": 33,
    "question": "Find the word that names a necessary part of the underlined word: Glacier.",
    "options": ["Mountain", "Winter", "Prehistory", "Ice"],
    "correct_answer": 4
  },
  {
    "id": 34,
    "question": "Find the word that names a necessary part of the underlined word: Cage.",
    "options": ["Enclosure", "Prisoner", "Animal", "Zoo"],
    "correct_answer": 3
  },
  {
    "id": 35,
    "question": "At the baseball game, Henry was sitting in seat 253. Marla was sitting to the right of Henry in seat 254. In the seat to the left of Henry was George. Inez was sitting to the left of George. What seat number was Inez sitting in?",
    "options": ["251", "254", "255", "256"],
    "correct_answer": 1
  },
  {
    "id": 36,
    "question": "As they prepare for the state championships, one gymnast must be moved from the Level 2 team to the Level 1 team. The coaches will move the gymnast who has won the biggest prize and who has the most experience.",
    "options": ["Roberta", "Beth", "Michele", "Jamie"],
    "correct_answer": 3
  },
  {
    "id": 37,
    "question": "Sam purchased 20 dozens of toys at the rate of Rs. 375 per dozen. He sold each one of them at the rate of Rs. 33. What was his percentage profit?",
    "options": ["3.5%", "4.5%", "5.6%", "6.5%"],
    "correct_answer": 3
  },
  {
    "id": 38,
    "question": "If my weekly paper bill is EGP 5.50 and the delivery charge is 35p per week, how much do I have to pay over six weeks?",
    "options": ["EGP 27.10", "EGP 29.10", "EGP 30.10", "EGP 35.10"],
    "correct_answer": 2
  },
  {
    "id": 39,
    "question": "Two students appeared at an examination. One of them secured 9 marks more than the other and his marks was 56% of the sum of their marks. The marks obtained by them are:",
    "options": ["39, 30", "41, 32", "42, 33", "43, 34"],
    "correct_answer": 3
  },
  {
    "id": 40,
    "question": "The difference between a two-digit number and the number obtained by interchanging the positions of its digits is 54. What is the sum between the two digits of that number?",
    "options": ["9", "11", "12", "15"],
    "correct_answer": 1
  },
  {
    "id": 41,
    "question": "Ocean waves may seem like a fanciful source of energy. In August, a 750-kilowatt power plant off the coast of Scotland began delivering ocean-wave power for the first time to the local electricity grid. The plant consists of four linked floating cylinders which use wave motion to drive a hydraulic pump and turn a turbine. This is such an inexpensive and clean process that engineers are quite optimistic about its future.",
    "options": [
      "Engineers, on the other hand, say ocean power is far behind wind and solar power",
      "A recently constructed power plant will change the perception soon",
      "Thanks to the rising and falling water level, its cost would be quite low",
      "Technicians have already started delivering power to many electricity networks",
      "Everybody is against plant construction in this area"
    ],
    "correct_answer": 3
  },
  {
    "id": 42,
    "question": "A virus can be regarded as a self-replicating program that spreads by inserting copies of itself into other executable code or documents in computer technology. Extending this comparison, the insertion of the virus into a program is termed an 'infection', and the infected document or code is known as a 'host'.",
    "options": [
      "Hackers benefit a lot from entering bank computer systems",
      "Therefore, a computer virus behaves similarly to a biological virus, which spreads by inserting itself into living cells",
      "The first virus was created by an American in the 20th century",
      "Some computer viruses can even do away with company or school computer networks",
      "Nowadays, viruses are also named as worms and trojan horses"
    ],
    "correct_answer": 2
  },
  {
    "id": 43,
    "question": "Your cousin has his second English exam for this term tomorrow. You feel that this exam is very important for him, but he's been suffering from a headache since the morning and is very upset. You want to soothe his apprehensive feelings and remind him that he'll have many other chances during the lessons other than exams. Trying to encourage him, you say:",
    "options": [
      "Your headache seems far from getting well. I'm so sorry for you.",
      "I'm sure you'll recover from your headache soon and show yourself in class.",
      "What a pity! You've studied day and night for this one, now you won't pass it.",
      "You'd better see a doctor otherwise you can never succeed in the exams.",
      "You must take a lesson from this; if you had looked after yourself, you wouldn't be sick now."
    ],
    "correct_answer": 2
  },
  {
    "id": 44,
    "question": "How many pieces of string 1.50 m can be cut from a ball which is 105 m long?",
    "options": ["80", "96", "70", "125"],
    "correct_answer": 2
  },
  {
    "id": 45,
    "question": "A theatre ticket costs EGP 24.00. If pensioners are given a 15% discount, how much will they get in change if they tender EGP 40?",
    "options": ["EGP 16.75", "EGP 17.50", "EGP 18.75", "EGP 19.60"],
    "correct_answer": 3
  },
  {
    "id": 46,
    "question": "How many pieces of string 1.25 m can be cut from a ball which is 120 m long?",
    "options": ["80", "85", "96", "125"],
    "correct_answer": 4
  },
  {
    "id": 47,
    "question": "What percentage of numbers from 1 to 70 have 1 or 9 in the unit's digit?",
    "options": ["1%", "14%", "20%", "21%"],
    "correct_answer": 4
  },
  {
    "id": 48,
    "question": "The population of a town increased from 2,10,000 to 2,62,500 in a decade. The average percent increase of population per year is:",
    "options": ["4.37%", "8.75%", "5%", "6%"],
    "correct_answer": 1
  },
  {
    "id": 49,
    "question": "Six friends are sitting in a circle and are facing the center. Deepa is between Prakash and Pankaj. Priti is between Mukesh and Lalit. Prakash and Mukesh are opposite each other. Who is sitting to the right of Prakash?",
    "options": ["Mukesh", "Deepa", "Pankaj", "Lalit"],
    "correct_answer": 3
  },
  {
    "id": 50,
    "question": "Unfortunately, this does not _______ to supercut concern.",
    "options": ["attribute", "apply", "confer", "concern"],
    "correct_answer": 1
  },
  {
    "id": 51,
    "question": "Finally, I want someone to come and cut my grass at your _______ — yours faithfully, Herb Grass.",
    "options": ["expendeture", "expense", "expending", "expends"],
    "correct_answer": 1
  },
  {
    "id": 52,
    "question": "A father told his son, 'I was as old as you are now at the time of your birth.' If the father's age is 38 years now, the son's age five years ago was:",
    "options": ["14 years", "19 years", "33 years", "35 years"],
    "correct_answer": 0
  },
  {
    "id": 53,
    "question": "King : Throne :: Judge : ?",
    "options": ["Crown : Gavel", "Throne : Bench", "Ruler : Court", "Queen : Kingdom"],
    "correct_answer": 1
  },
  {
    "id": 54,
    "question": "At the age of 64, he was now at the _______ of his career as an influential and outspoken member of Parliament.",
    "options": ["abyss", "nadir", "acme", "ebb"],
    "correct_answer": 2
  },
  {
    "id": 55,
    "question": "He now acquiesced in every directive he received from his boss, just as he once acquiesced to all his parents’ wishes. 'Acquiesce' means:",
    "options": ["comply with", "balk at", "disagree with", "dissuade from"],
    "correct_answer": 0
  },
  {
    "id": 56,
    "question": "According to an old adage in medicine, 'If you don’t look for it, you will never diagnose it.' 'Adage' means:",
    "options": ["neophyte", "maxim", "syllogism", "paradox"],
    "correct_answer": 1
  },
  {
    "id": 57,
    "question": "The negative of 'noble' is:",
    "options": ["innoble", "unnoble", "ignoble", "disnoble"],
    "correct_answer": 2
  },
  {
    "id": 58,
    "question": "_______ anyone came.",
    "options": ["Almost", "Hardly"],
    "correct_answer": 1
  },
  {
    "id": 59,
    "question": "At the baseball game, Henry was sitting in seat 253. Marla was sitting to his right in seat 254. George was on the left of Henry, and Inez was sitting to the left of George. Which seat is Inez sitting in?",
    "options": ["251", "254", "255"],
    "correct_answer": 0
  },
  {
    "id": 60,
    "question": "Shoes _______ in Italy.",
    "options": ["Made", "is made", "are made"],
    "correct_answer": 2
  },
  {
    "id": 61,
    "question": "Many types of mobiles _______ in China.",
    "options": ["Made", "is made", "are made"],
    "correct_answer": 2
  },
  {
    "id": 62,
    "question": "It’s usually cheaper to call a _______ than mobile phones.",
    "options": ["Landline", "Network", "Ringtone", "Voicemail"],
    "correct_answer": 0
  },
  {
    "id": 63,
    "question": "They _______ an old photograph of the place.",
    "options": ["Came into", "Came after", "Came up", "Came across"],
    "correct_answer": 3
  },
  {
    "id": 64,
    "question": "Toby, Rob, and Frank all take a holiday by the sea, while Sam, Jo, and Tony go hiking in the mountains. Frank, Sam, and Jo travel by air. Jo, Rob, and Tony don’t enjoy their holiday. Who goes to the sea and does not enjoy the holiday?",
    "options": ["Toby", "Rob", "Frank", "Tony"],
    "correct_answer": 1
  },
  {
    "id": 65,
    "question": "No bear is a tiger. All cubs are tigers. Find the statement that must be true:",
    "options": ["Some bears are tigers", "Some cubs are bears", "No bear is a cub"],
    "correct_answer": 2
  },
  {
    "id": 66,
    "question": "Some vehicles are cars. Some vehicles are powerful. Find the statement that must be true:",
    "options": ["Some cars are powerful", "Some cars are not powerful", "No cars are powerful"],
    "correct_answer": 0
  },
  {
    "id": 67,
    "question": "A stock initially costs $50 and increases in value by 20%. What is the new price of the stock?",
    "options": ["$40", "$50", "$60", "$70"],
    "correct_answer": 2
  },
  {
    "id": 68,
    "question": "In the first 10 overs of a cricket game, the run rate was only 3.2. What should be the run rate in the remaining 40 overs to reach the target of 282 runs?",
    "options": ["6.25", "6.5", "6.75", "7"],
    "correct_answer": 0
  },
  {
    "id": 69,
    "question": "A family consists of two grandparents, two parents and three grandchildren. The average age of the grandparents is 67 years, that of the parents is 35 years and that of the grandchildren is 6 years. What is the average age of the family?",
    "options": ["28 4/7 years", "31 5/7 years", "32 1/7 years", "None of these"],
    "correct_answer": 1
  },
  {
    "id": 70,
    "question": "A grocer has a sale of Rs. 6435, Rs. 6927, Rs. 6855, Rs. 7230 and Rs. 6562 for 5 consecutive months. How much sale must he have in the sixth month so that he gets an average sale of Rs. 6500?",
    "options": ["Rs. 4991", "Rs. 5991", "Rs. 6001", "Rs. 6991"],
    "correct_answer": 0
  },
  {
    "id": 71,
    "question": "The average of 20 numbers is zero. Of them, at the most, how many may be greater than zero?",
    "options": ["0", "1", "10", "19"],
    "correct_answer": 3
  },
  {
    "id": 72,
    "question": "The average weight of 8 persons increases by 2.5 kg when a new person comes in place of one of them weighing 65 kg. What might be the weight of the new person?",
    "options": ["76 kg", "76.5 kg", "85 kg", "Data inadequate"],
    "correct_answer": 2
  },
  {
    "id": 73,
    "question": "A woman introduces a man as the son of the brother of her mother. How is the man related to the woman?",
    "options": ["Brother", "Uncle", "Nephew", "Cousin"],
    "correct_answer": 3
  },
  {
    "id": 74,
    "question": "If A is the brother of B, C is the sister of B, and C is the father of D, how is D related to A?",
    "options": ["Nephew", "Niece", "Grandson", "Granddaughter"],
    "correct_answer": 0
  },
  {
    "id": 75,
    "question": "If A is the mother of B, B is the son of C, and C is the brother of D, how is D related to A?",
    "options": ["Brother", "Uncle", "Nephew", "Cousin"],
    "correct_answer": 1
  },
  {
    "id": 76,
    "question": "If A is the sister of B, B is the daughter of C, and C is the wife of D, how is D related to A?",
    "options": ["Brother-in-law", "Uncle", "Nephew", "Cousin"],
    "correct_answer": 0
  },
  {
    "id": 77,
    "question": "If A is the father of B, B is the mother of C, and C is the wife of D, how is D related to A?",
    "options": ["Father-in-law", "Grandfather", "Nephew", "Cousin"],
    "correct_answer": 0
  },
  {
    "id": 78,
    "question": "If A is the brother of B, B is the son of C, and C is the daughter of D, how is D related to A?",
    "options": ["Uncle", "Grandfather", "Nephew", "Cousin"],
    "correct_answer": 1
  },
  {
    "id": 79,
    "question": "If A is the sister of B, B is the daughter of C, C is the wife of D, and D is the brother of E, how is E related to A?",
    "options": ["Uncle", "Grandfather", "Nephew", "Cousin"],
    "correct_answer": 0
  },
  {
    "id": 80,
    "question": "If A is the brother of B, B is the son of C, C is the daughter of D, and D is the wife of E, how is E related to B?",
    "options": ["Uncle", "Grandfather", "Nephew", "Cousin"],
    "correct_answer": 1
  },
  {
    "id": 81,
    "question": "If A is the sister of B, B is the daughter of C, C is the wife of D, and D is the brother of E, how is E related to C?",
    "options": ["Brother-in-law", "Grandfather", "Nephew", "Cousin"],
    "correct_answer": 0
  },
  {
    "id": 82,
    "question": "If A is the sister of B, B is the daughter of C, C is the wife of D, and D is the brother of E, how is C related to E?",
    "options": ["Uncle", "Grandfather", "Nephew", "Cousin"],
    "correct_answer": 0
  },
  {
    "id": 83,
    "question": "In 2023, a school had 500 students. In 2024, the number of students increased by 10%. What is the total number of students in 2024?",
    "options": ["510", "550", "600", "650"],
    "correct_answer": 2
  },
  {
    "id": 84,
    "question": "A bookstore owner bought 365 books for £10 each. He sold all the books at a 20% profit. How much total profit did he make?",
    "options": ["£365", "£500", "£730", "£1,000"],
    "correct_answer": 3
  },
  {
    "id": 85,
    "question": "If X × 25% = 37.5, what is the value of X?",
    "options": ["100", "125", "150", "175"],
    "correct_answer": 3
  },
  {
    "id": 86,
    "question": "Two people had different amounts of money before entering a mall. The first person had £32 more than the second. After entering, the second person gave the first £32. Now, the ratio of their money becomes 5 : 3. How much did each person have before entering the mall?",
    "options": ["£96 and £64", "£80 and £48", "£88 and £56", "£120 and £88"],
    "correct_answer": 1
  },
  {
    "id": 87,
    "question": "Find the sum: 12.56 + 0.35 + 0.0378 = ?",
    "options": ["12.9478", "12.8578", "12.9458", "12.9578"],
    "correct_answer": 1
  },
  {
    "id": 88,
    "question": "Choose the odd one out: Mouse, Internet, Monitor, Keyboard",
    "options": ["Mouse", "Internet", "Monitor", "Keyboard"],
    "correct_answer": 2
  },
  {
    "id": 89,
    "question": "Statement 1: All monkeys are prisoners. Statement 2: Prisoners are uneducated. Which of the following is true?",
    "options": ["Some monkeys are educated", "No monkey is educated", "Some prisoners are monkeys", "Monkeys are not prisoners"],
    "correct_answer": 2
  },
  {
    "id": 90,
    "question": "Find 13% of 433.",
    "options": ["46.09", "52.29", "56.29", "58.29"],
    "correct_answer": 3
  },
  {
    "id": 91,
    "question": "A school has several classes. Each class has 20 benches, and each bench seats 6 students. How many students are there in total?",
    "options": ["100", "120", "200", "120 × number of classes"],
    "correct_answer": 4
  },
  {
    "id": 92,
    "question": "Find 14% of 315.",
    "options": ["42.1", "43.2", "44.1", "45.2"],
    "correct_answer": 3
  },
  {
    "id": 93,
    "question": "If you add 600 to 20% of itself, the result becomes 700. Is this statement true or false?",
    "options": ["True", "False"],
    "correct_answer": 2
  },
  {
    "id": 94,
    "question": "Find the sum: ½ + ¾ = ?",
    "options": ["1", "1¼", "1½", "1¾"],
    "correct_answer": 2
  },
  {
    "id": 95,
    "question": "Solve for x: 52.5 + x + 170.77 = 1950",
    "options": ["1726.73", "1728.23", "1717.47", "1730.00"],
    "correct_answer": 1
  },
  {
    "id": 96,
    "question": "A pack contains 25 watches and 1 phone. The total price is 1950. The phone is 60% more expensive than a watch. What is the price of one watch? (Round to 2 decimals)",
    "options": ["73.31", "78.00", "65.00", "80.00"],
    "correct_answer": 1
  },
  {
    "id": 97,
    "question": "Using the symbol code below, which option correctly represents the word PENCIL? P = #, E = @, N = $, C = &, I = *, L = !",
    "options": ["#@$&*!", "#@$*&!", "#@$&*!!", "#&@$*!"],
    "correct_answer": 1
  },
  {
    "id": 98,
    "question": "Compute: 6400 + 4800 / 80 = ? (Remember order of operations: division first.)",
    "options": ["6460", "7000", "6400", "6760"],
    "correct_answer": 1
  },
  {
    "id": 99,
    "question": "If C.P. = $4 and S.P. = $5, what is the result?",
    "options": ["Profit $1 (25%)", "Loss $1 (25%)", "Profit $0.50 (12.5%)", "No profit, no loss"],
    "correct_answer": 1
  },
  {
    "id": 100,
    "question": "Which word is the odd one out? Talk, Speech, Speak, Dance",
    "options": ["Talk", "Speech", "Speak", "Dance"],
    "correct_answer": 4
  }



]
  }
];

export const examConfig = {
  title: "IQ Exame 1",
  duration: 90, // minutes
  // compute total questions across all exams
  totalQuestions: examQuestions.reduce((sum, e) => sum + (e.questions?.length ?? 0), 0),
  passingScore: 60 // percentage
};