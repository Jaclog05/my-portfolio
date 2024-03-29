import food from './Henry-food.png'
import novelty from './Novelty-books.png'
import portfolio from './portfolio.png'
import ageCalculator from './age-calculator-image.png'

const projectsInfo = [
    {
        projectLink: "https://pi-foods-front-ten.vercel.app/",
        imageSrc: food,
        title: "Henry Food",
        alt: "foodProject",
        description: "Henry Food is an application where we can view different food recipes along with relevant information about them. We are allowed to search for recipes, filter them, sort them and create our own recipes."
    },
    {
        projectLink: "https://novelty-books.vercel.app/login",
        imageSrc: novelty,
        title: "Novelty Books",
        alt: "noveltyProject",
        description: "Novelty books is a web application for purchasing, creating and modifying physical books of various genres."
    },
    {
        projectLink: "https://my-portfolio-jaclog05.vercel.app/",
        imageSrc: portfolio,
        title: "Personal portfolio",
        alt: "portfolioProject",
        description: "The site where you are right now!. My personal portfolio created with react, using CSS modules and it's responsive!"
    },
    {
        projectLink: "https://age-calculator-ruddy.vercel.app/",
        imageSrc: ageCalculator,
        title: "Age Calculator",
        alt: "AgeCalculatorProject",
        description: "With this simple app you can know your exact age entering your birthday! It was made entirely with HTML, CSS and Javascript."
    }
]

export default projectsInfo