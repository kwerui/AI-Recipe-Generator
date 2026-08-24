import React from "react"
import IngredientsList from "./IngredientsList"
import ClaudeRecipe from "./ClaudeRecipe"
import { getRecipeFromMistral } from "../ai"

export default function Main() {
    const [ingredients, setIngredients] = React.useState([
        "chicken",
        "all the main spices",
        "corn",
        "heavy cream",
        "pasta"
    ])

    const [recipe, setRecipe] = React.useState("")
    const [isLoading, setIsLoading] = React.useState(false)
    const [ingredient, setIngredient] = React.useState("")

    const recipeSection = React.useRef(null)

    React.useEffect(() => {
        if (recipe && recipeSection.current) {
            recipeSection.current.scrollIntoView()
        }
    }, [recipe])

    async function getRecipe() {
        try {
            setIsLoading(true)

            const recipeMarkdown = await getRecipeFromMistral(ingredients)

            setRecipe(recipeMarkdown)
        } catch (err) {
            console.error(err)
        } finally {
            setIsLoading(false)
        }
    }

    function addIngredient() {
        const trimmed = ingredient.trim()

        if (!trimmed) return

        setIngredients(prev => [...prev, trimmed])
        setIngredient("")
    }

    return (
        <main>
            <form onSubmit={(e) => {
                e.preventDefault()
                addIngredient()
                
            }}className="add-ingredient-form" >
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    value={ingredient}
                    onChange={(e) => setIngredient(e.target.value)}
                />

                <button>Add ingredient</button>
            </form>

            {ingredients.length > 0 &&
                <IngredientsList
                    ref={recipeSection}
                    ingredients={ingredients}
                    getRecipe={getRecipe}
                />
            }

            {recipe && <ClaudeRecipe recipe={recipe} />}
        </main>
    )
}