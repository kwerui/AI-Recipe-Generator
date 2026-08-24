import { InferenceClient } from "@huggingface/inference"

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has 
and suggests a recipe they could make with some or all of those ingredients.

You don't need to use every ingredient they mention.
The recipe can include additional ingredients they didn't mention,
but try not to include too many extra ingredients.

Format your response in markdown to make it easier to render on a web page.
`

const hf = new InferenceClient(
    import.meta.env.VITE_HF_ACCESS_TOKEN
)

export async function getRecipeFromMistral(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ")

    try {
        const response = await hf.chatCompletion({
    model: "meta-llama/Llama-3.1-8B-Instruct",
    messages: [
        {
            role: "system",
            content: SYSTEM_PROMPT,
        },
        {
            role: "user",
            content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`,
        },
    ],
    max_tokens: 1024,
})

        return response.choices[0].message.content

    } catch (err) {
    console.error("HF ERROR:", err)
    console.error("FULL ERROR:", JSON.stringify(err, null, 2))
    throw err

}}
