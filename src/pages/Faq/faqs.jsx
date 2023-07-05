import { Link } from "react-router-dom";

const faqs = [
  {
    title: "How do the payments compare against traditional mortgage payments?",
    details: "After all said and done, the complete payments are definitely LOWER compared to the conventional 5% mortgage interest rate.",
  },
  {
    title: "Do I need to have a down payment?",
    details: "Yes and No. Yes, you will need to provide a substantial portion of the down payment (initial option consideration) and No you don’t need to provide all the down payment at once. Based on your Initial option consideration a monthly option consideration would be calculated which could be subject to further discussions depending on your situation.",
  },
  {
    title: "What happens if I am unable to make my monthly payments?",
    details: "Just like a traditional mortgage, you are responsible to make all payments as at when due, failure to do so would activate some clauses in the contract that could lead to legal proceedings in order to secure the interests of all concerned stakeholders.",
  },
  {
    title: "Can I choose any home I want or do I have to choose from your inventory?",
    details: "Currently, in our inventory, we have turn key properties that are located in markets with demonstrated ongoing re-sale demand. Such properties are very likely to please your taste as schools, public transits, and other major residential factors are very available, but if our needs don’t meet your taste, we would be more than happy to allow you to work with our Realtors to choose a house that suits your families lifestyle.",
  },
  {
    title: "What happens if I do not want to purchase the property at the end of the term?",
    details: "There are typically two outcomes to this scenario - we can either extend the Program length if you need more time, or you can choose to walk away from the home. If you choose to walk away from the home, you will forfeit your non-refundable option consideration and incur other consequences as a result. There are significant costs involved in selling a property that has been specifically purchased for your benefit, which include (but may not be limited to) REALTOR commissions, mortgage repayments, payout penalties, interest costs, holding costs, investor payouts, and marketing. We will help educate you that we are making a significant investment in YOU and we want to deal only with committed individuals and families.",
  },
  {
    title: "How soon can I move into the home?",
    details: "The entire RTO program setup typically takes anywhere from 6 to 8 weeks from start to finish. The approval process usually takes 1 to 2 weeks, at which point we will then design the Program to meet your specific individual needs. Selecting a home and moving through to acceptance can take anywhere from 2 to 4 weeks to complete. After all conditions have been met on the acceptance, you should expect another 2 to 4 weeks for closing before you receive the keys to your brand-new apartment!",
  },
  {
    title: "I am ready to become a homeowner, what is the next action to take?",
    details: "The RTO process begins with you filling out an application. ",
    // link: {
    //   href: "/",
    //   text: " Kindly contact us now "
    // },
    link: <Link to="/">Kindly contact us now</Link>,
    postLinkText: " and we will get in touch with you to get the process started and get you on the road to becoming a proud homeowner!",
  },
  {
    title: "How does the Rent-To-Own program work?",
    details: "Please refer to the following page: ",
    // link: {
    //   href: "/what-is-rent-to-own",
    //   text: "'What is rent to own?'."
    // }
    link: <Link to="/what-is-rent-to-own">What is rent to own?</Link>
  },
  {
    title: "How long does the Rent-To-Own Program usually last?",
    details: "On average 2 to 4 years depending on your situation.",
  },
  {
    title: "I am renting now, how is this different?",
    details: "Today if you are renting outside of a Rent-To-Own program, you likely does not have an option to purchase the home you are renting. Whilst in our Rent-To-Own program you will have the written right to exercise an option to purchase the home you are renting at the end of the program if you meet all the conditions. This is why each client is called Tenant-Buyer.",
  },
  {
    title: "Who pays the property taxes and home insurance during the term?",
    details: "Ourselves as the title owner of the property during the Rent-To-Own term.",
  },
  {
    title: "Who pays for utilities (heat, hydro and water)?",
    details: "Yourself as the Tenant-Buyer.",
  },
  {
    title: "My credit is less than perfect, can you still help me?",
    details: "Reach out to tell us your story and we will assess your situation. Need more information? ",
    // link: {
    //   href: "/",
    //   text: "Book a discovery call!"
    // },
    link: <Link to="/">Book a discovery call!</Link>,
  },
  {
    title: "If I am currently self-employed or have a commission-based salary, can I qualify?",
    details: "Yes, you could qualify, however, an assessment would be conducted on your current financial standings to determine how to proceed with you on the Rent-To-Own program.",
  },
];

export default faqs;