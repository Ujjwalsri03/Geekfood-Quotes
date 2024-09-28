import React from 'react'
import Navbar from '../../Components/Header/Navbar'
import Foooter from '../../Components/Footer/Foooter'
import Quotecard from '../../Components/QuoteCards/Quotecard'

function Qoutes() {

  const quoteData = [
    {
      id: 1,
      text: "It's amazing how pervasive food is. Every second commercial is for food. Every second TV episode takes place around a meal. In the city, you can't go ten feet without seeing or smelling a restaurant. There are 20 foot high hamburgers up on billboards. I am acutely aware of food, and its omnipresence is astounding.",
      author: "Adam Scott"
    },
    {
      id: 2,
      text: "Eat breakfast like a king, lunch like a prince, and dinner like a pauper.",
      author: "Adelle Davis"
    },
    {
      id: 3,
      text: "We are indeed much more than what we eat, but what we eat can nevertheless help us to be much more than what we are.",
      author: "Adelle Davis"
    },
    {
      id: 4,
      text: "Nothing will benefit human health and increase the chances for survival of life on Earth as much as the evolution to a vegetarian diet.",
      author: "Albert Einstein"
    },
    {
      id: 5,
      text: "Eating is always a decision, nobody forces your hand to pick up food and put it into your mouth.",
      author: "Alice May Brock"
    },
    {
      id: 6,
      text: "Fat is a barrier, a bellicose statement to others that, to some, justifies hostility in kind. The world says to the fat person, 'Your fatness is an affront to me, so we have the right to treat you as offensively as you appear.'Fat is not merely viewed as another type of tissue, but as a diagnostic sign, a personal statement, and a measure of personality. Too little fat and we see you as being antisocial, fearful and sexless. Too much fat and we see you as slothful, stupid, and sexually hung up.",
      author: "Albert Einstein"
    },
    {
      id: 7,
      text: "Fat people, it is commonly held, should be punished because they offend our aesthetic sensibilities. They take up too much space on subways, buses, airplanes, and elevators. They consume more than they contribute to society. They become ill and need to be taken care of, or they die early and their families are left unsupported. The only way fat people can gain some acceptance and forgiveness for their crime of overeating is to at least try, or look like they are trying, to lose weight. They must never eat an ice cream cone in public, never be seen eating a normal sized portion of non-diet food!",
      author: "Calvin Trillin"
    },
    {
      id: 8,
      text: "Tomatoes and oregano make it Italian; wine and tarragon make it French. Sour cream makes it Russian; lemon and cinnamon make it Greek. Soy sauce makes it Chinese; garlic makes it good.",
      author: "Calvin Trillin"
    },
    {
      id: 9,
      text: "Health food makes me sick.",
      author: "Eike von Repkow"
    },
    {
      id: 10,
      text: "The most remarkable thing about my mother is that for thirty years she served the family nothing but leftovers. The original meal has never been found.",
      author: "Epictetus"
    },
    {
      id: 11,
      text: "I no longer prepare food or drink with more than one ingredient.",
      author: "Epictetus"
    },
    {
      id: 12,
      text: "Eating is really one of your indoor sports. You play three times a day, and it's well worth while to make the game as pleasant as possible.",
      author: "Cyra McFadden"
    },
    {
      id: 13,
      text: "My ability to tolerate shame, to compartmentalize it, to swallow it, increased right along with my belt size. it came with the territory of being heavy. Obese people have a lifetime of experience with shame.",
      author: "Fran Lebowitz"
    },
    {
      id: 14,
      text: "The people who can most successfully lose weight and maintain a healthy life style are foodies. When it comes to healthy eating, people who know how to cook and make ingredients taste good have a distinct advantage over those who can't.",
      author: "G. K. Chesterton"
    },
    {
      id:15,
      text: "He who comes first, eats first. [Familiar as: First come first served.]",
      author: "Geoffrey Neighor"
    },
    {
      id: 16,
      text: "Bear in mind that you should conduct yourself in life as at a feast.",
      author: "George Bernard Shaw"
    },
    {
      id: 17,
      text: "Preach not to others what they should eat, but eat as becomes you, and be silent.",
      author: "George Dennison Prentice"
    },
    {
      id: 18,
      text: "I have never cared much for fish - it floats in the belly as much as in the pond.",
      author: "Henry Bromel"
    },
    {
      id: 19,
      text: "If the divine creator has taken pains to give us delicious and exquisite things to eat, the least we can do is prepare them well and serve them with ceremony.",
      author: "Cyra McFadden"
    },
    {
      id: 20,
      text: "Food is an important part of a balanced diet.",
      author: ""
    },
    {
      id: 21,
      text: "My favourite animal is steak.",
      author: " "
    },
    {
      id: 22,
      text: "Tell me what you eat, and I will tell you what you are.",
      author: "Cyra McFadden"
    },
    {
      id: 23,
      text: "Music with dinner is an insult both to the cook and the violinist.",
      author: "Cyra McFadden"
    },
    {
      id: 24,
      text: "Just as animal research tells us that gluttony and sloth are side effects of a drive to accumulate body fat, it also says that eating in moderation and being physically active (literally, having the energy to exercise) is not evidence of moral rectitude. Rather, they're the metabolic benefits of a body that's programmed to remain lean.",
      author: ""
    },
    {
      id: 25,
      text: "We don't get fat because we overeat; we overeat because we're getting fat.",
      author: ""
    },
    {
      id: 26,
      text: "Good food ends with good talk.",
      author: ""
    },
    {
      id: 27,
      text: "There is no love sincerer than the love of food.",
      author: ""
    },
    {
      id: 28,
      text: "What some call health if purchased by perpetual anxiety about diet, isn't much better than tedious disease.",
      author: ""
    },
    {
      id: 29,
      text: "It's important to begin a search on a full stomach.",
      author: ""
    },
    {
      id: 30,
      text: "If more of us valued food and cheer and song above hoarded gold, it would be a merrier world.",
      author: ""
    },
    
  ]
  return (
    <>
        <Navbar />
        {
        quoteData.map((data) => (
          <Quotecard key={data.id} text={data.text} author={data.author} />
        )) 
        }
        <Foooter />

    </>
  )
}

export default Qoutes